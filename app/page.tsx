import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full bg-gray-800 text-sm mb-6">
              New Era of SEO
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Optimize for the{' '}
              <span className="gradient-text">AI-Powered</span> Future
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Generative Engine Optimization (GEO) helps your content thrive in AI search results,
              chatbots, and large language models.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/blog" className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-400 to-blue-500 hover:shadow-xl transition font-semibold">
                Explore Latest Insights
              </Link>
              <Link href="/resources" className="px-8 py-4 rounded-lg border border-gray-700 hover:bg-gray-800 transition font-semibold">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Cards */}
        <div className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-gray-800 rounded-xl p-6 card-hover">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">AI-Ready Content</h3>
            <p className="text-gray-400">Optimize your content for AI models and chatbots</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 card-hover">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Semantic Search</h3>
            <p className="text-gray-400">Master semantic SEO for better AI understanding</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 card-hover">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
            <p className="text-gray-400">Track your GEO performance with advanced analytics</p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">GEO Best Practices</h2>
            <p className="text-xl text-gray-400">Master the fundamentals of Generative Engine Optimization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💡',
                title: 'Optimize for AI Context',
                description: 'Structure your content to provide clear context and relevance for AI models',
                category: 'content',
              },
              {
                icon: '🔧',
                title: 'Use Semantic Markup',
                description: 'Implement structured data and semantic HTML to help AI understand your content',
                category: 'technical',
              },
              {
                icon: '⭐',
                title: 'Focus on Authority',
                description: 'Build topical authority with comprehensive, well-researched content',
                category: 'strategy',
              },
              {
                icon: '💬',
                title: 'Natural Language Optimization',
                description: 'Write in conversational tone that aligns with how users query AI systems',
                category: 'content',
              },
              {
                icon: '🔗',
                title: 'Entity Recognition',
                description: 'Clearly define and relate entities, concepts, and their relationships',
                category: 'technical',
              },
              {
                icon: '📱',
                title: 'Multi-Modal Content',
                description: 'Include diverse content types - text, images, videos, and structured data',
                category: 'strategy',
              },
            ].map((tip, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:border-purple-400 border border-gray-700 transition">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{tip.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                    <p className="text-gray-400 mb-3">{tip.description}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-700 text-xs uppercase">
                      {tip.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-400">Stay updated with the latest in Generative Engine Optimization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gray-800 rounded-xl overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                    Getting Started with GEO
                  </h3>
                  <p className="text-gray-400">Learn the fundamentals of Generative Engine Optimization</p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog" className="group">
              <div className="bg-gray-800 rounded-xl overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                    Advanced GEO Strategies
                  </h3>
                  <p className="text-gray-400">Deep dive into advanced optimization techniques</p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog" className="group">
              <div className="bg-gray-800 rounded-xl overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                    GEO Case Studies
                  </h3>
                  <p className="text-gray-400">Real-world examples and success stories</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}