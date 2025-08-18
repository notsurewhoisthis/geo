// RAG-optimized content chunking for better AI retrieval
export function createRAGChunks(html: string): string {
  // Add semantic section markers for RAG systems
  let enhancedHtml = html
  
  // Mark major sections with data attributes for chunking
  enhancedHtml = enhancedHtml.replace(
    /<h2(.*?)>(.*?)<\/h2>/g,
    (match, attrs, content) => {
      const cleanContent = content.replace(/<.*?>/g, '')
      const chunkId = cleanContent.toLowerCase().replace(/[^\w]+/g, '-')
      return `<h2${attrs} data-rag-chunk="${chunkId}" data-rag-type="section">${content}</h2>`
    }
  )
  
  // Mark paragraphs with semantic importance
  enhancedHtml = enhancedHtml.replace(
    /<p>(.*?)<\/p>/g,
    (match, content) => {
      // Check for definition patterns
      if (content.match(/^(.*?)\s+(is|are|means?|refers? to|describes?)\s+/i)) {
        return `<p data-rag-importance="high" data-rag-type="definition">${content}</p>`
      }
      // Check for statistical content
      if (content.match(/\d+%|\$[\d,]+|[\d,]+\s+(times?|percent|dollars?)/i)) {
        return `<p data-rag-importance="high" data-rag-type="statistic">${content}</p>`
      }
      // Check for conclusion/summary patterns
      if (content.match(/^(In (conclusion|summary)|Therefore|Thus|Overall|To sum up)/i)) {
        return `<p data-rag-importance="high" data-rag-type="conclusion">${content}</p>`
      }
      return `<p data-rag-importance="medium">${content}</p>`
    }
  )
  
  // Add microdata for better semantic understanding
  enhancedHtml = enhancedHtml.replace(
    /<ul>([\s\S]*?)<\/ul>/g,
    (match, content) => {
      // Check if it's a list of benefits, features, steps, etc.
      const prevText = enhancedHtml.substring(Math.max(0, enhancedHtml.indexOf(match) - 200), enhancedHtml.indexOf(match))
      if (prevText.match(/(benefits?|features?|advantages?|steps?|process|how to)/i)) {
        return `<ul data-rag-type="structured-list" data-rag-importance="high">${content}</ul>`
      }
      return `<ul data-rag-type="list">${content}</ul>`
    }
  )
  
  // Wrap content in semantic chunks for optimal RAG retrieval
  const sections = enhancedHtml.split(/<h2/g)
  const chunkedHtml = sections.map((section, index) => {
    if (index === 0) return section // Skip content before first h2
    
    const sectionMatch = section.match(/data-rag-chunk="([^"]+)"/)
    const chunkId = sectionMatch ? sectionMatch[1] : `chunk-${index}`
    
    return `<section class="rag-chunk" data-chunk-id="${chunkId}" data-chunk-index="${index}">
      <h2${section}
    </section>`
  }).join('')
  
  return chunkedHtml || enhancedHtml
}

// Add chunk metadata for RAG systems
export function addRAGMetadata(html: string, title: string, url: string): string {
  const metadata = {
    title: title,
    url: url,
    timestamp: new Date().toISOString(),
    contentType: 'article',
    optimization: 'rag-enhanced'
  }
  
  return `
    <script type="application/ld+json" class="rag-metadata">
    ${JSON.stringify(metadata, null, 2)}
    </script>
    ${html}
  `
}

// Enhanced Key Takeaways formatting for AI optimization
export function enhanceKeyTakeaways(html: string): string {
  // Look for Key Takeaways sections and enhance them
  return html.replace(
    /<h([2-3]).*?>.*?(Key Takeaways?|Summary|TL;?DR|Main Points?).*?<\/h[2-3]>([\s\S]*?)(?=<h[2-3]|$)/gi,
    (match, level, title, content) => {
      const cleanTitle = title.replace(/<.*?>/g, '')
      const id = cleanTitle.toLowerCase().replace(/[^\w]+/g, '-')
      
      // Extract list items if present
      const listMatch = content.match(/<ul.*?>([\s\S]*?)<\/ul>/i)
      if (listMatch) {
        const items = listMatch[1].match(/<li.*?>(.*?)<\/li>/g) || []
        const cleanItems = items.map((item: string) => 
          item.replace(/<li.*?>/g, '').replace(/<\/li>/g, '').trim()
        )
        
        return `
        <div class="key-takeaways bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 my-8 border border-blue-200">
          <h${level} id="${id}" class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            ${cleanTitle}
          </h${level}>
          <ul class="space-y-3">
            ${cleanItems.map((item: string) => `
              <li class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 leading-relaxed">${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        ${content.replace(listMatch[0], '')}`
      }
      
      return match // Return original if no list found
    }
  )
}

