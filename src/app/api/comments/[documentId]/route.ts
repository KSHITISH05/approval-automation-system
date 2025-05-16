// src/app/api/comments/[documentId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(
  request: Request,
  { params }: { params: { documentId: string } }
) {
  const token = request.headers.get("cookie")?.split("token=")[1]?.split(";")[0];
  
  if (!token) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;
    const documentId = await params.documentId;

    // Fetch document with initiator and approvers
    const doc = await prisma.document.findUnique({
      where: { id: documentId },
      include: {
        initiator: true,
        approvals: {
          include: {
            approver: true,
          },
        },
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

    // Fetch comments
    const comments = await prisma.comment.findMany({
      where: { documentId },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ success: true, comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, { params }: { params: { documentId: string } }) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    const documentId = params.documentId;
    const { content, approvalId } = await req.json();

    if (!content || !approvalId) {
      return NextResponse.json({ success: false, message: "Missing content or approvalId" }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        approvalId,
        documentId,
        userId,
      },
    });

    return NextResponse.json({ success: true, comment });
  } catch (err) {
    console.error("Error posting comment:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

