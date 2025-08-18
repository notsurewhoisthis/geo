import { NextResponse } from 'next/server'

// Free keyword research API that combines multiple data sources
export async function POST(request: Request) {
  try {
    const { keyword } = await request.json()
    
    if (!keyword) {
      return NextResponse.json({ error: 'Keyword is required' }, { status: 400 })
    }

    // Collect data from multiple free sources
    const results = await Promise.allSettled([
      getGoogleSuggestions(keyword),
      getWikipediaTopics(keyword),
      getRedditQuestions(keyword),
      generateAIVariations(keyword)
    ])

    // Combine all successful results
    const combinedData = {
      googleSuggestions: results[0].status === 'fulfilled' ? results[0].value : [],
      wikipediaTopics: results[1].status === 'fulfilled' ? results[1].value : [],
      redditQuestions: results[2].status === 'fulfilled' ? results[2].value : [],
      aiVariations: results[3].status === 'fulfilled' ? results[3].value : []
    }

    // Process and format keywords
    const keywords = processKeywords(combinedData, keyword)

    return NextResponse.json({ keywords })
  } catch (error) {
    console.error('Keyword research error:', error)
    return NextResponse.json({ error: 'Failed to fetch keywords' }, { status: 500 })
  }
}

// Google Autocomplete Suggestions (FREE)
async function getGoogleSuggestions(keyword: string) {
  try {
    const response = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(keyword + ' ')}`
    )
    const data = await response.json()
    return data[1] || [] // Returns array of suggestions
  } catch (error) {
    console.error('Google suggestions error:', error)
    return []
  }
}

// Wikipedia Related Topics (FREE)
async function getWikipediaTopics(keyword: string) {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(keyword)}&limit=5&format=json&origin=*`
    )
    const data = await response.json()
    return data[1] || [] // Returns array of related topics
  } catch (error) {
    console.error('Wikipedia error:', error)
    return []
  }
}

// Reddit Questions (FREE with rate limits)
async function getRedditQuestions(keyword: string) {
  try {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${encodeURIComponent(keyword)}&sort=relevance&limit=10`,
      {
        headers: {
          'User-Agent': 'GEO-Platform/1.0'
        }
      }
    )
    const data = await response.json()
    
    // Extract questions from Reddit posts
    const questions = data.data?.children
      ?.map((post: any) => post.data.title)
      .filter((title: string) => 
        title.includes('?') || 
        title.toLowerCase().startsWith('how') ||
        title.toLowerCase().startsWith('what') ||
        title.toLowerCase().startsWith('why')
      )
      .slice(0, 5) || []
    
    return questions
  } catch (error) {
    console.error('Reddit error:', error)
    return []
  }
}

// Generate AI-optimized variations
function generateAIVariations(keyword: string) {
  // These are patterns that work well for AI platforms
  const patterns = [
    `how to ${keyword} for beginners`,
    `what is ${keyword} and how does it work`,
    `${keyword} best practices 2024`,
    `${keyword} vs alternatives comparison`,
    `step by step ${keyword} guide`,
    `${keyword} tips and tricks`,
    `common ${keyword} mistakes to avoid`,
    `${keyword} for ChatGPT optimization`,
    `${keyword} case studies and examples`,
    `why ${keyword} is important`,
    `${keyword} tools and resources`,
    `${keyword} tutorial with examples`,
    `advanced ${keyword} techniques`,
    `${keyword} frequently asked questions`,
    `${keyword} pros and cons`
  ]
  
  return patterns.map(pattern => 
    pattern.replace('${keyword}', keyword)
  ).slice(0, 8)
}

// Process and combine all keywords
function processKeywords(data: any, seedKeyword: string) {
  const allKeywords = new Set<string>()
  
  // Add Google suggestions
  data.googleSuggestions.forEach((s: string) => allKeywords.add(s))
  
  // Add Wikipedia topics as context
  data.wikipediaTopics.forEach((t: string) => {
    allKeywords.add(`${seedKeyword} ${t}`)
    allKeywords.add(`${t} ${seedKeyword}`)
  })
  
  // Add Reddit questions
  data.redditQuestions.forEach((q: string) => allKeywords.add(q))
  
  // Add AI variations
  data.aiVariations.forEach((v: string) => allKeywords.add(v))
  
  // Convert to array and format
  return Array.from(allKeywords)
    .filter(k => k.length > 0 && k.length < 200) // Filter out empty or too long
    .slice(0, 20) // Limit to 20 keywords
    .map(keyword => ({
      keyword,
      searchVolume: estimateSearchVolume(keyword),
      difficulty: estimateDifficulty(keyword),
      intent: detectIntent(keyword),
      aiOptimized: isAIOptimized(keyword),
      source: determineSource(keyword, data)
    }))
}

// Estimate search volume based on keyword characteristics
function estimateSearchVolume(keyword: string): string {
  const length = keyword.split(' ').length
  
  if (length <= 2) return '10K+' // Short keywords usually have high volume
  if (length <= 4) return '1K-5K'
  if (length <= 6) return '500-1K'
  return '100-500' // Long-tail keywords
}

// Estimate difficulty based on keyword type
function estimateDifficulty(keyword: string): string {
  const competitiveTerms = ['best', 'top', 'review', 'vs', 'comparison']
  const easyTerms = ['how to', 'what is', 'tutorial', 'guide', 'tips']
  
  const lower = keyword.toLowerCase()
  
  if (competitiveTerms.some(term => lower.includes(term))) return 'High'
  if (easyTerms.some(term => lower.includes(term))) return 'Low'
  return 'Medium'
}

// Detect search intent
function detectIntent(keyword: string): string {
  const lower = keyword.toLowerCase()
  
  if (lower.includes('how') || lower.includes('tutorial') || lower.includes('guide')) {
    return 'Tutorial'
  }
  if (lower.includes('what') || lower.includes('why') || lower.includes('when')) {
    return 'Informational'
  }
  if (lower.includes('vs') || lower.includes('comparison') || lower.includes('alternative')) {
    return 'Comparative'
  }
  if (lower.includes('best') || lower.includes('top') || lower.includes('review')) {
    return 'Commercial'
  }
  if (lower.includes('case study') || lower.includes('example')) {
    return 'Research'
  }
  return 'General'
}

// Check if keyword is AI-optimized
function isAIOptimized(keyword: string): boolean {
  const aiTerms = ['chatgpt', 'claude', 'ai', 'llm', 'generative', 'perplexity', 'gpt']
  const conversationalPatterns = ['how to', 'what is', 'why does', 'can you', 'explain']
  
  const lower = keyword.toLowerCase()
  
  // Check for AI-specific terms
  if (aiTerms.some(term => lower.includes(term))) return true
  
  // Check for conversational patterns
  if (conversationalPatterns.some(pattern => lower.startsWith(pattern))) return true
  
  // Long-tail keywords (5+ words) are generally better for AI
  if (keyword.split(' ').length >= 5) return true
  
  return false
}

// Determine the source of the keyword
function determineSource(keyword: string, data: any): string {
  if (data.googleSuggestions.includes(keyword)) return 'Google'
  if (data.redditQuestions.includes(keyword)) return 'Reddit'
  if (data.wikipediaTopics.some((t: string) => keyword.includes(t))) return 'Wikipedia'
  if (data.aiVariations.includes(keyword)) return 'AI Pattern'
  return 'Combined'
}