// Enhanced FAQ section formatting for better schema integration
export function enhanceFAQSections(html: string): string {
  // Look for FAQ/Q&A sections and enhance them
  return html.replace(
    /<h([2-3]).*?>.*?(FAQ|Frequently Asked Questions?|Q(&amp;|and)A|Questions?).*?<\/h[2-3]>([\s\S]*?)(?=<h[2-3]|$)/gi,
    (match, level, title, amp, content) => {
      const cleanTitle = title.replace(/<.*?>/g, '').replace(/&amp;/g, '&')
      const id = cleanTitle.toLowerCase().replace(/[^\w]+/g, '-')
      
      // Try to extract Q&A pairs
      const qaPairs: Array<{question: string, answer: string}> = []
      
      // Pattern 1: H4/H5 questions followed by content
      const questionMatches = Array.from(content.matchAll(/<h([4-6]).*?>(.*?)<\/h[4-6]>([\s\S]*?)(?=<h[4-6]|$)/gi)) as RegExpMatchArray[]
      for (const qMatch of questionMatches) {
        const question = qMatch[2].replace(/<.*?>/g, '').trim()
        const answer = qMatch[3].replace(/<.*?>/g, '').trim()
        if (question && answer) {
          qaPairs.push({ question, answer })
        }
      }
      
      // Pattern 2: Strong/Bold questions followed by content
      if (qaPairs.length === 0) {
        const strongMatches = Array.from(content.matchAll(/<strong.*?>(.*?\?)<\/strong>([\s\S]*?)(?=<strong|$)/gi)) as RegExpMatchArray[]
        for (const sMatch of strongMatches) {
          const question = sMatch[1].replace(/<.*?>/g, '').trim()
          const answer = sMatch[2].replace(/<.*?>/g, '').replace(/<p.*?>/g, '').replace(/<\/p>/g, '').trim()
          if (question && answer) {
            qaPairs.push({ question, answer })
          }
        }
      }
      
      if (qaPairs.length > 0) {
        return `
        <div class="faq-section bg-gray-50 rounded-xl p-6 my-8" itemscope itemtype="https://schema.org/FAQPage">
          <h${level} id="${id}" class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg class="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            ${cleanTitle}
          </h${level}>
          <div class="space-y-4">
            ${qaPairs.map((qa: {question: string, answer: string}, index: number) => `
              <details class="group bg-white rounded-lg shadow-sm" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <summary class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition">
                  <span class="font-medium text-gray-900" itemprop="name">${qa.question}</span>
                  <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </summary>
                <div class="px-4 pb-4" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                  <p class="text-gray-700 leading-relaxed" itemprop="text">${qa.answer}</p>
                </div>
              </details>
            `).join('')}
          </div>
        </div>`
      }
      
      return match // Return original if no Q&A pairs found
    }
  )
}

// Extract Key Takeaways from content for schema generation
export function extractKeyTakeaways(content: string): string[] {
  const takeaways: string[] = []
  const regex = /##.*?(Key Takeaways?|Summary|TL;?DR|Main Points?)[\s\S]*?(?:^[-*]\s+(.+)$)+/gmi
  const matches = content.matchAll(regex)
  
  for (const match of Array.from(matches)) {
    const listItems = match[0].match(/^[-*]\s+(.+)$/gm) || []
    listItems.forEach((item: string) => {
      const cleaned = item.replace(/^[-*]\s+/, '').trim()
      if (cleaned) takeaways.push(cleaned)
    })
  }
  
  return takeaways.slice(0, 5) // Return top 5 takeaways
}

// Extract FAQ pairs from content for schema generation
export function extractFAQPairs(content: string): Array<{question: string, answer: string}> {
  const pairs: Array<{question: string, answer: string}> = []
  
  // Pattern 1: Heading-based Q&A
  const headingRegex = /####+\s*(.*?\?)\s*\n+([\s\S]*?)(?=###|$)/gi
  const headingMatches = Array.from(content.matchAll(headingRegex)) as RegExpMatchArray[]
  
  for (const match of headingMatches) {
    const question = match[1].trim()
    const answer = match[2].replace(/\n+/g, ' ').trim()
    if (question && answer && answer.length > 20) {
      pairs.push({ question, answer: answer.substring(0, 500) })
    }
  }
  
  // Pattern 2: Bold question format
  const boldRegex = /\*\*(.*?\?)\*\*\s*\n+([\s\S]*?)(?=\*\*.*?\?|$)/gi
  const boldMatches = Array.from(content.matchAll(boldRegex)) as RegExpMatchArray[]
  
  for (const match of boldMatches) {
    const question = match[1].trim()
    const answer = match[2].replace(/\n+/g, ' ').trim()
    if (question && answer && answer.length > 20) {
      pairs.push({ question, answer: answer.substring(0, 500) })
    }
  }
  
  return pairs.slice(0, 5) // Return top 5 Q&A pairs
}

