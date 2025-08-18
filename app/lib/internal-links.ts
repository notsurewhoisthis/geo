// Internal link enhancement for better navigation and SEO
export interface InternalLink {
  keyword: string
  href: string
  title?: string
}

// Define internal link mappings for key terms
export const internalLinks: InternalLink[] = [
  // Entity Pages - High Priority
  { keyword: 'generative engine optimization', href: '/entities/generative-engine-optimization', title: 'GEO Complete Guide' },
  { keyword: 'ChatGPT optimization', href: '/entities/chatgpt-optimization', title: 'ChatGPT Optimization Guide' },
  { keyword: 'Claude optimization', href: '/entities/claude-optimization', title: 'Claude AI Optimization' },
  { keyword: 'Perplexity optimization', href: '/entities/perplexity-optimization', title: 'Perplexity Search Optimization' },
  { keyword: 'LLM optimization', href: '/entities/llm-optimization', title: 'Large Language Model Optimization' },
  { keyword: 'RAG optimization', href: '/entities/rag-optimization', title: 'RAG System Optimization' },
  
  // Tools - Action Pages
  { keyword: 'visibility tracker', href: '/tools/visibility-tracker', title: 'GEO Visibility Tracker Tool' },
  { keyword: 'geo audit', href: '/tools/geo-audit', title: 'GEO Audit Tool' },
  { keyword: 'content optimizer', href: '/tools/content-optimizer', title: 'AI Content Optimizer' },
  { keyword: 'check visibility', href: '/tools/visibility-tracker', title: 'Check AI Visibility' },
  { keyword: 'analyze website', href: '/tools/geo-audit', title: 'Analyze Website for GEO' },
  
  // GEO Techniques Topic Silo
  { keyword: 'cite sources', href: '/glossary#cite-sources', title: 'Citation Optimization (+40.6%)' },
  { keyword: 'add statistics', href: '/glossary#statistics-inclusion', title: 'Statistical Enhancement (+32.7%)' },
  { keyword: 'include quotes', href: '/glossary#expert-quotes', title: 'Expert Quote Integration' },
  { keyword: 'authority signals', href: '/glossary#authority-signals', title: 'Building Authority Signals' },
  { keyword: 'E-E-A-T', href: '/glossary#eeat', title: 'Experience, Expertise, Authority, Trust' },
  { keyword: 'structured data', href: '/glossary#structured-data', title: 'Schema Markup for AI' },
  
  // AI Platforms Topic Silo
  { keyword: 'ChatGPT', href: '/entities/chatgpt-optimization', title: 'ChatGPT Optimization Guide' },
  { keyword: 'Claude', href: '/entities/claude-optimization', title: 'Claude AI Optimization' },
  { keyword: 'Perplexity', href: '/entities/perplexity-optimization', title: 'Perplexity Search Optimization' },
  { keyword: 'Gemini', href: '/glossary#gemini', title: 'Google Gemini Optimization' },
  { keyword: 'Bing Chat', href: '/glossary#bing-chat', title: 'Bing Chat Optimization' },
  { keyword: 'You.com', href: '/glossary#you-com', title: 'You.com Optimization' },
  { keyword: 'OpenAI', href: '/entities/chatgpt-optimization', title: 'OpenAI ChatGPT Guide' },
  { keyword: 'Anthropic', href: '/entities/claude-optimization', title: 'Anthropic Claude Guide' },
  
  // Technical Concepts Silo
  { keyword: 'vector embeddings', href: '/entities/vector-embeddings', title: 'Understanding Vector Embeddings' },
  { keyword: 'semantic search', href: '/entities/semantic-search-optimization', title: 'Semantic Search Optimization' },
  { keyword: 'retrieval augmented generation', href: '/entities/rag-optimization', title: 'RAG System Optimization' },
  { keyword: 'large language models', href: '/entities/llm-optimization', title: 'LLM Optimization Guide' },
  { keyword: 'AI citations', href: '/entities/ai-citations', title: 'How AI Citations Work' },
  { keyword: 'prompt engineering', href: '/entities/prompt-engineering', title: 'Prompt Engineering for GEO' },
  
  // Core Pages
  { keyword: 'GEO platform', href: '/', title: 'GEO Platform Homepage' },
  { keyword: 'about us', href: '/about', title: 'About GEO Platform' },
  { keyword: 'our blog', href: '/blog', title: 'GEO Blog & Resources' },
  { keyword: 'glossary', href: '/glossary', title: 'GEO Terms Glossary' },
  { keyword: 'knowledge graph', href: '/entities', title: 'GEO Knowledge Graph' },
  
  // Action Keywords
  { keyword: 'improve AI visibility', href: '/tools/geo-audit', title: 'Improve Your AI Visibility' },
  { keyword: 'optimize for AI', href: '/tools/content-optimizer', title: 'AI Content Optimization Tool' },
  { keyword: 'boost citations', href: '/glossary#cite-sources', title: 'Boost AI Citations' },
  { keyword: 'increase visibility', href: '/tools/visibility-tracker', title: 'Track & Increase Visibility' },
  
  // Acronyms and Variations
  { keyword: 'GEO', href: '/entities/generative-engine-optimization', title: 'What is GEO?' },
  { keyword: 'LLMs', href: '/entities/llm-optimization', title: 'Large Language Models' },
  { keyword: 'RAG', href: '/entities/rag-optimization', title: 'Retrieval-Augmented Generation' },
  { keyword: 'SEO vs GEO', href: '/blog/seo-vs-geo-complete-guide', title: 'SEO vs GEO Comparison' },
]

