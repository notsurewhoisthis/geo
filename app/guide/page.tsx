import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complete GEO Guide - Master Generative Engine Optimization in 2024',
  description: 'The ultimate guide to Generative Engine Optimization (GEO). Learn proven strategies to boost your AI search visibility, get featured in ChatGPT responses, and optimize for Claude, Perplexity, and other AI engines.',
  keywords: 'GEO guide, generative engine optimization guide, AI SEO guide, ChatGPT optimization, Claude optimization, AI search optimization, LLM optimization complete guide',
  alternates: {
    canonical: 'https://generative-engine.org/guide',
  },
}

const guideContents = [
  {
    chapter: 1,
    title: 'Introduction to GEO',
    sections: [
      'What is Generative Engine Optimization?',
      'GEO vs Traditional SEO',
      'Why GEO Matters in 2024',
      'The AI Search Revolution'
    ]
  },
  {
    chapter: 2,
    title: 'Understanding AI Search Engines',
    sections: [
      'ChatGPT and GPT-4 Optimization',
      'Claude and Anthropic AI',
      'Perplexity AI Platform',
      'Bing Chat and Google Bard',
      'Emerging AI Platforms'
    ]
  },
  {
    chapter: 3,
    title: 'Content Optimization Fundamentals',
    sections: [
      'Semantic Understanding',
      'Entity-Based Content',
      'Conversational Tone',
      'Citation-Worthy Statistics',
      'FAQ and Q&A Sections'
    ]
  },
  {
    chapter: 4,
    title: 'Technical GEO Implementation',
    sections: [
      'Schema.org Markup for AI',
      'Structured Data Best Practices',
      'XML Sitemaps for AI Crawlers',
      'Robots.txt Configuration',
      'Meta Tags for AI Platforms'
    ]
  },
  {
    chapter: 5,
    title: 'Advanced GEO Strategies',
    sections: [
      'Topic Clustering for AI',
      'Authority Building',
      'Citation Optimization',
      'Long-tail Conversational Keywords',
      'Multi-platform Content Strategy'
    ]
  },
  {
    chapter: 6,
    title: 'GEO Tools and Analytics',
    sections: [
      'Content Audit Tools',
      'AI Visibility Tracking',
      'Citation Monitoring',
      'Performance Measurement',
      'ROI Calculation'
    ]
  }
]

const quickStats = [
  {
    stat: '67%',
    description: 'Increase in AI platform visibility with proper GEO'
  },
  {
    stat: '3.2x',
    description: 'More likely to be cited in AI responses'
  },
  {
    stat: '89%',
    description: 'Of users trust AI-recommended content'
  },
  {
    stat: '45%',
    description: 'Boost in organic traffic from AI search'
  }
]

const keyTakeaways = [
  'GEO focuses on semantic understanding rather than keyword density',
  'AI platforms prioritize comprehensive, authoritative content',
  'Citation-worthy statistics and expert quotes increase visibility',
  'Conversational content performs better on AI search engines',
  'Technical implementation requires specific schema markup',
  'Multi-platform optimization is essential for maximum reach'
]

