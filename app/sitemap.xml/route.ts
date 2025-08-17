import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const baseUrl = 'https://generative-engine.org'
  
  // Get all blog posts from public/blog-data
  const blogDataPath = path.join(process.cwd(), 'public', 'blog-data')
  let blogPosts: string[] = []
  
  try {
    if (fs.existsSync(blogDataPath)) {
      blogPosts = fs.readdirSync(blogDataPath)
        .filter(file => file.endsWith('.json'))
        .map(file => file.replace('.json', ''))
    }
  } catch (error) {
    console.error('Error reading blog posts:', error)
  }
  
  const staticPages = [
    '',
    '/blog',
    '/resources',
    '/about',
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${blogPosts.map(slug => `
  <url>
    <loc>${baseUrl}/${slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}