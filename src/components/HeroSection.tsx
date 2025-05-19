// ./src/components/HeroSection.tsx

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8">
      {/* Left: Text and Buttons */}
      <div className="flex-1 flex flex-col items-start md:pr-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2a41]">Welcome</h1>
        <p className="text-lg md:text-xl text-[#2d3a4d] mb-8">Approval automation system for internal use</p>
        <div className="flex gap-4">
          <Link href="/login">
            <span className="inline-block px-7 py-2 rounded-lg bg-blue-800 text-white font-semibold shadow hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">Login</span>
          </Link>
          <Link href="/register">
            <span className="inline-block px-7 py-2 rounded-lg border-2 border-blue-800 text-blue-800 font-semibold bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">Sign up</span>
          </Link>
        </div>
      </div>
      {/* Right: Illustration */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src="/images/hero-illustration.svg"
          alt="Person using approval workflow system"
          className="w-[320px] h-auto max-w-full drop-shadow-xl rounded-xl bg-blue-50"
        />
      </div>
    </section>
  );
} 
/*
This component implements a Hero Section for the landing page with the following structure and functionality:

1. Layout:
   - Full-width section with max-width constraint (max-w-6xl)
   - Centered with auto margins (mx-auto)
   - Flex container that:
     - Stacks vertically on mobile (flex-col)
     - Becomes horizontal on medium screens (md:flex-row)
   - Responsive padding and spacing

2. Left Content Section:
   - Takes up equal flex space (flex-1)
   - Contains:
     - Large heading "Welcome" with custom blue color (#1a2a41)
     - Subheading text describing the app
     - Two CTA buttons:
       - Primary "Login" button (blue background)
       - Secondary "Sign up" button (outlined style)
   - Text and buttons are left-aligned
   - Responsive text sizing

3. Right Content Section:
   - Takes up equal flex space (flex-1)
   - Contains illustration image:
     - SVG illustration of person using system
     - Responsive sizing (320px width)
     - Light blue background
     - Drop shadow and rounded corners
   - Centered within its container
   - Margin top on mobile, removed on desktop

4. Interactive Elements:
   - Buttons have:
     - Hover states
     - Focus states with rings
     - Smooth transitions
   - Next.js Link components for navigation

5. Responsive Design:
   - Stacks vertically on mobile devices
   - Side-by-side layout on medium and larger screens
   - Adjusted text sizes and spacing for different screens
   - Consistent padding across breakpoints

The component serves as an engaging landing page hero section that clearly
communicates the app's purpose while providing easy access to authentication
options through a clean, modern design.
*/
