import { NextResponse } from 'next/server'

export async function GET() {
  const tips = [
    {
      id: 1,
      title: "Optimize for AI Context",
      description: "Structure your content to provide clear context and relevance for AI models",
      category: "content",
      icon: "lightbulb"
    },
    {
      id: 2,
      title: "Use Semantic Markup",
      description: "Implement structured data and semantic HTML to help AI understand your content",
      category: "technical",
      icon: "code"
    },
    {
      id: 3,
      title: "Focus on Authority",
      description: "Build topical authority with comprehensive, well-researched content",
      category: "strategy",
      icon: "star"
    },
    {
      id: 4,
      title: "Natural Language Optimization",
      description: "Write in conversational tone that aligns with how users query AI systems",
      category: "content",
      icon: "chat"
    },
    {
      id: 5,
      title: "Entity Recognition",
      description: "Clearly define and relate entities, concepts, and their relationships",
      category: "technical",
      icon: "link"
    },
    {
      id: 6,
      title: "Multi-Modal Content",
      description: "Include diverse content types - text, images, videos, and structured data",
      category: "strategy",
      icon: "grid"
    }
  ]
  
  return NextResponse.json(tips)
}