// /src/app/api/approvals/my/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const approverId = decoded.id;

    const approvals = await prisma.approval.findMany({
      where: {
        approverId,
      },
      include: {
        document: {
          select: {
            title: true,
            description: true,
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ approvals });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

/*
This API route handles fetching and managing approvals for authenticated approvers. Here's a detailed breakdown:

1. Authentication & Authorization:
   - Validates user authentication via JWT token in cookies
   - Extracts approver ID from decoded token
   - Returns 401 Unauthorized if token is missing or invalid

2. Approval Retrieval:
   - GET endpoint fetches all approvals assigned to the authenticated approver
   - Uses Prisma to query the database for approvals matching the approver ID
   - Includes related document information (title, description, status)
   - Orders results by creation date (newest first)

3. Response Structure:
   - Returns JSON response containing array of approvals
   - Each approval includes:
     * Basic approval details (status, sequence order, etc)
     * Associated document information (title, description, status)
   - Error responses include appropriate status codes and messages

4. Security Considerations:
   - Ensures users can only access their own approvals
   - Validates JWT token authenticity
   - Handles token verification errors gracefully

5. Integration Points:
   - Works with Prisma ORM for database operations
   - Uses Next.js API routes
   - Integrates with JWT authentication system
   - Part of larger approval workflow system

This route is essential for:
- Approvers to view their assigned approvals
- Dashboard displays of pending/completed approvals
- Managing approval workflow visibility
- Ensuring secure access to approval data
*/
