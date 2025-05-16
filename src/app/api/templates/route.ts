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