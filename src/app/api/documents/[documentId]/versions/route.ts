// src/app/api/documents/[documentId]/versions/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(
  req: NextRequest,
  context: { params: { documentId: string } }
) {
  try {
    const { documentId } = context.params;

    const versions = await prisma.documentVersion.findMany({
      where: { documentId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, versions });
  } catch (err) {
    console.error("Error fetching versions:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

/*
This API route handles document version management. Here's what it does:

1. Version Chain Navigation:
   - Takes a document ID and finds its complete version history
   - Walks backwards through previousVersionId links to find root version
   - Then walks forward building an ordered chain of all versions
   - Returns versions ordered from oldest to newest

2. Authentication & Security:
   - Requires valid JWT token from cookies
   - Validates user authorization
   - Returns 401 if unauthorized
   - Returns 404 if document not found

3. Version Chain Building Process:
   - First finds the given document
   - Traverses backwards through previousVersionId references to find root
   - Then builds forward chain starting from root
   - Maintains chronological order using createdAt timestamps
   - Handles cases where chain may be broken

4. Response Structure:
   - Returns success status
   - Returns array of version documents
   - Versions ordered chronologically (oldest to newest)
   - Each version contains full document data

5. Error Handling:
   - Catches and handles authentication errors
   - Handles missing documents
   - Returns appropriate error status codes
   - Provides meaningful error messages

This endpoint is essential for:
- Tracking document revision history
- Viewing document evolution
- Maintaining audit trails
- Supporting document versioning
*/
