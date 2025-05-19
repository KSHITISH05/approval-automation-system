// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET!;

// export async function GET(req: NextRequest) {
//   try {
//     const token = req.cookies.get("token")?.value;
//     if (!token) return NextResponse.json({ success: false, message: "No token" });

//     const decoded: any = jwt.verify(token, JWT_SECRET);
//     const approverId = decoded.id;

//     const pendingApprovals = await prisma.approval.findMany({
//       where: {
//         approverId,
//         status: "PENDING",
//       },
//       include: {
//         document: true,
//       },
//     });

//     return NextResponse.json({ success: true, data: pendingApprovals });
//   } catch (err) {
//     console.error("FETCH ERROR:", err);
//     return NextResponse.json({ success: false, message: "Failed to fetch approvals" });
//   }
// }

// /src/app/api/approvals/pending/route.ts


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const approverId = decoded.id;

    // Fetch all approvals assigned to this user
    const approvals = await prisma.approval.findMany({
      where: {
        approverId,
        document: {
          approvals: {
            some: {
              approverId,
            },
          },
        },
      },
      include: {
        document: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Compute isCurrentTurn flag for each approval
    const results = await Promise.all(
      approvals.map(async (approval) => {
        const pending = await prisma.approval.findMany({
          where: {
            documentId: approval.documentId,
            status: "PENDING",
          },
          orderBy: {
            sequenceOrder: "asc",
          },
        });

        const isCurrentTurn = pending.length > 0 && pending[0].id === approval.id;

        return {
          ...approval,
          isCurrentTurn,
        };
      })
    );

    return NextResponse.json({ success: true, approvals: results });
  } catch (err) {
    console.error("FETCH APPROVALS ERROR:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

/*
This API route handles fetching pending approvals for authenticated approvers. Here's what it does:

1. Approval Fetching:
   - Retrieves all approvals assigned to the authenticated user
   - Includes related document information
   - Orders results by creation date (newest first)
   - Filters to only show approvals where the user is an approver

2. Current Turn Logic:
   - For each approval, determines if it's currently this approver's turn
   - Checks pending approvals for each document
   - Sets isCurrentTurn flag if this approval is first in pending queue
   - This helps UI show which approvals need immediate attention

3. Response Structure:
   - Returns JSON with:
     * success status
     * array of approvals with isCurrentTurn flag
     * each approval includes full document details
   - Error responses include status codes and messages

4. Security:
   - Only returns approvals for authenticated user
   - Validates user has approver access
   - Handles errors appropriately

This route is crucial for:
- Showing approvers their pending tasks
- Indicating which approvals need immediate action
- Managing approval workflow queue
- Maintaining approval sequence order
*/
