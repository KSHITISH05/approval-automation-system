import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest, { params }: { params: { documentId: string } }) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;
    const oldDocId = params.documentId;

    // Fetch the old document and related data
    const oldDoc = await prisma.document.findUnique({
      where: { id: oldDocId },
      include: {
        capexForm: true,
        approvals: true,
      },
    });
    if (!oldDoc) {
      return NextResponse.json({ success: false, message: "Document not found" }, { status: 404 });
    }
    if (oldDoc.initiatorId !== userId) {
      return NextResponse.json({ success: false, message: "Not your document" }, { status: 403 });
    }
    if (oldDoc.status !== "REJECTED") {
      return NextResponse.json({ success: false, message: "Only rejected documents can be re-initiated" }, { status: 400 });
    }

    // Clone the document
    const newDoc = await prisma.document.create({
      data: {
        title: oldDoc.title,
        description: oldDoc.description,
        file: oldDoc.file,
        fileName: oldDoc.fileName,
        fileType: oldDoc.fileType,
        amount: oldDoc.amount,
        type: oldDoc.type,
        status: "PENDING",
        initiatorId: userId,
        previousVersionId: oldDoc.id,
      },
    });

    // Clone the CAPEX form if exists
    if (oldDoc.capexForm) {
      await prisma.capexForm.create({
        data: {
          documentId: newDoc.id,
          title: oldDoc.capexForm.title,
          unit: oldDoc.capexForm.unit,
          location: oldDoc.capexForm.location,
          projectManager: oldDoc.capexForm.projectManager,
          projectHead: oldDoc.capexForm.projectHead,
          requestDate: new Date(),
          priority: oldDoc.capexForm.priority,
          budgetType: oldDoc.capexForm.budgetType,
          description: oldDoc.capexForm.description,
          projectStart: oldDoc.capexForm.projectStart,
          projectEnd: oldDoc.capexForm.projectEnd,
          oldAssets: oldDoc.capexForm.oldAssets,
          technicalSuitability: oldDoc.capexForm.technicalSuitability,
          compliance: oldDoc.capexForm.compliance,
          implications: oldDoc.capexForm.implications,
          costTable: oldDoc.capexForm.costTable,
          economicViability: oldDoc.capexForm.economicViability,
          spendingPlan: oldDoc.capexForm.spendingPlan,
          additionalComments: oldDoc.capexForm.additionalComments,
        },
      });
    }

    // Clone the approvers (approval chain)
    await Promise.all(
      oldDoc.approvals.map((approval) =>
        prisma.approval.create({
          data: {
            documentId: newDoc.id,
            approverId: approval.approverId,
            sequenceOrder: approval.sequenceOrder,
            status: "PENDING",
          },
        })
      )
    );

    return NextResponse.json({ success: true, newDocumentId: newDoc.id });
  } catch (err) {
    console.error("Error cloning document:", err);
    return NextResponse.json({ success: false, message: "Failed to clone document" }, { status: 500 });
  }
} 