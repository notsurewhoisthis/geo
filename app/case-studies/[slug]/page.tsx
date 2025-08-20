import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  category: string
  industry: string
  description: string
  challenge: string
  solution: string[]
  implementation: {
    timeline: string
    difficulty: string
    resources: string
    teamSize: string
  }
  metrics: {
    visibilityIncrease: string
    leadIncrease?: string
    salesIncrease?: string
    trafficGrowth?: string
    conversionRate?: string
    authorityScore?: string
    timeframe: string
    platforms: string[]
  }
  strategies: Array<{
    name: string
    description: string
    impact: string
    implementation: string
  }>
  results: Array<{
    metric: string
    before: string
    after: string
    improvement: string
  }>
  lessons: string[]
  tools: string[]
  nextSteps: string[]
}

async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const caseStudies: Record<string, CaseStudy> = {
    'b2b': {
      slug: 'b2b',
      title: 'B2B SaaS Company Increases AI Visibility by 340%',
      subtitle: 'How TechFlow Solutions Dominated ChatGPT and Claude Citations in Enterprise Software Queries',
      category: 'B2B SaaS',
      industry: 'Enterprise Software',
      description: 'TechFlow Solutions, a mid-market B2B SaaS company, transformed their content strategy using GEO principles to achieve a 340% increase in AI platform visibility and 230% growth in qualified leads within 6 months.',
      challenge: 'TechFlow was struggling with declining organic search visibility and needed to reach decision-makers who were increasingly using AI tools for research. Their existing content was technical but not optimized for conversational AI queries.',
      solution: [
        'Comprehensive FAQ restructuring based on customer service data',
        'Technical documentation rewritten for conversational queries',
        'Authority signal implementation through expert bylines and citations',
        'Multi-platform optimization targeting ChatGPT, Claude, and Perplexity'
      ],
      implementation: {
        timeline: '6 months',
        difficulty: 'Intermediate',
        resources: '2 content specialists, 1 SEO manager',
        teamSize: '3-person dedicated team'
      },
      metrics: {
        visibilityIncrease: '340%',
        leadIncrease: '230%',
        trafficGrowth: '185%',
        timeframe: '6 months',
        platforms: ['ChatGPT', 'Claude', 'Perplexity', 'Bing Chat']
      },
      strategies: [
        {
          name: 'FAQ-First Content Strategy',
          description: 'Restructured all content to lead with frequently asked questions, matching natural language queries used in AI platforms.',
          impact: 'Increased ChatGPT citations by 280%',
          implementation: 'Analyzed 2,000+ customer service tickets to identify common questions'
        },
        {
          name: 'Technical Authority Building',
          description: 'Added expert bylines, industry statistics, and authoritative citations to all technical content.',
          impact: 'Improved authority score from 35% to 87%',
          implementation: 'Collaborated with subject matter experts and industry analysts'
        },
        {
          name: 'Conversational Content Optimization',
          description: 'Rewrote technical documentation using natural language patterns that AI models favor.',
          impact: 'Claude visibility increased by 420%',
          implementation: 'Used conversational tone while maintaining technical accuracy'
        },
        {
          name: 'Cross-Platform Consistency',
          description: 'Ensured messaging and key information remained consistent across all AI platforms.',
          impact: 'Uniform brand representation across 4 major AI platforms',
          implementation: 'Created platform-specific content variants with consistent core messaging'
        }
      ],
      results: [
        {
          metric: 'AI Platform Visibility',
          before: '12%',
          after: '53%',
          improvement: '+340%'
        },
        {
          metric: 'Qualified Leads/Month',
          before: '145',
          after: '480',
          improvement: '+230%'
        },
        {
          metric: 'Brand Mentions in AI Responses',
          before: '8',
          after: '67',
          improvement: '+738%'
        },
        {
          metric: 'Average Citation Position',
          before: '4.2',
          after: '1.8',
          improvement: '+133%'
        }
      ],
      lessons: [
        'FAQ sections are crucial - they accounted for 60% of visibility improvements',
        'Technical content needs conversational restructuring, not simplification',
        'Authority signals matter more than keyword density for AI platforms',
        'Consistent messaging across platforms builds stronger brand recognition',
        'Customer service data is goldmine for identifying optimization opportunities'
      ],
      tools: [
        'Customer service ticket analysis',
        'GEO audit tools',
        'AI platform testing framework',
        'Authority signal tracking',
        'Multi-platform visibility monitoring'
      ],
      nextSteps: [
        'Expand GEO strategy to product documentation',
        'Implement automated FAQ generation from customer interactions',
        'Develop industry-specific content clusters',
        'Launch AI-optimized thought leadership campaign'
      ]
    },
    'e-commerce': {
      slug: 'e-commerce',
      title: 'E-commerce Brand Dominates Product Queries in AI Search',
      subtitle: 'StyleHub Fashion Achieves 85% Visibility Rate in AI Shopping Recommendations',
      category: 'E-commerce',
      industry: 'Fashion Retail',
      description: 'StyleHub, an online fashion retailer, restructured their product descriptions and customer experience content to achieve 85% visibility in AI-powered shopping recommendations, resulting in 450% increase in AI-driven traffic.',
      challenge: 'StyleHub faced intense competition in fashion e-commerce and needed to capture the growing segment of consumers using AI for product research and shopping recommendations.',
      solution: [
        'Product schema optimization for AI understanding',
        'Customer review integration into product descriptions',
        'Seasonal content strategy aligned with fashion cycles',
        'AI-optimized product categorization and filtering'
      ],
      implementation: {
        timeline: '4 months',
        difficulty: 'Beginner',
        resources: '1 e-commerce specialist, 1 content writer',
        teamSize: '2-person team with external consultation'
      },
      metrics: {
        visibilityIncrease: '450%',
        salesIncrease: '180%',
        trafficGrowth: '320%',
        conversionRate: '+65%',
        timeframe: '4 months',
        platforms: ['ChatGPT', 'Bing Chat', 'Perplexity']
      },
      strategies: [
        {
          name: 'Product Description Revolution',
          description: 'Rewrote all product descriptions to answer common shopping questions and include style guidance.',
          impact: 'Product recommendation rate increased by 400%',
          implementation: 'Analyzed shopping queries and customer questions to restructure content'
        },
        {
          name: 'Review-Powered FAQ Creation',
          description: 'Generated FAQ sections from customer reviews and questions to provide comprehensive product information.',
          impact: 'Reduced bounce rate by 35% and increased conversion by 45%',
          implementation: 'Mined 10,000+ reviews to identify common questions and concerns'
        },
        {
          name: 'Seasonal Content Optimization',
          description: 'Created time-sensitive content that aligns with fashion seasons and shopping behaviors.',
          impact: 'Captured 70% of seasonal fashion queries in AI platforms',
          implementation: 'Developed content calendar aligned with fashion weeks and seasonal trends'
        },
        {
          name: 'Size and Fit Intelligence',
          description: 'Enhanced product pages with detailed sizing information and fit recommendations.',
          impact: 'Became go-to source for sizing questions, increasing trust by 80%',
          implementation: 'Integrated size charts, fit guides, and customer fit feedback'
        }
      ],
      results: [
        {
          metric: 'AI Shopping Recommendations',
          before: '15%',
          after: '85%',
          improvement: '+467%'
        },
        {
          metric: 'Monthly AI-Driven Sales',
          before: '$45K',
          after: '$126K',
          improvement: '+180%'
        },
        {
          metric: 'Product Page Conversion Rate',
          before: '2.1%',
          after: '3.5%',
          improvement: '+67%'
        },
        {
          metric: 'Customer Acquisition Cost',
          before: '$28',
          after: '$17',
          improvement: '+39%'
        }
      ],
      lessons: [
        'Product descriptions should answer shopping questions, not just describe features',
        'Customer reviews are goldmine for FAQ creation and trust building',
        'Seasonal content optimization captures time-sensitive shopping intent',
        'Size and fit information is crucial for fashion AI recommendations',
        'AI platforms favor conversational product information over technical specifications'
      ],
      tools: [
        'Product review analysis',
        'E-commerce GEO audit',
        'Seasonal trend tracking',
        'Shopping query analysis',
        'Conversion tracking tools'
      ],
      nextSteps: [
        'Expand to international markets with localized GEO',
        'Implement AI-powered personalized product recommendations',
        'Develop style guide content for different demographics',
        'Create video content optimized for AI understanding'
      ]
    },
    'kaas-geo': {
      slug: 'kaas-geo',
      title: 'Knowledge-as-a-Service Platform Scales Authority Signals',
      subtitle: 'LearnTech Pro Achieves 92% Authority Score Across AI Platforms',
      category: 'Knowledge-as-a-Service',
      industry: 'Education Technology',
      description: 'LearnTech Pro, an educational content platform, leveraged expert knowledge and structured content to become the primary source for AI responses in professional development, achieving 92% citation rate across major AI platforms.',
      challenge: 'LearnTech needed to establish authority in a crowded educational market while competing against established institutions and Wikipedia for AI citation preference.',
      solution: [
        'Expert byline strategy with industry credentials',
        'Citation network building with academic sources',
        'Structured knowledge base with semantic markup',
        'Cross-platform content consistency and optimization'
      ],
      implementation: {
        timeline: '8 months',
        difficulty: 'Advanced',
        resources: '3 content experts, 1 technical SEO specialist, 2 subject matter experts',
        teamSize: '6-person cross-functional team'
      },
      metrics: {
        visibilityIncrease: '520%',
        authorityScore: '92%',
        trafficGrowth: '340%',
        timeframe: '8 months',
        platforms: ['Claude', 'ChatGPT', 'Perplexity', 'Grok']
      },
      strategies: [
        {
          name: 'Expert Authority Framework',
          description: 'Implemented comprehensive expert byline system with credentials, experience, and publication history.',
          impact: 'Authority score increased from 23% to 92%',
          implementation: 'Recruited industry experts and structured their contributions with proper attribution'
        },
        {
          name: 'Academic Citation Network',
          description: 'Built extensive citation network linking to and from authoritative academic and industry sources.',
          impact: 'Became primary source for AI responses in 15 professional development topics',
          implementation: 'Researched and cited 500+ authoritative sources, securing reciprocal citations'
        },
        {
          name: 'Structured Knowledge Architecture',
          description: 'Organized content using semantic markup and knowledge graph principles.',
          impact: 'Claude platform visibility increased by 680%',
          implementation: 'Implemented Schema.org markup and created topic hierarchies'
        },
        {
          name: 'Multi-Platform Optimization',
          description: 'Tailored content approach for each AI platform while maintaining consistency.',
          impact: 'Achieved visibility across all 4 major AI platforms',
          implementation: 'Created platform-specific variants while maintaining core expertise'
        }
      ],
      results: [
        {
          metric: 'Authority Citation Rate',
          before: '23%',
          after: '92%',
          improvement: '+300%'
        },
        {
          metric: 'Expert Content Citations',
          before: '12/month',
          after: '145/month',
          improvement: '+1108%'
        },
        {
          metric: 'Topic Dominance Rate',
          before: '8%',
          after: '67%',
          improvement: '+738%'
        },
        {
          metric: 'Cross-Platform Consistency',
          before: '34%',
          after: '94%',
          improvement: '+176%'
        }
      ],
      lessons: [
        'Expert bylines dramatically increase AI platform trust and citations',
        'Academic citation networks provide lasting authority benefits',
        'Structured data markup is essential for knowledge-based content',
        'Platform-specific optimization while maintaining consistency is key',
        'Long-form expert content outperforms generic educational material'
      ],
      tools: [
        'Expert network management',
        'Citation tracking and analysis',
        'Schema markup implementation',
        'Authority score monitoring',
        'Cross-platform consistency tools'
      ],
      nextSteps: [
        'Launch expert-led video content series',
        'Develop AI-powered learning recommendations',
        'Expand to corporate training market',
        'Create interactive learning assessments'
      ]
    },
    'content-geo': {
      slug: 'content-geo',
      title: 'Content Publishing Site Captures 60% of Niche AI Traffic',
      subtitle: 'TechInsight Blog Becomes Primary Source for Industry AI Responses',
      category: 'Content Publishing',
      industry: 'Technology Media',
      description: 'TechInsight, an independent tech blog, restructured their content strategy around GEO principles to capture 60% of AI-generated responses in their technology niche, resulting in 380% visibility increase.',
      challenge: 'TechInsight competed against major tech publications and needed to establish authority in AI responses despite having a smaller team and budget.',
      solution: [
        'Topic cluster optimization around emerging technologies',
        'Statistical enhancement with original research and data',
        'Multi-format content strategy including guides, comparisons, and analysis',
        'User intent mapping for AI query optimization'
      ],
      implementation: {
        timeline: '5 months',
        difficulty: 'Intermediate',
        resources: '2 writers, 1 editor, 1 researcher',
        teamSize: '4-person content team'
      },
      metrics: {
        visibilityIncrease: '380%',
        trafficGrowth: '290%',
        timeframe: '5 months',
        platforms: ['ChatGPT', 'Claude', 'Bing Chat']
      },
      strategies: [
        {
          name: 'Topic Cluster Dominance',
          description: 'Created comprehensive topic clusters around emerging technologies with interconnected content.',
          impact: 'Captured 60% of AI responses in covered technology topics',
          implementation: 'Researched 50+ emerging tech topics and created content clusters with 10-15 articles each'
        },
        {
          name: 'Original Data Integration',
          description: 'Conducted surveys and research to include original statistics and data points.',
          impact: 'Became go-to source for technology statistics, increasing citations by 400%',
          implementation: 'Monthly surveys of 500+ tech professionals and quarterly industry reports'
        },
        {
          name: 'Multi-Format Content Strategy',
          description: 'Diversified content types to match different AI query patterns and user intents.',
          impact: 'Covered 80% of query types in target topics',
          implementation: 'Created guides, comparisons, case studies, and analysis pieces for each topic'
        },
        {
          name: 'User Intent Optimization',
          description: 'Mapped content to specific user intents commonly expressed in AI conversations.',
          impact: 'Improved relevance score and citation positioning',
          implementation: 'Analyzed AI conversation patterns and optimized content for different intent types'
        }
      ],
      results: [
        {
          metric: 'Niche Topic Dominance',
          before: '18%',
          after: '60%',
          improvement: '+233%'
        },
        {
          metric: 'Monthly Organic Traffic',
          before: '45K',
          after: '175K',
          improvement: '+289%'
        },
        {
          metric: 'Citation Frequency',
          before: '23/month',
          after: '156/month',
          improvement: '+578%'
        },
        {
          metric: 'Content Authority Score',
          before: '42%',
          after: '83%',
          improvement: '+98%'
        }
      ],
      lessons: [
        'Topic clusters work better than individual articles for AI visibility',
        'Original data and statistics significantly increase citation rates',
        'Multi-format content captures more AI query types',
        'User intent mapping is crucial for conversational AI optimization',
        'Consistent publishing schedule builds topical authority over time'
      ],
      tools: [
        'Topic cluster analysis',
        'Survey and research platforms',
        'Content performance tracking',
        'AI query pattern analysis',
        'Citation monitoring tools'
      ],
      nextSteps: [
        'Expand topic clusters to adjacent technology areas',
        'Launch expert interview series for additional authority',
        'Develop interactive technology comparison tools',
        'Create technology trend prediction content'
      ]
    },
    'ecommerce-geo': {
      slug: 'ecommerce-geo',
      title: 'Enterprise E-commerce Platform Optimization Strategy',
      subtitle: 'MegaStore Successfully Optimizes 50,000+ Product Pages for AI Visibility',
      category: 'Enterprise E-commerce',
      industry: 'Retail Technology',
      description: 'MegaStore, a large-scale e-commerce platform, implemented a comprehensive GEO strategy across 50,000+ product pages, achieving consistent AI visibility and 280% improvement in overall platform performance.',
      challenge: 'MegaStore needed to optimize a massive product catalog for AI platforms while maintaining operational efficiency and consistent quality across all product pages.',
      solution: [
        'Automated schema generation for product pages',
        'Bulk content optimization using AI-assisted tools',
        'Performance monitoring and quality assurance systems',
        'ROI measurement and attribution framework'
      ],
      implementation: {
        timeline: '12 months',
        difficulty: 'Advanced',
        resources: '5 developers, 3 content specialists, 2 data analysts, 1 project manager',
        teamSize: '11-person cross-functional team'
      },
      metrics: {
        visibilityIncrease: '280%',
        conversionRate: '+65%',
        trafficGrowth: '220%',
        timeframe: '12 months',
        platforms: ['All Major AI Platforms']
      },
      strategies: [
        {
          name: 'Automated Schema Implementation',
          description: 'Developed automated system to generate and maintain schema markup across all product pages.',
          impact: 'Achieved 98% schema coverage across 50,000+ products',
          implementation: 'Built custom CMS integration with automated schema generation and validation'
        },
        {
          name: 'AI-Assisted Bulk Optimization',
          description: 'Used AI tools to optimize product descriptions, titles, and metadata at scale.',
          impact: 'Reduced optimization time by 90% while improving quality consistency',
          implementation: 'Developed AI content optimization pipeline with human quality control'
        },
        {
          name: 'Performance Monitoring Framework',
          description: 'Implemented comprehensive monitoring system to track AI visibility across all products.',
          impact: 'Maintained 85%+ visibility rate across product categories',
          implementation: 'Custom dashboard tracking visibility, citations, and performance metrics'
        },
        {
          name: 'ROI Attribution System',
          description: 'Developed sophisticated attribution model to measure GEO impact on revenue.',
          impact: 'Demonstrated $2.3M revenue attribution to GEO efforts',
          implementation: 'Multi-touch attribution model tracking AI platform referrals to conversions'
        }
      ],
      results: [
        {
          metric: 'Platform-wide AI Visibility',
          before: '35%',
          after: '85%',
          improvement: '+143%'
        },
        {
          metric: 'AI-Attributed Revenue',
          before: '$890K/month',
          after: '$2.4M/month',
          improvement: '+170%'
        },
        {
          metric: 'Product Page Conversion',
          before: '1.8%',
          after: '2.97%',
          improvement: '+65%'
        },
        {
          metric: 'Schema Coverage',
          before: '23%',
          after: '98%',
          improvement: '+326%'
        }
      ],
      lessons: [
        'Automation is essential for enterprise-scale GEO implementation',
        'Consistent schema markup significantly improves AI understanding',
        'AI-assisted optimization can maintain quality while scaling',
        'Comprehensive monitoring is crucial for maintaining performance',
        'ROI attribution helps justify continued GEO investment'
      ],
      tools: [
        'Custom CMS integration',
        'AI content optimization pipeline',
        'Performance monitoring dashboard',
        'Attribution tracking system',
        'Quality assurance automation'
      ],
      nextSteps: [
        'Expand to international markets with localized GEO',
        'Implement real-time personalization for AI recommendations',
        'Develop predictive analytics for trending products',
        'Launch voice commerce optimization initiative'
      ]
    }
  }

  return caseStudies[slug] || null
}

