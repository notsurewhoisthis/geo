'use client'

import { usePathname } from 'next/navigation'

interface HreflangTagsProps {
  alternateLanguages?: {
    languageCode: string;
    url: string;
  }[];
}

export function HreflangTags({
  alternateLanguages = []
}: HreflangTagsProps = {}) {
  const pathname = usePathname()
  
  // Always include self-referencing hreflang for the current page
  // This is REQUIRED by Google guidelines - each page must reference itself
  const baseUrl = 'https://generative-engine.org'
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
      
      {/* Alternate language versions */}
      {alternateLanguages.map(lang => (
        <link
          key={lang.languageCode}
          rel="alternate"
          hrefLang={lang.languageCode}
          href={lang.url}
        />
      ))}
    </>
  )
}