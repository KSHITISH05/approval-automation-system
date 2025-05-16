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
