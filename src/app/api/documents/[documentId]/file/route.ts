// src/app/api/documents/[documentId]/file/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  context: { params: { documentId: string } }
) {
  try {
    const { documentId } = context.params;

    const document = await prisma.document.findUnique({
      where: { id: documentId },
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

/*
This API route handles file operations for documents. Here's what it does:

1. GET Request Handler:
   - Fetches a document's file content by document ID
   - Returns the actual file data as a downloadable response
   - Includes proper headers for file download:
     * Content-Type based on stored file type
     * Content-Disposition for download with original filename
   - Returns 404 if document or file not found
   - Returns 500 on server errors

2. Document Validation:
   - Takes documentId from URL params
   - Queries document to verify it exists
   - Checks if file content exists
   - Returns appropriate error responses if missing

3. File Response:
   - Returns raw file content as response body
   - Sets correct MIME type from document.fileType
   - Falls back to application/octet-stream if type missing
   - Sets filename to original document.fileName
   - Falls back to 'document' if filename missing

4. Error Handling:
   - Catches and handles database errors
   - Returns formatted error responses
   - Uses proper HTTP status codes:
     * 404 for missing files
     * 500 for server errors

This route is essential for:
- Downloading document files
- Accessing stored document content
- Maintaining file metadata
- Proper file content delivery
*/


