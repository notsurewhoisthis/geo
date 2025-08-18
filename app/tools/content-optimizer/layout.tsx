import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Optimizer Tool - Enhance Your Content for AI Search',
  description: 'Free content optimization tool to enhance your existing content for better AI search visibility. Get specific recommendations for ChatGPT, Claude, and Perplexity optimization.',
  keywords: 'content optimizer, AI content optimization, GEO content tool, content enhancement, AI search optimization',
  alternates: {
    canonical: 'https://generative-engine.org/tools/content-optimizer',
  },
}

export default function ContentOptimizerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}