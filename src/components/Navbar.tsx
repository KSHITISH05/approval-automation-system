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