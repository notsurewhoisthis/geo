import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs, BlogBreadcrumbs } from '@/app/components/Breadcrumbs'

interface Industry {
  slug: string
  name: string
  category: string
  description: string
  marketSize: string
  growth: string
  aiAdoption: string
  searchVolume: number
  commercialIntent: string
  challenges: string[]
  geoOpportunities: string[]
  keyMetrics: {
    [key: string]: string | number
  }
  tools: string[]
  caseStudies: {
    company: string
    improvement: string
    strategy: string
  }[]
}

async function getIndustry(slug: string): Promise<Industry | null> {
  try {
    const industriesPath = path.join(process.cwd(), 'public', 'data', 'industries.json')
    
    if (!fs.existsSync(industriesPath)) {
      return null
    }
    
    const content = fs.readFileSync(industriesPath, 'utf8')
    const industries = JSON.parse(content) as Industry[]
    
    return industries.find(industry => industry.slug === slug) || null
  } catch (error) {
    console.error('Error loading industry data:', error)
    return null
  }
}

async function getAllIndustries(): Promise<Industry[]> {
  try {
    const industriesPath = path.join(process.cwd(), 'public', 'data', 'industries.json')
    
    if (!fs.existsSync(industriesPath)) {
      return []
    }
    
    const content = fs.readFileSync(industriesPath, 'utf8')
    return JSON.parse(content) as Industry[]
  } catch (error) {
    console.error('Error loading industries:', error)
    return []
  }
}

interface Platform {
  slug: string
  name: string
  company: string
  type: string
  userBase: string
  primaryUse: string
  industries: string[]
}

interface Comparison {
  slug: string
  title: string
  subtitle: string
  category: string
  difficulty: string
  impact: string
}

async function getRelevantPlatforms(industry: Industry): Promise<Platform[]> {
  try {
    const platformsPath = path.join(process.cwd(), 'public', 'data', 'platforms.json')
    if (!fs.existsSync(platformsPath)) {
      return []
    }
    
    const content = fs.readFileSync(platformsPath, 'utf8')
    const allPlatforms = JSON.parse(content) as Platform[]
    
    // Find platforms that serve this industry or related keywords
    return allPlatforms
      .filter(platform => 
        platform.industries.some(ind => 
          ind.toLowerCase().includes(industry.category.toLowerCase()) ||
          ind.toLowerCase().includes(industry.name.toLowerCase().split(' ')[0]) ||
          industry.name.toLowerCase().includes(ind.toLowerCase())
        )
      )
      .slice(0, 3) // Show top 3 most relevant
  } catch (error) {
    console.error('Error loading platforms:', error)
    return []
  }
}

async function getRelevantComparisons(industry: Industry): Promise<Comparison[]> {
  try {
    const comparisonsPath = path.join(process.cwd(), 'public', 'data', 'comparisons.json')
    if (!fs.existsSync(comparisonsPath)) {
      return []
    }
    
    const content = fs.readFileSync(comparisonsPath, 'utf8')
    const allComparisons = JSON.parse(content) as Comparison[]
    
    // Return all comparisons as they're relevant to all industries
    return allComparisons.slice(0, 2) // Show top 2 comparisons
  } catch (error) {
    console.error('Error loading comparisons:', error)
    return []
  }
}

export async function generateStaticParams() {
  const industries = await getAllIndustries()
  return industries.map((industry) => ({
    industry: industry.slug,
  }))
}

