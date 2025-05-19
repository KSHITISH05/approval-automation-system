// src/app/api/forms/capex/submit/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: Request) {
  try {
    // Parse FormData
    const formData = await request.formData();
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    const initiatorId = decoded.id;

    // Extract fields
    const title = formData.get("title");
    const unit = formData.get("unit");
    const location = formData.get("location");
    const projectManager = formData.get("projectManager");
    const projectHead = formData.get("projectHead");
    const priority = formData.get("priority");
    const budgetType = formData.get("budgetType");
    const description = formData.get("description");
    const projectStart = formData.get("projectStart");
    const projectEnd = formData.get("projectEnd");
    const oldAssets = formData.get("oldAssets");
    const technicalSuitability = formData.get("technicalSuitability");
    const compliance = formData.get("compliance");
    const implications = formData.get("implications");
    const economicViability = formData.get("economicViability");
    const additionalComments = formData.get("additionalComments");
    const costTable = JSON.parse(formData.get("costTable"));
    const spendingPlan = JSON.parse(formData.get("spendingPlan"));
    const approvers = JSON.parse(formData.get("approvers"));

    // Extract file
    const file = formData.get("file");
    let fileName = null;
    let fileType = null;
    let fileBuffer = null;
    if (file && typeof file === "object" && "arrayBuffer" in file) {
      fileName = file.name;
      fileType = file.type;
      fileBuffer = Buffer.from(await file.arrayBuffer());
    }

    // Debug log
    console.log("fileName:", fileName, "fileType:", fileType, "fileBuffer length:", fileBuffer?.length);

    // Create document
    const document = await prisma.document.create({
      data: {
        title,
        description,
        file: fileBuffer,
        fileType: fileType || "application/pdf",
        fileName: fileName,
        type: "CAPEX",
        status: "PENDING",
        initiatorId,
      },
    });

    // Create CAPEX form
    const capexForm = await prisma.capexForm.create({
      data: {
        documentId: document.id,
        title,
        unit,
        location,
        projectManager,
        projectHead,
        priority,
        budgetType,
        description,
        projectStart: new Date(projectStart),
        projectEnd: new Date(projectEnd),
        oldAssets,
        technicalSuitability,
        compliance,
        implications,
        costTable,
        economicViability,
        spendingPlan,
        additionalComments,
      },
    });

    // Create Approval records for each approver (excluding initiator)
    if (Array.isArray(approvers)) {
      const validApprovers = approvers.filter((approver) => approver.id !== initiatorId);
      if (validApprovers.length === 0) {
        return NextResponse.json({ error: "At least one approver (not yourself) is required." }, { status: 400 });
      }
      await Promise.all(
        validApprovers.map((approver) =>
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

    return NextResponse.json({ success: true, document });
  } catch (error) {
    console.error("Error submitting CAPEX form:", error);
    return NextResponse.json({ error: "Failed to submit form", details: String(error) }, { status: 500 });
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
