'use client'

import { useState } from 'react'
import Link from 'next/link'

interface KeywordData {
  keyword: string
  searchVolume: string
  difficulty: string
  intent: string
  aiOptimized: boolean
}

export default function KeywordResearchPage() {
  const [seedKeyword, setSeedKeyword] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [keywords, setKeywords] = useState<KeywordData[]>([])
  const [activeTab, setActiveTab] = useState<'conversational' | 'traditional' | 'questions'>('conversational')

  const handleSearch = async () => {
    if (!seedKeyword) return
    
    setIsSearching(true)
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock keyword data based on seed keyword
    const mockKeywords: KeywordData[] = [
      {
        keyword: `How to implement ${seedKeyword} for better AI search visibility`,
        searchVolume: '1.2K',
        difficulty: 'Medium',
        intent: 'Informational',
        aiOptimized: true
      },
      {
        keyword: `What is the best ${seedKeyword} strategy for ChatGPT optimization`,
        searchVolume: '890',
        difficulty: 'Low',
        intent: 'Informational',
        aiOptimized: true
      },
      {
        keyword: `${seedKeyword} vs traditional SEO techniques comparison`,
        searchVolume: '2.1K',
        difficulty: 'Medium',
        intent: 'Comparative',
        aiOptimized: true
      },
      {
        keyword: `Step by step guide to ${seedKeyword} implementation`,
        searchVolume: '3.4K',
        difficulty: 'High',
        intent: 'Tutorial',
        aiOptimized: true
      },
      {
        keyword: `Why ${seedKeyword} is important for business growth`,
        searchVolume: '1.8K',
        difficulty: 'Medium',
        intent: 'Educational',
        aiOptimized: true
      },
      {
        keyword: `${seedKeyword} tools and resources for beginners`,
        searchVolume: '740',
        difficulty: 'Low',
        intent: 'Resource',
        aiOptimized: true
      },
      {
        keyword: `Common mistakes in ${seedKeyword} optimization`,
        searchVolume: '650',
        difficulty: 'Low',
        intent: 'Problem-solving',
        aiOptimized: true
      },
      {
        keyword: `${seedKeyword} case studies and success stories`,
        searchVolume: '920',
        difficulty: 'Medium',
        intent: 'Research',
        aiOptimized: true
      }
    ]
    
    setKeywords(mockKeywords)
    setIsSearching(false)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Low': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'High': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredKeywords = keywords.filter(keyword => {
    if (activeTab === 'conversational') return keyword.keyword.length > 50
    if (activeTab === 'questions') return keyword.keyword.includes('How') || keyword.keyword.includes('What') || keyword.keyword.includes('Why')
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              AI Keyword Research Tool
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover conversational keywords and long-tail queries that perform well on AI search engines. 
              Generate keyword ideas optimized for ChatGPT, Claude, and Perplexity AI.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Keywords</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={seedKeyword}
                  onChange={(e) => setSeedKeyword(e.target.value)}
                  placeholder="Enter your seed keyword (e.g., GEO, AI optimization)"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSearch}
                  disabled={!seedKeyword || isSearching}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSearching ? 'Searching...' : 'Find Keywords'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {keywords.length > 0 && (
        <section className="py-16 px-4">
          <div className="container-blog">
            <div className="max-w-6xl mx-auto">
              {/* Filter Tabs */}
              <div className="flex gap-4 mb-8 justify-center">
                <button
                  onClick={() => setActiveTab('conversational')}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    activeTab === 'conversational'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Conversational ({keywords.filter(k => k.keyword.length > 50).length})
                </button>
                <button
                  onClick={() => setActiveTab('questions')}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    activeTab === 'questions'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Questions ({keywords.filter(k => k.keyword.includes('How') || k.keyword.includes('What') || k.keyword.includes('Why')).length})
                </button>
                <button
                  onClick={() => setActiveTab('traditional')}
                  className={`px-6 py-3 rounded-lg font-semibold transition ${
                    activeTab === 'traditional'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  All Keywords ({keywords.length})
                </button>
              </div>

              {/* Keywords Table */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Keyword</th>
                        <th className="px-6 py-4 text-left">Volume</th>
                        <th className="px-6 py-4 text-left">Difficulty</th>
                        <th className="px-6 py-4 text-left">Intent</th>
                        <th className="px-6 py-4 text-left">AI Optimized</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredKeywords.map((keyword, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">{keyword.keyword}</div>
                          </td>
                          <td className="px-6 py-4 text-gray-700">{keyword.searchVolume}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(keyword.difficulty)}`}>
                              {keyword.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-700">{keyword.intent}</td>
                          <td className="px-6 py-4">
                            {keyword.aiOptimized ? (
                              <span className="text-green-600">✓ Optimized</span>
                            ) : (
                              <span className="text-gray-400">Standard</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Insights */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Key Insights</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">•</span>
                      <span>Conversational keywords perform 40% better on AI platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">•</span>
                      <span>Question-based queries get higher citation rates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">•</span>
                      <span>Long-tail keywords (10+ words) are ideal for GEO</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600">•</span>
                      <span>Intent-focused content ranks better in AI responses</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Content Strategy</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Create comprehensive guides for high-volume keywords</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Target question keywords with FAQ sections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Use conversational tone for better AI comprehension</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600">•</span>
                      <span>Include statistics and citations for authority</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      {keywords.length === 0 && (
        <section className="py-16 px-4">
          <div className="container-blog">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                AI-Optimized Keyword Research
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conversational Focus</h3>
                  <p className="text-gray-600">
                    Find keywords that match how people actually ask questions to AI assistants
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Performance Data</h3>
                  <p className="text-gray-600">
                    See how keywords perform specifically on AI platforms like ChatGPT and Claude
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Intent Analysis</h3>
                  <p className="text-gray-600">
                    Understand user intent to create content that AI systems will cite and recommend
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Keyword Types We Find</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Conversational Queries</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• "How do I optimize my content for ChatGPT visibility?"</li>
                      <li>• "What's the difference between SEO and GEO in 2024?"</li>
                      <li>• "Which AI platforms should I focus on first?"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Problem-Solving Keywords</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• "Why isn't my content showing up in AI responses?"</li>
                      <li>• "How to fix low AI citation rates?"</li>
                      <li>• "Best practices for generative engine optimization"</li>
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
              
              <Link href="/tools/content-optimizer" className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Content Optimizer</h3>
                <p className="text-gray-600">Optimize existing content for GEO</p>
              </Link>
              
              <Link href="/tools/visibility-tracker" className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visibility Tracker</h3>
                <p className="text-gray-600">Monitor your AI platform citations</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}