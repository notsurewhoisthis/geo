import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'
import { RelatedArticles } from '@/app/components/RelatedArticles'
import fs from 'fs'
import path from 'path'

interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt: string
  content?: string
  publishedAt: string
  updatedAt: string
  author: {
    name: string
    bio: string
  }
  tags?: string[]
  keywords: string[]
  metrics: {
    readingTime: number
    wordCount: number
  }
}

interface Platform {
  slug: string
  name: string
  company: string
  type: string
  userBase: string
  launch: string
  primaryUse: string
  geoOptimization: {
    citationWeight: number
    statisticsWeight: number
    faqWeight: number
    conversationalWeight: number
    authorityWeight: number
  }
  keyFeatures: string[]
  optimizationStrategies: string[]
  contentPreferences: string[]
  industries: string[]
}

async function getAllPlatforms(): Promise<Platform[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'platforms.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading platforms data:', error)
    return []
  }
}

async function getPlatform(slug: string): Promise<Platform | null> {
  const platforms = await getAllPlatforms()
  return platforms.find(platform => platform.slug === slug) || null
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDataPath = path.join(process.cwd(), 'public', 'blog-data')
    
    if (!fs.existsSync(blogDataPath)) {
      return []
    }
    
    const files = fs.readdirSync(blogDataPath).filter(file => file.endsWith('.json'))
    
    const posts = files.map(file => {
      const content = fs.readFileSync(path.join(blogDataPath, file), 'utf8')
      return JSON.parse(content) as BlogPost
    })
    
    return posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

export async function generateStaticParams() {
  const platforms = await getAllPlatforms()
  return platforms.map((platform) => ({
    platform: platform.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ platform: string }> }): Promise<Metadata> {
  const { platform: platformSlug } = await params
  const platform = await getPlatform(platformSlug)
  
  if (!platform) {
    return {
      title: 'Platform Not Found',
      description: 'The requested AI platform optimization guide was not found.'
    }
  }

  const title = `${platform.name} Optimization Guide for GEO | AI Platform Optimization`
  const description = `Complete ${platform.name} optimization guide for Generative Engine Optimization. Learn proven strategies to improve your ${platform.name} visibility with ${platform.geoOptimization.citationWeight}% citation impact and industry-specific techniques for ${platform.industries.join(', ')}.`

  return {
    title,
    description,
    keywords: [
      `${platform.name} optimization`,
      `${platform.name} GEO`,
      `${platform.company} AI optimization`,
      'Generative Engine Optimization',
      'AI platform optimization',
      ...platform.industries.map(industry => `${platform.name} ${industry}`),
      ...platform.contentPreferences.map(pref => `${platform.name} ${pref}`),
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.generative-engine.org/platforms/${platform.slug}`,
      images: [{
        url: `https://www.generative-engine.org/api/og?title=${encodeURIComponent(platform.name + ' GEO Guide')}&type=platform`,
        width: 1200,
        height: 630,
        alt: `${platform.name} Optimization Guide`
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://www.generative-engine.org/api/og?title=${encodeURIComponent(platform.name + ' GEO Guide')}&type=platform`],
    },
    alternates: {
      canonical: `https://www.generative-engine.org/platforms/${platform.slug}`,
    },
  }
}

export default async function PlatformPage({ params }: { params: Promise<{ platform: string }> }) {
  const { platform: platformSlug } = await params
  const platform = await getPlatform(platformSlug)
  
  if (!platform) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Platforms', href: '/platforms' },
    { name: platform.name, href: `/platforms/${platform.slug}` }
  ]

  // Calculate overall GEO score
  const geoScore = Math.round(
    (platform.geoOptimization.citationWeight +
     platform.geoOptimization.statisticsWeight +
     platform.geoOptimization.faqWeight +
     platform.geoOptimization.conversationalWeight +
     platform.geoOptimization.authorityWeight) / 5
  )

  // Get related blog posts
  const allPosts = await getAllBlogPosts()
  const relatedPosts = allPosts
    .filter(post => 
      post.title.toLowerCase().includes(platform.name.toLowerCase()) ||
      post.content?.toLowerCase().includes(platform.name.toLowerCase()) ||
      post.tags?.some(tag => 
        platform.industries.some(industry => 
          tag.toLowerCase().includes(industry.toLowerCase())
        )
      )
    )
    .slice(0, 3)

  // Schema markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${platform.name} Optimization Guide for GEO`,
    "description": `Complete optimization guide for ${platform.name} to improve visibility in generative AI engines.`,
    "author": {
      "@type": "Organization",
      "name": "Generative Engine Optimization Platform",
      "url": "https://www.generative-engine.org"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "GEO Platform",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.generative-engine.org/logo.png"
      }
    },
    "datePublished": "2025-01-18",
    "dateModified": "2025-01-18",
    "mainEntityOfPage": `https://www.generative-engine.org/platforms/${platform.slug}`,
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
          "text": `To optimize content for ${platform.name}, focus on ${platform.optimizationStrategies.slice(0, 2).join(' and ')}. This platform has a ${platform.geoOptimization.citationWeight}% citation weight and ${platform.geoOptimization.statisticsWeight}% statistics weight.`
        }
      },
      {
        "@type": "Question",
        "name": `What content types work best for ${platform.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${platform.name} responds best to ${platform.contentPreferences.join(', ')}. The platform launched in ${platform.launch} and serves ${platform.userBase} users.`
        }
      },
      {
        "@type": "Question",
        "name": `What industries benefit most from ${platform.name} optimization?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The top industries for ${platform.name} optimization include ${platform.industries.join(', ')}. Each industry can leverage the platform's ${platform.type.toLowerCase()} capabilities.`
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
                  Complete optimization guide for {platform.name} to maximize your visibility in generative AI engines. Learn proven GEO strategies for {platform.type.toLowerCase()}.
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
                    {platform.name} is a {platform.type.toLowerCase()} developed by {platform.company}, 
                    primarily used for {platform.primaryUse.toLowerCase()}. With over {platform.userBase} users 
                    since its launch in {platform.launch}, it represents a significant opportunity for 
                    Generative Engine Optimization.
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
                </div>
              </section>

              {/* Optimization Strategies */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">GEO Optimization Strategies</h2>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Pro Tip</h3>
                  <p className="text-gray-700">
                    For {platform.name}, focus heavily on {platform.geoOptimization.citationWeight >= 90 ? 'citations and authoritative sources' : platform.geoOptimization.statisticsWeight >= 90 ? 'statistical data and metrics' : platform.geoOptimization.faqWeight >= 90 ? 'FAQ sections and conversational content' : 'comprehensive content optimization'}. 
                    This platform shows a {Math.max(...Object.values(platform.geoOptimization))}% effectiveness for this approach.
                  </p>
                </div>
              </section>

              {/* Content Preferences */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Content That Performs Best</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {platform.contentPreferences.map((preference, index) => (
                    <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                      <div className="flex items-center gap-3">
                        <span className="text-purple-600 text-xl">📝</span>
                        <span className="text-purple-900 font-semibold">{preference}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-bold text-yellow-900 mb-3">⚡ Quick Win Strategy</h3>
                  <p className="text-yellow-800">
                    Start with {platform.contentPreferences[0].toLowerCase()} as your primary content type for {platform.name}. 
                    This aligns perfectly with the platform's {platform.type.toLowerCase()} nature and {platform.primaryUse.toLowerCase()} focus.
                  </p>
                </div>
              </section>

              {/* Industry Applications */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Applications</h2>
                <p className="text-gray-700 mb-6">
                  {platform.name} optimization works particularly well for businesses in these industries:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {platform.industries.map((industry, index) => (
                    <div key={index} className="bg-indigo-50 rounded-lg p-4 text-center border border-indigo-100">
                      <span className="text-indigo-900 font-semibold">{industry}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Industry-Specific Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>{platform.industries[0]}:</strong> Focus on {platform.contentPreferences[0].toLowerCase()} with industry-specific case studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>{platform.industries[1] || platform.industries[0]}:</strong> Emphasize {platform.geoOptimization.statisticsWeight >= 85 ? 'data-driven insights' : 'authoritative content'} and ROI metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>All Industries:</strong> Maintain consistent {platform.type.toLowerCase()} optimization across all content</span>
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
                      How effective is GEO optimization for {platform.name}?
                    </h3>
                    <p className="text-gray-700">
                      {platform.name} optimization can be highly effective, with our data showing up to {geoScore}% improvement in visibility. 
                      The platform's {platform.geoOptimization.citationWeight}% citation weight means that authoritative sources 
                      significantly impact your ranking potential.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      What's the best content format for {platform.name}?
                    </h3>
                    <p className="text-gray-700">
                      Based on our analysis, {platform.contentPreferences[0].toLowerCase()} perform best on {platform.name}. 
                      This aligns with the platform's focus on {platform.primaryUse.toLowerCase()} and its {platform.userBase} user base expectations.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      How long does it take to see results from {platform.name} optimization?
                    </h3>
                    <p className="text-gray-700">
                      Typically, you can expect to see initial improvements in {platform.name} visibility within 2-4 weeks of implementing 
                      GEO strategies. However, significant results usually appear after 6-8 weeks of consistent optimization efforts.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Can I use the same content for {platform.name} and other AI platforms?
                    </h3>
                    <p className="text-gray-700">
                      While some content can be adapted across platforms, {platform.name}'s unique {platform.type.toLowerCase()} characteristics 
                      require platform-specific optimization. We recommend creating tailored content that leverages {platform.name}'s 
                      {platform.geoOptimization.conversationalWeight >= 85 ? 'conversational strengths' : 'analytical capabilities'}.
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
                    Test {platform.name} Visibility
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
                    Optimize Content
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
                </div>
              </div>

              {/* Related Platforms */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Platforms</h3>
                <div className="space-y-3">
                  {platform.company === 'OpenAI' && platform.slug !== 'claude' && (
                    <a href="/platforms/claude" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className="font-semibold text-gray-900">Claude</div>
                      <div className="text-sm text-gray-600">Anthropic's AI Assistant</div>
                    </a>
                  )}
                  {platform.company !== 'OpenAI' && platform.slug !== 'chatgpt' && (
                    <a href="/platforms/chatgpt" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className="font-semibold text-gray-900">ChatGPT</div>
                      <div className="text-sm text-gray-600">OpenAI's Conversational AI</div>
                    </a>
                  )}
                  {platform.slug !== 'perplexity' && (
                    <a href="/platforms/perplexity" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className="font-semibold text-gray-900">Perplexity AI</div>
                      <div className="text-sm text-gray-600">AI-Powered Search</div>
                    </a>
                  )}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-indigo-100 mb-4 text-sm">
                  Get the latest {platform.name} optimization strategies and GEO updates.
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

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <RelatedArticles 
                currentSlug={platform.slug}
                currentTags={[...platform.industries, platform.type, 'AI Platform', 'GEO']}
                allPosts={allPosts}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export const revalidate = 604800 // Revalidate every 7 days