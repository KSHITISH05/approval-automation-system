// src/app/api/comments/add/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    const body = await req.json();
    const { content, documentId, approvalId } = body;

    if (!content || !documentId) {
      return NextResponse.json({ success: false, message: "Missing content or documentId" }, { status: 400 });
    }

    // Ensure the user is either an assigned approver or the initiator
    const doc = await prisma.document.findUnique({
      where: { id: documentId },
      include: {
        approvals: true,
      },
    });

    if (!doc) {
      return NextResponse.json({ success: false, message: "Document not found" }, { status: 404 });
    }

    const isInitiator = doc.initiatorId === userId;
    const isApprover = doc.approvals.some((a) => a.approverId === userId);

    if (!isInitiator && !isApprover) {
      return NextResponse.json({ success: false, message: "Access denied" }, { status: 403 });
    }

    // For approvers, approvalId is required. For initiator, it's not.
    if (!isInitiator && !approvalId) {
      return NextResponse.json({ success: false, message: "Missing approvalId for approver" }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        documentId,
        approvalId: approvalId || null,
        userId,
      },
    });

    return NextResponse.json({ success: true, comment });
  } catch (err) {
    // Log the error and the request body for debugging
    console.error("ADD COMMENT ERROR:", err);
    try {
      const body = await req.json();
      console.error("Request body:", body);
    } catch (e) {
      console.error("Could not parse request body in error handler.");
    }
    return NextResponse.json({ success: false, message: "Server error", error: String(err) }, { status: 500 });
  }
}
/*
This API route handles adding comments to documents. Here's what it does:

1. Input Validation:
   - Requires content and documentId
   - For approvers, also requires approvalId
   - Returns 400 Bad Request if required fields missing

2. Access Control:
   - Validates user has permission to comment
   - Checks if user is:
     * Document initiator, or
     * Assigned approver
   - Returns 403 Forbidden if unauthorized

3. Document Verification:
   - Checks if document exists
   - Loads document with approvals
   - Returns 404 Not Found if document missing

4. Comment Creation:
   - Creates comment in database with:
     * Comment content
     * Document reference
     * User reference
     * Optional approval reference
   - Returns created comment

5. Error Handling:
   - Catches and logs all errors
   - Attempts to log request body on error
   - Returns detailed error responses
   - Includes appropriate HTTP status codes

6. Security Features:
   - Role-based access control
   - Input validation
   - Error handling with safe responses

This route is essential for:
- Enabling document discussions
- Tracking approval feedback
- Managing comment threads
- Maintaining audit trail
*/
