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
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="white"/>
                <circle cx="60" cy="60" r="12" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="2"/>
                <circle cx="140" cy="60" r="12" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="2"/>
                <circle cx="60" cy="140" r="12" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="2"/>
                <circle cx="140" cy="140" r="12" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="2"/>
                <line x1="60" y1="60" x2="140" y2="60" stroke="#1e3a8a" strokeWidth="3"/>
                <line x1="140" y1="60" x2="140" y2="140" stroke="#1e3a8a" strokeWidth="3"/>
                <line x1="140" y1="140" x2="60" y2="140" stroke="#1e3a8a" strokeWidth="3"/>
                <line x1="60" y1="140" x2="60" y2="60" stroke="#1e3a8a" strokeWidth="3"/>
                <line x1="60" y1="60" x2="140" y2="140" stroke="#1e3a8a" strokeWidth="3"/>
                <line x1="140" y1="60" x2="60" y2="140" stroke="#1e3a8a" strokeWidth="3"/>
                <text x="100" y="180" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">GEO</text>
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">Generative Engine Optimization</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition">Home</Link>
            <Link href="/guide" className="text-gray-600 hover:text-gray-900 font-medium transition">Guide</Link>
            <Link href="/tools" className="text-gray-600 hover:text-gray-900 font-medium transition">Tools</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition">Blog</Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900 font-medium transition">Resources</Link>
            <Link href="/tech-view" className="text-gray-600 hover:text-gray-900 font-medium transition">Tech View</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition">About</Link>
            <Link href="/tools" className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
              Try Tools
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
              <Link href="/guide" className="text-gray-600 hover:text-gray-900 font-medium transition">Guide</Link>
              <Link href="/tools" className="text-gray-600 hover:text-gray-900 font-medium transition">Tools</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition">Blog</Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-900 font-medium transition">Resources</Link>
              <Link href="/tech-view" className="text-gray-600 hover:text-gray-900 font-medium transition">Tech View</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium transition">About</Link>
              <Link href="/tools" className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-center">
                Try Tools
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}