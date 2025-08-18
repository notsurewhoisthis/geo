import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Resources - Tools, Templates & Guides for AI Search Optimization',
  description: 'Comprehensive collection of GEO resources including tools, templates, checklists, and guides for optimizing content for AI search engines like ChatGPT, Claude, and Perplexity.',
  keywords: 'GEO resources, AI SEO tools, generative engine optimization tools, ChatGPT optimization tools, AI search templates, GEO checklist',
  alternates: {
    canonical: 'https://generative-engine.org/resources',
  },
}

const toolsResources = [
  {
    title: 'GEO Audit Tool',
    description: 'Comprehensive content analysis for AI optimization with scoring and recommendations',
    icon: '🔍',
    category: 'Analysis',
    link: '/tools/geo-audit',
    features: ['Content scoring', 'AI optimization analysis', 'Actionable recommendations', 'Technical SEO review']
  },
  {
    title: 'AI Keyword Research',
    description: 'Find conversational keywords that perform well on AI platforms',
    icon: '🔑',
    category: 'Research',
    link: '/tools/keyword-research',
    features: ['Conversational queries', 'AI-optimized keywords', 'Intent analysis', 'Performance data']
  },
  {
    title: 'Content Optimizer',
    description: 'Transform existing content for better AI search visibility',
    icon: '✨',
    category: 'Optimization',
    link: '/tools/content-optimizer',
    features: ['Content restructuring', 'AI-friendly formatting', 'Citation optimization', 'FAQ generation']
  },
  {
    title: 'Visibility Tracker',
    description: 'Monitor your content performance across AI platforms',
    icon: '📈',
    category: 'Analytics',
    link: '/tools/visibility-tracker',
    features: ['Platform tracking', 'Citation monitoring', 'Performance trends', 'Competitive analysis']
  }
]

const templatesChecklists = [
  {
    title: 'GEO Content Template',
    description: 'Ready-to-use template for creating AI-optimized content',
    type: 'Template',
    items: ['Semantic structure', 'FAQ sections', 'Citation formats', 'Entity definitions']
  },
  {
    title: 'Technical GEO Checklist',
    description: 'Complete checklist for technical AI optimization',
    type: 'Checklist',
    items: ['Schema markup', 'Robots.txt setup', 'AI crawler permissions', 'Structured data']
  },
  {
    title: 'Content Audit Checklist',
    description: 'Systematic approach to auditing content for GEO',
    type: 'Checklist',
    items: ['Semantic clarity', 'Citation readiness', 'Conversational tone', 'Comprehensive coverage']
  },
  {
    title: 'AI Platform Guidelines',
    description: 'Platform-specific optimization guidelines and best practices',
    type: 'Guide',
    items: ['ChatGPT optimization', 'Claude preferences', 'Perplexity requirements', 'Bing Chat tips']
  }
]

const industryResources = [
  {
    title: 'GEO Research Papers',
    description: 'Latest academic research on generative engine optimization',
    icon: '📊',
    items: [
      'GEO vs SEO Performance Study (2024)',
      'AI Citation Patterns Analysis',
      'Conversational Search Behavior Research',
      'LLM Content Preference Study'
    ]
  },
  {
    title: 'Industry Reports',
    description: 'Market analysis and trend reports for AI search',
    icon: '📈',
    items: [
      'AI Search Market Report 2024',
      'Generative AI Adoption Statistics',
      'Content Marketing in the AI Era',
      'Future of Search: AI Impact Analysis'
    ]
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of successful GEO implementations',
    icon: '💼',
    items: [
      'E-commerce GEO Success Story',
      'B2B Content Optimization Case',
      'Publishing Platform AI Visibility',
      'Local Business GEO Strategy'
    ]
  },
  {
    title: 'Best Practices',
    description: 'Curated collection of proven GEO strategies',
    icon: '⭐',
    items: [
      'Content Structure Guidelines',
      'Schema Markup Best Practices',
      'AI-Friendly Writing Techniques',
      'Citation Optimization Strategies'
    ]
  }
]

const communityResources = [
  {
    platform: 'Newsletter',
    title: 'GEO Weekly Newsletter',
    description: 'Get the latest GEO strategies and insights delivered to your inbox',
    icon: '📧',
    link: '#newsletter'
  },
  {
    platform: 'Forum',
    title: 'GEO Community Forum',
    description: 'Ask questions and share knowledge with other practitioners',
    icon: '💬',
    link: '/community'
  },
  {
    platform: 'Academy',
    title: 'GEO Training Academy',
    description: 'Structured courses and certifications for GEO mastery',
    icon: '🎓',
    link: '/academy'
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              GEO Resources Hub
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Everything you need to master Generative Engine Optimization. 
              Tools, templates, guides, and community resources all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#tools" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Explore Tools
              </Link>
              <Link 
                href="#templates" 
                className="border border-indigo-300 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Get Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              GEO Tools Suite
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Professional-grade tools designed specifically for AI search optimization
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {toolsResources.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{tool.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{tool.title}</h3>
                        <span className="text-sm text-blue-600 font-medium">{tool.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{tool.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <span className="text-green-600 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={tool.link}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Launch Tool →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Templates & Checklists */}
      <section id="templates" className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Templates & Checklists
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Ready-to-use resources to streamline your GEO implementation
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {templatesChecklists.map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-8 hover:border-blue-300 transition">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{resource.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {resource.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <span className="text-blue-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition w-full">
                    Download {resource.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Resources */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Industry Resources
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Research, reports, and insights from the GEO industry
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryResources.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 text-sm hover:text-blue-600 cursor-pointer transition">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Learning Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/guide" className="block bg-blue-50 rounded-lg p-8 hover:bg-blue-100 transition">
                <div className="text-4xl mb-4 text-center">📚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Complete GEO Guide</h3>
                <p className="text-gray-700 text-center mb-4">
                  Comprehensive guide covering all aspects of generative engine optimization
                </p>
                <div className="text-center">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Free Access
                  </span>
                </div>
              </Link>
              
              <Link href="/blog" className="block bg-purple-50 rounded-lg p-8 hover:bg-purple-100 transition">
                <div className="text-4xl mb-4 text-center">✍️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">GEO Blog</h3>
                <p className="text-gray-700 text-center mb-4">
                  Latest strategies, case studies, and industry insights from GEO experts
                </p>
                <div className="text-center">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Regular Updates
                  </span>
                </div>
              </Link>
              
              <Link href="/glossary" className="block bg-green-50 rounded-lg p-8 hover:bg-green-100 transition">
                <div className="text-4xl mb-4 text-center">📖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">GEO Glossary</h3>
                <p className="text-gray-700 text-center mb-4">
                  Complete terminology guide with definitions and examples
                </p>
                <div className="text-center">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    30+ Terms
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Community & Support
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Connect with fellow GEO practitioners and get support
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {communityResources.map((community, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <span className="text-4xl mb-4 block">{community.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{community.title}</h3>
                  <p className="text-gray-700 mb-6">{community.description}</p>
                  {community.platform === 'Newsletter' ? (
                    <a 
                      href={community.link}
                      className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                      Subscribe →
                    </a>
                  ) : (
                    <Link 
                      href={community.link}
                      className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                      Join {community.platform} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with GEO Resources
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get notified when we add new tools, templates, and resources to the hub
            </p>
            
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Join 1,000+ professionals already using our GEO resources. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}