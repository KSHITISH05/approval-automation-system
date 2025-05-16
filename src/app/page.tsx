"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Array of images for the slideshow
const slides = [
  "/images/maiharplant.jpg",
  "/images/plantphoto1.jpg",
  "/images/plantphoto2.jpg",
  "/images/plantphoto3.jpg",
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar Section */}
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <div className="flex items-center gap-2">
          {/* Company Logo */}
          <Image 
            src="/images/mpbirlalogo.png" 
            alt="MP Birla Cement Logo" 
            width={100} 
            height={100}
          />
          <h1 className="text-2xl font-bold text-blue-900">MP BIRLA CEMENT</h1>
        </div>
        
        <div className="flex gap-6 text-sm">
          <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
            Login
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Help
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </Link>
        </div>
      </nav>

      {/* Div A - Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-8">
        {/* Div1a - Welcome and Login */}
        <div className="space-y-6 max-w-md">
          <h2 className="text-4xl font-bold text-blue-900">Welcome</h2>
          <p className="text-gray-600 text-lg">
            Approval automation system for internal use
          </p>
          <div className="flex gap-4">
            <Link href="/login">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Login</Button>
            </Link>
            <Link href='/register'>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Sign up
              </Button>
            </Link>
          </div>
        </div>

        {/* Div1b - Slideshow */}
        <div className="w-full max-w-2xl h-96 md:h-[32rem] relative rounded-lg overflow-hidden shadow-xl">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Div B - Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-blue-50">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-blue-900 mb-2">Approval Workflow</h3>
          <p className="text-gray-600">Configure and control document flow with our intuitive system</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-blue-50">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-blue-900 mb-2">Dashboards</h3>
          <p className="text-gray-600">Visualize document status and statistics in real-time</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg bg-blue-50">
          <div className="bg-blue-100 p-3 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-blue-900 mb-2">Efficiency</h3>
          <p className="text-gray-600">Reduce processing time and improve operational efficiency</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-t bg-gray-50">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          {/* Footer Logo */}
          <Image 
            src="/images/mpbirlalogo.png" 
            alt="MP Birla Cement Logo" 
            width={100} 
            height={100} 
          />
          {/* Social Media Links */}
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/MPBirlaCement/" className="text-gray-500 hover:text-blue-600">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://x.com/mpbirla_cement?lang=en" className="text-gray-500 hover:text-black-800">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.25 3h4.27l3.22 4.89L15.18 3h4.26l-5.97 8.43L20 21h-4.27l-3.41-5.16L8.85 21H4.6l6.23-8.8L4.25 3z" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/mpbirla_cement/" className="text-gray-500 hover:text-blue-600">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://in.linkedin.com/company/mp-birla-cement" className="text-gray-500 hover:text-blue-600">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-600">
          <Link href="#" className="hover:text-blue-600">Privacy Policy</Link>
          <Link href="#" className="hover:text-blue-600">Terms</Link>
          <Link href="#" className="hover:text-blue-600">Contact</Link>
        </div>
      </footer>
    </main>
  );
}