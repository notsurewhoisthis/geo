import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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

interface Comparison {
  slug: string
  title: string
  subtitle: string
  geoTechnique: string
  traditionalTechnique: string
  category: string
  difficulty: string
  impact: string
  timeToResults: string
  comparison?: {
    focus: {
      geo: string
      traditional: string
    }
    primaryGoal: {
      geo: string
      traditional: string
    }
    contentStrategy?: {
      geo: string
      traditional: string
    }
    keyMetrics?: {
      geo: string
      traditional: string
    }
    optimization?: {
      geo: string
      traditional: string
    }
  }
  advantages?: {
    geo: string[]
    traditional: string[]
  }
  disadvantages?: {
    geo: string[]
    traditional: string[]
  }
  bestFor?: {
    geo: string[]
    traditional: string[]
  }
  implementation?: {
    geo: string[]
    traditional: string[]
  }
  tools?: {
    geo: string[]
    traditional: string[]
  }
  futureOutlook?: {
    geo: string
    traditional: string
  } | string
}

async function getAllComparisons(): Promise<Comparison[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'comparisons.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading comparisons data:', error)
    return []
  }
}

async function getComparison(slug: string): Promise<Comparison | null> {
  const comparisons = await getAllComparisons()
  return comparisons.find(comparison => comparison.slug === slug) || null
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
  const comparisons = await getAllComparisons()
  return comparisons.map((comparison) => ({
    comparison: comparison.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ comparison: string }> }): Promise<Metadata> {
  const { comparison: comparisonSlug } = await params
  const comparison = await getComparison(comparisonSlug)
  
  if (!comparison) {
    return {
      title: 'Comparison Not Found',
      description: 'The requested optimization comparison was not found.'
    }
  }

  const title = `${comparison.title}: ${comparison.subtitle} | GEO Comparison Guide`
  const description = `Compare ${comparison.geoTechnique} vs ${comparison.traditionalTechnique}. Learn which optimization strategy works best for your business with detailed analysis, pros/cons, and implementation guides. ${comparison.difficulty} level, ${comparison.impact} impact.`

  return {
    title,
    description,
    keywords: [
      comparison.geoTechnique.toLowerCase(),
      comparison.traditionalTechnique.toLowerCase(),
      'GEO comparison',
      'optimization comparison',
      'SEO vs GEO',
      comparison.category.toLowerCase(),
      'generative engine optimization',
      'AI optimization strategy'
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.generative-engine.org/compare/${comparison.slug}`,
      images: [{
        url: `https://www.generative-engine.org/api/og?title=${encodeURIComponent(comparison.title)}&type=comparison`,
        width: 1200,
        height: 630,
        alt: `${comparison.title} Comparison Guide`
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://www.generative-engine.org/api/og?title=${encodeURIComponent(comparison.title)}&type=comparison`],
    },
    alternates: {
      canonical: `https://www.generative-engine.org/compare/${comparison.slug}`,
    },
  }
}

export default async function ComparisonPage({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison: comparisonSlug } = await params
  const comparison = await getComparison(comparisonSlug)
  
  if (!comparison) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Comparisons', href: '/compare' },
    { name: comparison.title, href: `/compare/${comparison.slug}` }
  ]

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Get impact color
  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'high': return 'bg-purple-100 text-purple-800'
      case 'medium-high': return 'bg-indigo-100 text-indigo-800'
      case 'medium': return 'bg-blue-100 text-blue-800'
      case 'low': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Get cross-references to industries and platforms
  interface Industry {
    slug: string
    name: string
    category: string
    description: string
    marketSize: string
    aiAdoption: string
  }

  interface Platform {
    slug: string
    name: string
    company: string
    type: string
    userBase: string
    industries: string[]
  }

  // Load industries and platforms for cross-references
  const getRelevantIndustries = async (): Promise<Industry[]> => {
    try {
      const industriesPath = path.join(process.cwd(), 'public', 'data', 'industries.json')
      if (!fs.existsSync(industriesPath)) return []
      
      const content = fs.readFileSync(industriesPath, 'utf8')
      const allIndustries = JSON.parse(content) as Industry[]
      
      // Return a selection of industries for all comparisons
      return allIndustries.slice(0, 6)
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
      
      // Return top platforms by name recognition
      const topPlatforms = ['chatgpt', 'claude', 'perplexity', 'gemini', 'copilot']
      return allPlatforms
        .filter(platform => topPlatforms.includes(platform.slug.toLowerCase()))
        .slice(0, 3)
    } catch (error) {
      console.error('Error loading platforms:', error)
      return []
    }
  }

  const relevantIndustries = await getRelevantIndustries()
  const topPlatforms = await getTopPlatforms()
  
  // Get related blog posts
  const allPosts = await getAllBlogPosts()
  const relatedPosts = allPosts
    .filter(post => 
      post.title.toLowerCase().includes('geo') ||
      post.title.toLowerCase().includes('seo') ||
      post.content?.toLowerCase().includes(comparison.category.toLowerCase()) ||
      post.tags?.some(tag => 
        tag.toLowerCase().includes('geo') || 
        tag.toLowerCase().includes('seo') ||
        tag.toLowerCase().includes(comparison.category.toLowerCase())
      )
    )
    .slice(0, 3)

  // Schema markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": comparison.title,
    "description": comparison.subtitle,
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
    "mainEntityOfPage": `https://www.generative-engine.org/compare/${comparison.slug}`,
    "about": [
      {
        "@type": "Thing",
        "name": comparison.geoTechnique
      },
      {
        "@type": "Thing", 
        "name": comparison.traditionalTechnique
      }
    ],
    "mentions": [
      {
        "@type": "DefinedTerm",
        "name": "Generative Engine Optimization",
        "description": "Optimization strategy for AI platforms and generative engines"
      },
      {
        "@type": "DefinedTerm",
        "name": "Search Engine Optimization", 
        "description": "Traditional optimization strategy for search engines"
      }
    ]
  }

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": comparison.title,
    "description": comparison.subtitle,
    "mainEntity": [
      {
        "@type": "Thing",
        "name": comparison.geoTechnique,
        "description": comparison.comparison?.focus.geo
      },
      {
        "@type": "Thing",
        "name": comparison.traditionalTechnique,
        "description": comparison.comparison?.focus.traditional
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-blue-100">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {comparison.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {comparison.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getDifficultyColor(comparison.difficulty)}`}>
                  {comparison.difficulty} Level
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getImpactColor(comparison.impact)}`}>
                  {comparison.impact} Impact
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  {comparison.category}
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Results in {comparison.timeToResults}
                </span>
              </div>
            </div>

            {/* Head-to-Head Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <span className="text-indigo-600">🚀</span>
                  {comparison.geoTechnique}
                </h2>
                <p className="text-indigo-800 font-medium">
                  {comparison.comparison?.focus.geo}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <span className="text-orange-600">🎯</span>
                  {comparison.traditionalTechnique}
                </h2>
                <p className="text-orange-800 font-medium">
                  {comparison.comparison?.focus.traditional}
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Comparison Table */}
          {comparison.comparison && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Detailed Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 font-bold text-gray-900">Aspect</th>
                      <th className="text-left py-4 px-6 font-bold text-indigo-900 bg-indigo-50 rounded-tl-lg">
                        {comparison.geoTechnique}
                      </th>
                      <th className="text-left py-4 px-6 font-bold text-orange-900 bg-orange-50 rounded-tr-lg">
                        {comparison.traditionalTechnique}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparison.comparison.primaryGoal && (
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-700">Primary Goal</td>
                        <td className="py-4 px-6 bg-indigo-25 text-indigo-800">{comparison.comparison.primaryGoal.geo}</td>
                        <td className="py-4 px-6 bg-orange-25 text-orange-800">{comparison.comparison.primaryGoal.traditional}</td>
                      </tr>
                    )}
                    {comparison.comparison.contentStrategy && (
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-700">Content Strategy</td>
                        <td className="py-4 px-6 bg-indigo-25 text-indigo-800">{comparison.comparison.contentStrategy.geo}</td>
                        <td className="py-4 px-6 bg-orange-25 text-orange-800">{comparison.comparison.contentStrategy.traditional}</td>
                      </tr>
                    )}
                    {comparison.comparison.keyMetrics && (
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-700">Key Metrics</td>
                        <td className="py-4 px-6 bg-indigo-25 text-indigo-800">{comparison.comparison.keyMetrics.geo}</td>
                        <td className="py-4 px-6 bg-orange-25 text-orange-800">{comparison.comparison.keyMetrics.traditional}</td>
                      </tr>
                    )}
                    {comparison.comparison.optimization && (
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-700">Optimization Focus</td>
                        <td className="py-4 px-6 bg-indigo-25 text-indigo-800">{comparison.comparison.optimization.geo}</td>
                        <td className="py-4 px-6 bg-orange-25 text-orange-800">{comparison.comparison.optimization.traditional}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Advantages */}
            {comparison.advantages && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Advantages Comparison</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                      <span className="text-indigo-600">✨</span>
                      {comparison.geoTechnique} Benefits
                    </h3>
                    <ul className="space-y-2">
                      {comparison.advantages.geo.map((advantage, index) => (
                        <li key={index} className="flex items-start gap-2 text-indigo-800">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                      <span className="text-orange-600">⚡</span>
                      {comparison.traditionalTechnique} Benefits
                    </h3>
                    <ul className="space-y-2">
                      {comparison.advantages.traditional.map((advantage, index) => (
                        <li key={index} className="flex items-start gap-2 text-orange-800">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Disadvantages */}
            {comparison.disadvantages && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitations Analysis</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                      <span className="text-indigo-600">⚠️</span>
                      {comparison.geoTechnique} Limitations
                    </h3>
                    <ul className="space-y-2">
                      {comparison.disadvantages.geo.map((disadvantage, index) => (
                        <li key={index} className="flex items-start gap-2 text-indigo-700">
                          <span className="text-yellow-500 mt-1">⚠</span>
                          <span>{disadvantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                      <span className="text-orange-600">⚠️</span>
                      {comparison.traditionalTechnique} Limitations
                    </h3>
                    <ul className="space-y-2">
                      {comparison.disadvantages.traditional.map((disadvantage, index) => (
                        <li key={index} className="flex items-start gap-2 text-orange-700">
                          <span className="text-yellow-500 mt-1">⚠</span>
                          <span>{disadvantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Best For Section */}
          {comparison.bestFor && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Which Strategy Is Right for You?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">
                    Choose {comparison.geoTechnique} if you are:
                  </h3>
                  <ul className="space-y-3">
                    {comparison.bestFor.geo.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-indigo-800">
                        <span className="text-indigo-600 mt-1">🎯</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-900 mb-4">
                    Choose {comparison.traditionalTechnique} if you are:
                  </h3>
                  <ul className="space-y-3">
                    {comparison.bestFor.traditional.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-orange-800">
                        <span className="text-orange-600 mt-1">🎯</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Implementation Guide */}
          {comparison.implementation && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Implementation Roadmaps</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <span className="text-indigo-600">🚀</span>
                    {comparison.geoTechnique} Implementation
                  </h3>
                  <ol className="space-y-3">
                    {comparison.implementation.geo.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-bold px-2 py-1 rounded min-w-[24px] text-center">
                          {index + 1}
                        </span>
                        <span className="text-indigo-800 font-medium">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                    <span className="text-orange-600">🎯</span>
                    {comparison.traditionalTechnique} Implementation
                  </h3>
                  <ol className="space-y-3">
                    {comparison.implementation.traditional.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="bg-orange-100 text-orange-800 text-sm font-bold px-2 py-1 rounded min-w-[24px] text-center">
                          {index + 1}
                        </span>
                        <span className="text-orange-800 font-medium">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Tools Comparison */}
          {comparison.tools && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recommended Tools</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">
                    {comparison.geoTechnique} Tools
                  </h3>
                  <div className="space-y-2">
                    {comparison.tools.geo.map((tool, index) => (
                      <div key={index} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                        <span className="text-indigo-900 font-semibold">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-4">
                    {comparison.traditionalTechnique} Tools
                  </h3>
                  <div className="space-y-2">
                    {comparison.tools.traditional.map((tool, index) => (
                      <div key={index} className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                        <span className="text-orange-900 font-semibold">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Future Outlook */}
          {comparison.futureOutlook && (
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Future Outlook</h2>
              {typeof comparison.futureOutlook === 'string' ? (
                <p className="text-gray-700 text-lg text-center leading-relaxed">
                  {comparison.futureOutlook}
                </p>
              ) : comparison.futureOutlook && typeof comparison.futureOutlook === 'object' && comparison.futureOutlook.geo && comparison.futureOutlook.traditional ? (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <h3 className="text-xl font-bold text-indigo-900 mb-4">
                      {comparison.geoTechnique} Future
                    </h3>
                    <p className="text-indigo-800 leading-relaxed">
                      {comparison.futureOutlook.geo}
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <h3 className="text-xl font-bold text-orange-900 mb-4">
                      {comparison.traditionalTechnique} Future
                    </h3>
                    <p className="text-orange-800 leading-relaxed">
                      {comparison.futureOutlook.traditional}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* Industry Applications */}
          {relevantIndustries.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Apply {comparison.title} in Different Industries
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {relevantIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="block bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 hover:shadow-lg transition group"
                  >
                    <h3 className="font-bold text-blue-900 group-hover:text-blue-700 mb-2">
                      {industry.name}
                    </h3>
                    <div className="text-sm text-blue-700 mb-3">
                      {industry.marketSize} market • {industry.aiAdoption} AI adoption
                    </div>
                    <p className="text-xs text-blue-600 line-clamp-2">
                      {industry.description}
                    </p>
                  </Link>
                ))}
              </div>
              <p className="text-center text-gray-600">
                🎯 Each industry can benefit from different aspects of {comparison.title}. 
                Explore industry-specific implementation guides.
              </p>
            </div>
          )}

          {/* Platform Implementation */}
          {topPlatforms.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Implement {comparison.title} Across AI Platforms
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {topPlatforms.map((platform) => (
                  <Link
                    key={platform.slug}
                    href={`/platforms/${platform.slug}`}
                    className="block bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 hover:shadow-lg transition group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🤖</span>
                      <div>
                        <h3 className="font-bold text-purple-900 group-hover:text-purple-700">
                          {platform.name}
                        </h3>
                        <p className="text-purple-700 text-sm">{platform.company}</p>
                      </div>
                    </div>
                    <p className="text-purple-800 text-sm mb-3">
                      {platform.userBase} users • {platform.type}
                    </p>
                    <div className="text-xs text-purple-600">
                      Top industries: {platform.industries.slice(0, 2).join(', ')}
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-center text-gray-600">
                🚀 Each AI platform has unique optimization requirements. 
                Learn platform-specific strategies for maximum impact.
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Strategy?</h2>
            <p className="text-indigo-100 mb-6 text-lg">
              Use our tools to implement the best optimization approach for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/tools/visibility-tracker" 
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Test Your Visibility
              </a>
              <a 
                href="/tools/geo-audit" 
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-400 transition"
              >
                Run GEO Audit
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <RelatedArticles 
                currentSlug={comparison.slug}
                currentTags={[comparison.category, 'GEO', 'SEO', 'Comparison']}
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