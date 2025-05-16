import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(
  req: NextRequest,
  { params }: { params: { documentId: string } }
) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    // Check if user has access to this document
    const document = await prisma.document.findUnique({
      where: { id: params.documentId },
      include: {
        approvals: {
          where: { approverId: userId },
        },
        initiator: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    if (!document) {
      return NextResponse.json(
        { success: false, message: "Document not found" },
        { status: 404 }
      );
    }

    // Check if user is either the initiator or an approver
    const isInitiator = document.initiatorId === userId;
    const isApprover = document.approvals.length > 0;

    if (!isInitiator && !isApprover) {
      return NextResponse.json(
        { success: false, message: "Access denied" },
        { status: 403 }
      );
    }

    // Fetch the CAPEX form
    const capexForm = await prisma.capexForm.findUnique({
      where: { documentId: params.documentId },
    });

    if (!capexForm) {
      return NextResponse.json(
        { success: false, message: "CAPEX form not found" },
        { status: 404 }
      );
    }

    // Get file URL if it exists
    const fileUrl = document.fileName
      ? `/api/documents/${document.id}/file`
      : undefined;

    // Get approval trail
    const approvals = await prisma.approval.findMany({
      where: { documentId: params.documentId },
      include: {
        approver: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: {
        sequenceOrder: 'asc',
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        ...capexForm,
        fileName: document.fileName,
        fileUrl,
        initiator: document.initiator,
        approvals,
        status: document.status,
      },
    });
  } catch (err) {
    console.error("FETCH CAPEX FORM ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch form" },
      { status: 500 }
    );
  }
} 