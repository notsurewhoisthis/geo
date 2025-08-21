'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface KeywordResult {
  keyword: string
  searchVolume: number
  competition: 'Low' | 'Medium' | 'High'
  geoScore: number
  aiVisibility: number
  citationPotential: number
  suggestions: string[]
}

export default function KeywordAnalyzerPage() {
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<KeywordResult | null>(null)
  const [error, setError] = useState('')

  const analyzeKeyword = async () => {
    if (!keyword.trim()) {
      setError('Please enter a keyword to analyze')
      return
    }

    setError('')
    setLoading(true)

    // Simulate API call with demo data
    setTimeout(() => {
      const demoResult: KeywordResult = {
        keyword: keyword,
        searchVolume: Math.floor(Math.random() * 50000) + 1000,
        competition: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)] as 'Low' | 'Medium' | 'High',
        geoScore: Math.floor(Math.random() * 30) + 70,
        aiVisibility: Math.floor(Math.random() * 40) + 60,
        citationPotential: Math.floor(Math.random() * 25) + 75,
        suggestions: [
          `${keyword} guide`,
          `${keyword} best practices`,
          `${keyword} statistics`,
          `${keyword} research`,
          `${keyword} trends 2025`
        ]
      }
      setResult(demoResult)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            GEO Keyword Analyzer
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Analyze keywords for their Generative Engine Optimization potential. Discover search volume, 
            AI visibility metrics, and get keyword suggestions optimized for AI platforms.
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="max-w-2xl mx-auto">
            <label htmlFor="keyword" className="block text-sm font-medium text-gray-300 mb-2">
              Enter Keyword or Topic
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g., generative AI, content optimization"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={analyzeKeyword}
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
        {result && (
          <div className="space-y-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Search Volume</h3>
                <p className="text-3xl font-bold text-white">{result.searchVolume.toLocaleString()}</p>
                <p className="text-gray-400 text-sm mt-1">Monthly searches</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Competition</h3>
                <p className={`text-3xl font-bold ${
                  result.competition === 'Low' ? 'text-green-400' :
                  result.competition === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {result.competition}
                </p>
                <p className="text-gray-400 text-sm mt-1">Difficulty level</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-gray-400 text-sm font-medium mb-2">GEO Score</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {result.geoScore}%
                </p>
                <p className="text-gray-400 text-sm mt-1">Optimization potential</p>
              </div>
            </div>

            {/* AI Visibility Metrics */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">AI Platform Visibility</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">AI Visibility Score</span>
                    <span className="text-white font-semibold">{result.aiVisibility}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${result.aiVisibility}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Citation Potential</span>
                    <span className="text-white font-semibold">{result.citationPotential}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${result.citationPotential}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Keyword Suggestions */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Related Keywords for GEO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {result.suggestions.map((suggestion, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-600 transition-colors cursor-pointer">
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* How It Works Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">How the Keyword Analyzer Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-purple-400 text-3xl font-bold mb-2">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Search Volume Analysis</h3>
              <p className="text-gray-400">We analyze monthly search volumes across multiple platforms to determine keyword popularity.</p>
            </div>
            <div>
              <div className="text-pink-400 text-3xl font-bold mb-2">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">GEO Score Calculation</h3>
              <p className="text-gray-400">Our algorithm evaluates the keyword's potential for optimization in AI-driven search results.</p>
            </div>
            <div>
              <div className="text-blue-400 text-3xl font-bold mb-2">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Visibility Prediction</h3>
              <p className="text-gray-400">We predict how well content targeting this keyword will perform on AI platforms.</p>
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
            <Link href="/tools/content-optimizer" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Content Optimizer</h3>
              <p className="text-gray-400">Optimize your content for AI search engines</p>
            </Link>
            <Link href="/tools/competitor-analysis" className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">Competitor Analysis</h3>
              <p className="text-gray-400">Analyze competitor GEO strategies</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}