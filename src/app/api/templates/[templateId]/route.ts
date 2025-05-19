// src/app/api/templates/[templateId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

// DELETE /api/templates/[templateId] - Delete a template
export async function DELETE(
  req: NextRequest,
  context: { params: { templateId: string } }
) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;
    const { params } = await context;
    const { templateId } = params;

    // Check if template exists and belongs to user
    const template = await prisma.template.findFirst({
      where: {
        id: templateId,
        userId,
      },
    });

    if (!template) {
      return NextResponse.json(
        { success: false, message: "Template not found" },
        { status: 404 }
      );
    }

    // Delete the template
    await prisma.template.delete({
      where: {
        id: templateId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting template:", err);
    return NextResponse.json(
      { success: false, message: "Failed to delete template" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  context: { params: { templateId: string } }
) {
  try {
    const { templateId } = context.params;

    const template = await prisma.template.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      return NextResponse.json({ success: false, message: "Template not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, template });
  } catch (err) {
    console.error("Error fetching template:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

/*
This API route handles template management operations, specifically the deletion of templates. Here's a detailed breakdown:

1. Authentication & Authorization:
   - Requires JWT token from cookies
   - Verifies token validity using JWT_SECRET
   - Extracts userId from decoded token
   - Returns 401 if unauthorized

2. Template Ownership Verification:
   - Takes templateId from URL parameters
   - Queries database to find template
   - Checks if template exists and belongs to requesting user
   - Returns 404 if template not found or not owned by user

3. Template Deletion:
   - Deletes template record from database
   - Uses Prisma ORM for database operations
   - Only deletes if ownership verified
   - Returns success response after deletion

4. Error Handling:
   - Catches and logs deletion errors
   - Returns appropriate error responses
   - Uses proper HTTP status codes
   - Provides meaningful error messages

This endpoint ensures:
- Secure template deletion
- User data isolation
- Proper error handling
- Clean template management
*/
