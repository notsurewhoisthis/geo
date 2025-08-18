import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Audit Tool - Analyze Your Content for AI Optimization',
  description: 'Free GEO audit tool to analyze your content\'s optimization for AI search engines like ChatGPT, Claude, and Perplexity. Get instant scores and improvement recommendations.',
  keywords: 'GEO audit, AI content analysis, generative engine optimization, content scoring, AI search optimization',
  alternates: {
    canonical: 'https://generative-engine.org/tools/geo-audit',
  },
}

export default function GEOAuditLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}