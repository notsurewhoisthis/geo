import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container-blog relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              THE FUTURE OF SEO
            </div>
            
            <h1 className="hero-title text-gray-900 mb-6">
              Master <span className="gradient-text">Generative Engine</span> Optimization
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Learn how to optimize your content for AI search engines, chatbots, and large language models. Stay ahead in the new era of search.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/blog" className="btn-primary">
                Start Learning →
              </Link>
              <Link href="/resources" className="btn-secondary">
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container-blog">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900">Why GEO Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As AI becomes the primary interface for information discovery, traditional SEO evolves into Generative Engine Optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-First Content</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize content structure and semantics for better AI comprehension and citation in generated responses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Data</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement semantic markup and knowledge graphs that AI models can easily parse and understand.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Track performance metrics specific to AI-powered search and generative response inclusion rates.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Articles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-blog">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="section-title text-gray-900">Latest Articles</h2>
              <p className="text-xl text-gray-600">Fresh insights on Generative Engine Optimization</p>
            </div>
            <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700 transition">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="article-card">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge badge-blue">Tutorial</span>
                  <time className="text-sm text-gray-500">2 days ago</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Getting Started with Generative Engine Optimization
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  A comprehensive guide to understanding and implementing GEO strategies for your content in the age of AI-powered search.
                </p>
                <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Read More →
                </Link>
              </div>
            </article>
            
            <article className="article-card">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge badge-blue">Strategy</span>
                  <time className="text-sm text-gray-500">5 days ago</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Advanced Semantic Markup for AI Comprehension
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Deep dive into structured data implementation and semantic HTML patterns that improve AI understanding of your content.
                </p>
                <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Read More →
                </Link>
              </div>
            </article>
            
            <article className="article-card">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge badge-blue">Case Study</span>
                  <time className="text-sm text-gray-500">1 week ago</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How We Increased AI Citations by 300%
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Real-world case study showing the impact of GEO implementation on content visibility in AI-generated responses.
                </p>
                <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      {/* Best Practices Grid */}
      <section className="py-20 px-4">
        <div className="container-blog">
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-900">GEO Best Practices</h2>
            <p className="text-xl text-gray-600">Essential techniques for optimizing content for AI engines</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Clear Entity Definition',
                description: 'Define entities, concepts, and relationships explicitly to help AI models understand context.',
                icon: '🎯',
              },
              {
                title: 'Conversational Tone',
                description: 'Write in natural language that mirrors how users interact with AI assistants.',
                icon: '💬',
              },
              {
                title: 'Comprehensive Coverage',
                description: 'Create authoritative, in-depth content that serves as a reliable source for AI training.',
                icon: '📚',
              },
              {
                title: 'Structured Formatting',
                description: 'Use clear headings, lists, and logical organization for better content parsing.',
                icon: '📝',
              },
              {
                title: 'Multi-Modal Content',
                description: 'Combine text, images, videos, and data visualizations for richer context.',
                icon: '🎨',
              },
              {
                title: 'Regular Updates',
                description: 'Keep content fresh and current to maintain relevance in AI training datasets.',
                icon: '🔄',
              },
            ].map((practice, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{practice.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{practice.title}</h3>
                <p className="text-gray-600">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container-blog text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Master GEO?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of content creators and marketers who are already optimizing for the AI-powered future of search.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/blog" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              Start Learning
            </Link>
            <Link href="/resources" className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition">
              Get Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}