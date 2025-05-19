// src/app/api/notifications/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

// GET /api/notifications - List recent notifications for the user
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;

    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 30,
    });

    return NextResponse.json({ success: true, notifications });
  } catch (err) {
    console.error("Error fetching notifications:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch notifications" },
      { status: 500 }
    );
  }
}

// POST /api/notifications - Mark notifications as read
export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const userId = decoded.id;
    const { ids } = await req.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ success: false, message: "No notification IDs provided" }, { status: 400 });
    }

    await prisma.notification.updateMany({
      where: { userId, id: { in: ids } },
      data: { read: true },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error marking notifications as read:", err);
    return NextResponse.json(
      { success: false, message: "Failed to mark notifications as read" },
      { status: 500 }
    );
  }
} 

/*
This API route handles notification management with two main endpoints:

1. GET /api/notifications
   - Fetches recent notifications for authenticated user
   - Authentication:
     * Requires valid JWT token from cookies
     * Extracts userId from token
     * Returns 401 if unauthorized
   - Notification Retrieval:
     * Gets last 30 notifications for user
     * Orders by creation date (newest first)
     * Returns notification array in response
   - Error Handling:
     * Catches and logs fetch errors
     * Returns appropriate error responses
     * Uses proper HTTP status codes

2. POST /api/notifications  
   - Marks specified notifications as read
   - Authentication:
     * Validates JWT token
     * Gets userId from decoded token
     * Ensures user owns notifications
   - Update Process:
     * Takes array of notification IDs
     * Validates ID array exists and not empty
     * Updates read status to true
     * Only updates notifications owned by user
   - Error Handling:
     * Handles invalid/missing IDs
     * Returns meaningful error messages
     * Logs update errors

This endpoint is essential for:
- Managing user notifications
- Tracking read/unread status
- Displaying notification history
- Maintaining notification state
*/
