// /src/app/(dashboard)/dashboard/page.tsx

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretvalue123";

export default async function DashboardEntryPoint() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) redirect("/login");

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    if (decoded.role === "INITIATOR") {
      redirect("/dashboard/initiator");
    } else if (decoded.role === "APPROVER") {
      redirect("/dashboard/approver");
    } else if (decoded.role === "ADMIN") {
      redirect("/dashboard/admin");
    } else {
      redirect("/login");
    }
  } catch (error) {
    console.error("Invalid token:", error);
    redirect("/login");
  }
}


/*
This page serves as the main entry point and router for the dashboard section of the application. Here's a detailed breakdown:

1. Authentication & Authorization:
   - Checks for presence of authentication token in cookies
   - Verifies token validity using JWT_SECRET
   - Decodes token to extract user role information
   - Redirects to login if token is missing or invalid

2. Role-Based Routing:
   - Routes users to different dashboard views based on their role:
     * INITIATOR -> /dashboard/initiator
       For users who create new approval requests
     * APPROVER -> /dashboard/approver  
       For users who review and approve/reject requests
     * ADMIN -> /dashboard/admin
       For system administrators
   - Provides security by ensuring users can only access appropriate sections

3. Error Handling:
   - Catches and logs JWT verification errors
   - Redirects invalid sessions back to login
   - Handles unknown/invalid roles by redirecting to login

4. Implementation Details:
   - Uses Next.js server-side features (cookies(), redirect())
   - Implements JWT token verification
   - Runs on server-side before page render
   - Acts as a security gateway for dashboard access

This page ensures users are:
- Authenticated before accessing dashboard
- Directed to the correct dashboard view for their role
- Unable to access unauthorized dashboard sections

It's a critical security component that manages access control and routing
for the entire dashboard section of the application.
*/
