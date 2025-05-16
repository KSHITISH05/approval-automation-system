import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const document = await prisma.document.findUnique({
      where: { id: params.id },
    });
    if (!document || !document.file) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }
    return new NextResponse(document.file, {
      status: 200,
      headers: {
        "Content-Type": document.fileType || "application/octet-stream",
        "Content-Disposition": `attachment; filename=\"${document.fileName || 'document'}\"`,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch file" }, { status: 500 });
  }
} 