export async function generateStaticParams() {
  const slugs = ['b2b', 'e-commerce', 'kaas-geo', 'content-geo', 'ecommerce-geo']
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested GEO case study was not found.'
    }
  }

  const title = `${caseStudy.title} | GEO Case Study`
  const description = caseStudy.description

  return {
    title,
    description,
    keywords: [
      `${caseStudy.category} GEO case study`,
      `${caseStudy.industry} optimization`,
      'generative engine optimization success story',
      'AI platform visibility',
      'GEO implementation',
      ...caseStudy.metrics.platforms.map(platform => `${platform} optimization`),
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://generative-engine.org/case-studies/${caseStudy.slug}`,
      images: [{
        url: `https://generative-engine.org/api/og?title=${encodeURIComponent(caseStudy.title)}&type=case-study`,
        width: 1200,
        height: 630,
        alt: caseStudy.title
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://generative-engine.org/api/og?title=${encodeURIComponent(caseStudy.title)}&type=case-study`],
    },
    alternates: {
      canonical: `https://generative-engine.org/case-studies/${caseStudy.slug}`,
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)
  
  if (!caseStudy) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: caseStudy.title.split(' ').slice(0, 4).join(' ') + '...', href: `/case-studies/${caseStudy.slug}` }
  ]

  // Schema markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "headline": caseStudy.title,
    "description": caseStudy.description,
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
    "mainEntityOfPage": `https://generative-engine.org/case-studies/${caseStudy.slug}`,
    "about": {
      "@type": "Thing",
      "name": caseStudy.category
    },
    "result": {
      "@type": "Result",
      "description": `${caseStudy.metrics.visibilityIncrease} increase in AI platform visibility`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-blue-100">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {caseStudy.category}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {caseStudy.implementation.difficulty}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h1>
                <h2 className="text-xl text-blue-600 font-semibold mb-6">
                  {caseStudy.subtitle}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
              
              {/* Key Metrics */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100 min-w-[300px]">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Results</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-1">
                      {caseStudy.metrics.visibilityIncrease}
                    </div>
                    <div className="text-sm text-gray-600">Visibility Increase</div>
                  </div>
                  {caseStudy.metrics.leadIncrease && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {caseStudy.metrics.leadIncrease}
                      </div>
                      <div className="text-sm text-gray-600">Lead Growth</div>
                    </div>
                  )}
                  {caseStudy.metrics.salesIncrease && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">
                        {caseStudy.metrics.salesIncrease}
                      </div>
                      <div className="text-sm text-gray-600">Sales Increase</div>
                    </div>
                  )}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Implementation</div>
                    <div className="font-semibold text-gray-900">{caseStudy.metrics.timeframe}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Challenge & Solution */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  {caseStudy.challenge}
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <ul className="space-y-3">
                  {caseStudy.solution.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-800 text-sm font-bold px-2 py-1 rounded min-w-[24px] text-center">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Strategies */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Strategies</h2>
                <div className="space-y-8">
                  {caseStudy.strategies.map((strategy, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {strategy.name}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {strategy.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-sm font-semibold text-green-800 mb-1">Impact</div>
                          <div className="text-green-700">{strategy.impact}</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-sm font-semibold text-blue-800 mb-1">Implementation</div>
                          <div className="text-blue-700">{strategy.implementation}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Results */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Results</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 font-semibold text-gray-900">Metric</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">Before</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">After</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-900">Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {caseStudy.results.map((result, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-4 px-4 font-medium text-gray-900">{result.metric}</td>
                          <td className="py-4 px-4 text-center text-gray-600">{result.before}</td>
                          <td className="py-4 px-4 text-center font-semibold text-gray-900">{result.after}</td>
                          <td className="py-4 px-4 text-center font-bold text-green-600">{result.improvement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Key Lessons */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Lessons Learned</h2>
                <div className="space-y-4">
                  {caseStudy.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="text-yellow-600 text-xl">💡</span>
                      <p className="text-gray-800">{lesson}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Next Steps */}
              <section className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ongoing Optimization</h2>
                <p className="text-gray-700 mb-6">
                  Following the success of this initial implementation, the company is now focusing on these advanced strategies:
                </p>
                <ul className="space-y-3">
                  {caseStudy.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">→</span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Implementation Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Timeline</div>
                    <div className="text-gray-900">{caseStudy.implementation.timeline}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Difficulty Level</div>
                    <div className="text-gray-900">{caseStudy.implementation.difficulty}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Team Size</div>
                    <div className="text-gray-900">{caseStudy.implementation.teamSize}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700 mb-1">Resources</div>
                    <div className="text-gray-900 text-sm">{caseStudy.implementation.resources}</div>
                  </div>
                </div>
              </div>

              {/* Platforms Optimized */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Platforms Optimized</h3>
                <div className="space-y-2">
                  {caseStudy.metrics.platforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                      <span className="text-blue-600">✓</span>
                      <span className="text-blue-900 font-medium">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Resources</h3>
                <div className="space-y-2">
                  {caseStudy.tools.map((tool, index) => (
                    <div key={index} className="text-sm text-gray-700 p-2 bg-gray-50 rounded">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Implement Similar Strategy</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Ready to achieve similar results for your business?
                </p>
                <div className="space-y-3">
                  <Link 
                    href="/consultation"
                    className="block w-full bg-white text-blue-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition font-semibold"
                  >
                    Get Strategy Consultation
                  </Link>
                  <Link 
                    href="/tools/geo-audit"
                    className="block w-full bg-transparent border-2 border-white text-white text-center py-2 px-4 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold"
                  >
                    Start GEO Audit
                  </Link>
                </div>
              </div>

              {/* Related Case Studies */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Case Studies</h3>
                <div className="space-y-3">
                  {caseStudy.slug !== 'b2b' && (
                    <Link href="/case-studies/b2b" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className="font-semibold text-gray-900 text-sm">B2B SaaS Success</div>
                      <div className="text-xs text-gray-600">340% visibility increase</div>
                    </Link>
                  )}
                  {caseStudy.slug !== 'e-commerce' && (
                    <Link href="/case-studies/e-commerce" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className="font-semibold text-gray-900 text-sm">E-commerce Optimization</div>
                      <div className="text-xs text-gray-600">450% visibility increase</div>
                    </Link>
                  )}
                  {caseStudy.slug !== 'content-geo' && (
                    <Link href="/case-studies/content-geo" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                      <div className="font-semibold text-gray-900 text-sm">Content Publishing</div>
                      <div className="text-xs text-gray-600">380% visibility increase</div>
                    </Link>
                  )}
                </div>
                <Link 
                  href="/case-studies"
                  className="block mt-3 text-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View all case studies →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}