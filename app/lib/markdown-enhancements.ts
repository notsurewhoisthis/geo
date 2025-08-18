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