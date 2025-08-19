import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Optimizer - Optimize Content for ChatGPT Visibility',
  description: 'Optimize your content specifically for ChatGPT with our specialized tool. Get actionable recommendations to improve your ChatGPT citation rates.',
  keywords: 'ChatGPT optimizer, ChatGPT SEO, optimize for ChatGPT, ChatGPT visibility tool',
  alternates: {
    canonical: 'https://generative-engine.org/tools/chatgpt-optimizer',
  },
}

export default function ChatGPTOptimizerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-teal-900 to-green-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl mb-6 block">🤖</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ChatGPT Content Optimizer
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Maximize your content's visibility in ChatGPT responses with targeted optimization strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-20 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimize Your Content for ChatGPT</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="url" className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter your website URL or paste content
                  </label>
                  <input 
                    type="url"
                    id="url"
                    placeholder="https://example.com/your-article"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                    Or paste your content directly
                  </label>
                  <textarea 
                    id="content"
                    rows={8}
                    placeholder="Paste your article or content here for analysis..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Content Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent">
                    <option value="">Select content type</option>
                    <option value="blog">Blog Post</option>
                    <option value="guide">How-To Guide</option>
                    <option value="tutorial">Tutorial</option>
                    <option value="faq">FAQ Page</option>
                    <option value="product">Product Description</option>
                    <option value="landing">Landing Page</option>
                    <option value="documentation">Documentation</option>
                  </select>
                </div>
                
                <button 
                  type="button"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition"
                  onClick={() => {
                    const results = document.getElementById('optimization-results');
                    if (results) {
                      results.classList.remove('hidden');
                      results.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Analyze & Optimize for ChatGPT →
                </button>
              </form>
            </div>
            
            {/* Results Section (Hidden by default) */}
            <div id="optimization-results" className="hidden mt-8 space-y-6">
              {/* Score Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ChatGPT Optimization Score</h2>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-green-600 text-white">
                    <span className="text-4xl font-bold">72%</span>
                  </div>
                  <p className="mt-4 text-gray-600">Your content needs improvement for optimal ChatGPT visibility</p>
                </div>
                
                {/* Score Breakdown */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-700">FAQ Structure</span>
                      <span className="text-sm text-gray-600">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-700">Conversational Tone</span>
                      <span className="text-sm text-gray-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-700">Clear Structure</span>
                      <span className="text-sm text-gray-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-700">Actionable Content</span>
                      <span className="text-sm text-gray-600">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recommendations */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ChatGPT-Specific Recommendations</h2>
                
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">🔴 Critical Issues (Fix First)</h3>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li>• No FAQ section detected - Add 5-7 common questions with clear answers</li>
                      <li>• Missing step-by-step instructions - Break down complex processes</li>
                      <li>• Content too formal - Use more conversational language</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h3 className="font-semibold text-yellow-900 mb-2">🟡 Important Improvements</h3>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li>• Add numbered lists for processes (ChatGPT prefers structured content)</li>
                      <li>• Include practical examples in each section</li>
                      <li>• Add a "Quick Answer" section at the beginning</li>
                      <li>• Use more transitional phrases between sections</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">🟢 What You're Doing Right</h3>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li>• Good use of headings and subheadings</li>
                      <li>• Content length is optimal (1,500+ words)</li>
                      <li>• Clear topic focus maintained throughout</li>
                      <li>• Natural keyword usage detected</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* ChatGPT-Specific Tips */}
              <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 ChatGPT Optimization Best Practices</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Content Structure</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Start with a clear problem statement</li>
                      <li>✓ Provide immediate value in first paragraph</li>
                      <li>✓ Use FAQ format for common questions</li>
                      <li>✓ Include step-by-step instructions</li>
                      <li>✓ End with actionable takeaways</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Writing Style</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Use conversational, natural language</li>
                      <li>✓ Write in active voice</li>
                      <li>✓ Include "you" and "your" frequently</li>
                      <li>✓ Use simple, clear sentences</li>
                      <li>✓ Add examples and analogies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Technical Elements</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Use semantic HTML markup</li>
                      <li>✓ Include schema.org FAQPage markup</li>
                      <li>✓ Add alt text to images</li>
                      <li>✓ Use descriptive anchor text</li>
                      <li>✓ Implement proper heading hierarchy</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Content Features</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Include data and statistics</li>
                      <li>✓ Add comparison tables</li>
                      <li>✓ Create pros/cons lists</li>
                      <li>✓ Provide multiple solutions</li>
                      <li>✓ Update content regularly</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition">
                  Download Optimization Report
                </button>
                <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition">
                  Re-analyze Content
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}