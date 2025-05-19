// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password, firstName, lastName, department } = body;

  if (!email || !password || !firstName || !lastName || !department) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        // department,
      },
    });

    return NextResponse.json({ message: "User registered successfully", userId: user.id });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
/*
This API route handles user registration. Here's what it does:

1. Input Validation:
   - Checks required fields are present
   - Returns 400 Bad Request if missing fields

2. User Existence Check:
   - Checks if user already exists in database
   - Returns 409 Conflict if user already registered

3. Password Hashing:
   - Hashes password using bcrypt
   - Uses 10 rounds of salt

4. User Creation:
   - Creates new user in database

5. Response Structure:
   - Returns JSON response with:
     * success status
     * user ID
   - Error responses include status codes and messages

This route is essential for:
- User registration
- Creating new user accounts
- Managing user authentication
*/