// Enable ISR (Incremental Static Regeneration) - revalidate every 7 days for industry data
export const revalidate = 604800

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ industry: string }> 
}): Promise<Metadata> {
  const { industry: industrySlug } = await params
  const industry = await getIndustry(industrySlug)
  
  if (!industry) {
    return {
      title: 'Industry Not Found - GEO Platform',
      description: 'The requested industry optimization guide could not be found.',
    }
  }
  
  return {
    title: `GEO for ${industry.name} - AI Search Optimization Guide | GEO Platform`,
    description: `Complete Generative Engine Optimization guide for ${industry.name.toLowerCase()}. Learn how to optimize ${industry.name.toLowerCase()} websites for ChatGPT, Claude, and other AI platforms. Market size: ${industry.marketSize}, Growth: ${industry.growth}.`,
    keywords: [
      `GEO for ${industry.name.toLowerCase()}`,
      `${industry.name.toLowerCase()} AI SEO`,
      `${industry.name.toLowerCase()} ChatGPT optimization`,
      'generative engine optimization',
      `${industry.name.toLowerCase()} digital marketing`,
      `AI search optimization ${industry.name.toLowerCase()}`
    ].join(', '),
    openGraph: {
      title: `GEO for ${industry.name} - Complete AI Optimization Guide`,
      description: `${industry.description} Market size: ${industry.marketSize} with ${industry.growth} annual growth.`,
      url: `https://generative-engine.org/industries/${industry.slug}`,
      siteName: 'GEO Platform',
      images: [
        {
          url: `https://generative-engine.org/api/og?title=GEO%20for%20${encodeURIComponent(industry.name)}&subtitle=${encodeURIComponent(industry.category)}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `GEO for ${industry.name} - AI Optimization Guide`,
      description: industry.description,
      images: [`https://generative-engine.org/api/og?title=GEO%20for%20${encodeURIComponent(industry.name)}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://generative-engine.org/industries/${industry.slug}`,
    },
  }
}

export default async function IndustryPage({ 
  params 
}: { 
  params: Promise<{ industry: string }> 
}) {
  const { industry: industrySlug } = await params
  const industry = await getIndustry(industrySlug)
  
  if (!industry) {
    notFound()
  }

  const allIndustries = await getAllIndustries()
  const relatedIndustries = allIndustries
    .filter(ind => ind.slug !== industry.slug && ind.category === industry.category)
    .slice(0, 3)
    
  // Get cross-references to platforms and comparisons
  const relevantPlatforms = await getRelevantPlatforms(industry)
  const relevantComparisons = await getRelevantComparisons(industry)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Industries', href: '/industries' },
    { name: industry.name, href: `/industries/${industry.slug}` }
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                {industry.category} Industry
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                GEO for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{industry.name}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                {industry.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#optimization-guide" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition text-center"
                >
                  Start Optimizing
                </Link>
                <Link 
                  href="#tools" 
                  className="border border-gray-300 hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition text-center"
                >
                  View Tools
                </Link>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Industry Snapshot</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Market Size</span>
                  <span className="text-2xl font-bold text-green-400">{industry.marketSize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Annual Growth</span>
                  <span className="text-2xl font-bold text-blue-400">{industry.growth}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Adoption</span>
                  <span className="text-2xl font-bold text-purple-400">{industry.aiAdoption}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Search Volume</span>
                  <span className="text-2xl font-bold text-orange-400">{industry.searchVolume.toLocaleString()}/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Industry Challenges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Key Challenges in {industry.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.challenges.map((challenge, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge #{index + 1}</h3>
                      <p className="text-gray-700">{challenge}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GEO Optimization Guide */}
          <section id="optimization-guide" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              GEO Strategies for {industry.name}
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Proven AI Optimization Opportunities
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {industry.geoOpportunities.map((opportunity, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Strategy #{index + 1}</h4>
                        <p className="text-gray-700">{opportunity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Roadmap */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                90-Day Implementation Roadmap
              </h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      <span className="font-bold">30</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Days 1-30: Foundation</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Audit current {industry.name.toLowerCase()} content for AI optimization</li>
                      <li>• Implement basic schema markup for {industry.name.toLowerCase()} entities</li>
                      <li>• Create FAQ sections addressing common {industry.name.toLowerCase()} questions</li>
                      <li>• Optimize for voice search queries in {industry.name.toLowerCase()}</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center">
                      <span className="font-bold">60</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Days 31-60: Enhancement</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Develop {industry.name.toLowerCase()}-specific comparison tables</li>
                      <li>• Create statistical content showcasing {industry.name.toLowerCase()} metrics</li>
                      <li>• Build authoritative citation networks</li>
                      <li>• Launch {industry.name.toLowerCase()} thought leadership content</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center">
                      <span className="font-bold">90</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Days 61-90: Optimization</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Monitor AI platform citations and rankings</li>
                      <li>• A/B test different {industry.name.toLowerCase()} content structures</li>
                      <li>• Scale successful {industry.name.toLowerCase()} optimization strategies</li>
                      <li>• Measure ROI and optimize based on {industry.name.toLowerCase()} KPIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {industry.name} Industry Metrics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(industry.keyMetrics).map(([metric, value]) => (
                <div key={metric} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
                  <div className="text-gray-600 capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Tools */}
          <section id="tools" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Recommended GEO Tools for {industry.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.tools.map((tool, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="text-2xl mb-4">🔧</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tool}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Optimized for {industry.name.toLowerCase()} businesses
                  </p>
                  <Link 
                    href="/tools" 
                    className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                  >
                    Explore Tool →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {industry.name} Success Stories
            </h2>
            <div className="space-y-6">
              {industry.caseStudies.map((caseStudy, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {industry.name} Case Study #{index + 1}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        <strong>Company:</strong> {caseStudy.company}
                      </p>
                      <p className="text-gray-700 mb-4">
                        <strong>Strategy:</strong> {caseStudy.strategy}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 text-center min-w-[200px]">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {caseStudy.improvement}
                      </div>
                      <div className="text-sm text-gray-600">Improvement</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended AI Platforms */}
          {relevantPlatforms.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Recommended AI Platforms for {industry.name}
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {relevantPlatforms.map((platform) => (
                  <Link
                    key={platform.slug}
                    href={`/platforms/${platform.slug}`}
                    className="block bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 hover:shadow-lg transition group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🤖</span>
                      <div>
                        <h3 className="text-xl font-bold text-purple-900 group-hover:text-purple-700">
                          {platform.name}
                        </h3>
                        <p className="text-purple-700 text-sm">{platform.company}</p>
                      </div>
                    </div>
                    <p className="text-purple-800 text-sm mb-4">
                      {platform.primaryUse} • {platform.userBase} users
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                        {platform.type}
                      </span>
                      <span className="text-purple-600 font-medium text-sm">Optimize →</span>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-gray-600 text-center">
                💡 These AI platforms are most effective for {industry.name.toLowerCase()} businesses. 
                Optimize your content for these platforms to maximize AI visibility.
              </p>
            </section>
          )}
          
          {/* Relevant GEO Comparisons */}
          {relevantComparisons.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                GEO Strategy Comparisons for {industry.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {relevantComparisons.map((comparison) => (
                  <Link
                    key={comparison.slug}
                    href={`/compare/${comparison.slug}`}
                    className="block bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition group"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <h3 className="text-xl font-bold text-orange-900 group-hover:text-orange-700 mb-2">
                          {comparison.title}
                        </h3>
                        <p className="text-orange-800 text-sm mb-3">
                          {comparison.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                          {comparison.difficulty}
                        </span>
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          {comparison.impact} Impact
                        </span>
                      </div>
                      <span className="text-orange-600 font-medium text-sm">Compare →</span>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-gray-600 text-center">
                🎯 Compare different GEO strategies to find the best approach for your {industry.name.toLowerCase()} business.
              </p>
            </section>
          )}

          {/* Related Industries */}
          {relatedIndustries.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related {industry.category} Industries
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedIndustries.map((relatedIndustry) => (
                  <Link
                    key={relatedIndustry.slug}
                    href={`/industries/${relatedIndustry.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedIndustry.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {relatedIndustry.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Market: {relatedIndustry.marketSize}</span>
                      <span className="text-blue-600 font-medium">Learn more →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Optimize Your {industry.name} Business for AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your GEO journey today with our comprehensive tools and guides 
              specifically designed for the {industry.name.toLowerCase()} industry.
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
                Read Complete Guide
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              '@id': `https://generative-engine.org/industries/${industry.slug}#article`,
              headline: `GEO for ${industry.name} - Complete AI Optimization Guide`,
              description: industry.description,
              image: `https://generative-engine.org/api/og?title=GEO%20for%20${encodeURIComponent(industry.name)}`,
              author: {
                '@type': 'Organization',
                name: 'GEO Platform',
                url: 'https://generative-engine.org/about',
              },
              publisher: {
                '@type': 'Organization',
                name: 'GEO Platform',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://generative-engine.org/logo.png',
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://generative-engine.org/industries/${industry.slug}`,
              },
              about: {
                '@type': 'Thing',
                name: industry.name,
                description: industry.description,
                additionalType: 'https://schema.org/Industry'
              },
              mentions: industry.tools.map(tool => ({
                '@type': 'SoftwareApplication',
                name: tool,
                applicationCategory: 'SEO Tool'
              })),
              keywords: `GEO, ${industry.name}, AI SEO, generative engine optimization, ${industry.category}`,
              inLanguage: 'en-US',
              isAccessibleForFree: true,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://generative-engine.org',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Industries',
                  item: 'https://generative-engine.org/industries',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: industry.name,
                  item: `https://generative-engine.org/industries/${industry.slug}`,
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: `What is GEO for ${industry.name}?`,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `GEO for ${industry.name.toLowerCase()} involves optimizing ${industry.name.toLowerCase()} websites and content for AI-powered search engines like ChatGPT, Claude, and Perplexity. This includes implementing structured data, creating authoritative content, and following best practices specific to the ${industry.name.toLowerCase()} industry.`,
                  },
                },
                {
                  '@type': 'Question',
                  name: `How can ${industry.name} businesses benefit from AI optimization?`,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `${industry.name} businesses can increase their visibility in AI search results, improve customer discovery, and potentially see significant improvements in qualified leads. The ${industry.name.toLowerCase()} industry has a ${industry.aiAdoption} AI adoption rate with ${industry.growth} annual growth.`,
                  },
                },
                {
                  '@type': 'Question',
                  name: `What are the main GEO strategies for ${industry.name}?`,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Key GEO strategies for ${industry.name.toLowerCase()} include: ${industry.geoOpportunities.slice(0, 3).join(', ')}, and other industry-specific optimization techniques.`,
                  },
                },
              ],
            },
            // Industry Schema
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              '@id': `https://generative-engine.org/industries/${industry.slug}#industry-data`,
              name: `${industry.name} Industry`,
              description: industry.description,
              articleSection: industry.category,
              keywords: `${industry.category}, ${industry.name}`,
              additionalProperty: [
                {
                  '@type': 'PropertyValue',
                  name: 'Market Size',
                  value: industry.marketSize
                },
                {
                  '@type': 'PropertyValue',
                  name: 'Annual Growth Rate',
                  value: industry.growth
                },
                {
                  '@type': 'PropertyValue',
                  name: 'AI Adoption Rate',
                  value: industry.aiAdoption
                }
              ]
            }
          ]),
        }}
      />
    </div>
  )
}