import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCorrectPlatformSlug } from '@/app/lib/platform-redirects'

// SEO and GEO Redirects
const CONTENT_REDIRECTS: { [key: string]: string } = {
  // Blog and Content Redirects
  '/blog/chatgpt-optimization-guide': '/tutorials/chatgpt-optimization',
  '/blog/seo-vs-geo-complete-guide': '/tutorials/seo-vs-geo',

  // Case Studies Redirects
  '/case-studies/b2b-geo': '/use-cases/b2b',
  '/case-studies/content-geo': '/use-cases/content',
  '/case-studies/ecommerce-geo': '/use-cases/ecommerce',
  '/case-studies/saas-geo': '/use-cases/saas',

  // Entities Redirects
  '/entities/ai-citations': '/glossary/ai-citations',
  '/entities/ai-seo': '/glossary/ai-seo',
  '/entities/authority-signals': '/glossary/authority-signals',
  '/entities/bing-chat-optimization': '/tutorials/bing-chat-optimization',
  '/entities/content-structuring': '/tutorials/content-structuring',
  '/entities/gpt-4-optimization': '/tutorials/gpt-4-optimization',
  '/entities/openai-plugins': '/glossary/openai-plugins',
  '/entities/prompt-engineering': '/tutorials/prompt-engineering',
  '/entities/rag-optimization': '/tutorials/rag-optimization',
  '/entities/semantic-search-optimization': '/tutorials/semantic-search-optimization',
  '/entities/statistical-enhancement': '/glossary/statistical-enhancement',
  '/entities/vector-embeddings': '/glossary/vector-embeddings',

  // Platforms Redirects
  '/platforms/gemini': '/platforms/google-gemini',
  '/platforms/grok': '/platforms/grok-ai',
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