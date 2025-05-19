// File: src/app/api/documents/[documentId]/approvals/route.ts

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

    // First verify the document exists and user has access
    const document = await prisma.document.findUnique({
      where: { id: documentId },
      include: {
        approvals: {
          include: {
            approver: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!document) {
      return NextResponse.json({ success: false, message: "Document not found" }, { status: 404 });
    }

    // Check if user is either initiator or approver
    const isInitiator = document.initiatorId === userId;
    const isApprover = document.approvals.some((a) => a.approverId === userId);

    if (!isInitiator && !isApprover) {
      return NextResponse.json({ success: false, message: "Access denied" }, { status: 403 });
    }

    // Filter out initiator's approvals and format response
    const approvals = document.approvals
      .filter((a) => a.approverId !== document.initiatorId)
      .map((a) => ({
        id: a.id,
        status: a.status,
        approver: {
          id: a.approver.id,
          firstName: a.approver.firstName,
          lastName: a.approver.lastName,
          email: a.approver.email,
        },
        createdAt: a.createdAt,
        updatedAt: a.updatedAt,
      }));

    return NextResponse.json({ success: true, approvals });
  } catch (err) {
    console.error("Error fetching approvals:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
/*
This API route handles fetching document approvals. Here's what it does:

1. Document Validation:
   - Takes documentId from URL params
   - Queries document to verify it exists
   - Returns 404 if document not found
   - Gets initiatorId for filtering

2. Approval Fetching:
   - Retrieves all approvals for the document
   - Excludes any approvals by the document initiator
   - Includes approver details:
     * ID
     * First Name
     * Last Name 
     * Email
   - Orders approvals by sequence order (ascending)

3. Response Structure:
   - Returns JSON with array of approvals
   - Each approval includes approver details
   - Error responses include status codes

4. Error Handling:
   - Catches and logs database errors
   - Returns appropriate error messages
   - Uses proper HTTP status codes

This route is essential for:
- Displaying approval workflows
- Tracking document review status  
- Managing approval sequences
- Showing approver information
*/
