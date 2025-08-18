// Internal link enhancement for better navigation and SEO
export interface InternalLink {
  keyword: string
  href: string
  title?: string
}

// Define internal link mappings for key terms
export const internalLinks: InternalLink[] = [
  // Tools
  { keyword: 'visibility tracker', href: '/tools/visibility-tracker', title: 'GEO Visibility Tracker Tool' },
  { keyword: 'geo audit', href: '/tools/geo-audit', title: 'GEO Audit Tool' },
  
  // Key concepts
  { keyword: 'generative engine optimization', href: '/glossary#generative-engine-optimization', title: 'What is GEO?' },
  { keyword: 'GEO', href: '/glossary#generative-engine-optimization', title: 'Generative Engine Optimization' },
  { keyword: 'AI visibility', href: '/glossary#ai-visibility', title: 'AI Platform Visibility' },
  { keyword: 'cite sources', href: '/glossary#cite-sources', title: 'Citation Optimization' },
  { keyword: 'add statistics', href: '/glossary#statistics-inclusion', title: 'Statistical Enhancement' },
  
  // Pages
  { keyword: 'about GEO', href: '/about', title: 'About GEO Platform' },
  { keyword: 'our team', href: '/about#team', title: 'GEO Platform Team' },
  { keyword: 'blog', href: '/blog', title: 'GEO Blog' },
  { keyword: 'glossary', href: '/glossary', title: 'GEO Glossary' },
  
  // AI Platforms
  { keyword: 'ChatGPT', href: '/glossary#chatgpt', title: 'ChatGPT Optimization' },
  { keyword: 'Claude', href: '/glossary#claude', title: 'Claude AI Optimization' },
  { keyword: 'Perplexity', href: '/glossary#perplexity', title: 'Perplexity Optimization' },
  { keyword: 'Gemini', href: '/glossary#gemini', title: 'Google Gemini Optimization' },
  { keyword: 'Bing Chat', href: '/glossary#bing-chat', title: 'Bing Chat Optimization' },
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