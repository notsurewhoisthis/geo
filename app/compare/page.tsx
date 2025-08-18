import { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

interface Comparison {
  slug: string
  title: string
  subtitle: string
  category: string
  difficulty: string
  impact: string
  timeToImplement: string
  costLevel: string
  geoAdvantages: string[]
  traditionalAdvantages: string[]
  keyDifferences: {
    aspect: string
    geo: string
    traditional: string
    winner: 'GEO' | 'Traditional' | 'Tie'
  }[]
}

export const metadata: Metadata = {
  title: 'GEO vs Traditional SEO Comparisons | Strategy Analysis',
  description: 'Compare Generative Engine Optimization with traditional SEO strategies. Understand when to use GEO vs SEO for maximum visibility across AI platforms and search engines.',
  keywords: 'GEO vs SEO, generative engine optimization comparison, AI SEO differences, GEO strategy comparison',
  alternates: {
    canonical: 'https://www.generative-engine.org/compare',
  },
}

async function getAllComparisons(): Promise<Comparison[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'comparisons.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading comparisons data:', error)
    return []
  }
}

export default async function ComparisonsPage() {
  const comparisons = await getAllComparisons()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              GEO vs Traditional SEO
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Strategic comparisons to help you choose the right optimization approach. 
              Understand when to use GEO, SEO, or both for maximum impact.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">{comparisons.length}</div>
                <div className="text-sm text-orange-200">Strategy Comparisons</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-orange-200">Decision Factors</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">80%</div>
                <div className="text-sm text-orange-200">Better Together</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#comparisons" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                View All Comparisons
              </a>
              <Link 
                href="/guide" 
                className="border border-orange-300 hover:bg-orange-800 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Read Complete Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Key Insights: GEO vs Traditional SEO
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  When to Use GEO
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Targeting AI platform visibility (ChatGPT, Claude, Perplexity)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Creating comprehensive, authoritative content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Building citation-worthy resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Answering complex, conversational queries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">Future-proofing for AI-driven search</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  When to Use Traditional SEO
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Targeting Google and Bing organic rankings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Local search optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">E-commerce product pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Transactional and navigational queries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">Quick wins with established keywords</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                🎯 The Hybrid Approach: Best of Both Worlds
              </h3>
              <p className="text-gray-700">
                Most successful strategies in 2025 combine GEO and traditional SEO. Use SEO foundations 
                (technical optimization, keyword research, link building) while adding GEO enhancements 
                (citations, statistics, FAQ sections, entity optimization) for maximum visibility across 
                both traditional search engines and AI platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Comparisons */}
      <section id="comparisons" className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Strategy Comparisons
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Detailed head-to-head comparisons of GEO vs traditional SEO strategies
            </p>
            
            <div className="space-y-8">
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.slug}
                  href={`/compare/${comparison.slug}`}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {comparison.title}
                            </h3>
                            <p className="text-gray-600">
                              {comparison.subtitle}
                            </p>
                          </div>
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {comparison.category}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div>
                            <div className="text-sm text-gray-500">Difficulty</div>
                            <div className="font-semibold text-gray-900">{comparison.difficulty}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Impact</div>
                            <div className="font-semibold text-gray-900">{comparison.impact}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Time to Implement</div>
                            <div className="font-semibold text-gray-900">{comparison.timeToImplement}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Cost Level</div>
                            <div className="font-semibold text-gray-900">{comparison.costLevel}</div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-900 mb-2">GEO Advantages:</h4>
                            <ul className="space-y-1">
                              {(comparison.geoAdvantages || []).slice(0, 3).map((advantage, index) => (
                                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                                  <span className="text-green-600 mt-0.5">•</span>
                                  <span>{advantage}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-2">Traditional SEO Advantages:</h4>
                            <ul className="space-y-1">
                              {(comparison.traditionalAdvantages || []).slice(0, 3).map((advantage, index) => (
                                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                                  <span className="text-blue-600 mt-0.5">•</span>
                                  <span>{advantage}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="text-orange-600 font-semibold text-lg">
                          View Full Comparison →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference Table */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Reference: GEO vs SEO at a Glance
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Aspect</th>
                    <th className="px-6 py-4 text-left font-semibold text-green-900">GEO</th>
                    <th className="px-6 py-4 text-left font-semibold text-blue-900">Traditional SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Primary Target</td>
                    <td className="px-6 py-4 text-gray-700">AI platforms & chatbots</td>
                    <td className="px-6 py-4 text-gray-700">Search engines (Google, Bing)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Content Focus</td>
                    <td className="px-6 py-4 text-gray-700">Comprehensive, cited, statistical</td>
                    <td className="px-6 py-4 text-gray-700">Keyword-optimized, targeted</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Key Signals</td>
                    <td className="px-6 py-4 text-gray-700">Citations, statistics, FAQs</td>
                    <td className="px-6 py-4 text-gray-700">Backlinks, keywords, page speed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Time to Results</td>
                    <td className="px-6 py-4 text-gray-700">2-4 weeks</td>
                    <td className="px-6 py-4 text-gray-700">3-6 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Measurement</td>
                    <td className="px-6 py-4 text-gray-700">AI visibility tracking</td>
                    <td className="px-6 py-4 text-gray-700">Rankings & organic traffic</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Best For</td>
                    <td className="px-6 py-4 text-gray-700">Informational, complex queries</td>
                    <td className="px-6 py-4 text-gray-700">All query types</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Implement the Right Strategy?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get personalized recommendations based on your specific goals and resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/geo-audit"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Run GEO Audit
              </Link>
              <Link 
                href="/guide"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition"
              >
                Read Implementation Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}