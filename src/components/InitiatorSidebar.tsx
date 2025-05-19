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
/*
This component implements a sidebar navigation menu for the initiator dashboard with the following features:

1. Layout Structure:
   - Full height sidebar (h-screen) with fixed width of 64 units (w-64)
   - Dark blue background (#102132) with white text
   - Flex column layout with space between content
   - Padding on all sides (py-8 px-4)

2. Header Section:
   - Company logo and name at the top
   - Flex layout with gap spacing
   - MP BIRLA CEMENT branding with bold text and wide tracking

3. Navigation Menu:
   - List of navigation links defined in navLinks array:
     - Dashboard
     - My Approvals  
     - Documents
     - Reports
     - Settings
   - Each link has:
     - Flex layout with gap spacing
     - Padding and rounded corners
     - Hover effect (white/5 background)
     - Active state shows:
       - Slightly lighter background (white/10)
       - Semi-bold font weight
   - Uses Next.js Link component for client-side navigation
   - Active link detection using usePathname hook

4. Logout Section:
   - Positioned at bottom of sidebar
   - Red text color with logout icon
   - Hover effect matches other links
   - Uses Lucide icon component

5. Client-Side Features:
   - Uses "use client" directive for client-side interactivity
   - Tracks current route with usePathname
   - Updates active link styles based on current path

The sidebar provides the main navigation structure for initiator users,
with clear visual hierarchy and interactive states to indicate current location.
*/
