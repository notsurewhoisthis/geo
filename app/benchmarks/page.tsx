import { Metadata } from 'next'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'GEO Benchmarks & Performance Metrics | Generative Engine Optimization',
  description: 'Comprehensive benchmarks comparing GEO strategies across AI platforms. Track performance metrics, visibility scores, and optimization results for ChatGPT, Claude, Perplexity, and more.',
  keywords: 'GEO benchmarks, AI optimization metrics, performance tracking, visibility scores, generative engine optimization results',
  openGraph: {
    title: 'GEO Benchmarks & Performance Metrics',
    description: 'Comprehensive benchmarks comparing GEO strategies across AI platforms',
    url: 'https://generative-engine.org/benchmarks',
    type: 'website',
  },
}

export default function BenchmarksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Benchmarks', href: '/benchmarks' }
          ]}
        />
        
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              GEO Benchmarks & Performance Metrics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track and compare GEO optimization performance across AI platforms with real-time benchmarks and comprehensive analytics.
            </p>
          </header>

          {/* Performance Overview */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">Platform Performance Overview</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">92%</div>
                  <div className="text-gray-300">ChatGPT Visibility</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">87%</div>
                  <div className="text-gray-300">Claude Accuracy</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">89%</div>
                  <div className="text-gray-300">Perplexity Citations</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">94%</div>
                  <div className="text-gray-300">Gemini Coverage</div>
                </div>
              </div>
            </div>
          </section>

          {/* Benchmark Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Benchmark Categories</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">🎯 Visibility Metrics</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Citation frequency across platforms</li>
                  <li>• Response inclusion rates</li>
                  <li>• Source attribution quality</li>
                  <li>• Answer completeness scores</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4">📊 Performance Analytics</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Query response accuracy</li>
                  <li>• Content relevance scoring</li>
                  <li>• User satisfaction metrics</li>
                  <li>• Engagement depth analysis</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-800/40 to-teal-800/40 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-white mb-4">🚀 Optimization Impact</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Before/after comparisons</li>
                  <li>• Strategy effectiveness rates</li>
                  <li>• ROI on optimization efforts</li>
                  <li>• Competitive positioning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI Platform Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">AI Platform Comparison</h2>
            
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="pb-4 text-gray-300 font-semibold">Platform</th>
                      <th className="pb-4 text-gray-300 font-semibold">Visibility Score</th>
                      <th className="pb-4 text-gray-300 font-semibold">Citation Rate</th>
                      <th className="pb-4 text-gray-300 font-semibold">Response Quality</th>
                      <th className="pb-4 text-gray-300 font-semibold">Update Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700/50">
                      <td className="py-4 font-semibold">ChatGPT</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <div className="w-16 h-2 bg-gray-700 rounded-full mr-3">
                            <div className="w-14 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <span>92%</span>
                        </div>
                      </td>
                      <td className="py-4">High</td>
                      <td className="py-4">Excellent</td>
                      <td className="py-4">Real-time</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-4 font-semibold">Claude</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <div className="w-16 h-2 bg-gray-700 rounded-full mr-3">
                            <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <span>87%</span>
                        </div>
                      </td>
                      <td className="py-4">Very High</td>
                      <td className="py-4">Superior</td>
                      <td className="py-4">Daily</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-4 font-semibold">Perplexity</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <div className="w-16 h-2 bg-gray-700 rounded-full mr-3">
                            <div className="w-13 h-2 bg-purple-500 rounded-full"></div>
                          </div>
                          <span>89%</span>
                        </div>
                      </td>
                      <td className="py-4">Exceptional</td>
                      <td className="py-4">High</td>
                      <td className="py-4">Hourly</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-semibold">Gemini</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <div className="w-16 h-2 bg-gray-700 rounded-full mr-3">
                            <div className="w-15 h-2 bg-yellow-500 rounded-full"></div>
                          </div>
                          <span>94%</span>
                        </div>
                      </td>
                      <td className="py-4">High</td>
                      <td className="py-4">Very Good</td>
                      <td className="py-4">Real-time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Optimization Strategies Performance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Optimization Strategy Performance</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Top Performing Strategies</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Citation Enhancement</span>
                    <span className="text-green-400 font-semibold">+47% visibility</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">FAQ Integration</span>
                    <span className="text-green-400 font-semibold">+35% engagement</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Statistical Content</span>
                    <span className="text-green-400 font-semibold">+29% citations</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Schema Markup</span>
                    <span className="text-green-400 font-semibold">+22% accuracy</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Industry Benchmarks</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Technology Sector</span>
                    <span className="text-blue-400 font-semibold">89% avg visibility</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Healthcare</span>
                    <span className="text-blue-400 font-semibold">85% avg visibility</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Finance</span>
                    <span className="text-blue-400 font-semibold">82% avg visibility</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">E-commerce</span>
                    <span className="text-blue-400 font-semibold">91% avg visibility</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Live Testing Tools */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Live Testing & Measurement Tools</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/tools/visibility-tracker" className="block bg-gradient-to-br from-purple-700/50 to-blue-700/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">🔍 Visibility Tracker</h3>
                <p className="text-gray-300 text-sm">Real-time visibility analysis across AI platforms</p>
              </a>
              
              <a href="/tools/geo-audit" className="block bg-gradient-to-br from-blue-700/50 to-cyan-700/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">📊 GEO Audit</h3>
                <p className="text-gray-300 text-sm">Comprehensive optimization assessment tool</p>
              </a>
              
              <a href="/tools/content-optimizer" className="block bg-gradient-to-br from-green-700/50 to-teal-700/50 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all group">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-300 transition-colors">⚡ Content Optimizer</h3>
                <p className="text-gray-300 text-sm">AI-powered content enhancement recommendations</p>
              </a>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Benchmark Your GEO Performance?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Start tracking your optimization results today and compare your performance against industry leaders.
              </p>
              <div className="space-x-4">
                <a 
                  href="/tools/visibility-tracker" 
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
                >
                  Start Tracking
                </a>
                <a 
                  href="/guide" 
                  className="inline-block border border-purple-500 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
                >
                  Learn GEO
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}