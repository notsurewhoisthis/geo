import Link from 'next/link'
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'

interface Industry {
  slug: string
  name: string
  category: string
  description: string
  marketSize: string
  growth: string
  aiAdoption: string
}

interface Platform {
  slug: string
  name: string
  company: string
  type: string
  userBase: string
  description?: string
  primaryUse?: string
  industries: string[]
}

interface Comparison {
  slug: string
  title: string
  subtitle: string
  category: string
  difficulty: string
  impact: string
  geoTechnique: string
  traditionalTechnique: string
  timeToResults: string
}

export const metadata: Metadata = {
  title: 'GEO - Generative Engine Optimization | Master AI-Powered Search',
  description: 'Learn Generative Engine Optimization (GEO) to boost your AI visibility by 40%. Optimize for ChatGPT, Claude, Perplexity, and other AI search engines with proven strategies.',
  keywords: 'generative engine optimization, GEO, AI SEO, ChatGPT optimization, Claude optimization, Perplexity AI, LLM optimization, AI search visibility',
  alternates: {
    canonical: 'https://generative-engine.org',
  },
}

export default async function Home() {
  // Get latest blog posts
  const blogDataDir = path.join(process.cwd(), 'public', 'blog-data')
  const latestPosts = []
  
  try {
    const files = fs.readdirSync(blogDataDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    for (const file of jsonFiles) {
      const filePath = path.join(blogDataDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const post = JSON.parse(fileContent)
      latestPosts.push(post)
    }
    
    // Sort by publishedAt date (newest first)
    latestPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
  }
  
  // Get the 3 most recent posts
  const recentPosts = latestPosts.slice(0, 3)

  // Load programmatic content data
  const getPopularIndustries = async (): Promise<Industry[]> => {
    try {
      const industriesPath = path.join(process.cwd(), 'public', 'data', 'industries.json')
      if (!fs.existsSync(industriesPath)) return []
      
      const content = fs.readFileSync(industriesPath, 'utf8')
      const allIndustries = JSON.parse(content) as Industry[]
      
      // Sort by market size and get top 8
      return allIndustries
        .sort((a, b) => {
          const aSizeNumber = parseFloat(a.marketSize.replace(/[^0-9.]/g, ''))
          const bSizeNumber = parseFloat(b.marketSize.replace(/[^0-9.]/g, ''))
          return bSizeNumber - aSizeNumber
        })
        .slice(0, 8)
    } catch (error) {
      console.error('Error loading industries:', error)
      return []
    }
  }

  const getTopPlatforms = async (): Promise<Platform[]> => {
    try {
      const platformsPath = path.join(process.cwd(), 'public', 'data', 'platforms.json')
      if (!fs.existsSync(platformsPath)) return []
      
      const content = fs.readFileSync(platformsPath, 'utf8')
      const allPlatforms = JSON.parse(content) as Platform[]
      
      // Get well-known platforms by filtering specific slugs
      const topSlugs = ['chatgpt', 'claude', 'perplexity', 'gemini', 'copilot', 'bing-chat']
      const topPlatforms = allPlatforms.filter(platform => 
        topSlugs.some(slug => platform.slug.includes(slug)) ||
        ['ChatGPT', 'Claude', 'Perplexity', 'Gemini', 'Copilot', 'Bing'].some(name => 
          platform.name.includes(name)
        )
      )
      
      // If we don't have enough known platforms, get the ones with largest user bases
      if (topPlatforms.length < 6) {
        const remainingPlatforms = allPlatforms
          .filter(platform => !topPlatforms.includes(platform))
          .sort((a, b) => {
            const aUsers = parseFloat(a.userBase.replace(/[^0-9.]/g, ''))
            const bUsers = parseFloat(b.userBase.replace(/[^0-9.]/g, ''))
            return bUsers - aUsers
          })
        
        topPlatforms.push(...remainingPlatforms.slice(0, 6 - topPlatforms.length))
      }
      
      return topPlatforms.slice(0, 6)
    } catch (error) {
      console.error('Error loading platforms:', error)
      return []
    }
  }

  const getComparisons = async (): Promise<Comparison[]> => {
    try {
      const comparisonsPath = path.join(process.cwd(), 'public', 'data', 'comparisons.json')
      if (!fs.existsSync(comparisonsPath)) return []
      
      const content = fs.readFileSync(comparisonsPath, 'utf8')
      return JSON.parse(content) as Comparison[]
    } catch (error) {
      console.error('Error loading comparisons:', error)
      return []
    }
  }

  const [popularIndustries, topPlatforms, comparisons] = await Promise.all([
    getPopularIndustries(),
    getTopPlatforms(), 
    getComparisons()
  ])
  
  const comparisonData = [
    { 
      aspect: 'Primary Focus',
      traditionalSEO: 'Keyword density & backlinks',
      geo: 'Semantic understanding & citations'
    },
    {
      aspect: 'Content Structure',
      traditionalSEO: 'Short, keyword-focused',
      geo: 'Comprehensive, conversational'
    },
    {
      aspect: 'Optimization Target',
      traditionalSEO: 'Search engine crawlers',
      geo: 'Large Language Models (LLMs)'
    },
    {
      aspect: 'Success Metrics',
      traditionalSEO: 'Rankings & clicks',
      geo: 'AI citations & visibility'
    },
    {
      aspect: 'Content Format',
      traditionalSEO: 'Web pages & metadata',
      geo: 'Structured data & knowledge graphs'
    },
    {
      aspect: 'User Intent',
      traditionalSEO: '2-4 word queries',
      geo: '10-11 word conversational queries'
    },
  ]

  const stats = [
    { value: '400M+', label: 'ChatGPT Users', subtext: 'Active monthly users' },
    { value: '40%', label: 'Visibility Boost', subtext: 'With proper GEO' },
    { value: '65%', label: 'AI Search Growth', subtext: 'Year over year' },
    { value: '2025', label: 'The GEO Era', subtext: 'AI-first search begins' },
  ]

  const faqItems = [
    {
      question: 'What is Generative Engine Optimization (GEO)?',
      answer: 'GEO is the practice of optimizing content specifically for AI-powered search engines and chatbots like ChatGPT, Claude, and Perplexity. It focuses on making content easily understandable and citable by Large Language Models.'
    },
    {
      question: 'How is GEO different from traditional SEO?',
      answer: 'While SEO optimizes for search engine crawlers using keywords and backlinks, GEO optimizes for AI comprehension using semantic structure, comprehensive coverage, and authoritative citations. GEO requires conversational content that answers complex queries.'
    },
    {
      question: 'Why is GEO important in 2025?',
      answer: 'With over 400 million ChatGPT users and rapidly growing AI search adoption, GEO is essential for maintaining visibility. Studies show proper GEO implementation can boost AI visibility by 40%, making it critical for future content strategy.'
    },
    {
      question: 'What are the key GEO ranking factors?',
      answer: 'Key GEO factors include: semantic clarity, comprehensive topic coverage, authoritative citations, structured data implementation, conversational tone, factual accuracy, and regular content updates.'
    },
    {
      question: 'How do I start implementing GEO?',
      answer: 'Start by: 1) Creating comprehensive, authoritative content, 2) Implementing structured data and schema markup, 3) Using clear heading hierarchies, 4) Adding citations and statistics, 5) Writing in a conversational tone, 6) Monitoring AI platform visibility.'
    },
  ]

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GEO Platform',
    description: 'Leading platform for Generative Engine Optimization education and implementation',
    url: 'https://generative-engine.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://generative-engine.org/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white">
          <div className="container-blog relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 animate-pulse">
                🚀 THE FUTURE OF SEO IS HERE
              </div>
              
              <h1 className="hero-title text-gray-900 mb-6">
                Master <span className="gradient-text">Generative Engine</span> Optimization
              </h1>
              
              <p className="text-2xl text-gray-700 mb-4 font-medium">
                Boost Your AI Visibility by 40% Across ChatGPT, Claude & Perplexity
              </p>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Traditional SEO isn't enough anymore. With 400+ million users on AI platforms, 
                learn how to optimize your content for Large Language Models and dominate the new era of AI-powered search.
              </p>
              
              <div className="flex gap-4 justify-center flex-wrap mb-12">
                <Link href="#what-is-geo" className="btn-primary text-lg px-8 py-4">
                  Discover GEO Strategies →
                </Link>
                <Link href="/blog" className="btn-secondary text-lg px-8 py-4">
                  Read Latest Guides
                </Link>
              </div>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap gap-8 justify-center text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>100+ In-Depth Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>50K+ Monthly Readers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Industry Leading Research</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="container-blog">
            <div className="text-center mb-16">
              <h2 className="section-title text-gray-900 mb-4">The AI Search Revolution</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The numbers don't lie - AI-powered search is transforming how people find information online
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.subtext}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 text-center italic">
                "By 2025, over 50% of search queries will be processed through AI-powered interfaces. 
                Organizations that don't adapt their content strategy for GEO risk losing significant visibility."
              </p>
              <p className="text-center text-gray-600 mt-4">- Industry Research Report, 2024</p>
            </div>
          </div>
        </section>

        {/* What is GEO Section */}
        <section className="py-20 px-4" id="what-is-geo">
          <div className="container-blog">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title text-gray-900 mb-6">What is Generative Engine Optimization?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Generative Engine Optimization (GEO) is the evolution of SEO for the AI age. 
                  As Large Language Models like ChatGPT, Claude, and Perplexity become primary 
                  information sources, traditional SEO tactics fall short.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  GEO focuses on optimizing content for how AI models understand, process, and 
                  cite information. This means creating content that's not just keyword-rich, 
                  but semantically clear, comprehensive, and authoritative.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Semantic Optimization</h4>
                      <p className="text-gray-600">Structure content for AI comprehension using clear entities and relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Citation Optimization</h4>
                      <p className="text-gray-600">Include statistics, research, and authoritative sources that AI models prefer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Conversational Content</h4>
                      <p className="text-gray-600">Write for 10-11 word queries that mirror natural AI interactions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">GEO Success Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">AI Citation Rate</span>
                      <span className="font-semibold text-blue-600">+40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">LLM Visibility Score</span>
                      <span className="font-semibold text-green-600">+65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Semantic Clarity Score</span>
                      <span className="font-semibold text-purple-600">+80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Authority Recognition</span>
                      <span className="font-semibold text-orange-600">+55%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-6 text-center">
                  Average improvements after GEO implementation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO vs GEO Comparison */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container-blog">
            <div className="text-center mb-12">
              <h2 className="section-title text-gray-900 mb-4">Traditional SEO vs. GEO</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the key differences is crucial for adapting your content strategy
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Aspect</th>
                    <th className="px-6 py-4 text-left">Traditional SEO</th>
                    <th className="px-6 py-4 text-left">Generative Engine Optimization</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.aspect}</td>
                      <td className="px-6 py-4 text-gray-700">{row.traditionalSEO}</td>
                      <td className="px-6 py-4 text-gray-700">{row.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/seo-vs-geo-complete-guide" className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition">
                Read our complete guide: SEO vs GEO →
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4">
          <div className="container-blog">
            <div className="text-center mb-12">
              <h2 className="section-title text-gray-900 mb-4">GEO Success Stories</h2>
              <p className="text-xl text-gray-600">Real results from implementing GEO strategies</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl font-bold text-blue-600 mb-4">+300%</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Citations Increase</h3>
                <p className="text-gray-600 mb-4">
                  E-commerce site saw 300% increase in ChatGPT citations after implementing 
                  structured data and conversational content optimization.
                </p>
                <Link href="/case-studies/ecommerce-geo" className="text-blue-600 font-semibold">
                  Read Case Study →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl font-bold text-green-600 mb-4">+250%</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Organic Traffic Growth</h3>
                <p className="text-gray-600 mb-4">
                  Tech blog experienced 250% traffic increase from AI-powered search 
                  after comprehensive GEO implementation.
                </p>
                <Link href="/case-studies/tech-blog-geo" className="text-blue-600 font-semibold">
                  Read Case Study →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl font-bold text-purple-600 mb-4">Top 3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Perplexity Rankings</h3>
                <p className="text-gray-600 mb-4">
                  SaaS platform achieved top 3 positions in Perplexity AI for 
                  all target keywords within 60 days.
                </p>
                <Link href="/case-studies/saas-perplexity" className="text-blue-600 font-semibold">
                  Read Case Study →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* GEO Best Practices - Enhanced */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container-blog">
            <div className="text-center mb-12">
              <h2 className="section-title text-gray-900 mb-4">GEO Best Practices</h2>
              <p className="text-xl text-gray-600">Proven techniques for optimizing content for AI engines</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Clear Entity Definition',
                  description: 'Define entities, concepts, and relationships explicitly to help AI models understand context and connections.',
                  icon: '🎯',
                  color: 'blue',
                },
                {
                  title: 'Conversational Tone',
                  description: 'Write in natural language that mirrors how users interact with AI assistants - use 10-11 word query patterns.',
                  icon: '💬',
                  color: 'green',
                },
                {
                  title: 'Comprehensive Coverage',
                  description: 'Create authoritative, in-depth content (2000+ words) that serves as a reliable source for AI training.',
                  icon: '📚',
                  color: 'purple',
                },
                {
                  title: 'Structured Formatting',
                  description: 'Use clear H1-H3 hierarchies, numbered lists, and logical organization for better content parsing.',
                  icon: '📝',
                  color: 'orange',
                },
                {
                  title: 'Citations & Statistics',
                  description: 'Include research citations, statistics (like "40% improvement"), and authoritative sources.',
                  icon: '📊',
                  color: 'red',
                },
                {
                  title: 'Regular Updates',
                  description: 'Keep content fresh with monthly updates to maintain relevance in AI training datasets.',
                  icon: '🔄',
                  color: 'indigo',
                },
              ].map((practice, index) => (
                <div key={index} className="bg-white rounded-lg border-2 border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all">
                  <div className="text-3xl mb-4">{practice.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{practice.title}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container-blog max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="section-title text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about GEO</p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                    <span className="text-blue-600 mr-3">Q:</span>
                    {item.question}
                  </h3>
                  <p className="text-gray-700 pl-8">
                    <span className="text-green-600 font-semibold">A:</span> {item.answer}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Have more questions?</p>
              <Link href="/contact" className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition">
                Contact our GEO experts →
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Articles - Enhanced */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container-blog">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="section-title text-gray-900">Latest GEO Insights</h2>
                <p className="text-xl text-gray-600">Fresh strategies and case studies</p>
              </div>
              <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                View All Articles →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.length > 0 ? (
                recentPosts.map((post, index) => {
                  const colors = [
                    'from-blue-400 to-blue-600',
                    'from-purple-400 to-purple-600',
                    'from-green-400 to-green-600'
                  ]
                  const category = post.category || 'Article'
                  const publishedDate = new Date(post.publishedAt)
                  const daysAgo = Math.floor((Date.now() - publishedDate.getTime()) / (1000 * 60 * 60 * 24))
                  const timeAgo = daysAgo === 0 ? 'Today' : daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`
                  
                  return (
                    <article key={post.slug} className="article-card group">
                      <div className={`aspect-video bg-gradient-to-br ${colors[index]} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="badge badge-blue">{category}</span>
                          <span className="text-sm text-gray-500">{timeAgo}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.description}
                        </p>
                        <Link href={`/${post.slug}`} className="text-blue-600 font-semibold hover:text-blue-700 transition">
                          Read Full Article →
                        </Link>
                      </div>
                    </article>
                  )
                })
              ) : (
                // Fallback content if no posts
                <>
                  <article className="article-card group">
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="badge badge-blue">Tutorial</span>
                        <span className="text-sm text-gray-500">Coming Soon</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                        Complete Guide to ChatGPT Optimization
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        Learn how to structure your content for maximum visibility in ChatGPT responses, 
                        including semantic markup, citation strategies, and conversation optimization.
                      </p>
                      <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                        View All Articles →
                      </Link>
                    </div>
                  </article>
                  
                  <article className="article-card group">
                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="badge badge-blue">Research</span>
                        <span className="text-sm text-gray-500">Coming Soon</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                        2025 GEO Trends: What's Coming Next
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        Discover emerging GEO trends including multi-modal optimization, voice-first content, 
                        and new AI platforms entering the search landscape.
                      </p>
                      <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                        View All Articles →
                      </Link>
                    </div>
                  </article>
                  
                  <article className="article-card group">
                    <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="badge badge-blue">Case Study</span>
                        <span className="text-sm text-gray-500">Coming Soon</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                        How We Dominated Perplexity AI Rankings
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        Real-world case study showing how we achieved top positions in Perplexity AI 
                        for competitive keywords using advanced GEO techniques.
                      </p>
                      <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                        View All Articles →
                      </Link>
                    </div>
                  </article>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Popular Industries Section */}
        {popularIndustries.length > 0 && (
          <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="container-blog">
              <div className="text-center mb-16">
                <h2 className="section-title text-gray-900 mb-4">
                  Industry-Specific GEO Strategies
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how leading industries optimize for AI platforms. Get tailored strategies for your sector.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    📊 560+ Industry Guides Available
                  </span>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {popularIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group block bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl">🏢</div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{industry.marketSize}</div>
                        <div className="text-xs text-gray-500">Market Size</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
                      {industry.name}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3 text-sm">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">{industry.category}</span>
                      <span className="text-blue-600 font-semibold">{industry.growth} growth</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 text-xs font-semibold">
                        {industry.aiAdoption} AI adoption
                      </span>
                      <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center">
                <Link 
                  href="/industries" 
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  <span>View All 560+ Industries</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Top AI Platforms Section */}
        {topPlatforms.length > 0 && (
          <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
            <div className="container-blog">
              <div className="text-center mb-16">
                <h2 className="section-title text-gray-900 mb-4">
                  Master Every AI Platform
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Platform-specific optimization strategies for maximum AI visibility. Each guide includes metrics, 
                  best practices, and proven techniques.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                    🤖 103+ AI Platform Guides
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {topPlatforms.map((platform) => (
                  <Link
                    key={platform.slug}
                    href={`/platforms/${platform.slug}`}
                    className="group block bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-3xl">🤖</div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-purple-600">{platform.company}</div>
                        <div className="text-xs text-gray-500">{platform.type}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                      {platform.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {platform.description || `Optimize your content for ${platform.name} with proven GEO strategies`}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Users:</span>
                        <span className="font-bold text-gray-900">{platform.userBase}+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Primary Use:</span>
                        <span className="text-sm text-gray-700 capitalize">{platform.primaryUse?.split(' ').slice(0, 2).join(' ') || platform.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
                        {platform.industries?.length || 0} Industries
                      </span>
                      <span className="text-purple-600 font-semibold group-hover:text-purple-700 transition">
                        Optimize →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center">
                <Link 
                  href="/platforms" 
                  className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
                >
                  <span>Explore All 103+ Platforms</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Strategy Comparisons Section */}
        {comparisons.length > 0 && (
          <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
            <div className="container-blog">
              <div className="text-center mb-16">
                <h2 className="section-title text-gray-900 mb-4">
                  GEO vs Traditional SEO
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Make informed decisions with detailed comparisons between GEO and traditional optimization strategies. 
                  Understand when and why to choose each approach.
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                    ⚡ 5 Essential Comparisons
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {comparisons.slice(0, 3).map((comparison) => (
                  <Link
                    key={comparison.slug}
                    href={`/compare/${comparison.slug}`}
                    className="group block bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-2xl">⚡</div>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded font-medium ${
                          comparison.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                          comparison.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {comparison.difficulty}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded font-medium ${
                          comparison.impact === 'High' ? 'bg-purple-100 text-purple-700' :
                          comparison.impact === 'Medium-High' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {comparison.impact} Impact
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                      {comparison.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {comparison.subtitle}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-indigo-600 font-medium">🚀 {comparison.geoTechnique}</span>
                        <span className="text-gray-500">vs</span>
                        <span className="text-orange-600 font-medium">🎯 {comparison.traditionalTechnique}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">
                        Results in {comparison.timeToResults}
                      </span>
                      <span className="text-orange-600 font-semibold group-hover:text-orange-700 transition">
                        Compare →
                      </span>
                    </div>
                  </Link>
                ))}
                
                {/* Show remaining comparisons as smaller items */}
                {comparisons.slice(3).map((comparison) => (
                  <Link
                    key={comparison.slug}
                    href={`/compare/${comparison.slug}`}
                    className="group block bg-orange-50 rounded-lg p-4 hover:bg-orange-100 transition border border-orange-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition text-sm">
                      {comparison.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">{comparison.difficulty} • {comparison.impact}</span>
                      <span className="text-orange-600 text-xs font-medium">Compare →</span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center">
                <Link 
                  href="/compare" 
                  className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
                >
                  <span>View All Strategy Comparisons</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Tools & Resources */}
        <section className="py-20 px-4">
          <div className="container-blog">
            <div className="text-center mb-12">
              <h2 className="section-title text-gray-900 mb-4">GEO Tools & Resources</h2>
              <p className="text-xl text-gray-600">Everything you need to implement GEO successfully</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/tools/geo-audit" className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GEO Audit Tool</h3>
                <p className="text-gray-600">Analyze your content's AI optimization score</p>
              </Link>
              
              <Link href="/tools/keyword-research" className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="text-3xl mb-4">🔑</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Keyword Research</h3>
                <p className="text-gray-600">Find conversational queries for AI platforms</p>
              </Link>
              
              <Link href="/tools/content-optimizer" className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Content Optimizer</h3>
                <p className="text-gray-600">Optimize existing content for GEO</p>
              </Link>
              
              <Link href="/tools/visibility-tracker" className="block bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Visibility Tracker</h3>
                <p className="text-gray-600">Monitor your AI platform citations</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="container-blog text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Ahead of the GEO Curve
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get weekly insights on Generative Engine Optimization strategies, 
              AI platform updates, and exclusive case studies delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-blue-200 text-sm mt-4">
                Join 10,000+ marketers mastering GEO. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="container-blog">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Dominate AI Search?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't let your competitors get ahead in the AI revolution. 
                Start implementing GEO strategies today and secure your position in the future of search.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/getting-started" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Get Started with GEO
                </Link>
                <Link href="/consultation" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}