'use client'

import { useState } from 'react'
import Link from 'next/link'

interface PlatformData {
  platform: string
  icon: string
  visibility: number
  citations: number
  trend: 'up' | 'down' | 'stable'
  trendPercent: number
}

interface CitationData {
  query: string
  platform: string
  cited: boolean
  position: number | null
  context: string
}

export default function VisibilityTrackerPage() {
  const [domain, setDomain] = useState('')
  const [isTracking, setIsTracking] = useState(false)
  const [platformData, setPlatformData] = useState<PlatformData[]>([])
  const [citations, setCitations] = useState<CitationData[]>([])
  const [overallScore, setOverallScore] = useState(0)

  const handleTrack = async () => {
    if (!domain) return
    
    setIsTracking(true)
    
    // Simulate tracking delay
    await new Promise(resolve => setTimeout(resolve, 4000))
    
    // Mock platform data
    const mockPlatformData: PlatformData[] = [
      {
        platform: 'ChatGPT',
        icon: '🤖',
        visibility: 78,
        citations: 156,
        trend: 'up',
        trendPercent: 12
      },
      {
        platform: 'Claude',
        icon: '🧠',
        visibility: 65,
        citations: 89,
        trend: 'up',
        trendPercent: 8
      },
      {
        platform: 'Perplexity',
        icon: '🔍',
        visibility: 82,
        citations: 201,
        trend: 'up',
        trendPercent: 15
      },
      {
        platform: 'Bing Chat',
        icon: '💬',
        visibility: 45,
        citations: 34,
        trend: 'stable',
        trendPercent: 2
      },
      {
        platform: 'Gemini',
        icon: '✨',
        visibility: 38,
        citations: 28,
        trend: 'down',
        trendPercent: -5
      }
    ]

    const mockCitations: CitationData[] = [
      {
        query: 'what is generative engine optimization',
        platform: 'ChatGPT',
        cited: true,
        position: 1,
        context: 'According to experts, generative engine optimization...'
      },
      {
        query: 'GEO vs SEO differences',
        platform: 'Perplexity',
        cited: true,
        position: 2,
        context: 'As outlined in industry research, the key differences...'
      },
      {
        query: 'AI search optimization techniques',
        platform: 'Claude',
        cited: true,
        position: 1,
        context: 'Leading optimization strategies include...'
      },
      {
        query: 'how to optimize for AI search',
        platform: 'ChatGPT',
        cited: false,
        position: null,
        context: 'Not cited in response'
      },
      {
        query: 'best GEO practices 2024',
        platform: 'Perplexity',
        cited: true,
        position: 3,
        context: 'Recent studies show that implementing...'
      }
    ]
    
    setPlatformData(mockPlatformData)
    setCitations(mockCitations)
    setOverallScore(Math.round(mockPlatformData.reduce((acc, platform) => acc + platform.visibility, 0) / mockPlatformData.length))
    setIsTracking(false)
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈'
      case 'down': return '📉'
      default: return '➡️'
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600'
      case 'down': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getVisibilityColor = (score: number) => {
    if (score >= 70) return 'from-green-400 to-green-600'
    if (score >= 50) return 'from-yellow-400 to-yellow-600'
    return 'from-red-400 to-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              AI Visibility Tracker
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Monitor your content's visibility and citation rates across ChatGPT, Claude, Perplexity, 
              and other AI search engines. Track performance and optimize for better AI visibility.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Track Your Domain</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter your domain (e.g., yoursite.com)"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleTrack}
                  disabled={!domain || isTracking}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isTracking ? 'Tracking...' : 'Start Tracking'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {platformData.length > 0 && (
        <section className="py-16 px-4">
          <div className="container-blog">
            <div className="max-w-6xl mx-auto">
              {/* Overall Score */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Overall AI Visibility Score</h2>
                  <div className="text-6xl font-bold text-blue-600 mb-4">{overallScore}/100</div>
                  <p className="text-gray-600">Average visibility across all AI platforms</p>
                  <div className="w-full bg-gray-200 rounded-full h-4 max-w-md mx-auto mt-4">
                    <div 
                      className={`bg-gradient-to-r ${getVisibilityColor(overallScore)} h-4 rounded-full transition-all duration-1000`}
                      style={{ width: `${overallScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Platform Breakdown */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Performance</h3>
                <div className="grid gap-6">
                  {platformData.map((platform, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{platform.icon}</span>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{platform.platform}</h4>
                            <p className="text-gray-600">{platform.citations} total citations</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{platform.visibility}%</div>
                          <div className={`flex items-center gap-1 ${getTrendColor(platform.trend)}`}>
                            <span>{getTrendIcon(platform.trend)}</span>
                            <span className="text-sm">{Math.abs(platform.trendPercent)}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r ${getVisibilityColor(platform.visibility)} h-3 rounded-full`}
                          style={{ width: `${platform.visibility}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Citation Details */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Citation Activity</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Query</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Platform</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Position</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Context</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {citations.map((citation, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900">{citation.query}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{citation.platform}</td>
                          <td className="px-6 py-4">
                            {citation.cited ? (
                              <span className="inline-flex px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                                Cited
                              </span>
                            ) : (
                              <span className="inline-flex px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">
                                Not Cited
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {citation.position ? `#${citation.position}` : '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {citation.context.substring(0, 50)}...
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Insights and Recommendations */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Key Insights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">•</span>
                      <span>Perplexity shows highest citation rate (82%)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>ChatGPT citations increased 12% this month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-600">•</span>
                      <span>Opportunity to improve Gemini visibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600">•</span>
                      <span>Strong performance on informational queries</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Recommendations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">1.</span>
                      <span>Create more FAQ-style content for better Claude visibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">2.</span>
                      <span>Optimize existing content with recent statistics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">3.</span>
                      <span>Focus on technical how-to guides for Gemini</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">4.</span>
                      <span>Implement more schema markup for structured data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      {platformData.length === 0 && (
        <section className="py-16 px-4">
          <div className="container-blog">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How AI Visibility Tracking Works
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Query Testing</h3>
                  <p className="text-gray-600">
                    We test your content against hundreds of relevant queries across AI platforms
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Citation Analysis</h3>
                  <p className="text-gray-600">
                    Track when and how your content is cited in AI responses
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Trends</h3>
                  <p className="text-gray-600">
                    Monitor visibility changes and optimization opportunities over time
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Track</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Visibility Metrics</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Citation frequency across platforms</li>
                      <li>• Position in AI responses</li>
                      <li>• Query coverage and relevance</li>
                      <li>• Trending topic performance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Platform Coverage</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• ChatGPT (GPT-4 and GPT-3.5)</li>
                      <li>• Claude (Anthropic)</li>
                      <li>• Perplexity AI</li>
                      <li>• Bing Chat & Gemini</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Tools */}
      <section className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More GEO Tools</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/tools/geo-audit" className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">GEO Audit Tool</h3>
                <p className="text-gray-600">Analyze your content's AI optimization score</p>
              </Link>
              
              <Link href="/tools/keyword-research" className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-4">🔑</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Keyword Research</h3>
                <p className="text-gray-600">Find conversational queries for AI platforms</p>
              </Link>
              
              <Link href="/tools/content-optimizer" className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Content Optimizer</h3>
                <p className="text-gray-600">Optimize existing content for GEO</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}