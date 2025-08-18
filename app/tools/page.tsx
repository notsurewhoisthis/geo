import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Tools - AI Search Optimization Tools & Analytics',
  description: 'Comprehensive suite of GEO tools for optimizing content for AI search engines. Audit, research, optimize, and track your performance across ChatGPT, Claude, and Perplexity.',
  keywords: 'GEO tools, AI SEO tools, generative engine optimization tools, ChatGPT optimization, AI search tools, content optimization tools',
  alternates: {
    canonical: 'https://generative-engine.org/tools',
  },
}

const toolsData = [
  {
    name: 'GEO Audit Tool',
    description: 'Comprehensive analysis of your content\'s AI optimization score with detailed recommendations for improvement.',
    icon: '🔍',
    category: 'Analysis',
    color: 'blue',
    link: '/tools/geo-audit',
    features: [
      'Content structure analysis',
      'Semantic clarity scoring',
      'AI citation readiness',
      'Technical SEO review',
      'Actionable recommendations'
    ],
    benefits: [
      'Identify optimization opportunities',
      'Improve AI search visibility',
      'Get specific improvement steps',
      'Track progress over time'
    ]
  },
  {
    name: 'AI Keyword Research',
    description: 'Discover conversational keywords and long-tail queries that perform exceptionally well on AI platforms.',
    icon: '🔑',
    category: 'Research',
    color: 'purple',
    link: '/tools/keyword-research',
    features: [
      'Conversational query discovery',
      'AI platform performance data',
      'Search intent analysis',
      'Long-tail keyword generation',
      'Question-based keywords'
    ],
    benefits: [
      'Find AI-optimized keywords',
      'Understand user intent',
      'Target conversational searches',
      'Increase citation rates'
    ]
  },
  {
    name: 'Content Optimizer',
    description: 'Transform your existing content to be more AI-friendly with structure improvements and optimization suggestions.',
    icon: '✨',
    category: 'Optimization',
    color: 'green',
    link: '/tools/content-optimizer',
    features: [
      'Content restructuring',
      'AI-friendly formatting',
      'FAQ section generation',
      'Citation optimization',
      'Schema markup suggestions'
    ],
    benefits: [
      'Improve content for AI',
      'Increase citation likelihood',
      'Better search visibility',
      'Enhanced user engagement'
    ]
  },
  {
    name: 'AI Visibility Tracker',
    description: 'Monitor your content\'s performance and citation rates across ChatGPT, Claude, Perplexity, and other AI engines.',
    icon: '📈',
    category: 'Analytics',
    color: 'orange',
    link: '/tools/visibility-tracker',
    features: [
      'Multi-platform tracking',
      'Citation rate monitoring',
      'Performance trends',
      'Competitive analysis',
      'Real-time alerts'
    ],
    benefits: [
      'Track AI platform performance',
      'Monitor citation rates',
      'Identify trending opportunities',
      'Measure ROI effectively'
    ]
  }
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200', 
      text: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-600', 
      button: 'bg-green-600 hover:bg-green-700'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700'
    }
  }
  return colors[color as keyof typeof colors] || colors.blue
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              GEO Tools Suite
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Professional-grade tools designed specifically for Generative Engine Optimization. 
              Analyze, research, optimize, and track your AI search performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="#tools-overview" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Explore Tools
              </Link>
              <Link 
                href="/guide" 
                className="border border-gray-300 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Learn GEO
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                  4
                </div>
                <div className="text-sm text-gray-300">
                  Professional Tools
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">
                  5+
                </div>
                <div className="text-sm text-gray-300">
                  AI Platforms Covered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">
                  Real-time
                </div>
                <div className="text-sm text-gray-300">
                  Analysis & Tracking
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">
                  Free
                </div>
                <div className="text-sm text-gray-300">
                  To Use & Test
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Overview */}
      <section id="tools-overview" className="py-20 px-4">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Complete GEO Workflow
            </h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              From analysis to optimization to tracking - everything you need to succeed with AI search optimization
            </p>
            
            <div className="space-y-16">
              {toolsData.map((tool, index) => {
                const colors = getColorClasses(tool.color)
                const isEven = index % 2 === 0
                
                return (
                  <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    <div className="flex-1">
                      <div className={`${colors.bg} ${colors.border} border rounded-2xl p-12 h-full`}>
                        <div className="text-center">
                          <span className="text-6xl mb-6 block">{tool.icon}</span>
                          <div className={`inline-flex items-center ${colors.text} text-sm font-semibold mb-4`}>
                            {tool.category} Tool
                          </div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {tool.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-8">
                      <div>
                        <p className="text-lg text-gray-700 mb-6">
                          {tool.description}
                        </p>
                        
                        <Link 
                          href={tool.link}
                          className={`inline-flex items-center ${colors.button} text-white px-8 py-4 rounded-lg font-semibold transition text-lg`}
                        >
                          Launch {tool.name} →
                        </Link>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Features:</h4>
                          <ul className="space-y-2">
                            {tool.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <span className="text-green-600 mr-2 mt-1">✓</span>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4 text-lg">Benefits:</h4>
                          <ul className="space-y-2">
                            {tool.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start">
                                <span className={`${colors.text} mr-2 mt-1`}>•</span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It All Works Together */}
      <section className="py-20 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              How Our Tools Work Together
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Start with Content Audit</h3>
                  <p className="text-gray-700">
                    Use our <strong>GEO Audit Tool</strong> to analyze your current content and identify optimization opportunities. 
                    Get detailed scores and specific recommendations for improvement.
                  </p>
                </div>
                <div className="hidden md:block">
                  <span className="text-4xl">🔍</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Research AI-Optimized Keywords</h3>
                  <p className="text-gray-700">
                    Discover high-performing keywords with our <strong>AI Keyword Research</strong> tool. 
                    Find conversational queries and long-tail keywords that AI platforms prefer.
                  </p>
                </div>
                <div className="hidden md:block">
                  <span className="text-4xl">🔑</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize Your Content</h3>
                  <p className="text-gray-700">
                    Transform your content using our <strong>Content Optimizer</strong>. 
                    Get AI-friendly structures, better formatting, and optimization suggestions.
                  </p>
                </div>
                <div className="hidden md:block">
                  <span className="text-4xl">✨</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Track & Monitor Performance</h3>
                  <p className="text-gray-700">
                    Monitor your success with our <strong>AI Visibility Tracker</strong>. 
                    Track citations, visibility, and performance across all major AI platforms.
                  </p>
                </div>
                <div className="hidden md:block">
                  <span className="text-4xl">📈</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Optimize for AI Search?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Start with any tool that matches your current needs, or follow our recommended workflow 
                  for comprehensive GEO optimization.
                </p>
                <Link 
                  href="/tools/geo-audit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition inline-flex items-center"
                >
                  Start with Content Audit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Optimize for All Major AI Platforms
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-semibold text-gray-900">ChatGPT</h3>
                <p className="text-sm text-gray-600">OpenAI GPT-4</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="font-semibold text-gray-900">Claude</h3>
                <p className="text-sm text-gray-600">Anthropic AI</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="font-semibold text-gray-900">Perplexity</h3>
                <p className="text-sm text-gray-600">AI Search Engine</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-semibold text-gray-900">Bing Chat</h3>
                <p className="text-sm text-gray-600">Microsoft AI</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="font-semibold text-gray-900">Gemini</h3>
                <p className="text-sm text-gray-600">Google AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Start Optimizing for AI Search Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators and marketers already using our GEO tools 
              to improve their AI search visibility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/geo-audit"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Start Free Audit
              </Link>
              <Link 
                href="/guide"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Learn GEO First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}