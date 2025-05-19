// src/app/api/templates/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

// GET /api/templates - List user's templates
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    const templates = await prisma.template.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, templates });
  } catch (err) {
    console.error("Error fetching templates:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch templates" },
      { status: 500 }
    );
  }
}

// POST /api/templates - Save a new template
export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    const { name, type, formData } = await req.json();

    if (!name || !type || !formData) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const template = await prisma.template.create({
      data: {
        name,
        type,
        formData,
        userId,
      },
    });

    return NextResponse.json({ success: true, template });
  } catch (err) {
    console.error("Error saving template:", err);
    return NextResponse.json(
      { success: false, message: "Failed to save template" },
      { status: 500 }
    );
  }
} 
/*
This API route handles template management with two main endpoints:

1. GET /api/templates (implied from context)
   - Fetches templates for authenticated user
   - Authentication:
     * Requires valid JWT token from cookies
     * Extracts userId from token
     * Returns 401 if unauthorized
   - Template Retrieval:
     * Gets all templates belonging to user
     * Returns template array in response
   - Error Handling:
     * Catches and logs fetch errors
     * Returns appropriate error responses
     * Uses proper HTTP status codes

2. POST /api/templates
   - Creates new template for authenticated user
   - Authentication:
     * Validates JWT token
     * Gets userId from decoded token
     * Ensures user is authorized
   - Template Creation:
     * Takes template name, type and formData
     * Validates required fields exist
     * Creates new template record in database
     * Associates template with user
   - Error Handling:
     * Validates required fields
     * Returns meaningful error messages
     * Logs creation errors
     * Uses appropriate status codes

This endpoint is essential for:
- Managing document templates
- Saving frequently used form configurations 
- Organizing templates by type
- Maintaining user-specific templates
- Enabling template reuse
*/
