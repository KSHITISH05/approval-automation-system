// /src/app/(auth)/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error || "Login failed");
    } else {
      setMessage("Login successful ✅");
      // Redirect to dashboard or protected page after login
      setTimeout(async () => {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
      
        if (data.user?.role === "INITIATOR") {
          window.location.href = "/dashboard/initiator";
        } else if (data.user?.role === "APPROVER") {
          window.location.href = "/dashboard/approver";
        } else {
          window.location.href = "/dashboard";
        }
      }, 500);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-full max-w-md mx-auto bg-white bg-opacity-100 border-2 border-gray-400 shadow-2xl rounded-2xl">
        <CardContent className="py-8 px-6">
          <h1 className="text-3xl font-bold mb-6 text-black">Login</h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-black bg-white"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-black bg-white"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end">
              <Link href="/reset" className="text-black text-sm hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-semibold text-base rounded-md py-2 shadow">
              Log in
            </Button>
          </form>
          <div className="flex flex-col items-center mt-8">
            <Image
              src="/images/mpbirlalogo.png"
              alt="MP Birla Cement Logo"
              width={48}
              height={48}
              className="mb-2"
            />
            <span className="font-semibold text-lg text-black tracking-wide">MP BIRLA CEMENT</span>
          </div>
          {message && <p className="mt-4 text-sm text-black">{message}</p>}
        </CardContent>
      </Card>
    </div>
  );
}


// This file defines a React functional component for a Login page using TypeScript.
// It provides a form for users to enter their email and password, and handles authentication logic.
//
// Key features and flow:
// 1. State Management:
//    - Uses useState to manage form data (email, password) and a message for feedback.
// 2. Form Submission:
//    - On form submit, prevents default behavior and sends a POST request to '/api/auth/login' with the form data.
//    - If login fails, displays an error message from the server or a default message.
//    - If login succeeds, shows a success message and, after a short delay, fetches the current user's info from '/api/auth/me'.
//    - Based on the user's role ('INITIATOR', 'APPROVER', or other), redirects to the appropriate dashboard page.
// 3. UI Elements:
//    - Uses Card and CardContent components for layout (likely from a UI library).
//    - Includes input fields for email and password, with validation and styling.
//    - Provides a "Forgot password?" link and a login button.
//    - Displays a company logo and name at the bottom.
//    - Shows feedback messages to the user after login attempts.
//
// Note: The component expects certain dependencies (e.g., useRouter, Card, CardContent, Button, Link, Image) to be imported from relevant libraries.
//       It also assumes the existence of backend API endpoints for authentication.