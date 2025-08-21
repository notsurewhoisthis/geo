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
  const [competitorUrls, setCompetitorUrls] = useState('')
  const [competitors, setCompetitors] = useState<CompetitorData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const analyzeCompetitors = async () => {
    if (!domain.trim()) {
      setError('Please enter your domain to analyze')
      return
    }

    setError('')
    setLoading(true)
    setCompetitors([])

    try {
      // Parse competitor URLs or use defaults
      const urls = competitorUrls.trim() 
        ? competitorUrls.split('\n').map(u => u.trim()).filter(u => u)
        : ['techcrunch.com', 'theverge.com'] // Default competitors

      // Add user's domain to the analysis
      const allUrls = [domain, ...urls].slice(0, 5) // Max 5 sites
      const competitorResults: CompetitorData[] = []

      for (const url of allUrls) {
        try {
          const response = await fetch('/api/analyze-website', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
          })

          if (response.ok) {
            const data = await response.json()
            
            // Determine strengths based on high scores
            const strengths: string[] = []
            if (data.metrics.citations >= 5) strengths.push('Strong citation usage')
            if (data.metrics.statistics >= 10) strengths.push('Rich statistical content')
            if (data.metrics.faqSections > 0) strengths.push('FAQ sections present')
            if (data.metrics.hasSchema) strengths.push('Schema markup implemented')
            if (data.metrics.wordCount >= 1500) strengths.push('Comprehensive content depth')
            if (data.metrics.headings.h2 >= 3) strengths.push('Well-structured headings')

            // Determine opportunities based on low scores
            const opportunities: string[] = []
            if (data.metrics.citations < 3) opportunities.push(`Add ${3 - data.metrics.citations} more citations`)
            if (data.metrics.statistics < 5) opportunities.push('Include more statistics and data')
            if (data.metrics.faqSections === 0) opportunities.push('Add FAQ sections')
            if (!data.metrics.hasSchema) opportunities.push('Implement schema markup')
            if (data.metrics.wordCount < 1000) opportunities.push('Expand content length')
            if (!data.metrics.metaDescription) opportunities.push('Add meta description')

            competitorResults.push({
              domain: url,
              geoScore: data.geoScore,
              citationCount: data.metrics.citations,
              statisticsCount: data.metrics.statistics,
              faqSections: data.metrics.faqSections,
              schemaMarkup: data.metrics.hasSchema,
              contentLength: data.metrics.wordCount,
              aiVisibility: data.aiVisibility,
              strengths,
              opportunities
            })
          }
        } catch (err) {
          console.error(`Failed to analyze ${url}:`, err)
        }
      }

      if (competitorResults.length === 0) {
        throw new Error('Unable to analyze any websites. Please check the URLs and try again.')
      }

      // Sort by GEO score (highest first)
      competitorResults.sort((a, b) => b.geoScore - a.geoScore)
      
      setCompetitors(competitorResults)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze competitors')
    } finally {
      setLoading(false)
    }
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
            Real-Time Competitor Analysis
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Analyze real competitor websites to understand their GEO strategies. Compare actual metrics, 
            identify strengths and opportunities, and benchmark your performance with real data.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Domain
                </label>
                <input
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="e.g., example.com"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="competitors" className="block text-sm font-medium text-gray-300 mb-2">
                  Competitor Domains (Optional - one per line)
                </label>
                <textarea
                  id="competitors"
                  value={competitorUrls}
                  onChange={(e) => setCompetitorUrls(e.target.value)}
                  placeholder="competitor1.com&#10;competitor2.com&#10;competitor3.com"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <p className="mt-1 text-gray-500 text-sm">
                  Leave empty to analyze example tech sites, or enter up to 4 competitor domains
                </p>
              </div>

              <button
                onClick={analyzeCompetitors}
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50"
              >
                {loading ? 'Analyzing Real Websites...' : 'Analyze Competitors'}
              </button>
            </div>
            
            {error && (
              <p className="mt-4 text-red-400 text-sm">{error}</p>
            )}
          </div>
        </div>

        {/* Results Section */}
        {competitors.length > 0 && (
          <div className="space-y-8">
            {/* Comparison Table */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Real-Time Competitor Comparison</h2>
                <p className="text-gray-400 text-sm mt-1">Actual metrics from live website analysis</p>
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
                      <tr key={index} className={comp.domain === domain ? 'bg-gray-700/50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {comp.domain}
                          {comp.domain === domain && <span className="ml-2 text-xs text-purple-400">(You)</span>}
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
              {competitors.slice(0, 4).map((comp, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {comp.domain} {comp.domain === domain && <span className="text-purple-400">(You)</span>}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(comp.aiVisibility).map(([platform, score]) => (
                      <div key={platform}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 capitalize">{platform.replace('bingChat', 'Bing Chat')}</span>
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

            {/* Strengths and Opportunities for Your Domain */}
            {competitors.find(c => c.domain === domain) && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Your Strengths</h3>
                  <ul className="space-y-2">
                    {competitors.find(c => c.domain === domain)?.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span className="text-gray-300">{strength}</span>
                      </li>
                    )) || <li className="text-gray-400">No significant strengths detected</li>}
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Improvement Opportunities</h3>
                  <ul className="space-y-2">
                    {competitors.find(c => c.domain === domain)?.opportunities.map((opportunity, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-400 mr-2">→</span>
                        <span className="text-gray-300">{opportunity}</span>
                      </li>
                    )) || <li className="text-gray-400">You're doing great!</li>}
                  </ul>
                </div>
              </div>
            )}

            {/* Top Performer Analysis */}
            {competitors.length > 1 && (
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 border border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Learn from Top Performer: {competitors[0].domain}
                </h3>
                <p className="text-gray-300 mb-4">
                  This website has the highest GEO score ({competitors[0].geoScore}%). Here's what they're doing right:
                </p>
                <ul className="space-y-2">
                  {competitors[0].strengths.map((strength, index) => (
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
          <h2 className="text-2xl font-bold text-white mb-6">How Real-Time Analysis Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-purple-400 text-3xl font-bold mb-2">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Fetch Live Websites</h3>
              <p className="text-gray-400">We fetch and analyze the actual HTML content from each website in real-time.</p>
            </div>
            <div>
              <div className="text-pink-400 text-3xl font-bold mb-2">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Extract GEO Metrics</h3>
              <p className="text-gray-400">Count real citations, statistics, FAQs, schema markup, and content structure.</p>
            </div>
            <div>
              <div className="text-blue-400 text-3xl font-bold mb-2">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Generate Insights</h3>
              <p className="text-gray-400">Compare metrics and provide actionable recommendations based on real data.</p>
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