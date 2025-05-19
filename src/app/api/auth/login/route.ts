// src/app/api/auth/login/route.ts

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // store in .env

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ message: "Login successful" });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
/*
This API route handles user authentication/login. Here's what it does:

1. Authentication Flow:
   - Receives POST requests with email and password
   - Validates credentials are present
   - Checks if user exists in database
   - Verifies password using bcrypt
   - Generates JWT token on successful login

2. JWT Token Generation:
   - Creates signed token containing:
     * User ID
     * Email
     * Role
   - Sets expiration to 7 days
   - Signs with secret key from env vars

3. Cookie Management:
   - Sets HTTP-only cookie with JWT token
   - Configures secure flag for production
   - Sets 7 day expiration
   - Makes cookie available across site

4. Security Features:
   - Uses bcrypt for password comparison
   - HTTP-only cookies prevent XSS
   - Secure cookies in production
   - Generic error messages avoid info leaks

5. Error Handling:
   - Validates required fields
   - Handles invalid credentials
   - Catches and logs server errors
   - Returns appropriate status codes

This route is essential for:
- User authentication
- Securing protected routes
- Managing login sessions
- Role-based access control
*/
