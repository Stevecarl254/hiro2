"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Hiro Catering</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
            <Link href="#about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition font-medium">
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#home" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Home
            </Link>
            <Link href="#services" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Services
            </Link>
            <Link href="#about" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              About
            </Link>
            <Link href="#contact" className="block px-4 py-2 text-foreground hover:bg-secondary rounded">
              Contact
            </Link>
            <button className="w-full mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
