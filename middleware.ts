import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCorrectPlatformSlug } from '@/app/lib/platform-redirects'

// Language configuration
const supportedLanguages = ['en'] // Only English is currently supported
const defaultLanguage = 'en'

// Redirect language subdomains to main site with language indicator
export function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl
  
  // Handle www to non-www redirect FIRST to prevent loops
  if (hostname === 'www.generative-engine.org' || hostname === 'www.lookatmyprofile.org') {
    const url = request.nextUrl.clone()
    url.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(url, { status: 301 })
  }
  
  // Check if it's a language subdomain
  const languageSubdomains = ['es', 'fr', 'de', 'pt', 'it', 'ja', 'zh', 'ko', 'uk']
  const subdomain = hostname.split('.')[0]
  
  // If it's a language subdomain, redirect to main site with coming soon page
  if (languageSubdomains.includes(subdomain)) {
    const url = new URL(`/coming-soon?lang=${subdomain}`, request.url)
    url.hostname = 'generative-engine.org'
    return NextResponse.redirect(url)
  }
  
  // Handle platform page redirects
  if (pathname.startsWith('/platforms/')) {
    const platformSlug = pathname.replace('/platforms/', '').replace(/\/$/, '')
    const correctSlug = getCorrectPlatformSlug(platformSlug)
    
    // If we found a redirect mapping and it's different from current
    if (correctSlug && correctSlug !== platformSlug) {
      const url = request.nextUrl.clone()
      url.pathname = `/platforms/${correctSlug}`
      return NextResponse.redirect(url, { status: 301 })
    }
  }
  
  // Continue with the request for the main site
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}