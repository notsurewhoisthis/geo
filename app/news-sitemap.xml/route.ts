import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt: string
  author: {
    name: string
    bio: string
  }
  tags: string[]
  keywords: string[]
}

export async function GET() {
  const baseUrl = 'https://generative-engine.org'
  
  try {
    const blogDataPath = path.join(process.cwd(), 'public', 'blog-data')
    
    if (!fs.existsSync(blogDataPath)) {
      return new NextResponse('No blog posts found', { status: 404 })
    }
    
    const files = fs.readdirSync(blogDataPath).filter(file => file.endsWith('.json'))
    
    const posts = files.map(file => {
      const content = fs.readFileSync(path.join(blogDataPath, file), 'utf8')
      return JSON.parse(content) as BlogPost
    })
    
    // Sort by date, newest first
    posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    
    // Filter posts from last 2 days for news sitemap
    const twoDaysAgo = new Date()
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2)
    
    const recentPosts = posts.filter(post => 
      new Date(post.publishedAt) >= twoDaysAgo
    )
    
    const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${posts.slice(0, 1000).map(post => {
    const pubDate = new Date(post.publishedAt)
    const isRecent = pubDate >= twoDaysAgo
    
    return `
  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    ${isRecent ? `
    <news:news>
      <news:publication>
        <news:name>GEO Platform</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate.toISOString()}</news:publication_date>
      <news:title>${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
      <news:keywords>${post.keywords.slice(0, 10).join(', ').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:keywords>
      <news:genres>Blog, Opinion</news:genres>
    </news:news>` : ''}
    <lastmod>${new Date(post.updatedAt || post.publishedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  }).join('')}
</urlset>`
    
    return new NextResponse(newsSitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Error generating news sitemap:', error)
    return new NextResponse('Error generating news sitemap', { status: 500 })
  }
}

export const dynamic = 'force-dynamic'