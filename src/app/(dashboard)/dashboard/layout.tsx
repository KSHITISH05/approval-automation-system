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
  