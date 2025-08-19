import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Use the actual domain from the request or fallback to configured domain
  const host = request.headers.get('host')
  const baseUrl = host?.includes('generative-engine.org') 
    ? 'https://generative-engine.org'
    : process.env.NEXT_PUBLIC_SITE_URL || 
      'https://generative-engine.org';

  const robotsTxt = `# Generative Engine Optimization Robots.txt
# Allow all crawlers

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/news-sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Specific rules for AI crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}