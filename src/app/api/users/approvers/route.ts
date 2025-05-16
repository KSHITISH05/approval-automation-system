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