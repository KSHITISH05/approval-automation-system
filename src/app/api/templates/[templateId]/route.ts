import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

// DELETE /api/templates/[templateId] - Delete a template
export async function DELETE(
  req: NextRequest,
  { params }: { params: { templateId: string } }
) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    // Check if template exists and belongs to user
    const template = await prisma.template.findFirst({
      where: {
        id: params.templateId,
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
        id: params.templateId,
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