"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="WaveMind Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-sky-600">WaveMind Solutions</span>
          </Link>

          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/" className="text-gray-700 hover:text-sky-600">Home</Link>
            <a href="#about" className="text-gray-700 hover:text-sky-600">About</a>
            <Link href="/services" className="text-gray-700 hover:text-sky-600">Services</Link>
            <a href="#contact" className="text-gray-700 hover:text-sky-600">Contact</a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 flex flex-col gap-2 pb-4">
            <Link href="/" className="block px-2 py-2 rounded hover:bg-gray-100">Home</Link>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-gray-100">About</a>
            <Link href="/services" className="block px-2 py-2 rounded hover:bg-gray-100">Services</Link>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-gray-100">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}
