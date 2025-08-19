import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Citation Optimization - Master Authority Signals for AI Visibility',
  description: 'Learn how to optimize citations for maximum AI platform visibility. Proven strategies for building authority through proper citation practices.',
  keywords: 'citation optimization, AI citations, authority signals, reference optimization, GEO citations',
  alternates: {
    canonical: 'https://generative-engine.org/entities/citation-optimization',
  },
}

export default function CitationOptimizationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Citation Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Build authority and credibility through strategic citation practices
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Citations are the cornerstone of AI content optimization, providing authority signals that dramatically increase your content's visibility across all AI platforms. Research shows that content with proper citations sees a 40.6% increase in AI visibility.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
                <p className="text-gray-800">
                  <strong>Research Finding:</strong> The "Cite Sources" optimization technique delivers the highest impact across all GEO strategies, with particularly strong performance in Perplexity AI (+65% visibility).
                </p>
              </div>
            </div>

            {/* Citation Impact by Platform */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Citation Impact by AI Platform</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="border border-gray-300 p-4 text-left">Platform</th>
                      <th className="border border-gray-300 p-4 text-center">Visibility Boost</th>
                      <th className="border border-gray-300 p-4 text-center">Optimal Citation Count</th>
                      <th className="border border-gray-300 p-4 text-center">Preferred Sources</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">Perplexity AI</td>
                      <td className="border border-gray-300 p-4 text-center text-green-600 font-bold">+65%</td>
                      <td className="border border-gray-300 p-4 text-center">8-12</td>
                      <td className="border border-gray-300 p-4">.edu, .gov, research papers</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">Claude</td>
                      <td className="border border-gray-300 p-4 text-center text-green-600 font-bold">+45%</td>
                      <td className="border border-gray-300 p-4 text-center">5-8</td>
                      <td className="border border-gray-300 p-4">Technical docs, research</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold">ChatGPT</td>
                      <td className="border border-gray-300 p-4 text-center text-green-600 font-bold">+35%</td>
                      <td className="border border-gray-300 p-4 text-center">3-5</td>
                      <td className="border border-gray-300 p-4">Authoritative blogs, guides</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">Gemini</td>
                      <td className="border border-gray-300 p-4 text-center text-green-600 font-bold">+40%</td>
                      <td className="border border-gray-300 p-4 text-center">5-7</td>
                      <td className="border border-gray-300 p-4">Google Scholar, news</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Citation Best Practices */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Citation Best Practices</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Source Selection</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Prioritize .edu and .gov domains</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Use peer-reviewed research papers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Include industry authority sites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Mix primary and secondary sources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Verify all links are active</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Citation Formatting</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Use consistent citation style</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Include inline citations [1], [2]</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Add full reference list at end</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Link to original sources</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Include publication dates</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Integration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Natural citation placement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Support key claims with citations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Use quotes from authorities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Balance citation density</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Avoid citation clustering</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Implementation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Use schema.org Citation markup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Implement proper anchor text</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Add rel="citation" attribute</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Include DOI when available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Use nofollow for untrusted sources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Citation Formats */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Citation Format Examples</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Style (APA)</h3>
                  <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm">
                    Smith, J. & Johnson, M. (2024). Generative Engine Optimization: A comprehensive study. <em>Journal of AI Research</em>, 45(3), 234-251. https://doi.org/10.1234/jar.2024.45.3.234
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Inline Numbered Citations</h3>
                  <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm">
                    Research shows that citation optimization increases AI visibility by 40.6% [1]. This effect is particularly pronounced in Perplexity AI, where properly cited content sees 65% higher visibility [2].
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">HTML Implementation</h3>
                  <div className="bg-white p-4 rounded border border-gray-200 font-mono text-sm overflow-x-auto">
                    &lt;cite&gt;&lt;a href="https://source.edu/study" rel="citation"&gt;Smith et al., 2024&lt;/a&gt;&lt;/cite&gt;
                  </div>
                </div>
              </div>
            </div>

            {/* Source Authority Hierarchy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Source Authority Hierarchy</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Tier 1: Maximum Authority</h4>
                      <p className="text-sm mt-1">.edu domains, .gov sites, peer-reviewed journals</p>
                    </div>
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Tier 2: High Authority</h4>
                      <p className="text-sm mt-1">Major news outlets, industry associations, research institutions</p>
                    </div>
                    <span className="text-2xl font-bold">80%</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Tier 3: Medium Authority</h4>
                      <p className="text-sm mt-1">Established blogs, industry publications, verified experts</p>
                    </div>
                    <span className="text-2xl font-bold">60%</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">Tier 4: Standard Authority</h4>
                      <p className="text-sm mt-1">General websites, company pages, standard blogs</p>
                    </div>
                    <span className="text-2xl font-bold">40%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Citation Mistakes to Avoid</h2>
              
              <div className="bg-red-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Over-citation:</strong> Too many citations can make content unreadable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Broken links:</strong> Always verify citations lead to active pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Outdated sources:</strong> Prefer sources less than 2 years old</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Low-quality sources:</strong> Avoid unverified or suspicious domains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Inconsistent formatting:</strong> Maintain uniform citation style</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Missing context:</strong> Always explain why a citation supports your point</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/entities/authority-signals" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Authority Signals</h3>
                  <p className="text-gray-600 text-sm">Build trust and credibility</p>
                </Link>
                
                <Link href="/entities/perplexity-optimization" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Perplexity Optimization</h3>
                  <p className="text-gray-600 text-sm">Master citation-focused AI</p>
                </Link>
                
                <Link href="/guide" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete GEO Guide</h3>
                  <p className="text-gray-600 text-sm">Full optimization framework</p>
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Start Optimizing Your Citations</h2>
              <p className="text-xl mb-6">Implement these citation strategies and see immediate improvements in AI visibility.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/tools/content-optimizer" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Optimize Content
                </Link>
                <Link href="/tools/visibility-tracker" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition">
                  Track Visibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}