
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

    const { content, documentId, approvalId } = await req.json();

    if (!content || !documentId || !approvalId) {
      return NextResponse.json({ success: false, message: "Missing input" }, { status: 400 });
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

    const comment = await prisma.comment.create({
      data: {
        content,
        documentId,
        approvalId,
        userId,
      },
    });

    return NextResponse.json({ success: true, comment });
  } catch (err) {
    console.error("ADD COMMENT ERROR:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
