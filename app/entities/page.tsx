import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GEO Knowledge Graph - Entity Directory',
  description: 'Comprehensive directory of Generative Engine Optimization entities, concepts, and technologies. Explore the complete GEO knowledge graph.',
  keywords: 'GEO entities, knowledge graph, AI SEO concepts, generative engine optimization terms',
}

export default function EntitiesPage() {
  const entities = [
    {
      slug: 'generative-engine-optimization',
      name: 'Generative Engine Optimization (GEO)',
      category: 'Core Concept',
      description: 'The practice of optimizing content for AI-powered search engines',
      importance: 'critical'
    },
    {
      slug: 'chatgpt-optimization',
      name: 'ChatGPT Optimization',
      category: 'Platform',
      description: 'Techniques for improving visibility in OpenAI ChatGPT responses',
      importance: 'high'
    },
    {
      slug: 'claude-optimization',
      name: 'Claude Optimization',
      category: 'Platform',
      description: 'Strategies for Anthropic Claude AI visibility',
      importance: 'high'
    },
    {
      slug: 'perplexity-optimization',
      name: 'Perplexity Optimization',
      category: 'Platform',
      description: 'Methods to rank higher in Perplexity AI search results',
      importance: 'high'
    },
    {
      slug: 'llm-optimization',
      name: 'Large Language Model Optimization',
      category: 'Technology',
      description: 'General techniques for optimizing content for LLMs',
      importance: 'critical'
    },
    {
      slug: 'rag-optimization',
      name: 'RAG Optimization',
      category: 'Technology',
      description: 'Retrieval-Augmented Generation optimization strategies',
      importance: 'high'
    },
    {
      slug: 'ai-citations',
      name: 'AI Citations',
      category: 'Technique',
      description: 'How AI models cite and reference content',
      importance: 'medium'
    },
    {
      slug: 'semantic-search-optimization',
      name: 'Semantic Search Optimization',
      category: 'Technology',
      description: 'Optimizing for meaning-based search algorithms',
      importance: 'high'
    },
    {
      slug: 'vector-embeddings',
      name: 'Vector Embeddings',
      category: 'Technology',
      description: 'How AI converts text to mathematical representations',
      importance: 'medium'
    },
    {
      slug: 'prompt-engineering',
      name: 'Prompt Engineering',
      category: 'Technique',
      description: 'Crafting effective prompts for AI interactions',
      importance: 'medium'
    }
  ]

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GEO Entity Knowledge Graph',
    description: 'Comprehensive collection of Generative Engine Optimization entities and concepts',
    url: 'https://generative-engine.org/entities',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: entities.length,
      itemListElement: entities.map((entity, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Thing',
          name: entity.name,
          description: entity.description,
          url: `https://generative-engine.org/entities/${entity.slug}`
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
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GEO Knowledge Graph
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore comprehensive entity pages for every concept, platform, and technique in 
            Generative Engine Optimization. Each entity page provides Wikipedia-style depth 
            with structured data for AI understanding.
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{entities.length}</div>
            <div className="text-gray-600">Total Entities</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600">4</div>
            <div className="text-gray-600">Platforms</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">4</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">2</div>
            <div className="text-gray-600">Techniques</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">All Entities</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Core Concepts</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Platforms</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Technologies</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Techniques</button>
          </div>
        </div>

        {/* Entity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entities.map((entity) => (
            <Link
              key={entity.slug}
              href={`/entities/${entity.slug}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  entity.category === 'Core Concept' ? 'bg-red-100 text-red-800' :
                  entity.category === 'Platform' ? 'bg-blue-100 text-blue-800' :
                  entity.category === 'Technology' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {entity.category}
                </span>
                {entity.importance === 'critical' && (
                  <span className="text-yellow-500">⭐</span>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {entity.name}
              </h2>
              <p className="text-gray-600 text-sm">
                {entity.description}
              </p>
              <div className="mt-4 text-blue-600 font-medium text-sm">
                Learn more →
              </div>
            </Link>
          ))}
        </div>

        {/* Knowledge Graph Visualization Placeholder */}
        <div className="mt-16 bg-gray-100 rounded-lg p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Interactive Knowledge Graph</h2>
          <p className="text-gray-600 mb-6">
            Visualize connections between GEO concepts, platforms, and techniques
          </p>
          <div className="bg-white rounded-lg p-8 inline-block">
            <svg width="400" height="300" viewBox="0 0 400 300">
              {/* Simple knowledge graph visualization */}
              <circle cx="200" cy="150" r="30" fill="#3B82F6" />
              <text x="200" y="155" textAnchor="middle" fill="white" fontSize="12">GEO</text>
              
              <circle cx="100" cy="80" r="20" fill="#10B981" />
              <text x="100" y="85" textAnchor="middle" fill="white" fontSize="10">ChatGPT</text>
              
              <circle cx="300" cy="80" r="20" fill="#10B981" />
              <text x="300" y="85" textAnchor="middle" fill="white" fontSize="10">Claude</text>
              
              <circle cx="100" cy="220" r="20" fill="#10B981" />
              <text x="100" y="225" textAnchor="middle" fill="white" fontSize="10">Perplexity</text>
              
              <circle cx="300" cy="220" r="20" fill="#10B981" />
              <text x="300" y="225" textAnchor="middle" fill="white" fontSize="10">LLMs</text>
              
              <line x1="200" y1="150" x2="100" y2="80" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="200" y1="150" x2="300" y2="80" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="200" y1="150" x2="100" y2="220" stroke="#E5E7EB" strokeWidth="2" />
              <line x1="200" y1="150" x2="300" y2="220" stroke="#E5E7EB" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Topic Clusters */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Topic Clusters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">GEO Techniques Cluster</h3>
              <ul className="space-y-2">
                <li><Link href="/entities/citation-optimization" className="text-blue-600 hover:underline">Citation Optimization</Link></li>
                <li><Link href="/entities/statistical-enhancement" className="text-blue-600 hover:underline">Statistical Enhancement</Link></li>
                <li><Link href="/entities/authority-signals" className="text-blue-600 hover:underline">Authority Signals</Link></li>
                <li><Link href="/entities/content-structuring" className="text-blue-600 hover:underline">Content Structuring</Link></li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-900">AI Platforms Cluster</h3>
              <ul className="space-y-2">
                <li><Link href="/entities/chatgpt-optimization" className="text-green-600 hover:underline">ChatGPT</Link></li>
                <li><Link href="/entities/claude-optimization" className="text-green-600 hover:underline">Claude</Link></li>
                <li><Link href="/entities/perplexity-optimization" className="text-green-600 hover:underline">Perplexity</Link></li>
                <li><Link href="/entities/bing-chat-optimization" className="text-green-600 hover:underline">Bing Chat</Link></li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-900">Case Studies Cluster</h3>
              <ul className="space-y-2">
                <li><Link href="/case-studies/ecommerce-geo" className="text-purple-600 hover:underline">E-commerce GEO</Link></li>
                <li><Link href="/case-studies/b2b-geo" className="text-purple-600 hover:underline">B2B GEO</Link></li>
                <li><Link href="/case-studies/saas-geo" className="text-purple-600 hover:underline">SaaS GEO</Link></li>
                <li><Link href="/case-studies/content-geo" className="text-purple-600 hover:underline">Content Sites GEO</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}