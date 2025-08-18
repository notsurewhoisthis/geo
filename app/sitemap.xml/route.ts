import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
    return c;
  });
}

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
  
  // Get all programmatic industries pages
  let industryPages: Array<{slug: string}> = []
  try {
    const industriesPath = path.join(process.cwd(), 'public', 'data', 'industries.json')
    if (fs.existsSync(industriesPath)) {
      const industriesContent = fs.readFileSync(industriesPath, 'utf8')
      const industries = JSON.parse(industriesContent)
      industryPages = industries.map((industry: any) => ({ slug: industry.slug }))
    }
  } catch (error) {
    console.error('Error reading industries data:', error)
  }

  // Get all programmatic AI platform pages  
  let platformPages: Array<{slug: string}> = []
  try {
    const platformsPath = path.join(process.cwd(), 'public', 'data', 'platforms.json')
    if (fs.existsSync(platformsPath)) {
      const platformsContent = fs.readFileSync(platformsPath, 'utf8')
      const platforms = JSON.parse(platformsContent)
      platformPages = platforms.map((platform: any) => ({ slug: platform.slug }))
    }
  } catch (error) {
    console.error('Error reading platforms data:', error)
  }

  // Get all programmatic comparison pages
  let comparisonPages: Array<{slug: string}> = []
  try {
    // First try the new platform-comparisons.ts file
    const { getAllComparisons } = await import('@/app/lib/platform-comparisons')
    const allComparisons = getAllComparisons()
    if (allComparisons && allComparisons.length > 0) {
      comparisonPages = allComparisons.map((comp: any) => ({ slug: comp.slug }))
    } else {
      // Fallback to old comparisons.json if it exists
      const comparisonsPath = path.join(process.cwd(), 'public', 'data', 'comparisons.json')
      if (fs.existsSync(comparisonsPath)) {
        const comparisonsContent = fs.readFileSync(comparisonsPath, 'utf8')
        const comparisons = JSON.parse(comparisonsContent)
        comparisonPages = comparisons.map((comparison: any) => ({ slug: comparison.slug }))
      }
    }
  } catch (error) {
    console.error('Error reading comparisons data:', error)
  }
  
  // Dynamically discover entity pages
  let entityPages: string[] = []
  const entitiesPath = path.join(process.cwd(), 'app', 'entities')
  try {
    if (fs.existsSync(entitiesPath)) {
      const entities = fs.readdirSync(entitiesPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .filter(dirent => fs.existsSync(path.join(entitiesPath, dirent.name, 'page.tsx')))
        .map(dirent => dirent.name)
      entityPages = entities
    }
  } catch (error) {
    console.error('Error reading entity pages:', error)
  }
  
  // Static pages with proper priority and update frequency
  const staticPages = [
    // Core pages
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/blog', priority: '0.9', changefreq: 'daily' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/resources', priority: '0.8', changefreq: 'weekly' },
    { path: '/glossary', priority: '0.7', changefreq: 'weekly' },
    { path: '/guide', priority: '0.8', changefreq: 'weekly' },
    { path: '/tech-view', priority: '0.6', changefreq: 'monthly' },
    
    // Tools pages (high priority for user engagement)
    { path: '/tools', priority: '0.8', changefreq: 'weekly' },
    { path: '/tools/visibility-tracker', priority: '0.9', changefreq: 'weekly' },
    { path: '/tools/content-optimizer', priority: '0.8', changefreq: 'weekly' },
    { path: '/tools/geo-audit', priority: '0.8', changefreq: 'weekly' },
    { path: '/tools/keyword-research', priority: '0.8', changefreq: 'weekly' },
    
    // Programmatic page hubs
    { path: '/industries', priority: '0.8', changefreq: 'weekly' },
    { path: '/platforms', priority: '0.8', changefreq: 'weekly' },
    { path: '/compare', priority: '0.7', changefreq: 'weekly' },
    
    // Entity pages (important for knowledge graph)
    { path: '/entities', priority: '0.7', changefreq: 'weekly' },
    { path: '/entities/generative-engine-optimization', priority: '0.9', changefreq: 'weekly' },
    { path: '/entities/chatgpt-optimization', priority: '0.8', changefreq: 'weekly' },
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages.map(page => `
  <url>
    <loc>${escapeXml(baseUrl + page.path)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${entityPages
    .filter(entity => !['generative-engine-optimization', 'chatgpt-optimization'].includes(entity))
    .map(entity => `
  <url>
    <loc>${escapeXml(baseUrl + '/entities/' + entity)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${industryPages.map(industry => `
  <url>
    <loc>${escapeXml(baseUrl + '/industries/' + industry.slug)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${escapeXml(baseUrl + '/api/og?title=' + encodeURIComponent('GEO for ' + industry.slug) + '&type=industry')}</image:loc>
      <image:caption>GEO Industry Guide Thumbnail</image:caption>
    </image:image>
  </url>`).join('')}
  ${platformPages.map(platform => `
  <url>
    <loc>${escapeXml(baseUrl + '/platforms/' + platform.slug)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${escapeXml(baseUrl + '/api/og?title=' + encodeURIComponent(platform.slug + ' Optimization Guide') + '&type=platform')}</image:loc>
      <image:caption>AI Platform Optimization Guide</image:caption>
    </image:image>
  </url>`).join('')}
  ${comparisonPages.map(comparison => `
  <url>
    <loc>${escapeXml(baseUrl + '/compare/' + comparison.slug)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <image:image>
      <image:loc>${escapeXml(baseUrl + '/api/og?title=' + encodeURIComponent(comparison.slug) + '&type=comparison')}</image:loc>
      <image:caption>GEO Comparison Guide</image:caption>
    </image:image>
  </url>`).join('')}
  ${blogPosts.map(post => `
  <url>
    <loc>${escapeXml(baseUrl + '/' + post.slug)}</loc>
    <lastmod>${new Date(post.updatedAt || post.publishedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${escapeXml(baseUrl + '/api/og?title=' + encodeURIComponent(post.slug))}</image:loc>
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