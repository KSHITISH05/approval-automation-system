import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: NextRequest, { params }: { params: { documentId: string } }) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    // Find the root version
    let doc = await prisma.document.findUnique({ where: { id: params.documentId } });
    if (!doc) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });

    // Walk back to the first version
    while (doc && (doc as any).previousVersionId) {
      const prev: Awaited<ReturnType<typeof prisma.document.findUnique>> = await prisma.document.findUnique({ where: { id: (doc as any).previousVersionId } });
      if (!prev) break;
      doc = prev;
    }
    if (!doc) return NextResponse.json({ success: false, message: "Document not found" }, { status: 404 });
    const rootId = doc.id;

    // Get all versions in the chain (ordered oldest to newest)
    let chain = [];
    let current = doc;
    while (current) {
      chain.push(current);
      const next = await prisma.document.findFirst({ 
        where: { previousVersionId: current.id } as any, 
        orderBy: { createdAt: "asc" } 
      });
      if (!next) break;
      current = next as NonNullable<typeof next>;
    }

    return NextResponse.json({ success: true, versions: chain });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
} 