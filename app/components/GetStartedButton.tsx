'use client'

import Link from 'next/link'

interface GetStartedButtonProps {
  href?: string
  className?: string
  fullWidth?: boolean
}

export default function GetStartedButton({ 
  href = '/tools', 
  className = '',
  fullWidth = false 
}: GetStartedButtonProps) {
  return (
    <Link 
      href={href}
      className={`
        group relative inline-flex items-center justify-between
        px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600
        text-white font-semibold rounded-full
        shadow-lg hover:shadow-xl transform hover:scale-105
        transition-all duration-300 ease-out
        overflow-hidden
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Button content */}
      <span className="relative flex items-center gap-2">
        <span className="text-base">Get started</span>
      </span>
      
      {/* Arrow icon with animation */}
      <span className="relative ml-2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
        <svg 
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
      
      {/* Pulse animation ring */}
      <span className="absolute -inset-1 rounded-full bg-blue-600/20 animate-ping" />
    </Link>
  )
}