import { Metadata } from 'next'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'GEO Tutorials & Step-by-Step Guides | Generative Engine Optimization',
  description: 'Learn Generative Engine Optimization with comprehensive tutorials, step-by-step guides, and practical examples for optimizing content across AI platforms.',
  keywords: 'GEO tutorials, AI optimization guides, step-by-step GEO, ChatGPT optimization tutorial, Claude optimization guide, Perplexity SEO',
  openGraph: {
    title: 'GEO Tutorials & Step-by-Step Guides',
    description: 'Learn Generative Engine Optimization with comprehensive tutorials and practical examples',
    url: 'https://generative-engine.org/tutorials',
    type: 'website',
  },
}

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-8">
        <Breadcrumbs 
          items={[
            { name: 'Home', href: '/' },
            { name: 'Tutorials', href: '/tutorials' }
          ]}
        />
        
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              GEO Tutorials & Learning Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master Generative Engine Optimization with our comprehensive tutorials, step-by-step guides, and practical examples.
            </p>
          </header>

          {/* Learning Paths */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Learning Paths</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-800/40 to-teal-800/40 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🌟</span>
                  <h3 className="text-xl font-bold text-white">Beginner</h3>
                </div>
                <p className="text-gray-300 mb-4">Start your GEO journey with fundamental concepts and basic optimization techniques.</p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  <li>• What is GEO?</li>
                  <li>• AI Platform Basics</li>
                  <li>• Content Optimization 101</li>
                  <li>• First GEO Audit</li>
                </ul>
                <div className="text-sm text-green-400 font-semibold">4 tutorials • 2 hours</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🚀</span>
                  <h3 className="text-xl font-bold text-white">Intermediate</h3>
                </div>
                <p className="text-gray-300 mb-4">Advanced strategies for platform-specific optimization and performance tracking.</p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  <li>• Platform-Specific Strategies</li>
                  <li>• Citation & Source Optimization</li>
                  <li>• Schema Implementation</li>
                  <li>• Performance Analytics</li>
                </ul>
                <div className="text-sm text-blue-400 font-semibold">6 tutorials • 4 hours</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🎯</span>
                  <h3 className="text-xl font-bold text-white">Expert</h3>
                </div>
                <p className="text-gray-300 mb-4">Master advanced techniques for enterprise-level GEO implementation and scaling.</p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                  <li>• Enterprise GEO Strategy</li>
                  <li>• Multi-Platform Optimization</li>
                  <li>• Advanced Analytics</li>
                  <li>• Team Implementation</li>
                </ul>
                <div className="text-sm text-purple-400 font-semibold">8 tutorials • 6 hours</div>
              </div>
            </div>
          </section>

          {/* Featured Tutorials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Tutorials</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded">BEGINNER</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-purple-300 transition-colors">Complete GEO Setup Guide</h3>
                  </div>
                  <span className="text-2xl">📚</span>
                </div>
                <p className="text-gray-300 mb-4">Learn how to set up your first GEO strategy from scratch, including content auditing and optimization planning.</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>45 min read</span>
                  <span>Updated Dec 2024</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-blue-400 font-semibold bg-blue-400/10 px-2 py-1 rounded">INTERMEDIATE</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-300 transition-colors">ChatGPT Optimization Mastery</h3>
                  </div>
                  <span className="text-2xl">🤖</span>
                </div>
                <p className="text-gray-300 mb-4">Deep dive into ChatGPT-specific optimization techniques including prompt engineering and content structuring.</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>60 min read</span>
                  <span>Updated Jan 2025</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-purple-400 font-semibold bg-purple-400/10 px-2 py-1 rounded">EXPERT</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-green-300 transition-colors">Multi-Platform Strategy</h3>
                  </div>
                  <span className="text-2xl">🌐</span>
                </div>
                <p className="text-gray-300 mb-4">Advanced guide for optimizing across multiple AI platforms simultaneously while maintaining content quality.</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>90 min read</span>
                  <span>Updated Jan 2025</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 rounded-xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs text-yellow-400 font-semibold bg-yellow-400/10 px-2 py-1 rounded">PRACTICAL</span>
                    <h3 className="text-xl font-bold text-white mt-2 group-hover:text-orange-300 transition-colors">GEO Analytics & Measurement</h3>
                  </div>
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-gray-300 mb-4">Learn to track, measure, and optimize your GEO performance with advanced analytics and KPI frameworks.</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>75 min read</span>
                  <span>Updated Dec 2024</span>
                </div>
              </div>
            </div>
          </section>

          {/* Tutorial Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Tutorial Categories</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-6 text-center hover:bg-gray-800/70 transition-all group">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">🎯</span>
                <h3 className="text-lg font-bold text-white mb-2">Strategy Planning</h3>
                <p className="text-gray-300 text-sm mb-3">GEO strategy development and implementation planning</p>
                <div className="text-xs text-purple-400 font-semibold">12 tutorials</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 text-center hover:bg-gray-800/70 transition-all group">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">✍️</span>
                <h3 className="text-lg font-bold text-white mb-2">Content Optimization</h3>
                <p className="text-gray-300 text-sm mb-3">Writing and structuring content for AI platforms</p>
                <div className="text-xs text-blue-400 font-semibold">18 tutorials</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 text-center hover:bg-gray-800/70 transition-all group">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">🔧</span>
                <h3 className="text-lg font-bold text-white mb-2">Technical Implementation</h3>
                <p className="text-gray-300 text-sm mb-3">Schema markup, structured data, and technical setup</p>
                <div className="text-xs text-green-400 font-semibold">15 tutorials</div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-6 text-center hover:bg-gray-800/70 transition-all group">
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">📈</span>
                <h3 className="text-lg font-bold text-white mb-2">Analytics & Tracking</h3>
                <p className="text-gray-300 text-sm mb-3">Performance measurement and optimization tracking</p>
                <div className="text-xs text-yellow-400 font-semibold">10 tutorials</div>
              </div>
            </div>
          </section>

          {/* Platform-Specific Guides */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Platform-Specific Guides</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="/platforms/chatgpt" className="block bg-gradient-to-br from-green-700/30 to-emerald-700/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all group">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🤖</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors">ChatGPT Optimization</h3>
                </div>
                <p className="text-gray-300 text-sm">Complete guide to optimizing content for ChatGPT responses and citations.</p>
              </a>
              
              <a href="/platforms/claude" className="block bg-gradient-to-br from-blue-700/30 to-cyan-700/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all group">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🧠</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">Claude AI Optimization</h3>
                </div>
                <p className="text-gray-300 text-sm">Strategies for maximizing visibility and accuracy in Claude AI responses.</p>
              </a>
              
              <a href="/platforms/perplexity" className="block bg-gradient-to-br from-purple-700/30 to-violet-700/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all group">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔍</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Perplexity AI Optimization</h3>
                </div>
                <p className="text-gray-300 text-sm">Master citation optimization and source authority for Perplexity.</p>
              </a>
              
              <a href="/platforms/gemini" className="block bg-gradient-to-br from-orange-700/30 to-yellow-700/30 rounded-xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all group">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💎</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">Google Gemini Optimization</h3>
                </div>
                <p className="text-gray-300 text-sm">Optimize for Google's Gemini AI with advanced content strategies.</p>
              </a>
              
              <a href="/platforms/grok" className="block bg-gradient-to-br from-red-700/30 to-pink-700/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all group">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">⚡</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">Grok AI Optimization</h3>
                </div>
                <p className="text-gray-300 text-sm">Real-time optimization strategies for Grok's dynamic AI platform.</p>
              </a>
              
              <a href="/platforms" className="block bg-gradient-to-br from-gray-700/30 to-slate-700/30 rounded-xl p-6 border border-gray-500/20 hover:border-gray-400/40 transition-all group">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🌐</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">All Platforms</h3>
                </div>
                <p className="text-gray-300 text-sm">Browse optimization guides for 100+ AI platforms and models.</p>
              </a>
            </div>
          </section>

          {/* Quick Start Guide */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-6">Quick Start: Your First GEO Implementation</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">5-Step GEO Setup</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                      <div>
                        <h4 className="text-white font-semibold">Content Audit</h4>
                        <p className="text-gray-300 text-sm">Analyze existing content for GEO optimization opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                      <div>
                        <h4 className="text-white font-semibold">Citation Strategy</h4>
                        <p className="text-gray-300 text-sm">Implement authoritative source citations and references</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                      <div>
                        <h4 className="text-white font-semibold">Structure Optimization</h4>
                        <p className="text-gray-300 text-sm">Organize content with clear headings and logical flow</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                      <div>
                        <h4 className="text-white font-semibold">Schema Implementation</h4>
                        <p className="text-gray-300 text-sm">Add structured data for better AI comprehension</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</span>
                      <div>
                        <h4 className="text-white font-semibold">Performance Tracking</h4>
                        <p className="text-gray-300 text-sm">Monitor visibility and optimize based on results</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Essential Tools</h3>
                  <div className="space-y-3">
                    <a href="/tools/visibility-tracker" className="block text-purple-300 hover:text-purple-200 transition-colors">
                      🔍 Visibility Tracker - Real-time analysis
                    </a>
                    <a href="/tools/geo-audit" className="block text-blue-300 hover:text-blue-200 transition-colors">
                      📊 GEO Audit - Comprehensive assessment
                    </a>
                    <a href="/tools/content-optimizer" className="block text-green-300 hover:text-green-200 transition-colors">
                      ⚡ Content Optimizer - AI-powered recommendations
                    </a>
                    <a href="/guide" className="block text-yellow-300 hover:text-yellow-200 transition-colors">
                      📚 Complete GEO Guide - In-depth fundamentals
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Master GEO?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Start with our beginner tutorials and work your way up to advanced optimization strategies.
              </p>
              <div className="space-x-4">
                <a 
                  href="/guide" 
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
                >
                  Start Learning
                </a>
                <a 
                  href="/tools/visibility-tracker" 
                  className="inline-block border border-purple-500 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
                >
                  Try Tools First
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}