// Function to add internal links to HTML content
export function addInternalLinks(html: string, currentPath: string): string {
  let processedHtml = html
  const addedLinks = new Set<string>()
  
  // Sort links by keyword length (longest first) to prioritize more specific matches
  const sortedLinks = [...internalLinks].sort((a, b) => b.keyword.length - a.keyword.length)
  
  for (const link of sortedLinks) {
    // Skip if this link was already added
    if (addedLinks.has(link.keyword.toLowerCase())) continue
    
    // Skip if linking to current page
    if (link.href === currentPath || link.href.split('#')[0] === currentPath) continue
    
    // Create regex to find the keyword (case-insensitive, word boundaries)
    const regex = new RegExp(`\\b(${escapeRegex(link.keyword)})\\b(?![^<]*>)(?![^<]*<\\/a>)`, 'gi')
    
    // Replace only the first occurrence to avoid over-linking
    let replaced = false
    processedHtml = processedHtml.replace(regex, (match, keyword) => {
      if (!replaced) {
        replaced = true
        addedLinks.add(link.keyword.toLowerCase())
        return `<a href="${link.href}" title="${link.title || keyword}" class="internal-link text-blue-600 hover:text-blue-700 underline decoration-blue-200 hover:decoration-blue-600">${keyword}</a>`
      }
      return match
    })
  }
  
  return processedHtml
}

// Helper function to escape regex special characters
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Function to extract internal links from content
export function extractInternalLinks(html: string): string[] {
  const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>/g
  const links: string[] = []
  let match
  
  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1]
    // Only include internal links
    if (href.startsWith('/') || href.startsWith('#')) {
      links.push(href)
    }
  }
  
  return Array.from(new Set(links)) // Remove duplicates
}

// Function to create a link graph for navigation
export function createLinkGraph(posts: Array<{ slug: string; content: string }>): Map<string, string[]> {
  const graph = new Map<string, string[]>()
  
  for (const post of posts) {
    const links = extractInternalLinks(post.content)
    graph.set(post.slug, links)
  }
  
  return graph
}

// Topic Silos Configuration
export const topicSilos = {
  'geo-techniques': {
    name: 'GEO Techniques',
    hub: '/entities/generative-engine-optimization',
    pages: [
      '/glossary#cite-sources',
      '/glossary#statistics-inclusion',
      '/glossary#expert-quotes',
      '/glossary#authority-signals',
      '/glossary#structured-data',
    ]
  },
  'ai-platforms': {
    name: 'AI Platforms',
    hub: '/entities',
    pages: [
      '/entities/chatgpt-optimization',
      '/entities/claude-optimization',
      '/entities/perplexity-optimization',
      '/glossary#gemini',
      '/glossary#bing-chat',
    ]
  },
  'case-studies': {
    name: 'Case Studies',
    hub: '/case-studies',
    pages: [
      '/case-studies/ecommerce-geo',
      '/case-studies/b2b-geo',
      '/case-studies/saas-geo',
      '/case-studies/content-geo',
    ]
  },
  'technical-concepts': {
    name: 'Technical Concepts',
    hub: '/entities/llm-optimization',
    pages: [
      '/entities/vector-embeddings',
      '/entities/semantic-search-optimization',
      '/entities/rag-optimization',
      '/entities/prompt-engineering',
    ]
  }
}

