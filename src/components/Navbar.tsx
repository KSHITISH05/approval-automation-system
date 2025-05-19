// ./src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-wide text-[#1a2a41]">MP BIRLA CEMENT</div>
      <nav className="flex gap-8 text-base font-medium">
        <Link href="/login" className="hover:text-blue-700 focus:text-blue-700 transition-colors">Login</Link>
        <Link href="#help" className="hover:text-blue-700 focus:text-blue-700 transition-colors">Help</Link>
        <Link href="#about" className="hover:text-blue-700 focus:text-blue-700 transition-colors">About</Link>
      </nav>
    </header>
  );
} 

/*
This component implements a navigation bar (Navbar) for the web application with the following features:

1. Layout Structure:
   - Full-width header (w-full)
   - White background (bg-white)
   - Subtle shadow effect (shadow-sm)
   - Padding: vertical 4 units, horizontal 6 units (py-4 px-6)
   - Flex container with:
     - Items centered vertically (items-center)
     - Content spread between start and end (justify-between)

2. Left Side - Branding:
   - Company name "MP BIRLA CEMENT"
   - Large text size (text-2xl)
   - Bold font weight
   - Wide letter spacing (tracking-wide)
   - Custom dark blue color (#1a2a41)

3. Right Side - Navigation Menu:
   - Flex container with 8 units of gap spacing
   - Base text size (text-base)
   - Medium font weight
   - Three navigation links:
     - Login
     - Help
     - About
   - Each link has:
     - Hover effect changes text to blue-700
     - Focus state matches hover state
     - Smooth color transition (transition-colors)

4. Navigation:
   - Uses Next.js Link component for client-side routing
   - Login link points to /login
   - Help and About links are anchor links (#help, #about)

The navbar provides the main navigation structure for the application's public pages,
with clear branding and essential navigation links in a clean, professional design.
*/
