import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GEO Community - Join the Generative Engine Optimization Movement',
  description: 'Connect with thousands of GEO practitioners, share strategies, and learn from real-world case studies. Join the fastest-growing AI optimization community.',
  keywords: 'GEO community, AI SEO community, generative engine optimization forum, GEO practitioners',
  alternates: {
    canonical: 'https://generative-engine.org/community',
  },
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              GEO Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Join 10,000+ marketers mastering Generative Engine Optimization
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600">10,500+</div>
              <p className="text-gray-600 mt-2">Active Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">2,400+</div>
              <p className="text-gray-600 mt-2">Case Studies Shared</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">45%</div>
              <p className="text-gray-600 mt-2">Avg. Visibility Increase</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">150+</div>
              <p className="text-gray-600 mt-2">Weekly Discussions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Join the Conversation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Discord Server */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Discord Server</h3>
                    <p className="text-sm text-gray-600">Real-time discussions</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Join 5,000+ members in our Discord server for instant support, strategy sharing, and weekly AMA sessions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• #geo-strategies - Share optimization tactics</li>
                  <li>• #case-studies - Real success stories</li>
                  <li>• #tools-resources - Latest GEO tools</li>
                  <li>• #help-desk - Get expert assistance</li>
                </ul>
                <a href="/coming-soon" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Join Discord
                </a>
              </div>

              {/* LinkedIn Group */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">LinkedIn Group</h3>
                    <p className="text-sm text-gray-600">Professional network</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Connect with 3,500+ professionals optimizing for AI platforms. Share insights and build your network.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Weekly industry insights</li>
                  <li>• Job opportunities in GEO</li>
                  <li>• Expert interviews</li>
                  <li>• Networking events</li>
                </ul>
                <a href="/coming-soon" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Join LinkedIn
                </a>
              </div>

              {/* Reddit Community */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">R</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Reddit Community</h3>
                    <p className="text-sm text-gray-600">r/GenEngineOptimization</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Join 2,000+ Redditors discussing the latest GEO trends, sharing experiments, and troubleshooting challenges.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Daily discussion threads</li>
                  <li>• Tool recommendations</li>
                  <li>• Beginner resources</li>
                  <li>• Platform updates</li>
                </ul>
                <a href="/coming-soon" className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                  Join Reddit
                </a>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">✉</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Weekly Newsletter</h3>
                    <p className="text-sm text-gray-600">GEO insights delivered</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Get weekly updates on GEO strategies, AI platform changes, and exclusive case studies from top performers.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Platform algorithm updates</li>
                  <li>• Success story breakdowns</li>
                  <li>• Tool reviews & tutorials</li>
                  <li>• Industry research</li>
                </ul>
                <a href="/coming-soon" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Success Stories</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">E-commerce Site Achieves 65% AI Visibility</h3>
                    <p className="text-sm text-gray-600 mt-1">Shared by Sarah K. • Fashion Industry</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">+65% Visibility</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "By implementing citation-heavy product descriptions and FAQ sections, we went from zero AI mentions to appearing in 65% of relevant ChatGPT and Perplexity responses."
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span>👍 342 helpful</span>
                  <span className="mx-3">•</span>
                  <span>💬 45 comments</span>
                  <span className="mx-3">•</span>
                  <Link href="/coming-soon" className="text-green-600 hover:underline">Read full case study →</Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">SaaS Startup Doubles Qualified Leads with GEO</h3>
                    <p className="text-sm text-gray-600 mt-1">Shared by Mike T. • B2B Software</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">2x Leads</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Optimizing our documentation for Claude and GitHub Copilot brought us highly qualified developer leads. Our conversion rate increased by 45%."
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span>👍 287 helpful</span>
                  <span className="mx-3">•</span>
                  <span>💬 62 comments</span>
                  <span className="mx-3">•</span>
                  <Link href="/coming-soon" className="text-green-600 hover:underline">Read full case study →</Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Local Business Dominates AI-Powered Local Search</h3>
                    <p className="text-sm text-gray-600 mt-1">Shared by Jennifer L. • Healthcare Services</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">+80% Local</span>
                </div>
                <p className="text-gray-700 mb-4">
                  "Adding structured data and local citations made us the top recommendation in Perplexity and Bing Chat for healthcare queries in our city."
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <span>👍 195 helpful</span>
                  <span className="mx-3">•</span>
                  <span>💬 28 comments</span>
                  <span className="mx-3">•</span>
                  <Link href="/coming-soon" className="text-green-600 hover:underline">Read full case study →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Resources */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Resources</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GEO Complete Guide</h3>
                <p className="text-gray-600 text-sm">Comprehensive guide to mastering GEO</p>
              </Link>
              
              <Link href="/tools/visibility-tracker" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Visibility Tracker</h3>
                <p className="text-gray-600 text-sm">Test your AI platform visibility</p>
              </Link>
              
              <Link href="/benchmarks" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Benchmarks</h3>
                <p className="text-gray-600 text-sm">Compare your GEO performance</p>
              </Link>
              
              <Link href="/tutorials" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-gray-600 text-sm">Step-by-step optimization guides</p>
              </Link>
              
              <Link href="/glossary" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GEO Glossary</h3>
                <p className="text-gray-600 text-sm">Learn essential GEO terminology</p>
              </Link>
              
              <Link href="/blog" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Latest Articles</h3>
                <p className="text-gray-600 text-sm">Stay updated with GEO trends</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Guidelines</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Share Knowledge Freely</strong>
                    <p className="mt-1">Help others learn from your experiences and experiments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Respect All Levels</strong>
                    <p className="mt-1">From beginners to experts, everyone's journey matters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Back Claims with Data</strong>
                    <p className="mt-1">Share metrics and evidence when discussing strategies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Maintain Ethical Standards</strong>
                    <p className="mt-1">Focus on quality content that genuinely helps users</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Give Credit</strong>
                    <p className="mt-1">Acknowledge sources and contributors when sharing ideas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the GEO Revolution?</h2>
            <p className="text-xl mb-8">
              Connect with thousands of marketers who are already winning with AI optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/coming-soon" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Join Discord Community
              </a>
              <a href="/coming-soon" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}