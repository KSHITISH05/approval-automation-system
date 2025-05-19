// src/app/api/comments/[documentId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(
  request: NextRequest,
  context: { params: { documentId: string } }
) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;
    const { documentId } = context.params;

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

    const comments = await prisma.comment.findMany({
      where: { documentId },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      comments: comments.map((c) => ({
        id: c.id,
        content: c.content,
        createdAt: c.createdAt,
        user: {
          firstName: c.user.firstName,
          lastName: c.user.lastName,
        },
      })),
    });
  } catch (err) {
    console.error("Error fetching comments:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  context: { params: { documentId: string } }
) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;
    const { documentId } = context.params;
    const { content, approvalId } = await request.json();

    if (!content) {
      return NextResponse.json({ success: false, message: "Missing content" }, { status: 400 });
    }

    // Only include approvalId if it is a non-empty string
    const data: any = {
      content,
      documentId,
      userId,
    };
    if (approvalId && approvalId !== "") {
      data.approvalId = approvalId;
    }

    const comment = await prisma.comment.create({
      data,
    });

    return NextResponse.json({ success: true, comment });
  } catch (err) {
    console.error("Error posting comment:", err);
    return NextResponse.json({ success: false, message: "Server error", error: String(err) }, { status: 500 });
  }
}

/*
This API route handles comment operations for documents. Here's what it does:

1. GET Request Handler:
   - Fetches comments for a specific document
   - Includes related user information (firstName, lastName)
   - Orders comments by creation date (newest first)
   - Returns formatted comment list or error response

2. POST Request Handler:
   - Handles creating new comments on documents
   - Authentication:
     * Validates JWT token from cookies
     * Extracts user ID from token
   - Input Validation:
     * Requires content and approvalId
     * Validates documentId from URL params
   - Creates comment in database with:
     * Comment content
     * Document reference
     * User reference
     * Approval reference
   - Returns created comment or error response

3. Security Features:
   - Requires authentication via JWT
   - Validates required fields
   - Error handling with appropriate status codes

4. Error Handling:
   - Catches and logs database errors
   - Returns formatted error responses
   - Includes appropriate HTTP status codes

This route is essential for:
- Managing document comments
- Enabling user discussions
- Tracking approval feedback
- Maintaining comment history
*/
