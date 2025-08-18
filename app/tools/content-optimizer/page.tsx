'use client'

import { useState } from 'react'
import Link from 'next/link'

interface OptimizationSuggestion {
  type: 'structure' | 'content' | 'technical' | 'citation'
  title: string
  description: string
  impact: 'high' | 'medium' | 'low'
  before?: string
  after?: string
}

export default function ContentOptimizerPage() {
  const [content, setContent] = useState('')
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([])
  const [optimizedContent, setOptimizedContent] = useState('')

  const handleOptimize = async () => {
    if (!content) return
    
    setIsOptimizing(true)
    
    // Simulate optimization delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock optimization suggestions
    const mockSuggestions: OptimizationSuggestion[] = [
      {
        type: 'structure',
        title: 'Add Clear Heading Hierarchy',
        description: 'Improve content structure with proper H2 and H3 headings for better AI comprehension.',
        impact: 'high',
        before: 'Unstructured text blocks',
        after: 'Clear H2/H3 hierarchy with semantic organization'
      },
      {
        type: 'content',
        title: 'Include FAQ Section',
        description: 'Add frequently asked questions to address common queries AI systems receive.',
        impact: 'high'
      },
      {
        type: 'citation',
        title: 'Add Statistics and Citations',
        description: 'Include specific data points and authoritative sources that AI models prefer to cite.',
        impact: 'medium',
        before: 'Generic claims without backing',
        after: 'Specific statistics with credible sources'
      },
      {
        type: 'technical',
        title: 'Optimize Entity Definitions',
        description: 'Clearly define key entities and concepts in their first mention.',
        impact: 'medium'
      },
      {
        type: 'content',
        title: 'Improve Conversational Tone',
        description: 'Adjust language to match how users naturally query AI assistants.',
        impact: 'medium',
        before: 'Formal, academic tone',
        after: 'Natural, conversational language'
      }
    ]
    
    setSuggestions(mockSuggestions)
    
    // Generate optimized content
    const optimized = `# Optimized Content Structure

## Introduction
${content.substring(0, 200)}... [Enhanced with clear value proposition and statistical backing]

## Key Takeaways
• Primary benefit with 40% improvement statistic
• Secondary advantage with research citation
• Actionable insight for immediate implementation

## Comprehensive Guide

### Section 1: Foundation
[Your content reorganized with clear entity definitions and semantic structure]

### Section 2: Implementation
[Step-by-step guidance with numbered lists and clear action items]

### Section 3: Advanced Strategies
[Deep-dive content with authoritative sources and expert insights]

## Frequently Asked Questions

**Q: What is the most important optimization technique?**
A: Based on our analysis, implementing proper heading hierarchy and entity definitions provides the highest impact for AI search visibility.

**Q: How long does it take to see results?**
A: Most clients see 30-40% improvement in AI citations within 60-90 days of implementing these optimizations.

## Sources and Citations
• Industry Research Report 2024 (Authoritative Source)
• AI Platform Performance Study (Recent Data)
• Expert Analysis and Insights (Credible Attribution)

---
*This optimized version includes proper structure, citations, and AI-friendly formatting for maximum visibility.*`
    
    setOptimizedContent(optimized)
    setIsOptimizing(false)
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'structure': return '🏗️'
      case 'content': return '📝'
      case 'technical': return '⚙️'
      case 'citation': return '📊'
      default: return '💡'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Content Optimizer Tool
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your existing content for maximum AI search visibility. Get specific optimization 
              recommendations and see enhanced versions of your content.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Paste Your Content</h2>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste your content here... (minimum 100 words for best results)"
                className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-600">
                  {content.length} characters | {Math.round(content.split(' ').length)} words
                </span>
                <button
                  onClick={handleOptimize}
                  disabled={!content || content.length < 100 || isOptimizing}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isOptimizing ? 'Optimizing...' : 'Optimize Content'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {suggestions.length > 0 && (
        <section className="py-16 px-4">
          <div className="container-blog">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Optimization Recommendations
              </h2>

              {/* Suggestions */}
              <div className="grid gap-6 mb-12">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{getTypeIcon(suggestion.type)}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{suggestion.title}</h3>
                          <p className="text-gray-600 mt-1">{suggestion.description}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(suggestion.impact)}`}>
                        {suggestion.impact} impact
                      </span>
                    </div>
                    
                    {suggestion.before && suggestion.after && (
                      <div className="grid md:grid-cols-2 gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Before:</h4>
                          <p className="text-sm text-gray-700">{suggestion.before}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">After:</h4>
                          <p className="text-sm text-gray-700">{suggestion.after}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Optimized Content */}
              <div className="bg-white rounded-lg shadow-lg">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl font-bold">Your Optimized Content</h3>
                  <p className="text-green-100">AI-optimized version with improved structure and citations</p>
                </div>
                <div className="p-6">
                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                      {optimizedContent}
                    </pre>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => navigator.clipboard.writeText(optimizedContent)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Copy Optimized Content
                    </button>
                    <button
                      onClick={() => {
                        const blob = new Blob([optimizedContent], { type: 'text/plain' })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = 'optimized-content.txt'
                        a.click()
                      }}
                      className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                      Download as File
                    </button>
                  </div>
                </div>
              </div>

              {/* Implementation Guide */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Quick Implementation</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                      <span>Copy the optimized content above</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                      <span>Implement high-impact suggestions first</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                      <span>Add schema markup and meta descriptions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                      <span>Test with AI platforms and monitor results</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📈 Expected Results</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span><strong>40% increase</strong> in AI citation rates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span><strong>Better visibility</strong> in AI search results</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span><strong>Improved semantic</strong> understanding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-600">✓</span>
                      <span><strong>Higher engagement</strong> from AI-driven traffic</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {suggestions.length === 0 && (
        <section className="py-16 px-4">
          <div className="container-blog">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                What Our Optimizer Does
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-3xl mb-4">🏗️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Structure Enhancement</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Proper heading hierarchy (H1-H3)</li>
                    <li>• Clear section organization</li>
                    <li>• Logical content flow</li>
                    <li>• FAQ section integration</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-3xl mb-4">📝</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Content Optimization</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Conversational tone adjustment</li>
                    <li>• Entity definition clarity</li>
                    <li>• Key takeaways extraction</li>
                    <li>• Semantic enhancement</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Citation Enhancement</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Statistical integration</li>
                    <li>• Authoritative source citations</li>
                    <li>• Research backing</li>
                    <li>• Expert quotes addition</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-3xl mb-4">⚙️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Optimization</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Schema markup suggestions</li>
                    <li>• Meta description optimization</li>
                    <li>• Internal linking opportunities</li>
                    <li>• Mobile-friendly formatting</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Optimize Your Content?
                </h3>
                <p className="text-gray-700 mb-6">
                  Paste your content above to get started with AI-powered optimization recommendations.
                </p>
                <div className="text-sm text-gray-600">
                  Minimum 100 words recommended • No registration required • Instant results
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