import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Keyword Research Tool - Find Conversational Queries for GEO',
  description: 'Discover long-tail, conversational keywords optimized for AI search engines. Generate keyword ideas that work with ChatGPT, Claude, and Perplexity AI.',
  keywords: 'AI keyword research, conversational keywords, GEO keywords, long-tail keywords, AI search queries',
  alternates: {
    canonical: 'https://generative-engine.org/tools/keyword-research',
  },
}

export default function KeywordResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}