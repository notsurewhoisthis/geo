import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GEO Case Studies - Real-World Success Stories | Generative Engine Optimization',
  description: 'Explore comprehensive case studies showcasing successful Generative Engine Optimization implementations across industries. Learn from real B2B, e-commerce, and SaaS GEO success stories.',
  keywords: 'GEO case studies, generative engine optimization examples, AI SEO success stories, B2B GEO, e-commerce GEO, SaaS optimization, content optimization results',
  openGraph: {
    title: 'GEO Case Studies - Real Success Stories',
    description: 'Comprehensive case studies showcasing successful GEO implementations across industries',
    type: 'website',
    url: 'https://generative-engine.org/case-studies',
  },
  alternates: {
    canonical: 'https://generative-engine.org/case-studies'
  }
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: 'b2b',
      title: 'B2B SaaS Company Increases AI Visibility by 340%',
      category: 'B2B SaaS',
      industry: 'Technology',
      description: 'How a B2B software company optimized their content for ChatGPT and Claude, resulting in 340% increase in AI citations and 230% growth in qualified leads.',
      metrics: {
        visibilityIncrease: '340%',
        leadIncrease: '230%',
        timeframe: '6 months',
        platforms: ['ChatGPT', 'Claude', 'Perplexity']
      },
      highlights: [
        'FAQ optimization strategy',
        'Technical content restructuring',
        'Authority signal implementation',
        'Multi-platform visibility'
      ],
      difficulty: 'Intermediate',
      implementation: '6-8 weeks'
    },
    {
      slug: 'e-commerce',
      title: 'E-commerce Brand Dominates Product Queries in AI Search',
      category: 'E-commerce',
      industry: 'Retail',
      description: 'A fashion e-commerce brand restructured product descriptions and FAQ sections to achieve 85% visibility rate in AI-powered shopping recommendations.',
      metrics: {
        visibilityIncrease: '450%',
        salesIncrease: '180%',
        timeframe: '4 months',
        platforms: ['ChatGPT', 'Bing Chat', 'Perplexity']
      },
      highlights: [
        'Product schema optimization',
        'User-generated content integration',
        'Seasonal content strategy',
        'Review-based FAQ creation'
      ],
      difficulty: 'Beginner',
      implementation: '4-6 weeks'
    },
    {
      slug: 'kaas-geo',
      title: 'Knowledge-as-a-Service Platform Scales Authority Signals',
      category: 'KaaS',
      industry: 'Education',
      description: 'Educational platform leverages expert knowledge to become the go-to source for AI responses in their niche, achieving 92% mention rate across AI platforms.',
      metrics: {
        visibilityIncrease: '520%',
        authorityScore: '92%',
        timeframe: '8 months',
        platforms: ['Claude', 'ChatGPT', 'Perplexity', 'Grok']
      },
      highlights: [
        'Expert byline strategy',
        'Citation network building',
        'Structured knowledge base',
        'Cross-platform consistency'
      ],
      difficulty: 'Advanced',
      implementation: '10-12 weeks'
    },
    {
      slug: 'content-geo',
      title: 'Content Publishing Site Captures 60% of Niche AI Traffic',
      category: 'Content Publishing',
      industry: 'Media',
      description: 'Independent content site restructured articles with GEO principles, becoming the primary source for AI responses in their vertical.',
      metrics: {
        visibilityIncrease: '380%',
        trafficGrowth: '290%',
        timeframe: '5 months',
        platforms: ['ChatGPT', 'Claude', 'Bing Chat']
      },
      highlights: [
        'Topic cluster optimization',
        'Statistical enhancement',
        'Multi-format content strategy',
        'User intent mapping'
      ],
      difficulty: 'Intermediate',
      implementation: '6-8 weeks'
    },
    {
      slug: 'ecommerce-geo',
      title: 'Enterprise E-commerce Platform Optimization Strategy',
      category: 'Enterprise E-commerce',
      industry: 'Retail Technology',
      description: 'Large-scale e-commerce platform implemented comprehensive GEO strategy across 50,000+ product pages, achieving consistent AI visibility.',
      metrics: {
        visibilityIncrease: '280%',
        conversionRate: '+65%',
        timeframe: '12 months',
        platforms: ['All Major AI Platforms']
      },
      highlights: [
        'Automated schema generation',
        'Bulk content optimization',
        'Performance monitoring',
        'ROI measurement framework'
      ],
      difficulty: 'Advanced',
      implementation: '16-20 weeks'
    }
  ]

  const stats = [
    { label: 'Total Case Studies', value: caseStudies.length },
    { label: 'Average Visibility Increase', value: '395%' },
    { label: 'Industries Covered', value: '5+' },
    { label: 'Combined Revenue Impact', value: '$2.3M+' }
  ]

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GEO Case Studies Collection',
    description: 'Comprehensive collection of Generative Engine Optimization case studies and success stories',
    url: 'https://generative-engine.org/case-studies',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: caseStudies.length,
      itemListElement: caseStudies.map((study, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: study.title,
          description: study.description,
          url: `https://generative-engine.org/case-studies/${study.slug}`,
          about: {
            '@type': 'Thing',
            name: study.category
          }
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            GEO Case Studies
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover how businesses across industries are leveraging Generative Engine Optimization 
            to dominate AI-powered search results. Real strategies, measurable results, and 
            actionable insights from successful GEO implementations.
          </p>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
              All Case Studies
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold">
              B2B SaaS
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold">
              E-commerce
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold">
              Content Publishing
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold">
              Enterprise
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {study.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {study.metrics.visibilityIncrease}
                  </div>
                  <div className="text-sm text-gray-600">visibility increase</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                {study.title}
              </h2>
              
              <p className="text-gray-600 mb-6 line-clamp-3">
                {study.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600">Timeline</div>
                  <div className="font-semibold text-gray-900">{study.metrics.timeframe}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600">Difficulty</div>
                  <div className="font-semibold text-gray-900">{study.difficulty}</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Key Highlights:</h3>
                <ul className="space-y-1">
                  {study.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {study.metrics.platforms.slice(0, 3).map((platform, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
                <div className="text-blue-600 font-medium">
                  Read Case Study →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Success Metrics Overview */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Proven Results Across Industries</h2>
            <p className="text-xl mb-8 text-green-100">
              Our GEO case studies demonstrate consistent success across diverse business models 
              and industries, with average visibility increases of 395% and measurable revenue impact.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">$2.3M+</div>
                <div className="text-green-100">Combined Revenue Impact</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-green-100">Highest Authority Score</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-green-100">Pages Optimized</div>
              </div>
            </div>
            <Link 
              href="/consultation"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Get Your Case Study Strategy
            </Link>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Typical GEO Implementation Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Audit & Strategy</h3>
                <p className="text-sm text-gray-600">Weeks 1-2</p>
                <p className="text-sm text-gray-700 mt-2">Comprehensive GEO audit and strategy development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Content Optimization</h3>
                <p className="text-sm text-gray-600">Weeks 3-6</p>
                <p className="text-sm text-gray-700 mt-2">Implement GEO principles across content and structure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Authority Building</h3>
                <p className="text-sm text-gray-600">Weeks 7-10</p>
                <p className="text-sm text-gray-700 mt-2">Deploy citation strategies and authority signals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Monitor & Scale</h3>
                <p className="text-sm text-gray-600">Weeks 11+</p>
                <p className="text-sm text-gray-700 mt-2">Track results and scale successful strategies</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Create Your Own GEO Success Story?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Learn from these proven strategies and implement GEO techniques that drive measurable results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/tools/geo-audit"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700"
            >
              Start GEO Audit
            </Link>
            <Link 
              href="/getting-started"
              className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300"
            >
              Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}