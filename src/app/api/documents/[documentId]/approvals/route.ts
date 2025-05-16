// File: src/app/api/documents/[documentId]/approvals/route.ts

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(
  request: Request,
  { params }: { params: { documentId: string } }
) {
  try {
    // Await the params object before accessing documentId
    const resolvedParams = await params;
    const documentId = resolvedParams.documentId;
    
    const approvals = await prisma.approval.findMany({
      where: { documentId },
      include: {
        approver: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: {
        sequenceOrder: 'asc',
      },
    });

    return NextResponse.json({ approvals });
  } catch (error) {
    console.error("Error fetching approvals:", error);
    return NextResponse.json(
      { error: "Failed to fetch approvals" },
      { status: 500 }
    );
  }
}
