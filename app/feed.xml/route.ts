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
  metrics: {
    readingTime: number
    wordCount: number
  }
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function generateRssFeed(posts: BlogPost[]): string {
  const baseUrl = 'https://generative-engine.org'
  const currentDate = new Date().toUTCString()
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>GEO - Generative Engine Optimization</title>
    <description>Master the art of Generative Engine Optimization with cutting-edge strategies and insights for AI-powered search</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>3600</ttl>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <copyright>Copyright ${new Date().getFullYear()} GEO Platform</copyright>
    <managingEditor>team@generative-engine.org (GEO Content Team)</managingEditor>
    <webMaster>tech@generative-engine.org (GEO Tech Team)</webMaster>
    <category>Technology</category>
    <category>SEO</category>
    <category>AI</category>
    <category>Marketing</category>
    <generator>Next.js RSS Generator</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>GEO - Generative Engine Optimization</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    
    ${posts.map(post => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.description)}</description>
      <link>${baseUrl}/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(post.author.name)}</dc:creator>
      ${post.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
      <content:encoded><![CDATA[
        <h2>Summary</h2>
        <p>${escapeXml(post.excerpt || post.description)}</p>
        
        <h2>Key Topics</h2>
        <ul>
          ${post.keywords.slice(0, 5).map(keyword => `<li>${escapeXml(keyword)}</li>`).join('\n          ')}
        </ul>
        
        <h2>Article Content</h2>
        ${post.content}
        
        <hr />
        <p><strong>Reading Time:</strong> ${post.metrics.readingTime} minutes</p>
        <p><strong>Word Count:</strong> ${post.metrics.wordCount.toLocaleString()} words</p>
        <p><strong>Author:</strong> ${escapeXml(post.author.name)}</p>
        <p><em>${escapeXml(post.author.bio)}</em></p>
        
        <p>Read the full article at: <a href="${baseUrl}/${post.slug}">${baseUrl}/${post.slug}</a></p>
      ]]></content:encoded>
      <enclosure url="${baseUrl}/api/og?title=${encodeURIComponent(post.title)}" type="image/png" length="0" />
    </item>`).join('\n')}
  </channel>
</rss>`
}

export async function GET() {
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
    
    // Generate RSS feed
    const rssFeed = generateRssFeed(posts.slice(0, 20)) // Latest 20 posts
    
    return new NextResponse(rssFeed, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new NextResponse('Error generating RSS feed', { status: 500 })
  }
}

// Also support /rss.xml path
export const dynamic = 'force-dynamic'