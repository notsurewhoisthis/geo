import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const baseUrl = 'https://generative-engine.org'
  
  // Get all blog posts from public/blog-data
  const blogDataPath = path.join(process.cwd(), 'public', 'blog-data')
  let blogPosts: Array<{slug: string, updatedAt?: string, publishedAt: string}> = []
  
  try {
    if (fs.existsSync(blogDataPath)) {
      const files = fs.readdirSync(blogDataPath).filter(file => file.endsWith('.json'))
      
      blogPosts = files.map(file => {
        const content = fs.readFileSync(path.join(blogDataPath, file), 'utf8')
        const post = JSON.parse(content)
        return {
          slug: post.slug,
          updatedAt: post.updatedAt,
          publishedAt: post.publishedAt
        }
      })
    }
  } catch (error) {
    console.error('Error reading blog posts:', error)
  }
  
  const staticPages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/resources', priority: '0.8', changefreq: 'weekly' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/glossary', priority: '0.7', changefreq: 'weekly' },
    { path: '/tools', priority: '0.7', changefreq: 'weekly' },
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    <lastmod>${new Date(post.updatedAt || post.publishedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${baseUrl}/api/og?title=${encodeURIComponent(post.slug)}</image:loc>
      <image:caption>GEO Article Thumbnail</image:caption>
    </image:image>
  </url>`).join('')}
</urlset>`
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}