// AI-specific citation enhancement
export function enhanceCitations(html: string): string {
  // Format citations for AI readability
  return html
    // Numbered citations [1], [2], etc.
    .replace(/\[(\d+)\]/g, '<sup class="citation text-blue-600 hover:text-blue-800" title="Citation">[$1]</sup>')
    // Source mentions
    .replace(/(?:According to|Source:|Via:|Per:)\s+([^<.,]+)/gi, (match) => {
      return `<span class="source-citation font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded">${match}</span>`
    })
}

// Statistical highlighting for AI visibility
export function enhanceStatistics(html: string): string {
  // Highlight statistics with special formatting
  return html.replace(
    /(\d+(?:\.\d+)?%|\$[\d,]+(?:\.\d+)?(?:\s*(?:billion|million|thousand|B|M|K))?|\d+x\s|[\d,]+(?:\.\d+)?(?:\s*(?:times|fold|increase|decrease)))/gi,
    (match) => {
      // Skip if already formatted
      if (match.includes('class=')) return match
      
      return `<mark class="statistic bg-yellow-100 text-gray-900 font-semibold px-1 rounded" data-value="${match}">${match}</mark>`
    }
  )
}

// Add TL;DR section for quick AI comprehension
export function addTLDRSection(html: string, content: string): string {
  // Check if TL;DR already exists
  if (html.includes('tldr-section')) return html
  
  // Extract first paragraph or key points
  const firstPara = content.match(/<p[^>]*>(.*?)<\/p>/)?.[1]?.replace(/<[^>]*>/g, '').substring(0, 200)
  
  if (!firstPara) return html
  
  const tldr = `
    <div class="tldr-section bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 rounded-lg mb-8">
      <div class="flex items-center mb-2">
        <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <strong class="text-green-800">TL;DR</strong>
      </div>
      <p class="text-gray-700">${firstPara}...</p>
    </div>
  `
  
  // Insert after first heading or at the beginning
  const h1Match = html.match(/<h1[^>]*>.*?<\/h1>/)
  if (h1Match) {
    return html.replace(h1Match[0], h1Match[0] + tldr)
  }
  
  return tldr + html
}

// Add reading time and content metrics
export function addContentMetrics(html: string, wordCount: number): string {
  const readingTime = Math.ceil(wordCount / 200)
  const metrics = `
    <div class="content-metrics flex items-center gap-4 text-sm text-gray-600 mb-6">
      <span class="flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        ${readingTime} min read
      </span>
      <span class="flex items-center">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        ${wordCount.toLocaleString()} words
      </span>
    </div>
  `
  
  // Insert after TL;DR or at the beginning
  if (html.includes('tldr-section')) {
    return html.replace('</div>\n  </div>', '</div>\n  </div>' + metrics)
  }
  
  return metrics + html
}

// Create structured navigation for long content
export function addTableOfContents(html: string, headings: Array<{id: string, text: string, level: number}>): string {
  if (headings.length < 3) return html // Only add TOC for longer content
  
  const toc = `
    <nav class="table-of-contents bg-gray-50 rounded-lg p-4 mb-8">
      <h2 class="font-bold text-gray-900 mb-3 flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        Table of Contents
      </h2>
      <ol class="space-y-2">
        ${headings.map(h => `
          <li class="ml-${(h.level - 2) * 4}">
            <a href="#${h.id}" class="text-gray-700 hover:text-blue-600 transition-colors">
              ${h.text}
            </a>
          </li>
        `).join('')}
      </ol>
    </nav>
  `
  
  // Insert after metrics or TL;DR
  if (html.includes('content-metrics')) {
    return html.replace('</div>', '</div>' + toc)
  }
  
  return toc + html
}

// Format the entire content for maximum AI visibility
export function formatForAIVisibility(html: string, content: string, wordCount: number): string {
  let enhanced = html
  
  // Apply all AI enhancements
  enhanced = enhanceCitations(enhanced)
  enhanced = enhanceStatistics(enhanced)
  enhanced = addTLDRSection(enhanced, content)
  enhanced = addContentMetrics(enhanced, wordCount)
  
  // Add microdata attributes for better AI comprehension
  enhanced = enhanced
    .replace(/<article/g, '<article itemscope itemtype="https://schema.org/Article"')
    .replace(/<h1/g, '<h1 itemprop="headline"')
    .replace(/<time/g, '<time itemprop="datePublished"')
  
  return enhanced
}