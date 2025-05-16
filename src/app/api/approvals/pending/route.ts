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

