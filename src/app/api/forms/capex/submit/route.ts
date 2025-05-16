import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Await cookies and get the token
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    const initiatorId = decoded.id;

    // First create the document
    const document = await prisma.document.create({
      data: {
        title: data.title,
        description: data.description,
        file: data.file && data.file.length ? Buffer.from(data.file) : Buffer.from([]),
        fileType: data.fileType || "application/pdf",
        fileName: data.fileName,
        type: "CAPEX",
        status: "PENDING",
        initiatorId,
      },
    });

    // Then create the CAPEX form
    const capexForm = await prisma.capexForm.create({
      data: {
        documentId: document.id,
        title: data.title,
        unit: data.unit,
        location: data.location,
        projectManager: data.projectManager,
        projectHead: data.projectHead,
        priority: data.priority,
        budgetType: data.budgetType,
        description: data.description,
        projectStart: new Date(data.projectStart),
        projectEnd: new Date(data.projectEnd),
        oldAssets: data.oldAssets,
        technicalSuitability: data.technicalSuitability,
        compliance: data.compliance,
        implications: data.implications,
        costTable: data.costTable,
        economicViability: data.economicViability,
        spendingPlan: data.spendingPlan,
        additionalComments: data.additionalComments,
      },
    });

    // Create Approval records for each approver
    if (Array.isArray(data.approvers)) {
      await Promise.all(
        data.approvers.map((approver: { id: string; sequence: number }) =>
          prisma.approval.create({
            data: {
              documentId: document.id,
              approverId: approver.id,
              sequenceOrder: approver.sequence,
              status: "PENDING",
            },
          })
        )
      );
    }

    return NextResponse.json({ document });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
} 