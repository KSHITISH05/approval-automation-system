import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    // 1. Decode JWT from cookies
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized: No token" }, { status: 401 });
    }

    let initiatorId: string;
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      initiatorId = decoded.id;
    } catch (err) {
      console.error("JWT Decode Error:", err);
      return NextResponse.json({ success: false, message: "Unauthorized: Invalid token" }, { status: 401 });
    }

    // 2. Parse Form Data
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const amount = formData.get("amount") as string;
    const type = formData.get("type") as string;
    const file = formData.get("file") as File;
    const approvers = JSON.parse(formData.get("approvers") as string) as string[];

    if (!title || !file || approvers.length === 0) {
      return NextResponse.json({ success: false, message: "Missing required fields." });
    }

    // 3. Save file to /public/uploads
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${uuidv4()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public", "uploads", filename);
    await writeFile(filePath, buffer);

    // 4. Check that initiator exists
    const initiatorExists = await prisma.user.findUnique({ where: { id: initiatorId } });
    if (!initiatorExists) {
      return NextResponse.json({ success: false, message: "Initiator not found in DB" });
    }

    // 5. Create document in DB
    const document = await prisma.document.create({
      data: {
        title,
        description,
        amount: parseFloat(amount),
        type,
        fileName: filename,
        fileType: file.type,
        file: buffer,
        initiator: { connect: { id: initiatorId } },
        approvals: {
          create: approvers.map((approverId, index) => ({
            sequenceOrder: index + 1,
            approver: { connect: { id: approverId } },
          })),
        },
      },
    });

    console.log("✅ Document created with ID:", document.id);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ UPLOAD ERROR:", err);
    return NextResponse.json({ success: false, message: err.message });
  }
}


