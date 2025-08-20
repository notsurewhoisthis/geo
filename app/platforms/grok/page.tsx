import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Grok Optimization Guide for GEO | AI Platform Optimization',
  description: 'Complete Grok optimization guide for Generative Engine Optimization. Learn proven strategies to improve your Grok AI visibility with platform-specific techniques.',
  keywords: [
    'Grok optimization',
    'Grok GEO',
    'xAI Grok optimization',
    'Generative Engine Optimization',
    'AI platform optimization',
    'Twitter integration optimization',
    'X platform AI optimization',
  ],
  openGraph: {
    title: 'Grok Optimization Guide for GEO | AI Platform Optimization',
    description: 'Complete Grok optimization guide for Generative Engine Optimization. Learn proven strategies to improve your Grok AI visibility.',
    type: 'article',
    url: 'https://generative-engine.org/platforms/grok',
    images: [{
      url: 'https://generative-engine.org/api/og?title=Grok%20GEO%20Guide&type=platform',
      width: 1200,
      height: 630,
      alt: 'Grok Optimization Guide'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grok Optimization Guide for GEO | AI Platform Optimization',
    description: 'Complete Grok optimization guide for Generative Engine Optimization.',
    images: ['https://generative-engine.org/api/og?title=Grok%20GEO%20Guide&type=platform'],
  },
  alternates: {
    canonical: 'https://generative-engine.org/platforms/grok',
  },
}

export default function GrokPlatformPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Platforms', href: '/platforms' },
    { name: 'Grok', href: '/platforms/grok' }
  ]

  const platform = {
    name: 'Grok',
    company: 'xAI',
    type: 'Conversational AI',
    userBase: '100+ million',
    launch: '2023',
    primaryUse: 'Real-time AI assistance with Twitter/X integration',
    geoOptimization: {
      citationWeight: 85,
      statisticsWeight: 78,
      faqWeight: 92,
      conversationalWeight: 95,
      authorityWeight: 82
    },
    keyFeatures: [
      'Real-time Twitter/X data access',
      'Conversational AI interface',
      'Humor and personality integration',
      'Current events awareness',
      'Social media context understanding',
      'Multi-modal interactions'
    ],
    optimizationStrategies: [
      'Optimize content for real-time queries and trending topics',
      'Create conversational FAQ sections that match Grok\'s informal tone',
      'Integrate social media context and current events references',
      'Focus on personality-driven content that resonates with Grok\'s style',
      'Optimize for Twitter/X-related queries and social media discussions',
      'Create timely, relevant content that leverages current conversations'
    ],
    contentPreferences: [
      'Conversational and engaging content',
      'Current events and trending topics',
      'Social media discussions and commentary',
      'FAQ sections with personality',
      'Real-time information and updates',
      'Humorous and relatable explanations'
    ],
    industries: [
      'Social Media',
      'Entertainment',
      'News and Media',
      'Technology',
      'Digital Marketing',
      'Content Creation'
    ]
  }

  // Calculate overall GEO score
  const geoScore = Math.round(
    (platform.geoOptimization.citationWeight +
     platform.geoOptimization.statisticsWeight +
     platform.geoOptimization.faqWeight +
     platform.geoOptimization.conversationalWeight +
     platform.geoOptimization.authorityWeight) / 5
  )

  // Schema markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${platform.name} Optimization Guide for GEO`,
    "description": `Complete optimization guide for ${platform.name} to improve visibility in generative AI engines.`,
    "author": {
      "@type": "Organization",
      "name": "Generative Engine Optimization Platform",
      "url": "https://generative-engine.org"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "GEO Platform",
      "logo": {
        "@type": "ImageObject",
        "url": "https://generative-engine.org/logo.png"
      }
    },
    "datePublished": "2025-01-18",
    "dateModified": "2025-01-18",
    "mainEntityOfPage": `https://generative-engine.org/platforms/${platform.name.toLowerCase()}`,
    "about": {
      "@type": "SoftwareApplication",
      "name": platform.name,
      "applicationCategory": "AI Platform",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "description": platform.primaryUse
      }
    },
    "mentions": [
      {
        "@type": "Organization",
        "name": platform.company
      },
      ...platform.industries.map(industry => ({
        "@type": "Thing",
        "name": industry
      }))
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How do I optimize content for ${platform.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `To optimize content for ${platform.name}, focus on ${platform.optimizationStrategies.slice(0, 2).join(' and ')}. This platform has a ${platform.geoOptimization.citationWeight}% citation weight and ${platform.geoOptimization.conversationalWeight}% conversational weight.`
        }
      },
      {
        "@type": "Question",
        "name": `What content types work best for ${platform.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${platform.name} responds best to ${platform.contentPreferences.slice(0, 3).join(', ')}. The platform launched in ${platform.launch} and serves ${platform.userBase} users with real-time information.`
        }
      },
      {
        "@type": "Question",
        "name": `What industries benefit most from ${platform.name} optimization?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The top industries for ${platform.name} optimization include ${platform.industries.slice(0, 4).join(', ')}. Each industry can leverage the platform's ${platform.type.toLowerCase()} capabilities and social media integration.`
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-blue-100">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {platform.name} 
                  </h1>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {platform.company}
                  </span>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Complete optimization guide for {platform.name} to maximize your visibility in xAI's conversational AI platform. 
                  Learn proven GEO strategies for {platform.type.toLowerCase()} with Twitter/X integration.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-green-50 px-4 py-2 rounded-lg">
                    <span className="text-green-800 font-semibold">{platform.userBase}</span>
                    <span className="text-green-600 text-sm ml-1">users</span>
                  </div>
                  <div className="bg-blue-50 px-4 py-2 rounded-lg">
                    <span className="text-blue-800 font-semibold">Launched</span>
                    <span className="text-blue-600 text-sm ml-1">{platform.launch}</span>
                  </div>
                  <div className="bg-purple-50 px-4 py-2 rounded-lg">
                    <span className="text-purple-800 font-semibold">GEO Score</span>
                    <span className="text-purple-600 text-sm ml-1">{geoScore}/100</span>
                  </div>
                </div>
              </div>
              
              {/* GEO Optimization Metrics */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">GEO Impact Metrics</h3>
                <div className="space-y-3">
                  {Object.entries(platform.geoOptimization).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 capitalize">
                        {key.replace('Weight', '').replace(/([A-Z])/g, ' $1')}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${value}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 min-w-[35px]">
                          {value}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Platform Overview */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {platform.name} is xAI's {platform.type.toLowerCase()}, launched in {platform.launch}, 
                    primarily used for {platform.primaryUse.toLowerCase()}. With access to {platform.userBase} users 
                    and real-time Twitter/X data, it represents a unique opportunity for 
                    Generative Engine Optimization focused on social media and current events.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {platform.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-blue-800">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-yellow-900 mb-4">🚀 What Makes Grok Unique</h3>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• <strong>Real-time Data:</strong> Direct access to Twitter/X conversations and trends</li>
                      <li>• <strong>Personality:</strong> Humorous, conversational tone that differs from other AI platforms</li>
                      <li>• <strong>Social Context:</strong> Understanding of social media dynamics and viral content</li>
                      <li>• <strong>Current Events:</strong> Always up-to-date with the latest news and discussions</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Optimization Strategies */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Grok-Specific GEO Strategies</h2>
                <div className="space-y-6">
                  {platform.optimizationStrategies.map((strategy, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-6 py-2">
                      <div className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 text-sm font-bold px-2 py-1 rounded min-w-[24px] text-center">
                          {index + 1}
                        </span>
                        <p className="text-gray-700 font-medium">{strategy}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Grok Pro Tip</h3>
                  <p className="text-gray-700">
                    Since Grok has a {platform.geoOptimization.conversationalWeight}% conversational effectiveness and direct Twitter/X access, 
                    focus heavily on real-time, engaging content that matches current social media conversations. 
                    Your content should be timely, relatable, and have personality - just like Grok itself!
                  </p>
                </div>
              </section>

              {/* Content Preferences */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Content That Grok Loves</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {platform.contentPreferences.map((preference, index) => (
                    <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                      <div className="flex items-center gap-3">
                        <span className="text-purple-600 text-xl">⚡</span>
                        <span className="text-purple-900 font-semibold">{preference}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-6 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-900 mb-3">🎯 Grok Content Strategy</h3>
                  <p className="text-orange-800">
                    Unlike other AI platforms, Grok thrives on content that has personality and connects with current social media trends. 
                    Your {platform.contentPreferences[0].toLowerCase()} should feel like it could be part of a Twitter/X conversation, 
                    not a formal academic paper. Think conversational, timely, and engaging.
                  </p>
                </div>
              </section>

              {/* Industry Applications */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries Perfect for Grok</h2>
                <p className="text-gray-700 mb-6">
                  {platform.name} optimization works particularly well for businesses in these industries that benefit from social media integration:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {platform.industries.map((industry, index) => (
                    <div key={index} className="bg-indigo-50 rounded-lg p-4 text-center border border-indigo-100">
                      <span className="text-indigo-900 font-semibold">{industry}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Industry-Specific Grok Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>Social Media:</strong> Create content about platform updates, trends, and social media strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>Entertainment:</strong> Focus on current events, pop culture, and trending topics with personality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>News and Media:</strong> Provide real-time analysis and commentary on breaking news</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      How is optimizing for Grok different from other AI platforms?
                    </h3>
                    <p className="text-gray-700">
                      Grok is unique because of its personality, humor, and real-time Twitter/X access. Unlike ChatGPT or Claude, 
                      Grok prefers conversational, engaging content that feels natural in social media contexts. 
                      Your content should have personality and connect with current trends.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      What's the best way to leverage Grok's Twitter/X integration?
                    </h3>
                    <p className="text-gray-700">
                      Create content that references current social media trends, viral topics, and ongoing conversations. 
                      Grok can access real-time Twitter data, so your content should be timely and relevant to current discussions. 
                      Think about what people are talking about right now on X.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      How quickly does Grok pick up new content compared to other platforms?
                    </h3>
                    <p className="text-gray-700">
                      Grok's real-time capabilities mean it can reference very recent content, especially if it's being discussed 
                      on Twitter/X. However, for broader content discovery, it may take similar timeframes to other AI platforms. 
                      The key advantage is in current events and trending topic coverage.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Should I optimize existing content for Grok or create new content?
                    </h3>
                    <p className="text-gray-700">
                      Both approaches work. You can adapt existing content by adding more personality, current references, 
                      and conversational elements. However, creating new content specifically for Grok's style and 
                      real-time capabilities often yields better results. Focus on making content feel fresh and engaging.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="/tools/visibility-tracker" 
                    className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    Test Grok Visibility
                  </a>
                  <a 
                    href="/tools/geo-audit" 
                    className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition font-semibold"
                  >
                    Run GEO Audit
                  </a>
                  <a 
                    href="/tools/content-optimizer" 
                    className="block w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition font-semibold"
                  >
                    Optimize for Grok
                  </a>
                </div>
              </div>

              {/* Platform Stats */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Platform Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">User Base</span>
                    <span className="font-bold text-gray-900">{platform.userBase}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Launch Year</span>
                    <span className="font-bold text-gray-900">{platform.launch}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Company</span>
                    <span className="font-bold text-gray-900">{platform.company}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Type</span>
                    <span className="font-bold text-gray-900">{platform.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">GEO Score</span>
                    <span className="font-bold text-indigo-600">{geoScore}/100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Best For</span>
                    <span className="font-bold text-green-600">Real-time content</span>
                  </div>
                </div>
              </div>

              {/* Related Platforms */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Platforms</h3>
                <div className="space-y-3">
                  <Link href="/platforms/chatgpt" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="font-semibold text-gray-900">ChatGPT</div>
                    <div className="text-sm text-gray-600">OpenAI's Conversational AI</div>
                  </Link>
                  <Link href="/platforms/claude" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="font-semibold text-gray-900">Claude</div>
                    <div className="text-sm text-gray-600">Anthropic's AI Assistant</div>
                  </Link>
                  <Link href="/platforms/perplexity" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <div className="font-semibold text-gray-900">Perplexity AI</div>
                    <div className="text-sm text-gray-600">AI-Powered Search</div>
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-indigo-100 mb-4 text-sm">
                  Get the latest Grok optimization strategies and GEO updates.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <button className="w-full bg-white text-indigo-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}