import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCorrectPlatformSlug } from '@/app/lib/platform-redirects'

// SEO and GEO Redirects - Fixed to prevent redirect loops
const CONTENT_REDIRECTS: { [key: string]: string } = {
  // Blog and Content Redirects
  '/blog/chatgpt-optimization-guide': '/tutorials/chatgpt-optimization',
  '/blog/seo-vs-geo-complete-guide': '/tutorials/seo-vs-geo',

  // Case Studies Redirects
  '/case-studies/b2b-geo': '/use-cases/b2b',
  '/case-studies/content-geo': '/use-cases/content',
  '/case-studies/ecommerce-geo': '/use-cases/ecommerce',
  '/case-studies/saas-geo': '/use-cases/saas',

  // Old Entity URLs that don't exist anymore
  '/entities/openai-plugins': '/glossary#openai-plugins',
  '/entities/statistical-enhancement': '/glossary#statistical-enhancement',
  
  // Platforms Redirects (removed - handled by platform-redirects.ts)
  // '/platforms/gemini': '/platforms/google-gemini', // Now handled by platform-redirects.ts
  '/platforms/grok': '/platforms/grok-ai',
  '/platforms/google-bard': '/platforms/google-gemini', // Redirect google-bard to google-gemini
  
  // Old tool URLs
  '/tools/seo-analyzer': '/tools/geo-audit',
  '/tools/ai-optimizer': '/tools/content-optimizer',
  
  // Blog posts with timestamps - redirect to clean URLs
  // Pattern: remove timestamp suffix from all blog post URLs
  
  // Fix incorrect industry URLs - redirect to proper format
  '/industries/gaming-real-estate-tech': '/industries/real-estate-tech',
  '/industries/manufacturing-logistics': '/industries/logistics-supply-chain',
  '/industries/transportation-cybersecurity': '/industries/cybersecurity-defense',
  '/industries/media-healthtech': '/industries/healthcare-medical-devices',
  '/industries/energy-fitness-tech': '/industries/fitness-wellness-tech',
  '/industries/manufacturing-customer-service': '/industries/customer-service-support',
  '/industries/real-estate-accounting': '/industries/accounting-finance',
  '/industries/consulting-data-analytics': '/industries/data-analytics-business-intelligence',
  '/industries/pharmaceutical-accounting': '/industries/pharmaceutical-biotech',
  
  // RSS/Feed redirects  
  '/rss.xml': '/feed.xml',
  '/feed': '/feed.xml',
  '/rss': '/feed.xml',
  
  // Missing pages that should redirect
  '/tutorials': '/guide',
  '/getting-started': '/guide',
  '/contact': '/consultation',
  '/seo-vs-geo-complete-guide': '/guide',
  '/entities': '/glossary',
  '/glossary': '/glossary',
};

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
  
  // Handle content redirects
  if (CONTENT_REDIRECTS[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = CONTENT_REDIRECTS[pathname]
    return NextResponse.redirect(url, { status: 301 })
  }

  // Don't redirect blog posts with timestamps - they are valid slugs
  // Removed the newsArticlePattern redirect that was breaking blog posts

  // Handle blog post URLs with timestamps - redirect to clean URLs
  // Pattern: /slug-with-text-1234567890 -> /slug-with-text
  const timestampPattern = /^(\/[a-z0-9-]+)-\d{13}$/
  const match = pathname.match(timestampPattern)
  if (match) {
    const url = request.nextUrl.clone()
    url.pathname = match[1]
    return NextResponse.redirect(url, { status: 301 })
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