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
