// src/app/api/auth/me/route.ts

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretvalue123";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ user: decoded });
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
/*
This API route handles fetching user authentication information. Here's what it does:

1. Token Validation:
   - Extracts JWT token from request cookies
   - Returns 401 Unauthorized if token is missing

2. JWT Verification:
   - Verifies token using secret key
   - Returns decoded user information if valid

3. Response Structure:
   - Returns JSON response with user information
   - Error responses include status codes and messages

This route is essential for:
- Providing authenticated user details
- Securing protected routes
- Managing user authentication state
- Providing user context to other API endpoints
*/
  