// Get contextual link suggestions based on content
export function getContextualLinks(
  content: string,
  currentPath: string,
  limit: number = 5
): InternalLink[] {
  const suggestions: Array<InternalLink & { score: number }> = []
  
  // Calculate relevance scores for each link
  for (const link of internalLinks) {
    // Skip current page
    if (link.href === currentPath || link.href.split('#')[0] === currentPath) continue
    
    let score = 0
    
    // Check if keyword appears in content (case-insensitive)
    const keywordRegex = new RegExp(`\b${escapeRegex(link.keyword)}\b`, 'gi')
    const matches = content.match(keywordRegex)
    if (matches) {
      score += matches.length * 10 // More occurrences = higher score
    }
    
    // Check for related terms
    const relatedTerms = getRelatedTerms(link.keyword)
    for (const term of relatedTerms) {
      const termRegex = new RegExp(`\b${escapeRegex(term)}\b`, 'gi')
      const termMatches = content.match(termRegex)
      if (termMatches) {
        score += termMatches.length * 5 // Related terms get half score
      }
    }
    
    // Boost entity pages
    if (link.href.startsWith('/entities/')) {
      score += 15
    }
    
    // Boost tools for action-oriented content
    if (link.href.startsWith('/tools/')) {
      if (content.match(/(how to|guide|tutorial|optimize|improve|boost)/gi)) {
        score += 10
      }
    }
    
    if (score > 0) {
      suggestions.push({ ...link, score })
    }
  }
  
  // Sort by score and return top suggestions
  return suggestions
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...link }) => link)
}

// Get related terms for a keyword
function getRelatedTerms(keyword: string): string[] {
  const relatedMap: Record<string, string[]> = {
    'generative engine optimization': ['GEO', 'AI SEO', 'AI optimization'],
    'ChatGPT': ['OpenAI', 'GPT-4', 'GPT'],
    'Claude': ['Anthropic', 'Claude AI'],
    'Perplexity': ['Perplexity AI', 'AI search'],
    'statistics': ['data', 'metrics', 'numbers', 'percentages'],
    'citations': ['sources', 'references', 'cite'],
    'visibility': ['ranking', 'exposure', 'presence'],
  }
  
  return relatedMap[keyword.toLowerCase()] || []
}

// Get pages in the same topic silo
export function getSiloPages(currentPath: string): string[] {
  for (const silo of Object.values(topicSilos)) {
    if (silo.pages.includes(currentPath) || silo.hub === currentPath) {
      return [...silo.pages, silo.hub].filter(page => page !== currentPath)
    }
  }
  return []
}

// Create hub page links (for topic cluster strategy)
export function createHubLinks(content: string, siloName: keyof typeof topicSilos): string {
  const silo = topicSilos[siloName]
  if (!silo) return content
  
  // Add hub link at the beginning
  const hubLink = `<div class="hub-navigation bg-blue-50 rounded-lg p-4 mb-6">
    <p class="text-sm text-gray-600 mb-2">Part of the ${silo.name} topic cluster:</p>
    <a href="${silo.hub}" class="text-blue-600 font-semibold hover:text-blue-800">
      → View ${silo.name} Hub Page
    </a>
  </div>`
  
  // Add related pages at the end
  const relatedPages = `<div class="related-silo-pages mt-8 p-6 bg-gray-50 rounded-lg">
    <h3 class="text-lg font-bold mb-4">Related ${silo.name} Resources:</h3>
    <ul class="space-y-2">
      ${silo.pages.map(page => {
        const link = internalLinks.find(l => l.href === page)
        return `<li>
          <a href="${page}" class="text-blue-600 hover:text-blue-800 hover:underline">
            ${link?.title || page}
          </a>
        </li>`
      }).join('')}
    </ul>
  </div>`
  
  return hubLink + content + relatedPages
}