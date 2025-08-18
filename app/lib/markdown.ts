import { marked } from 'marked'

// Configure marked for better typography and SEO
marked.setOptions({
  gfm: true,
  breaks: true,
  pedantic: false,
})

export function parseMarkdown(content: string): string {
  // Pre-process content to ensure proper spacing and structure
  let processedContent = content
    .replace(/\n{3,}/g, '\n\n') // Normalize multiple line breaks
    .replace(/^#+\s/gm, '\n$&') // Add space before headings
    .trim()

  // Parse markdown to HTML with custom rendering (marked.parse is synchronous in this context)
  const html = marked.parse(processedContent) as string

  // Post-process HTML for better typography and SEO
  const processedHtml = html
    // Headings with IDs and anchor links
    .replace(/<h([1-6])>(.*?)<\/h[1-6]>/g, (match, level, text) => {
      const id = text.toLowerCase().replace(/[^\w]+/g, '-')
      const anchorLink = level <= 2 ? `<a href="#${id}" class="anchor-link" aria-label="Link to this section">#</a>` : ''
      const className = getHeadingClass(parseInt(level))
      return `<h${level} id="${id}" class="${className} scroll-mt-20">${text}${anchorLink}</h${level}>`
    })
    // Better paragraph spacing
    .replace(/<p>/g, '<p class="mb-6 leading-relaxed text-lg text-gray-700">')
    // Styled lists
    .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-6 space-y-2">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-6 mb-6 space-y-2">')
    .replace(/<li>/g, '<li class="text-gray-700 leading-relaxed">')
    // Enhanced links with external link handling
    .replace(/<a href="(.*?)">(.*?)<\/a>/g, (match, href, text) => {
      const isExternal = href.startsWith('http') && !href.includes('generative-engine.org')
      const attrs = isExternal 
        ? 'target="_blank" rel="noopener noreferrer" class="text-blue-600 font-medium hover:text-blue-700 underline decoration-blue-200 hover:decoration-blue-600 external-link"' 
        : 'class="text-blue-600 font-medium hover:text-blue-700 underline decoration-blue-200 hover:decoration-blue-600"'
      return `<a href="${href}" ${attrs}>${text}</a>`
    })
    // Code blocks with syntax highlighting classes
    .replace(/<pre><code class="language-(.*?)">([\s\S]*?)<\/code><\/pre>/g, 
      '<pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-6"><code class="language-$1">$2</code></pre>')
    .replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, 
      '<pre class="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-6"><code>$1</code></pre>')
    // Inline code
    .replace(/<code>/g, '<code class="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono">')
    // Blockquotes
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-blue-500 pl-6 italic my-6 text-gray-700">')
    // Strong emphasis
    .replace(/<strong>/g, '<strong class="font-bold text-gray-900">')
    // Tables with styling
    .replace(/<table>/g, '<div class="overflow-x-auto mb-6"><table class="min-w-full divide-y divide-gray-300">')
    .replace(/<\/table>/g, '</table></div>')
    .replace(/<thead>/g, '<thead class="bg-gray-50">')
    .replace(/<tbody>/g, '<tbody class="bg-white divide-y divide-gray-200">')
    .replace(/<th>/g, '<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">')
    .replace(/<td>/g, '<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">')
    // Horizontal rules
    .replace(/<hr>/g, '<hr class="my-12 border-gray-200" />')
    // Images with responsive sizing
    .replace(/<img src="(.*?)" alt="(.*?)"(.*?)>/g, 
      '<figure class="my-8"><img src="$1" alt="$2" class="rounded-lg shadow-lg w-full" loading="lazy" /><figcaption class="text-center text-sm text-gray-600 mt-2">$2</figcaption></figure>')

  return processedHtml
}

function getHeadingClass(level: number): string {
  switch(level) {
    case 1:
      return 'text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight'
    case 2:
      return 'text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-12'
    case 3:
      return 'text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8'
    case 4:
      return 'text-xl md:text-2xl font-semibold text-gray-800 mb-3 mt-6'
    case 5:
      return 'text-lg md:text-xl font-medium text-gray-800 mb-2 mt-4'
    case 6:
      return 'text-base md:text-lg font-medium text-gray-700 mb-2 mt-4'
    default:
      return 'font-semibold text-gray-900 mb-2'
  }
}

export function extractTableOfContents(content: string): Array<{ id: string; text: string; level: number }> {
  const headings: Array<{ id: string; text: string; level: number }> = []
  const regex = /^(#{1,3})\s+(.+)$/gm
  let match

  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2]
    const id = text.toLowerCase().replace(/[^\w]+/g, '-')
    headings.push({ id, text, level })
  }

  return headings
}

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}