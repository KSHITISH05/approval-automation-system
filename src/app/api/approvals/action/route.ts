// src/app/api/approvals/action/route.ts
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
    const approverId = decoded.id;

    const { approvalId, action } = await req.json();

    if (!approvalId || !["APPROVED", "REJECTED"].includes(action)) {
      return NextResponse.json({ success: false, message: "Invalid input" }, { status: 400 });
    }

    const approval = await prisma.approval.findUnique({
      where: { id: approvalId },
      include: { document: true },
    });

    if (!approval) {
      return NextResponse.json({ success: false, message: "Approval not found" }, { status: 404 });
    }

    if (approval.approverId !== approverId) {
      return NextResponse.json({ success: false, message: "Not your approval" }, { status: 403 });
    }

    const pendingApprovals = await prisma.approval.findMany({
        where: {
          documentId: approval.documentId,
          status: "PENDING",
        },
        orderBy: {
          sequenceOrder: "asc",
        },
      });
      
      const currentTurn = pendingApprovals[0];
      
      if (!currentTurn || currentTurn.id !== approvalId) {
        return NextResponse.json({
          success: false,
          message: "It's not your turn yet.",
        }, { status: 403 });
      }

    await prisma.approval.update({
      where: { id: approvalId },
      data: {
        status: action,
        approvedAt: new Date(),
      },
    });

    // Fetch approver and document info for notification
    const approver = await prisma.user.findUnique({ where: { id: approverId } });
    const document = approval.document;
    const initiatorId = document.initiatorId;

    // Insert notification for initiator
    await prisma.notification.create({
      data: {
        userId: initiatorId,
        type: "APPROVAL_ACTION",
        message: `Your request "${document.title}" was ${action.toLowerCase()} by ${approver?.firstName || "Approver"} ${approver?.lastName || ""}`,
        documentId: document.id,
      },
    });

    // Check if this was the last approver and all are approved
if (action === "APPROVED") {
    const remaining = await prisma.approval.findMany({
      where: {
        documentId: approval.documentId,
        status: "PENDING",
      },
    });
  
    if (remaining.length === 0) {
      await prisma.document.update({
        where: { id: approval.documentId },
        data: { status: "APPROVED", completedAt: new Date() },
      });
    }
  }
  
  // If REJECTED — immediately mark the document as rejected
  if (action === "REJECTED") {
    await prisma.document.update({
      where: { id: approval.documentId },
      data: { status: "REJECTED", completedAt: new Date() },
    });
  }
  

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Approval action error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

