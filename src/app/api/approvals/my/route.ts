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

