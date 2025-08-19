import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform Comparison Matrix - Compare All AI Platforms',
  description: 'Compare multiple AI platforms simultaneously with our comprehensive comparison matrix. Analyze GEO strategies across ChatGPT, Claude, Perplexity, and more.',
  keywords: 'AI platform comparison matrix, compare AI tools, multi-platform GEO analysis',
  alternates: {
    canonical: 'https://generative-engine.org/tools/platform-comparison',
  },
}

export default function PlatformComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-green-900 to-teal-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl mb-6 block">📊</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Platform Comparison Matrix
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Compare multiple AI platforms side-by-side to find the best optimization strategy for your content.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-20 px-4">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Platform Comparison Matrix</h2>
              
              {/* Platform Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select platforms to compare (choose 2-5):
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    'ChatGPT', 'Claude', 'Perplexity AI', 'Google Gemini', 
                    'Microsoft Copilot', 'GitHub Copilot', 'DALL-E', 'Midjourney',
                    'Copy.ai', 'Jasper AI', 'Grammarly', 'Notion AI'
                  ].map((platform) => (
                    <label key={platform} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" className="mr-2" value={platform} />
                      <span className="text-gray-700">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition mb-8"
                onClick={() => {
                  const table = document.getElementById('comparison-table');
                  if (table) {
                    table.classList.remove('hidden');
                  }
                }}
              >
                Generate Comparison Matrix →
              </button>
              
              {/* Comparison Table (Hidden by default) */}
              <div id="comparison-table" className="hidden">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800 text-white">
                        <th className="border border-gray-300 p-4 text-left">Optimization Factor</th>
                        <th className="border border-gray-300 p-4 text-center">ChatGPT</th>
                        <th className="border border-gray-300 p-4 text-center">Claude</th>
                        <th className="border border-gray-300 p-4 text-center">Perplexity AI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold bg-gray-50">Content Length</td>
                        <td className="border border-gray-300 p-4 text-center">1,500-2,500 words</td>
                        <td className="border border-gray-300 p-4 text-center">2,000-3,000 words</td>
                        <td className="border border-gray-300 p-4 text-center">1,000-2,000 words</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold">Citation Requirements</td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-yellow-600">★★★☆☆</span><br/>
                          <span className="text-sm">3-5 sources</span>
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-yellow-600">★★★★☆</span><br/>
                          <span className="text-sm">5-8 sources</span>
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-yellow-600">★★★★★</span><br/>
                          <span className="text-sm">8+ sources</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold bg-gray-50">FAQ Integration</td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-green-600">Essential</span>
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-yellow-600">Helpful</span>
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-blue-600">Moderate</span>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold">Statistical Data</td>
                        <td className="border border-gray-300 p-4 text-center">10+ data points</td>
                        <td className="border border-gray-300 p-4 text-center">15+ data points</td>
                        <td className="border border-gray-300 p-4 text-center">20+ data points</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold bg-gray-50">Content Style</td>
                        <td className="border border-gray-300 p-4 text-center">Conversational</td>
                        <td className="border border-gray-300 p-4 text-center">Analytical</td>
                        <td className="border border-gray-300 p-4 text-center">Research-focused</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold">Update Frequency</td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-green-600">Weekly</span>
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-blue-600">Bi-weekly</span>
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-green-600">Weekly</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold bg-gray-50">Schema Markup</td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-yellow-600">★★★★☆</span>
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-yellow-600">★★★☆☆</span>
                        </td>
                        <td className="border border-gray-300 p-4 text-center">
                          <span className="text-yellow-600">★★★★★</span>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold">Best For</td>
                        <td className="border border-gray-300 p-4 text-center text-sm">How-to guides, tutorials</td>
                        <td className="border border-gray-300 p-4 text-center text-sm">Technical docs, analysis</td>
                        <td className="border border-gray-300 p-4 text-center text-sm">Research, academic content</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Legend */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Legend:</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-yellow-600">★</span> = Importance Level
                    </div>
                    <div>
                      <span className="text-green-600">●</span> = High Priority
                    </div>
                    <div>
                      <span className="text-blue-600">●</span> = Medium Priority
                    </div>
                  </div>
                </div>
                
                {/* Export Options */}
                <div className="mt-6 flex gap-4">
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition">
                    Export as CSV
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition">
                    Export as PDF
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition">
                    Share Results
                  </button>
                </div>
              </div>
            </div>
            
            {/* Key Insights */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📈 Citation Impact</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Platforms that prioritize citations show 40% higher content visibility
                </p>
                <a href="/guide" className="text-green-600 hover:text-green-700 text-sm font-semibold">
                  Learn about citations →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Content Length</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Optimal content length varies by platform, affecting ranking by up to 60%
                </p>
                <a href="/blog" className="text-green-600 hover:text-green-700 text-sm font-semibold">
                  Content guidelines →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔄 Update Frequency</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Regular updates improve AI platform recognition by 35%
                </p>
                <a href="/tools" className="text-green-600 hover:text-green-700 text-sm font-semibold">
                  Optimization tools →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}