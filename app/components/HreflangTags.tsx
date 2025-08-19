'use client'

import { usePathname } from 'next/navigation'

export function HreflangTags() {
  const pathname = usePathname()
  
  // Always include self-referencing hreflang for the current page
  // This is REQUIRED by Google guidelines - each page must reference itself
  const baseUrl = 'https://www.generative-engine.org'
  const currentUrl = `${baseUrl}${pathname}`
  
  return (
    <>
      {/* Self-referencing hreflang tag - CRITICAL for SEO */}
      <link 
        rel="alternate" 
        hrefLang="en" 
        href={currentUrl}
      />
      
      {/* x-default fallback tag */}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={currentUrl}
      />
      
      {/* Future language versions can be added here when enabled
          Each language version will also need its own self-referencing tag
          Example for Spanish version:
          <link rel="alternate" hrefLang="es" href={`https://es.generative-engine.org${pathname}`} />
      */}
    </>
  )
}