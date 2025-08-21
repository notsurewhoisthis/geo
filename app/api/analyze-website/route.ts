import { NextRequest, NextResponse } from 'next/server'

interface ContentAnalysis {
  url: string
  geoScore: number
  metrics: {
    citations: number
    statistics: number
    faqSections: number
    hasSchema: boolean
    headings: {
      h1: number
      h2: number
      h3: number
      total: number
    }
    wordCount: number
    metaDescription: boolean
    title: string
    images: number
    links: {
      internal: number
      external: number
    }
  }
  recommendations: string[]
  aiVisibility: {
    perplexity: number
    chatgpt: number
    claude: number
    gemini: number
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Normalize URL
    const normalizedUrl = url.startsWith('http') ? url : `https://${url}`
    
    // Fetch the website content
    const response = await fetch(normalizedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; GEO-Analyzer/1.0; +https://generative-engine.org)'
      },
      signal: AbortSignal.timeout(10000) // 10 second timeout
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch website: ${response.status}`)
    }

    const html = await response.text()
    
    // Analyze the content
    const analysis = analyzeContent(html, normalizedUrl)
    
    return NextResponse.json(analysis)
  } catch (error) {
    console.error('Website analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze website', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

function analyzeContent(html: string, url: string): ContentAnalysis {
  // Count citations (academic style [1], [2], etc., or <cite> tags)
  const citationPatterns = [
    /\[\d+\]/g,                    // [1], [2], etc.
    /<cite[^>]*>/gi,               // <cite> tags
    /References:/gi,               // References section
    /Bibliography:/gi,             // Bibliography section
    /Sources:/gi                   // Sources section
  ]
  
  let citations = 0
  citationPatterns.forEach(pattern => {
    const matches = html.match(pattern)
    if (matches) citations += matches.length
  })

  // Count statistics (percentages, numbers with context)
  const statPatterns = [
    /\d+\s*%/g,                    // Percentages
    /\$[\d,]+\.?\d*/g,             // Currency
    /\d{1,3}(,\d{3})+/g,           // Large numbers with commas
    /\d+\s*(million|billion|thousand)/gi, // Numbers with units
    /\d+x\s/gi,                    // Multipliers (2x, 10x)
    /\d+\+/g                       // Numbers with plus (100+)
  ]
  
  let statistics = 0
  statPatterns.forEach(pattern => {
    const matches = html.match(pattern)
    if (matches) statistics += matches.length
  })

  // Check for FAQ sections
  const faqPatterns = [
    /frequently asked questions/gi,
    /FAQ/g,
    /<(div|section)[^>]*class="[^"]*faq[^"]*"/gi,
    /Q:\s*<|Question:/gi,
    /A:\s*<|Answer:/gi
  ]
  
  let faqSections = 0
  faqPatterns.forEach(pattern => {
    const matches = html.match(pattern)
    if (matches) faqSections += Math.min(matches.length, 5) // Cap at 5 to avoid over-counting
  })

  // Check for schema markup
  const hasSchema = /<script[^>]*type="application\/ld\+json"[^>]*>/i.test(html)

  // Count headings
  const h1Count = (html.match(/<h1[^>]*>/gi) || []).length
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length
  const h3Count = (html.match(/<h3[^>]*>/gi) || []).length
  const h4Count = (html.match(/<h4[^>]*>/gi) || []).length
  const h5Count = (html.match(/<h5[^>]*>/gi) || []).length
  const h6Count = (html.match(/<h6[^>]*>/gi) || []).length

  // Extract title
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i)
  const title = titleMatch ? titleMatch[1].trim() : ''

  // Check for meta description
  const hasMetaDescription = /<meta[^>]*name="description"[^>]*content="[^"]+"/i.test(html)

  // Count images
  const imageCount = (html.match(/<img[^>]*>/gi) || []).length

  // Count links
  const allLinks = html.match(/<a[^>]*href="([^"]+)"/gi) || []
  let internalLinks = 0
  let externalLinks = 0
  
  allLinks.forEach(link => {
    if (link.includes('http://') || link.includes('https://')) {
      if (link.includes(url.replace(/^https?:\/\//, ''))) {
        internalLinks++
      } else {
        externalLinks++
      }
    } else {
      internalLinks++
    }
  })

  // Estimate word count (remove HTML tags and count words)
  const textContent = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  
  const wordCount = textContent.split(' ').filter(word => word.length > 0).length

  // Calculate GEO Score based on research findings
  let geoScore = 0
  
  // Citations boost (research shows +40.6% visibility)
  if (citations >= 5) geoScore += 30
  else if (citations >= 3) geoScore += 20
  else if (citations >= 1) geoScore += 10
  
  // Statistics boost (research shows +32.7% visibility)
  if (statistics >= 10) geoScore += 25
  else if (statistics >= 5) geoScore += 15
  else if (statistics >= 2) geoScore += 8
  
  // FAQ sections (boost ChatGPT visibility)
  if (faqSections > 0) geoScore += 10
  
  // Schema markup (helps AI understanding)
  if (hasSchema) geoScore += 5
  
  // Content structure
  if (h1Count === 1) geoScore += 5 // Single H1 is good
  if (h2Count >= 3 && h2Count <= 10) geoScore += 5 // Good structure
  if (wordCount >= 1500) geoScore += 10 // Comprehensive content
  else if (wordCount >= 800) geoScore += 5
  
  // Meta optimization
  if (hasMetaDescription) geoScore += 5
  if (title.length > 10 && title.length < 70) geoScore += 5

  // Cap at 100
  geoScore = Math.min(geoScore, 100)

  // Calculate AI platform visibility predictions
  const aiVisibility = {
    perplexity: Math.min(100, geoScore + (citations * 3)), // Perplexity loves citations
    chatgpt: Math.min(100, geoScore + (faqSections * 5)),   // ChatGPT likes Q&A format
    claude: Math.min(100, geoScore + (statistics * 2)),     // Claude appreciates data
    gemini: Math.min(100, geoScore + (hasSchema ? 10 : 0))  // Gemini uses structured data
  }

  // Generate specific recommendations
  const recommendations: string[] = []
  
  if (citations < 3) {
    recommendations.push(`Add ${3 - citations} more citations to authoritative sources for +40% AI visibility`)
  }
  if (statistics < 5) {
    recommendations.push(`Include ${5 - statistics} more statistics or data points for +32% visibility boost`)
  }
  if (faqSections === 0) {
    recommendations.push('Add a FAQ section to improve ChatGPT visibility by up to 35%')
  }
  if (!hasSchema) {
    recommendations.push('Implement schema.org markup for better AI comprehension')
  }
  if (wordCount < 800) {
    recommendations.push(`Increase content length from ${wordCount} to 1500+ words for comprehensive coverage`)
  }
  if (h1Count === 0) {
    recommendations.push('Add a clear H1 heading for better content structure')
  }
  if (!hasMetaDescription) {
    recommendations.push('Add a meta description for better search snippets')
  }

  return {
    url,
    geoScore,
    metrics: {
      citations,
      statistics,
      faqSections,
      hasSchema,
      headings: {
        h1: h1Count,
        h2: h2Count,
        h3: h3Count,
        total: h1Count + h2Count + h3Count + h4Count + h5Count + h6Count
      },
      wordCount,
      metaDescription: hasMetaDescription,
      title,
      images: imageCount,
      links: {
        internal: internalLinks,
        external: externalLinks
      }
    },
    recommendations,
    aiVisibility
  }
}