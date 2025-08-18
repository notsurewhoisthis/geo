import { NextResponse } from 'next/server'

// Real GEO Audit API that analyzes actual content
export async function POST(request: Request) {
  try {
    const { url } = await request.json()
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Fetch the content from the URL
    const content = await fetchPageContent(url)
    
    // Analyze the content for GEO factors
    const analysis = analyzeContent(content)
    
    // Calculate scores and generate recommendations
    const results = generateAuditResults(analysis)
    
    return NextResponse.json(results)
  } catch (error) {
    console.error('GEO Audit error:', error)
    return NextResponse.json({ 
      error: 'Failed to analyze URL',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Fetch and parse HTML content
async function fetchPageContent(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'GEO-Audit-Tool/1.0'
      }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status}`)
    }
    
    const html = await response.text()
    
    return {
      html,
      url,
      contentLength: html.length
    }
  } catch (error) {
    throw new Error(`Could not fetch URL: ${error}`)
  }
}

// Analyze content for GEO factors
function analyzeContent(content: { html: string, url: string, contentLength: number }) {
  const { html } = content
  
  // Extract text content (remove HTML tags)
  const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  const wordCount = textContent.split(' ').filter(word => word.length > 0).length
  
  // Analyze heading structure
  const h1Count = (html.match(/<h1[^>]*>/gi) || []).length
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length
  const h3Count = (html.match(/<h3[^>]*>/gi) || []).length
  const totalHeadings = h1Count + h2Count + h3Count
  
  // Check for FAQ sections
  const hasFAQ = /FAQ|frequently asked|common questions/i.test(html)
  const hasQAFormat = (html.match(/\?<\/h[2-6]>/gi) || []).length > 2
  
  // Analyze semantic elements
  const hasSchema = html.includes('schema.org') || html.includes('application/ld+json')
  const hasArticleSchema = html.includes('"@type":"Article"') || html.includes('"@type":"BlogPosting"')
  const hasFAQSchema = html.includes('"@type":"FAQPage"') || html.includes('"@type":"Question"')
  
  // Check for citations and statistics
  const statisticsPattern = /\d+(\.\d+)?%|\d{1,3}(,\d{3})*(\.\d+)?|\$\d+|€\d+|£\d+/g
  const statisticsCount = (html.match(statisticsPattern) || []).length
  const hasCitations = html.includes('<cite') || html.includes('citation') || /\[\d+\]/.test(html)
  const hasQuotes = html.includes('<blockquote') || html.includes('<q') || /"[^"]{50,}"/.test(html)
  
  // Check for lists and structure
  const orderedLists = (html.match(/<ol[^>]*>/gi) || []).length
  const unorderedLists = (html.match(/<ul[^>]*>/gi) || []).length
  const totalLists = orderedLists + unorderedLists
  
  // Check meta tags
  const hasMetaDescription = /<meta[^>]*name=["']description["'][^>]*>/i.test(html)
  const hasOpenGraph = /<meta[^>]*property=["']og:/i.test(html)
  const hasTwitterCard = /<meta[^>]*name=["']twitter:/i.test(html)
  
  // Check for conversational keywords
  const conversationalPatterns = [
    /how to/gi, /what is/gi, /why does/gi, /when should/gi, 
    /can you/gi, /explain/gi, /guide to/gi, /tips for/gi
  ]
  const conversationalCount = conversationalPatterns.reduce((count, pattern) => 
    count + (html.match(pattern) || []).length, 0
  )
  
  // Check content depth
  const hasTableOfContents = /table of contents|toc|contents/i.test(html)
  const hasConclusion = /<h[2-6][^>]*>.*conclusion/i.test(html)
  const hasIntroduction = /<h[2-6][^>]*>.*introduction|overview/i.test(html)
  
  // Check for examples and case studies
  const hasExamples = /example|case study|for instance|such as/i.test(html)
  const codeBlocks = (html.match(/<code[^>]*>/gi) || []).length
  
  // Entity recognition (simplified)
  const hasDefinitions = /is defined as|refers to|means that|is a type of/i.test(html)
  const hasBoldKeywords = (html.match(/<strong[^>]*>|<b[^>]*>/gi) || []).length
  
  return {
    wordCount,
    contentLength: content.contentLength,
    structure: {
      h1Count,
      h2Count,
      h3Count,
      totalHeadings,
      hasFAQ,
      hasQAFormat,
      totalLists,
      hasTableOfContents,
      hasConclusion,
      hasIntroduction
    },
    semantic: {
      hasSchema,
      hasArticleSchema,
      hasFAQSchema,
      hasDefinitions,
      hasBoldKeywords,
      conversationalCount
    },
    citations: {
      statisticsCount,
      hasCitations,
      hasQuotes,
      hasExamples,
      codeBlocks
    },
    technical: {
      hasMetaDescription,
      hasOpenGraph,
      hasTwitterCard,
      orderedLists,
      unorderedLists
    }
  }
}

// Generate audit results with scores and recommendations
function generateAuditResults(analysis: any) {
  const results = []
  let totalScore = 0
  
  // Content Structure Score
  const structureScore = calculateStructureScore(analysis.structure, analysis.wordCount)
  results.push({
    score: structureScore,
    category: 'Content Structure',
    issues: getStructureIssues(analysis.structure, analysis.wordCount),
    recommendations: getStructureRecommendations(analysis.structure, analysis.wordCount),
    details: {
      h1Count: analysis.structure.h1Count,
      h2Count: analysis.structure.h2Count,
      totalHeadings: analysis.structure.totalHeadings,
      wordCount: analysis.wordCount,
      hasFAQ: analysis.structure.hasFAQ
    }
  })
  totalScore += structureScore
  
  // Semantic Clarity Score
  const semanticScore = calculateSemanticScore(analysis.semantic)
  results.push({
    score: semanticScore,
    category: 'Semantic Clarity',
    issues: getSemanticIssues(analysis.semantic),
    recommendations: getSemanticRecommendations(analysis.semantic),
    details: {
      hasSchema: analysis.semantic.hasSchema,
      conversationalKeywords: analysis.semantic.conversationalCount,
      definitions: analysis.semantic.hasDefinitions
    }
  })
  totalScore += semanticScore
  
  // AI Citations Score
  const citationsScore = calculateCitationsScore(analysis.citations)
  results.push({
    score: citationsScore,
    category: 'AI Citations',
    issues: getCitationIssues(analysis.citations),
    recommendations: getCitationRecommendations(analysis.citations),
    details: {
      statistics: analysis.citations.statisticsCount,
      quotes: analysis.citations.hasQuotes,
      examples: analysis.citations.hasExamples
    }
  })
  totalScore += citationsScore
  
  // Content Depth Score
  const depthScore = calculateDepthScore(analysis)
  results.push({
    score: depthScore,
    category: 'Content Depth',
    issues: getDepthIssues(analysis),
    recommendations: getDepthRecommendations(analysis),
    details: {
      wordCount: analysis.wordCount,
      sections: analysis.structure.totalHeadings,
      hasTableOfContents: analysis.structure.hasTableOfContents
    }
  })
  totalScore += depthScore
  
  return {
    overallScore: Math.round(totalScore / 4),
    results,
    summary: generateSummary(totalScore / 4),
    timestamp: new Date().toISOString()
  }
}

// Calculate structure score
function calculateStructureScore(structure: any, wordCount: number): number {
  let score = 100
  
  // H1 tag checks
  if (structure.h1Count === 0) score -= 20
  else if (structure.h1Count > 1) score -= 10
  
  // Heading hierarchy
  if (structure.totalHeadings < Math.floor(wordCount / 300)) score -= 15
  if (structure.h2Count === 0) score -= 10
  
  // FAQ section bonus
  if (structure.hasFAQ || structure.hasQAFormat) score += 10
  
  // Lists bonus
  if (structure.totalLists > 0) score += 5
  
  // Table of contents bonus
  if (structure.hasTableOfContents) score += 5
  
  return Math.max(0, Math.min(100, score))
}

// Calculate semantic score
function calculateSemanticScore(semantic: any): number {
  let score = 60 // Start lower for semantic
  
  if (semantic.hasSchema) score += 20
  if (semantic.hasArticleSchema) score += 10
  if (semantic.hasFAQSchema) score += 10
  if (semantic.conversationalCount > 5) score += 15
  if (semantic.hasDefinitions) score += 10
  if (semantic.hasBoldKeywords > 5) score += 5
  
  return Math.max(0, Math.min(100, score))
}

// Calculate citations score
function calculateCitationsScore(citations: any): number {
  let score = 50 // Start at 50 for citations
  
  if (citations.statisticsCount > 3) score += 20
  else if (citations.statisticsCount > 0) score += 10
  
  if (citations.hasCitations) score += 15
  if (citations.hasQuotes) score += 15
  if (citations.hasExamples) score += 10
  if (citations.codeBlocks > 0) score += 5
  
  return Math.max(0, Math.min(100, score))
}

// Calculate depth score
function calculateDepthScore(analysis: any): number {
  let score = 70
  
  // Word count scoring
  if (analysis.wordCount > 2000) score += 20
  else if (analysis.wordCount > 1000) score += 10
  else if (analysis.wordCount < 500) score -= 20
  
  // Structure bonuses
  if (analysis.structure.hasIntroduction) score += 5
  if (analysis.structure.hasConclusion) score += 5
  if (analysis.structure.totalHeadings > 5) score += 10
  
  return Math.max(0, Math.min(100, score))
}

// Get structure issues
function getStructureIssues(structure: any, wordCount: number): string[] {
  const issues = []
  
  if (structure.h1Count === 0) issues.push('Missing H1 tag')
  if (structure.h1Count > 1) issues.push('Multiple H1 tags found')
  if (structure.h2Count === 0) issues.push('No H2 subheadings')
  if (!structure.hasFAQ && !structure.hasQAFormat) issues.push('No FAQ section detected')
  if (structure.totalHeadings < Math.floor(wordCount / 300)) issues.push('Insufficient heading structure')
  if (structure.totalLists === 0) issues.push('No lists found for better readability')
  
  return issues
}

// Get structure recommendations
function getStructureRecommendations(structure: any, wordCount: number): string[] {
  const recs = []
  
  if (structure.h1Count !== 1) recs.push('Use exactly one H1 tag with your main keyword')
  if (structure.h2Count < 3) recs.push('Add more H2 subheadings to break up content')
  if (!structure.hasFAQ) recs.push('Add an FAQ section to address common questions')
  if (structure.totalLists < 2) recs.push('Use numbered or bulleted lists for better scanability')
  if (!structure.hasTableOfContents && wordCount > 1500) recs.push('Add a table of contents for long content')
  
  return recs.length > 0 ? recs : ['Excellent content structure! Maintain current approach']
}

// Get semantic issues
function getSemanticIssues(semantic: any): string[] {
  const issues = []
  
  if (!semantic.hasSchema) issues.push('No schema markup detected')
  if (!semantic.hasArticleSchema && !semantic.hasFAQSchema) issues.push('Missing specific schema types')
  if (semantic.conversationalCount < 3) issues.push('Limited conversational keywords')
  if (!semantic.hasDefinitions) issues.push('No clear entity definitions found')
  
  return issues
}

// Get semantic recommendations
function getSemanticRecommendations(semantic: any): string[] {
  const recs = []
  
  if (!semantic.hasSchema) recs.push('Add schema.org structured data markup')
  if (!semantic.hasArticleSchema) recs.push('Implement Article or BlogPosting schema')
  if (semantic.conversationalCount < 5) recs.push('Include more conversational phrases (how to, what is, why does)')
  if (!semantic.hasDefinitions) recs.push('Define key terms and entities clearly in the content')
  if (semantic.hasBoldKeywords < 5) recs.push('Bold important keywords and concepts')
  
  return recs.length > 0 ? recs : ['Good semantic optimization! Consider adding more structured data']
}

// Get citation issues
function getCitationIssues(citations: any): string[] {
  const issues = []
  
  if (citations.statisticsCount === 0) issues.push('No statistics or data points found')
  if (!citations.hasCitations) issues.push('No citations or references detected')
  if (!citations.hasQuotes) issues.push('No quotes from authorities')
  if (!citations.hasExamples) issues.push('Lacking concrete examples')
  
  return issues
}

// Get citation recommendations
function getCitationRecommendations(citations: any): string[] {
  const recs = []
  
  if (citations.statisticsCount < 3) recs.push('Include 3-5 specific statistics with sources')
  if (!citations.hasCitations) recs.push('Add citations to authoritative sources')
  if (!citations.hasQuotes) recs.push('Include expert quotes to build authority')
  if (!citations.hasExamples) recs.push('Add real-world examples and case studies')
  
  return recs.length > 0 ? recs : ['Strong citation profile! AI platforms will likely reference this content']
}

// Get depth issues
function getDepthIssues(analysis: any): string[] {
  const issues = []
  
  if (analysis.wordCount < 500) issues.push('Content too short for comprehensive coverage')
  if (analysis.wordCount < 1000) issues.push('Limited content depth')
  if (!analysis.structure.hasIntroduction) issues.push('Missing clear introduction')
  if (!analysis.structure.hasConclusion) issues.push('No conclusion section')
  
  return issues
}

// Get depth recommendations
function getDepthRecommendations(analysis: any): string[] {
  const recs = []
  
  if (analysis.wordCount < 1500) recs.push('Expand content to 1500+ words for better coverage')
  if (!analysis.structure.hasIntroduction) recs.push('Add a clear introduction section')
  if (!analysis.structure.hasConclusion) recs.push('Include a conclusion summarizing key points')
  if (analysis.structure.totalHeadings < 5) recs.push('Add more sections for comprehensive coverage')
  
  return recs.length > 0 ? recs : ['Excellent content depth! Very comprehensive coverage']
}

// Generate summary
function generateSummary(overallScore: number): string {
  if (overallScore >= 80) {
    return 'Excellent GEO optimization! Your content is well-optimized for AI search engines and likely to be cited frequently.'
  } else if (overallScore >= 60) {
    return 'Good foundation with room for improvement. Focus on the recommended areas to boost AI visibility.'
  } else if (overallScore >= 40) {
    return 'Moderate optimization level. Significant improvements needed in multiple areas for better AI performance.'
  } else {
    return 'Content needs substantial optimization for AI platforms. Start with structural improvements and semantic clarity.'
  }
}