'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface CompetitorData {
  domain: string
  geoScore: number
  citationCount: number
  statisticsCount: number
  faqSections: number
  schemaMarkup: boolean
  contentLength: number
  aiVisibility: {
    perplexity: number
    chatgpt: number
    claude: number
    bingChat: number
  }
  strengths: string[]
  opportunities: string[]
}

export default function CompetitorAnalysisPage() {
  const [domain, setDomain] = useState('')
  const [competitors, setCompetitors] = useState<CompetitorData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const analyzeCompetitors = async () => {
    if (!domain.trim()) {
      setError('Please enter a domain to analyze')
      return
    }

    setError('')
    setLoading(true)

    // Simulate API call with demo data
    setTimeout(() => {
      const demoCompetitors: CompetitorData[] = [
        {
          domain: domain,
          geoScore: 78,
          citationCount: 12,
          statisticsCount: 25,
          faqSections: 3,
          schemaMarkup: true,
          contentLength: 2500,
          aiVisibility: {
            perplexity: 82,
            chatgpt: 75,
            claude: 79,
            bingChat: 71
          },
          strengths: ['Strong citation usage', 'Comprehensive FAQ sections', 'Rich schema markup'],
          opportunities: ['Increase statistical data', 'Add more long-form content']
        },
        {
          domain: 'competitor1.com',
          geoScore: 65,
          citationCount: 8,
          statisticsCount: 15,
          faqSections: 2,
          schemaMarkup: true,
          contentLength: 1800,
          aiVisibility: {
            perplexity: 68,
            chatgpt: 62,
            claude: 65,
            bingChat: 60
          },
          strengths: ['Good schema implementation', 'Regular content updates'],
          opportunities: ['Add more citations', 'Expand FAQ sections', 'Increase content depth']
        },
        {
          domain: 'competitor2.com',
          geoScore: 85,
          citationCount: 20,
          statisticsCount: 35,
          faqSections: 5,
          schemaMarkup: true,
          contentLength: 3200,
          aiVisibility: {
            perplexity: 88,
            chatgpt: 85,
            claude: 87,
            bingChat: 82
          },
          strengths: ['Excellent citation density', 'Comprehensive content', 'Strong AI optimization'],
          opportunities: ['Minor improvements in technical SEO']
        }
      ]
      setCompetitors(demoCompetitors)
      setLoading(false)
    }, 2000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            GEO Competitor Analysis
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Analyze your competitors' Generative Engine Optimization strategies. Compare domain metrics, 
            identify strengths and opportunities, and benchmark your GEO performance.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <label htmlFor="domain" className="block text-sm font-medium text-gray-300 mb-2">
              Enter Your Domain
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g., example.com"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={analyzeCompetitors}
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50"
              >
                {loading ? 'Analyzing...' : 'Analyze'}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-red-400 text-sm">{error}</p>
            )}
          </div>
        </div>

        {/* Results Section */}
        {competitors.length > 0 && (
          <div className="space-y-8">
            {/* Comparison Table */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Competitor Comparison</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Domain</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">GEO Score</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Citations</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Statistics</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">FAQ Sections</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Schema</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Content Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {competitors.map((comp, index) => (
                      <tr key={index} className={index === 0 ? 'bg-gray-700/50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {comp.domain}
                          {index === 0 && <span className="ml-2 text-xs text-purple-400">(You)</span>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <span className={`font-semibold ${getScoreColor(comp.geoScore)}`}>
                            {comp.geoScore}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                          {comp.citationCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                          {comp.statisticsCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                          {comp.faqSections}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          {comp.schemaMarkup ? (
                            <span className="text-green-400">✓</span>
                          ) : (
                            <span className="text-red-400">✗</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-300">
                          {comp.contentLength.toLocaleString()} words
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Platform Visibility */}
            <div className="grid md:grid-cols-2 gap-6">
              {competitors.map((comp, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {comp.domain} {index === 0 && <span className="text-purple-400">(You)</span>}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(comp.aiVisibility).map(([platform, score]) => (
                      <div key={platform}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 capitalize">{platform}</span>
                          <span className="text-white font-semibold">{score}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths and Opportunities */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Your Strengths</h3>
                <ul className="space-y-2">
                  {competitors[0]?.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Improvement Opportunities</h3>
                <ul className="space-y-2">
                  {competitors[0]?.opportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-400 mr-2">→</span>
                      <span className="text-gray-300">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Top Competitor Analysis */}
            {competitors[2] && (
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Learn from Top Performer: {competitors[2].domain}
                </h3>
                <p className="text-gray-300 mb-4">
                  This competitor has the highest GEO score ({competitors[2].geoScore}%). Here's what they're doing right:
                </p>
                <ul className="space-y-2">
                  {competitors[2].strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-400 mr-2">★</span>
                      <span className="text-gray-300">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* How It Works Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">How Competitor Analysis Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-purple-400 text-3xl font-bold mb-2">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Identify Competitors</h3>
              <p className="text-gray-400">We automatically identify your top competitors based on your domain and content focus.</p>
            </div>
            <div>
              <div className="text-pink-400 text-3xl font-bold mb-2">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Analyze GEO Factors</h3>
              <p className="text-gray-400">We evaluate key GEO factors including citations, statistics, FAQs, and content structure.</p>
            </div>
            <div>
              <div className="text-blue-400 text-3xl font-bold mb-2">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Generate Insights</h3>
              <p className="text-gray-400">Get actionable insights on strengths to maintain and opportunities to improve your GEO strategy.</p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Related GEO Tools</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/tools/visibility-tracker" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Visibility Tracker</h3>
              <p className="text-gray-400">Track your content's visibility across AI platforms</p>
            </Link>
            <Link href="/tools/keyword-analyzer" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Keyword Analyzer</h3>
              <p className="text-gray-400">Analyze keywords for GEO potential</p>
            </Link>
            <Link href="/tools/geo-audit" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">GEO Audit</h3>
              <p className="text-gray-400">Complete audit of your GEO implementation</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}