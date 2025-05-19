// src/app/api/users/approvers/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(request: Request) {
  try {
    const token = request.headers.get("cookie")?.split("token=")[1]?.split(";")[0];
    
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    // Fetch all users with approver role
    const approvers = await prisma.user.findMany({
      where: {
        role: "APPROVER",
        id: {
          not: userId // Exclude current user
        }
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
      orderBy: {
        firstName: "asc",
      },
    });

    return NextResponse.json({ success: true, approvers });
  } catch (error) {
    console.error("Error fetching approvers:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch approvers" },
      { status: 500 }
    );
  }
} 

/*
This API route handles fetching users with the APPROVER role. Here's what it does:

1. Authentication:
   - Extracts JWT token from request cookies
   - Verifies token authenticity using JWT_SECRET
   - Returns 401 Unauthorized if token is missing/invalid
   - Gets current user ID from decoded token

2. Approver Retrieval:
   - Queries database for users with APPROVER role
   - Excludes the current authenticated user
   - Selects specific user fields:
     * User ID
     * First name
     * Last name  
     * Email
   - Orders results alphabetically by first name

3. Response Structure:
   - Returns JSON response with:
     * Success status
     * Array of approver objects
   - Error responses include:
     * Status codes (401, 500)
     * Error messages
     * Success flag

4. Error Handling:
   - Catches and logs errors
   - Returns appropriate error responses
   - Uses proper HTTP status codes
   - Provides meaningful error messages

This endpoint is essential for:
- Getting list of available approvers
- Setting up approval workflows
- Selecting approvers for documents
- Managing approval chains
*/
