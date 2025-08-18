'use client'

import { useState } from 'react'
import Link from 'next/link'

interface AuditResult {
  score: number
  category: string
  issues: string[]
  recommendations: string[]
  details?: any
}

export default function GEOAuditPage() {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<AuditResult[]>([])
  const [overallScore, setOverallScore] = useState(0)

  const handleAudit = async () => {
    if (!url) return
    
    setIsAnalyzing(true)
    setResults([])
    setOverallScore(0)
    
    try {
      // Call the real API endpoint
      const response = await fetch('/api/geo-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url })
      })
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.details || 'Failed to analyze URL')
      }
      
      const data = await response.json()
      setResults(data.results || [])
      setOverallScore(data.overallScore || 0)
    } catch (error) {
      console.error('Audit error:', error)
      // Show error message to user
      alert(`Failed to analyze URL: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBarColor = (score: number) => {
    if (score >= 80) return 'from-green-400 to-green-600'
    if (score >= 60) return 'from-yellow-400 to-yellow-600'
    return 'from-red-400 to-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              GEO Audit Tool
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Analyze your content's optimization for AI search engines like ChatGPT, Claude, and Perplexity. 
              Get instant scores and actionable improvement recommendations.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Analyze Your Content</h2>
              <p className="text-sm text-blue-700 mb-4">
                🔍 Real-time analysis of your actual content for GEO factors
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your webpage URL"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAudit}
                  disabled={!url || isAnalyzing}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Audit Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {results.length > 0 && (
        <section className="py-16 px-4">
          <div className="container-blog">
            <div className="max-w-4xl mx-auto">
              {/* Overall Score */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Overall GEO Score</h2>
                  <div className={`text-6xl font-bold mb-4 ${getScoreColor(overallScore)}`}>
                    {overallScore}/100
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 max-w-md mx-auto">
                    <div 
                      className={`bg-gradient-to-r ${getScoreBarColor(overallScore)} h-4 rounded-full transition-all duration-1000`}
                      style={{ width: `${overallScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Detailed Results */}
              <div className="grid gap-6">
                {results.map((result, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{result.category}</h3>
                      <div className={`text-2xl font-bold ${getScoreColor(result.score)}`}>
                        {result.score}/100
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                      <div 
                        className={`bg-gradient-to-r ${getScoreBarColor(result.score)} h-3 rounded-full`}
                        style={{ width: `${result.score}%` }}
                      ></div>
                    </div>

                    {result.issues.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-red-700 mb-2">Issues Found:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {result.issues.map((issue, idx) => (
                            <li key={idx}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Recommendations:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {result.recommendations.map((rec, idx) => (
                          <li key={idx}>{rec}</li>
                        ))}
                      </ul>
                    </div>

                    {result.details && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-blue-700 mb-2">Analysis Details:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          {Object.entries(result.details).map(([key, value]) => (
                            <div key={key}>
                              <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {String(value)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Steps */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">🎯 Priority Actions</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Fix content structure issues first</li>
                      <li>• Add semantic markup and entity definitions</li>
                      <li>• Include quotable statistics and citations</li>
                      <li>• Create FAQ sections for common questions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">📈 Expected Results</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 40% increase in AI platform visibility</li>
                      <li>• Better featured snippet performance</li>
                      <li>• Enhanced citation rates in AI responses</li>
                      <li>• Improved semantic search rankings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      {results.length === 0 && (
        <section className="py-16 px-4">
          <div className="container-blog">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How Our GEO Audit Works
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Content Analysis</h3>
                  <p className="text-gray-600">
                    We analyze your content structure, semantic clarity, and AI-friendly formatting
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Scoring</h3>
                  <p className="text-gray-600">
                    Get scores for different aspects of GEO optimization with detailed breakdowns
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Action Plan</h3>
                  <p className="text-gray-600">
                    Receive specific recommendations to improve your AI search visibility
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Check</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Technical Factors</h4>
                    <ul className="text-gray-700 space-y-1 list-disc list-inside">
                      <li>Schema.org markup implementation</li>
                      <li>Heading structure and hierarchy</li>
                      <li>Meta descriptions and titles</li>
                      <li>Page loading speed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Content Quality</h4>
                    <ul className="text-gray-700 space-y-1 list-disc list-inside">
                      <li>Semantic clarity and entity definitions</li>
                      <li>Citation and statistic usage</li>
                      <li>FAQ and Q&A sections</li>
                      <li>Comprehensive topic coverage</li>
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