// src/app/api/documents/my/route.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    const documents = await prisma.document.findMany({
      where: { initiatorId: userId },
      include: {
        initiator: { select: { id: true, firstName: true, lastName: true } },
        approvals: {
          orderBy: { sequenceOrder: "asc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Attach currentApprovalId to each document
    const dataWithCurrent = documents.map((doc) => {
      const currentApproval = doc.approvals.find((a) => a.status === "PENDING");
      return {
        ...doc,
        currentApprovalId: currentApproval?.id || null,
      };
    });

    return NextResponse.json({ success: true, documents: dataWithCurrent });
  } catch (err) {
    console.error("My docs fetch error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
/*
This API route handles fetching documents initiated by the current user. Here's what it does:

1. Authentication:
   - Extracts JWT token from cookies
   - Verifies token validity
   - Gets userId from decoded token
   - Returns 401 if unauthorized

2. Document Fetching:
   - Queries documents where initiatorId matches current user
   - Includes related data:
     * Initiator details (id, firstName, lastName)
     * Approval chain ordered by sequence
   - Orders documents by creation date (newest first)

3. Current Approval Enhancement:
   - For each document, finds the current pending approval
   - Attaches currentApprovalId to document object
   - Sets null if no pending approvals exist
   - Helps track active approval stage

4. Response Structure:
   - Returns success status
   - Returns enhanced document array
   - Includes all document metadata
   - Includes approval chain info

5. Error Handling:
   - Catches and logs errors
   - Returns appropriate error responses
   - Uses proper HTTP status codes

This endpoint is essential for:
- Displaying user's document dashboard
- Tracking document statuses
- Managing approval workflows
- Document history access
*/
