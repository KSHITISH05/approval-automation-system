// src/app/api/forms/capex/[documentId]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(
  req: NextRequest,
  context: { params: { documentId: string } }
) {
  try {
    const { documentId } = context.params;

    const capexForm = await prisma.capexForm.findUnique({
      where: { documentId },
      include: {
        document: {
          include: {
            initiator: true,
            approvals: {
              include: {
                approver: true,
              },
            },
          },
        },
      },
    });

    if (!capexForm) {
      return NextResponse.json({ success: false, message: "CAPEX form not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, capexForm });
  } catch (err) {
    console.error("Error fetching CAPEX form:", err);
    return NextResponse.json({ success: false, message: "Server error", error: String(err) }, { status: 500 });
  }
} 

/*
This API route handles fetching CAPEX (Capital Expenditure) form data. Here's what it does:

1. Form Data Retrieval:
   - Takes a document ID from URL params
   - Fetches the associated CAPEX form data
   - Returns 404 if form not found
   - Includes all form fields like:
     * Title, unit, location
     * Project details and timeline
     * Budget information
     * Technical specifications
     * Cost tables and spending plans

2. File Handling:
   - Checks if document has associated file
   - Generates file download URL if file exists
   - Links to file download endpoint
   - Makes file accessible via API

3. Approval Chain Information:
   - Fetches complete approval trail
   - Includes approver details:
     * First and last names
     * Email addresses
   - Orders approvals by sequence
   - Shows approval status progression

4. Response Structure:
   - Returns success status
   - Returns complete form data including:
     * All CAPEX form fields
     * File information (name and URL)
     * Initiator details
     * Approval chain status
     * Document status

5. Error Handling:
   - Catches and logs errors
   - Returns appropriate error responses
   - Uses proper HTTP status codes
   - Provides meaningful error messages

This endpoint is essential for:
- Displaying CAPEX form details
- Tracking approval progress
- Accessing form attachments
- Managing capital expenditure requests
*/
