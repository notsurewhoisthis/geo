'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="container-blog py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Generative Engine Optimization</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition">Home</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition">Blog</Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900 font-medium transition">Resources</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition">About</Link>
            <Link href="/blog" className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
              Get Started
            </Link>
          </div>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition">Home</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition">Blog</Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900 font-medium transition">Resources</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition">About</Link>
              <Link href="/blog" className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}