import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) - Complete Entity Guide',
  description: 'Comprehensive knowledge base for Generative Engine Optimization (GEO). Learn what GEO is, how it works, key techniques, and its relationship to AI search optimization.',
  keywords: 'generative engine optimization, GEO definition, AI SEO, what is GEO, generative AI optimization',
  alternates: {
    canonical: 'https://generative-engine.org/entities/generative-engine-optimization'
  }
}

export default function GenerativeEngineOptimizationEntity() {
  // Entity schema for Knowledge Graph
  const entitySchema = {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    '@id': 'https://generative-engine.org/entities/generative-engine-optimization#entity',
    name: 'Generative Engine Optimization',
    alternateName: ['GEO', 'Gen Engine Optimization', 'AI SEO'],
    description: 'A set of optimization techniques designed to improve content visibility in AI-powered search engines and language models like ChatGPT, Claude, and Perplexity.',
    sameAs: [
      'https://en.wikipedia.org/wiki/Search_engine_optimization#AI_and_machine_learning',
      'https://wikidata.org/wiki/Q180711'
    ],
    image: 'https://generative-engine.org/geo-entity-image.png',
    url: 'https://generative-engine.org/entities/generative-engine-optimization',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://generative-engine.org/entities/generative-engine-optimization'
    },
    potentialAction: {
      '@type': 'LearnAction',
      object: {
        '@type': 'Course',
        name: 'GEO Mastery Course',
        provider: {
          '@type': 'Organization',
          name: 'GEO Platform'
        }
      }
    }
  }

  // DefinedTerm schema for technical definition
  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': 'https://generative-engine.org/glossary#geo',
    name: 'Generative Engine Optimization (GEO)',
    description: 'The practice of optimizing digital content to achieve higher visibility and preferential treatment in AI-powered search engines and language models.',
    inDefinedTermSet: 'https://generative-engine.org/glossary',
    termCode: 'GEO'
  }

  // Article schema for the entity page
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Generative Engine Optimization (GEO): The Complete Entity Guide',
    author: {
      '@type': 'Organization',
      name: 'GEO Platform',
      url: 'https://generative-engine.org'
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@id': 'https://generative-engine.org/entities/generative-engine-optimization#entity'
    },
    mentions: [
      { '@type': 'Thing', name: 'ChatGPT' },
      { '@type': 'Thing', name: 'Claude' },
      { '@type': 'Thing', name: 'Perplexity' },
      { '@type': 'Thing', name: 'Search Engine Optimization' },
      { '@type': 'Thing', name: 'Large Language Models' }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li><Link href="/entities" className="text-blue-600 hover:text-blue-800">Entities</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900">Generative Engine Optimization</li>
          </ol>
        </nav>

        {/* Entity Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Generative Engine Optimization (GEO)
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Entity</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Concept</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Technology</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Generative Engine Optimization (GEO) is a set of optimization techniques designed to improve 
            content visibility in AI-powered search engines and language models like ChatGPT, Claude, 
            and Perplexity.
          </p>
        </header>

        {/* Quick Facts Box */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="font-semibold text-gray-600">Type:</dt>
              <dd>Digital Marketing Technique</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Introduced:</dt>
              <dd>2023</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Related To:</dt>
              <dd>SEO, AI, LLMs, Content Marketing</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Primary Use:</dt>
              <dd>AI Search Visibility</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Key Platforms:</dt>
              <dd>ChatGPT, Claude, Perplexity, Bing Chat</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Effectiveness:</dt>
              <dd>Up to 40% visibility increase</dd>
            </div>
          </dl>
        </div>

        {/* Main Content Sections */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Definition</h2>
            <p className="mb-4">
              <strong>Generative Engine Optimization (GEO)</strong> is the practice of optimizing digital content 
              to achieve higher visibility and preferential treatment in AI-powered search engines and language models. 
              Unlike traditional SEO which focuses on keyword rankings in search engines like Google, GEO aims to 
              make content more likely to be cited, referenced, and recommended by AI systems.
            </p>
            <p className="mb-4">
              The term emerged in 2023 as AI-powered search tools like ChatGPT, Claude, and Perplexity began 
              replacing traditional search engines for many users. Research from Princeton, Georgia Tech, and 
              IIT Delhi demonstrated that specific optimization techniques could increase AI visibility by up to 40%.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Core Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">1. Citation Optimization</h3>
                <p>Adding authoritative citations increases visibility by 40.6% in AI responses.</p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">2. Statistical Enhancement</h3>
                <p>Including statistics and data points improves visibility by 32.7%.</p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">3. Structured Content</h3>
                <p>Clear headings and FAQ sections boost comprehension and citation rates.</p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">4. Authority Signals</h3>
                <p>Expert quotes and credible sources increase trustworthiness scores.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How GEO Works</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong>Content Analysis:</strong> AI models analyze and index content based on relevance, 
                  authority, and comprehensiveness.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong>Ranking Factors:</strong> Models evaluate citations, statistics, expertise signals, 
                  and content structure.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong>Response Generation:</strong> AI preferentially cites well-optimized content in 
                  responses to user queries.
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong>Visibility Impact:</strong> Optimized content appears more frequently and prominently 
                  in AI-generated answers.
                </div>
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">GEO vs Traditional SEO</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Traditional SEO</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">GEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Target</td>
                    <td className="border border-gray-300 px-4 py-2">Search engines (Google, Bing)</td>
                    <td className="border border-gray-300 px-4 py-2">AI models (ChatGPT, Claude)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Focus</td>
                    <td className="border border-gray-300 px-4 py-2">Keywords & backlinks</td>
                    <td className="border border-gray-300 px-4 py-2">Citations & authority</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Content</td>
                    <td className="border border-gray-300 px-4 py-2">Keyword-optimized</td>
                    <td className="border border-gray-300 px-4 py-2">Fact-rich & comprehensive</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Success Metric</td>
                    <td className="border border-gray-300 px-4 py-2">SERP rankings</td>
                    <td className="border border-gray-300 px-4 py-2">AI citations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Techniques</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-xl font-bold mb-2">Cite Sources</h3>
                <p className="mb-2">Impact: <strong>+40.6% visibility</strong></p>
                <p>Add credible citations and references to establish authority and trustworthiness.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h3 className="text-xl font-bold mb-2">Add Statistics</h3>
                <p className="mb-2">Impact: <strong>+32.7% visibility</strong></p>
                <p>Include relevant data, percentages, and numerical facts to enhance credibility.</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-xl font-bold mb-2">Include Quotes</h3>
                <p className="mb-2">Impact: <strong>+28.9% visibility</strong></p>
                <p>Feature expert opinions and authoritative quotes to boost expertise signals.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Applications</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Content Marketing:</strong> Optimizing blog posts and articles for AI discovery</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>E-commerce:</strong> Product descriptions that AI assistants recommend</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>B2B Marketing:</strong> Technical content that appears in AI research responses</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Education:</strong> Learning materials cited by AI tutors</div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <div><strong>Healthcare:</strong> Medical information referenced by AI health assistants</div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Entities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/entities/chatgpt-optimization" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-bold mb-2">ChatGPT Optimization</h3>
                <p className="text-sm text-gray-600">Specific techniques for OpenAI's ChatGPT</p>
              </Link>
              <Link href="/entities/claude-optimization" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-bold mb-2">Claude Optimization</h3>
                <p className="text-sm text-gray-600">Optimization for Anthropic's Claude</p>
              </Link>
              <Link href="/entities/perplexity-optimization" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-bold mb-2">Perplexity Optimization</h3>
                <p className="text-sm text-gray-600">Visibility in Perplexity AI search</p>
              </Link>
              <Link href="/entities/llm-optimization" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-bold mb-2">LLM Optimization</h3>
                <p className="text-sm text-gray-600">General large language model optimization</p>
              </Link>
              <Link href="/entities/ai-seo" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-bold mb-2">AI SEO</h3>
                <p className="text-sm text-gray-600">Search optimization for AI platforms</p>
              </Link>
              <Link href="/entities/rag-optimization" className="block p-4 border rounded-lg hover:bg-gray-50 transition">
                <h3 className="font-bold mb-2">RAG Optimization</h3>
                <p className="text-sm text-gray-600">Retrieval-Augmented Generation optimization</p>
              </Link>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">External References</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://arxiv.org/abs/2311.09735" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  GEO: Generative Engine Optimization (Research Paper)
                </a>
              </li>
              <li>
                <a href="https://github.com/generative-engine-optimization" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  GEO GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://searchengineland.com/geo-ai-search" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Search Engine Land: Understanding GEO
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Master GEO Today</h2>
          <p className="text-xl mb-6">Start optimizing your content for AI-powered search engines</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/tools/geo-audit" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Try GEO Audit Tool
            </Link>
            <Link href="/blog" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Read GEO Guides
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}