// /src/app/(dashboard)/dashboard/layout.tsx

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen bg-[#0c0e13] text-white flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h1 className="text-xl font-semibold">MP BIRLA CEMENT</h1>
          <div className="text-sm text-gray-300">Dashboard</div>
        </header>
  
        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    );
  }
/*
This layout file implements the common dashboard structure that wraps all dashboard pages in the application. Here's a detailed breakdown:

1. Purpose:
   - Serves as a shared layout wrapper for all dashboard routes under /dashboard/*
   - Provides consistent styling and structure across dashboard pages
   - Implements the main navigation and header elements

2. Layout Structure:
   - Uses a full-height flex column layout (min-h-screen)
   - Dark theme with black background (#0c0e13) and white text
   - Two main sections:
     a. Header/Topbar
     b. Main content area

3. Header/Topbar Features:
   - Fixed position at top of dashboard
   - Displays company branding "MP BIRLA CEMENT" on the left
   - Shows "Dashboard" text on the right
   - Subtle border separator with reduced opacity
   - Consistent padding and spacing
   - Responsive text sizing

4. Main Content Area:
   - Flexible growth to fill available space (flex-1)
   - Consistent padding around content
   - Renders child components passed to the layout
   - Allows each dashboard page to provide its own content

5. Design Considerations:
   - Dark mode friendly color scheme
   - Clear visual hierarchy with contrasting text sizes
   - Subtle borders for visual separation
   - Responsive layout adaptations
   - Consistent spacing patterns

This layout ensures a unified look and feel across the dashboard while providing
flexibility for individual pages to render their specific content within the
established structure. It's part of the Next.js app router architecture,
automatically wrapping any pages within the (dashboard) folder.
*/