export default function GEOGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Complete GEO Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Master Generative Engine Optimization with our comprehensive guide. 
              Learn to dominate AI search results and boost your visibility across 
              ChatGPT, Claude, Perplexity, and other AI platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="#quick-start" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Start Learning GEO
              </Link>
              <Link 
                href="/tools/geo-audit" 
                className="border border-blue-300 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Audit My Content
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                    {item.stat}
                  </div>
                  <div className="text-sm text-blue-100">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Complete Guide Contents
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {guideContents.map((chapter, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Chapter {chapter.chapter}: {chapter.title}
                    </h3>
                    <ul className="space-y-2">
                      {chapter.sections.map((section, sectionIndex) => (
                        <li key={sectionIndex} className="text-gray-700 hover:text-blue-600 transition">
                          <Link href={`#chapter-${chapter.chapter}`} className="flex items-center">
                            <span className="text-blue-500 mr-2">•</span>
                            {section}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quick-start" className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Start: GEO in 5 Steps
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Audit Your Current Content
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Start by analyzing your existing content for AI optimization opportunities. 
                    Use our GEO Audit Tool to get instant scores and recommendations.
                  </p>
                  <Link 
                    href="/tools/geo-audit" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Run GEO Audit →
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Research AI-Optimized Keywords
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Discover conversational queries and long-tail keywords that perform well 
                    on AI platforms. Focus on question-based and problem-solving keywords.
                  </p>
                  <Link 
                    href="/tools/keyword-research" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Find AI Keywords →
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Optimize Content Structure
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Transform your content with AI-friendly structures: comprehensive answers, 
                    FAQ sections, entity definitions, and citation-worthy statistics.
                  </p>
                  <Link 
                    href="/tools/content-optimizer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Optimize Content →
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Implement Technical GEO
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Add structured data, optimize for AI crawlers, and ensure your robots.txt 
                    allows AI platform bots to access your content.
                  </p>
                  <Link 
                    href="#chapter-4" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Technical Guide →
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Monitor & Track Performance
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Track your AI platform visibility, citation rates, and content performance 
                    across ChatGPT, Claude, Perplexity, and other AI engines.
                  </p>
                  <Link 
                    href="/tools/visibility-tracker" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Track Visibility →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key GEO Takeaways
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <p className="text-gray-700">{takeaway}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Previews */}
      <section className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Guide Chapters Preview
            </h2>

            <div className="space-y-12">
              {/* Chapter 1 Preview */}
              <div id="chapter-1" className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Chapter 1: Introduction to GEO
                </h3>
                <p className="text-gray-700 mb-4">
                  Generative Engine Optimization (GEO) represents a fundamental shift in how we approach 
                  search optimization. Unlike traditional SEO, which focuses on ranking in search engine 
                  results pages, GEO optimizes content to be featured, cited, and recommended by AI 
                  systems like ChatGPT, Claude, and Perplexity.
                </p>
                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• The fundamental differences between SEO and GEO</li>
                    <li>• Why traditional SEO tactics don't work for AI platforms</li>
                    <li>• The psychology of AI-powered search behavior</li>
                    <li>• Market opportunities in the AI search landscape</li>
                  </ul>
                </div>
              </div>

              {/* Chapter 2 Preview */}
              <div id="chapter-2" className="border-l-4 border-purple-500 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Chapter 2: Understanding AI Search Engines
                </h3>
                <p className="text-gray-700 mb-4">
                  Each AI platform has unique characteristics that affect how content should be optimized. 
                  This chapter provides deep insights into the major AI search engines and their content 
                  preferences, helping you tailor your optimization strategy for maximum impact.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">ChatGPT</h5>
                    <p className="text-sm text-gray-700">Conversational, comprehensive content with clear structure</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Claude</h5>
                    <p className="text-sm text-gray-700">Analytical, well-reasoned content with citations</p>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Perplexity</h5>
                    <p className="text-sm text-gray-700">Factual, source-rich content with recent data</p>
                  </div>
                </div>
              </div>

              {/* Chapter 3 Preview */}
              <div id="chapter-3" className="border-l-4 border-green-500 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Chapter 3: Content Optimization Fundamentals
                </h3>
                <p className="text-gray-700 mb-4">
                  The heart of GEO lies in creating content that AI systems can easily understand, 
                  process, and cite. This chapter covers the essential elements of AI-optimized content 
                  creation and structure.
                </p>
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Core Content Elements:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-800">Semantic Structure</p>
                      <p className="text-sm text-gray-600">Clear entity relationships and topic hierarchies</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Citation-Ready Facts</p>
                      <p className="text-sm text-gray-600">Statistics, quotes, and verifiable claims</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Conversational Tone</p>
                      <p className="text-sm text-gray-600">Natural language that AI systems prefer</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Comprehensive Coverage</p>
                      <p className="text-sm text-gray-600">Thorough exploration of topics and subtopics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Guide CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready for the Complete Guide?
                </h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  This preview covers just the first 3 chapters. Get access to all 6 chapters with 
                  detailed implementation guides, case studies, and step-by-step tutorials.
                </p>
                <div className="space-y-4">
                  <p className="text-lg font-semibold">Coming Soon: Full GEO Masterclass</p>
                  <p className="text-blue-100">
                    Sign up for updates and be the first to access the complete guide when it launches.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <input 
                      type="email" 
                      placeholder="Enter your email for updates"
                      className="px-4 py-3 rounded-lg text-gray-900 flex-1 max-w-sm"
                    />
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                      Notify Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools and Resources */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              GEO Tools & Resources
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/tools/geo-audit" className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="text-4xl mb-4 text-center">🔍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">GEO Audit</h3>
                <p className="text-gray-600 text-center">Analyze your content's AI optimization score</p>
              </Link>
              
              <Link href="/tools/keyword-research" className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="text-4xl mb-4 text-center">🔑</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Keyword Research</h3>
                <p className="text-gray-600 text-center">Find AI-optimized keywords and queries</p>
              </Link>
              
              <Link href="/tools/content-optimizer" className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="text-4xl mb-4 text-center">✨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Content Optimizer</h3>
                <p className="text-gray-600 text-center">Transform content for AI platforms</p>
              </Link>
              
              <Link href="/tools/visibility-tracker" className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="text-4xl mb-4 text-center">📈</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Visibility Tracker</h3>
                <p className="text-gray-600 text-center">Monitor AI platform performance</p>
              </Link>
            </div>

            {/* Additional Resources */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Link href="/blog" className="block bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📚 GEO Blog</h3>
                <p className="text-gray-700">Latest strategies, case studies, and industry insights</p>
              </Link>
              
              <Link href="/glossary" className="block bg-purple-50 rounded-lg p-6 hover:bg-purple-100 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📖 GEO Glossary</h3>
                <p className="text-gray-700">Complete terminology and definitions guide</p>
              </Link>
              
              <Link href="/about" className="block bg-green-50 rounded-lg p-6 hover:bg-green-100 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">👥 Expert Team</h3>
                <p className="text-gray-700">Meet the GEO specialists behind the platform</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}