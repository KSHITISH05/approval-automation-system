export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white border-t border-blue-50 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#2d3a4d]">
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-blue-700 focus:text-blue-700 transition-colors">Privacy Policy</a>
        </div>
        <div className="flex gap-6">
          <a href="#terms" className="hover:text-blue-700 focus:text-blue-700 transition-colors">Terms/Contact</a>
        </div>
      </div>
    </footer>
  );
} 