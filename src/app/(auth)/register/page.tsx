// /src/app/(auth)/register/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const departments = [
  "Finance", 
  "HR",
  "Operations",
  "IT",
  "Procurement",
  "Sales",
  "Marketing",
  // Add more as needed
];

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    department: "",
  });

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error || "Registration failed");
    } else {
      setMessage("User registered successfully ✅");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-full max-w-md mx-auto bg-white bg-opacity-100 border-2 border-gray-400 shadow-2xl rounded-2xl">
        <CardContent className="py-8 px-6">
          <h1 className="text-3xl font-bold mb-6 text-black">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1 text-black">First Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-black bg-white"
                  value={formData.firstName}
                  onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1 text-black">Last Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-black bg-white"
                  value={formData.lastName}
                  onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black">Email Address</label>
              <input
                type="email"
                required
                className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-black bg-white"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black">Password</label>
              <input
                type="password"
                required
                className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-black bg-white"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black">Department</label>
              <select
                required
                className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 text-black bg-white"
                value={formData.department}
                onChange={e => setFormData({ ...formData, department: e.target.value })}
              >
                <option value="">Select department</option>
                {departments.map(dep => (
                  <option key={dep} value={dep}>{dep}</option>
                ))}
              </select>
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-semibold text-base rounded-md py-2 shadow">
              Register
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
          {message && <p className="mt-4 text-sm">{message}</p>}

        </CardContent>
      </Card>
    </div>
  );
}

// This file defines a React functional component for a registration page.
// The component uses TypeScript for type safety and React hooks for state management.

// The file likely imports React and useState (not shown in the excerpt).
// It also defines an array of department names (e.g., "Sales", "Marketing") for use in a dropdown or selection field.

// The RegisterPage component manages form state for user registration.
// It tracks user input for first name, last name, email, password, and department using the formData state object.

// message state is used to display feedback to the user (e.g., success or error messages).
// open state is likely used to control the visibility of a modal, alert, or notification.

// handleSubmit is an asynchronous function that handles the form submission event.
// It prevents the default form submission behavior (page reload) and will likely send the form data to a backend API for registration (implementation not shown in the excerpt).

// The component will render a registration form, handle user input, and provide feedback based on the registration outcome.
