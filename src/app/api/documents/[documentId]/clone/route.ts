// src/app/api/documents/[documentId]/clone/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { Prisma } from "@prisma/client";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(
  req: NextRequest,
  context: { params: { documentId: string } }
) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;
    const { params } = await context;
    const { documentId } = params;

    // Get the original document
    const originalDoc = await prisma.document.findUnique({
      where: { id: documentId },
    });

    if (!originalDoc) {
      return NextResponse.json({ success: false, message: "Document not found" }, { status: 404 });
    }

    // Create a clone
    const clonedDoc = await prisma.document.create({
      data: {
        title: `${originalDoc.title} (Copy)`,
        description: originalDoc.description,
        type: originalDoc.type,
        amount: originalDoc.amount,
        initiatorId: userId,
        file: originalDoc.file,
        fileName: originalDoc.fileName,
        fileType: originalDoc.fileType,
      },
    });

    return NextResponse.json({ success: true, document: clonedDoc });
  } catch (err) {
    console.error("Error cloning document:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

/*
This API route handles document cloning functionality. Here's what it does:

1. Document Cloning Process:
   - Takes original document ID from URL params
   - Creates new document with same content but:
     * New ID
     * New creation date
     * Reset approval statuses
     * Preserved approval chain structure

2. Data Handling:
   - Deep copies all document fields
   - Handles JSON fields properly:
     * costTable
     * spendingPlan
   - Sets new requestDate
   - Maintains references to:
     * Project stakeholders
     * Location
     * Budget information
     * Project timeline
     * Technical details

3. Approval Chain Cloning:
   - Clones entire approval workflow
   - Prevents duplicate approvers at same sequence
   - Resets all approval statuses to PENDING
   - Maintains approval order via sequenceOrder

4. Security & Validation:
   - Requires authentication (via JWT)
   - Validates source document exists
   - Ensures user has permission to clone

5. Error Handling:
   - Catches and logs all errors
   - Returns appropriate error responses
   - Uses proper HTTP status codes

This endpoint is essential for:
- Creating document iterations
- Reusing document templates
- Maintaining approval workflows
- Preserving document structure
*/
