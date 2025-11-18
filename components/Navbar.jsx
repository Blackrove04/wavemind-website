"use client";

import Link from "next/link";


export default function Navbar() {


  
  return (
    <header className="bg-[#0A1A3A] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="WaveMind Logo" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-white tracking-wide">
            WaveMind
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-[#00C4FF] transition">About</a>
          <a href="#mission" className="hover:text-[#00C4FF] transition">Mission</a>
          <a href="#why-us" className="hover:text-[#00C4FF] transition">Why Choose Us</a>
        </nav>

        {/* CTA Button */}
        <a
          href="mailto:wavemindsolutions@gmail.com"
          className="bg-linear-to-r from-[#00C4FF] to-[#0078FF] hover:opacity-90 text-white font-semibold px-4 py-2 rounded-lg text-sm transition"
        >
          Get a Free Consultation
        </a>
      </div>
    </header>
  );
}
