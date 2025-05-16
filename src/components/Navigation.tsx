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