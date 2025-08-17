'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/95 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500" />
            <span className="text-xl font-bold gradient-text">GEO</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-purple-400 transition">Home</Link>
            <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="/resources" className="hover:text-purple-400 transition">Resources</Link>
            <Link href="/about" className="hover:text-purple-400 transition">About</Link>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 hover:shadow-lg transition">
              Get Started
            </button>
          </div>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-purple-400 transition">Home</Link>
              <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
              <Link href="/resources" className="hover:text-purple-400 transition">Resources</Link>
              <Link href="/about" className="hover:text-purple-400 transition">About</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}