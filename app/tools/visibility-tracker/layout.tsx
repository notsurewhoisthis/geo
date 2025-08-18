import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Visibility Tracker - Monitor Your Citations Across AI Platforms',
  description: 'Track your content visibility across ChatGPT, Claude, Perplexity, and other AI search engines. Monitor citation rates and AI search performance.',
  keywords: 'AI visibility tracker, citation tracking, AI search monitoring, GEO tracking, AI platform analytics',
  alternates: {
    canonical: 'https://generative-engine.org/tools/visibility-tracker',
  },
}

export default function VisibilityTrackerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}