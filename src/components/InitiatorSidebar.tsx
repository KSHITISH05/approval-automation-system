// src/components/InitiatorSidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

const navLinks = [
  { name: "Dashboard", href: "/dashboard/initiator" },
  { name: "My Approvals", href: "/dashboard/approver" },
  { name: "Documents", href: "/dashboard/initiator/documents" },
  { name: "Reports", href: "/dashboard/initiator/reports" },
  { name: "Settings", href: "/dashboard/initiator/settings" },
];

export default function InitiatorSidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-screen w-64 bg-[#102132] text-white flex flex-col justify-between py-8 px-4">
      <div>
        <div className="flex items-center gap-3 mb-10 px-2">
          <img src="/images/mpbirlalogo.png" alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-lg tracking-wide">MP BIRLA CEMENT</span>
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                pathname === link.href
                  ? "bg-white/10 font-semibold"
                  : "hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="px-2">
        <Link
          href="/logout"
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 text-red-400 font-semibold"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Link>
      </div>
    </aside>
  );
}