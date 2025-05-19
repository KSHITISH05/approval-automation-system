// src/components/Navigation.tsx
import Link from 'next/link';

export default function Navigation() {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
  };

  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">MP Birla</span>
        </div>

        <div className="space-y-2">
          <Link
            href="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/new"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            New Request
          </Link>
          <Link
            href="/dashboard/templates"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Templates
          </Link>
          <Link
            href="/dashboard/approver"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Approvals
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
} 
/*
This component implements a navigation sidebar for the application with the following features:

1. Layout Structure:
   - Fixed width sidebar (w-64) with minimum full height (min-h-screen)
   - Dark gray background (bg-gray-800) with white text
   - Padding on all sides (p-4)

2. Logo/Header Section:
   - Contains "MP Birla" text
   - Flex container with spacing between items
   - Large text size and bold font weight

3. Navigation Menu:
   - Vertical list of navigation links with consistent spacing (space-y-2)
   - Links include:
     - Dashboard
     - New Request 
     - Templates
     - Approvals
   - Each link has:
     - Block display taking full width
     - Consistent padding (px-4 py-2)
     - Rounded corners
     - Hover effect with slightly lighter background (hover:bg-gray-700)
   - Uses Next.js Link component for client-side navigation

4. Logout Button:
   - Styled to match navigation links
   - Full width with left-aligned text
   - onClick handler for logout functionality
   - Currently logs to console (placeholder)

5. Spacing:
   - Vertical spacing between sections (space-y-6)
   - Consistent horizontal/vertical padding on items
   - Space between logo elements (space-x-2)

The navigation provides the main sidebar menu structure for authenticated users,
with clear visual hierarchy and interactive states. The styling matches a dark theme
with hover effects for better user interaction feedback.
*/
