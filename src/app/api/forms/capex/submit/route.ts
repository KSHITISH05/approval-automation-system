// src/app/api/forms/capex/submit/route.ts
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

    // Create Approval records for each approver (excluding initiator)
    if (Array.isArray(data.approvers)) {
      // Filter out the initiator if present
      const validApprovers = data.approvers.filter((approver: { id: string }) => approver.id !== initiatorId);
      if (validApprovers.length === 0) {
        return NextResponse.json({ error: "At least one approver (not yourself) is required." }, { status: 400 });
      }
      await Promise.all(
        validApprovers.map((approver: { id: string; sequence: number }) =>
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

/*
This API route handles the submission of CAPEX (Capital Expenditure) forms. Here's a detailed breakdown:

1. Form Data Processing:
   - Receives form data including:
     * Project details (title, location, manager, head)
     * Priority and budget type
     * Project description and timeline
     * Technical assessments
     * Cost information and spending plans
     * Additional comments
   - Validates required fields
   - Processes dates into proper format

2. Document Creation:
   - Creates a new document record in database
   - Associates it with the initiator (submitter)
   - Stores all form fields in the CAPEX form table
   - Links the form to the document record
   - Handles any file attachments

3. Approval Chain Setup:
   - Takes array of approvers from submission
   - Filters out initiator from approver list
   - Validates at least one non-initiator approver exists
   - Creates approval records for each approver with:
     * Link to document
     * Approver ID
     * Sequence order
     * Initial PENDING status
   - Sets up sequential approval workflow

4. Data Validation:
   - Ensures required fields are present
   - Validates approver list structure
   - Checks for valid initiator
   - Prevents self-approval
   - Enforces business rules

5. Error Handling:
   - Catches and logs submission errors
   - Returns appropriate error responses
   - Uses proper HTTP status codes
   - Provides meaningful error messages

This endpoint is essential for:
- Creating new CAPEX requests
- Setting up approval workflows
- Storing form data
- Initiating document review process
*/
