import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Platform Comparison Tool - Compare GEO Strategies',
  description: 'Compare GEO optimization strategies across different AI platforms. Find the best approach for ChatGPT, Claude, Perplexity, and more.',
  keywords: 'AI platform comparison, GEO comparison tool, ChatGPT vs Claude, AI optimization strategies',
  alternates: {
    canonical: 'https://generative-engine.org/tools/platform-compare',
  },
}

export default function PlatformComparePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl mb-6 block">⚖️</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Platform Comparison Tool
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Compare GEO optimization strategies across different AI platforms to maximize your content visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-20 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compare AI Platforms</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="platform1" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Platform
                    </label>
                    <select 
                      id="platform1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Select a platform</option>
                      <option value="chatgpt">ChatGPT</option>
                      <option value="claude">Claude</option>
                      <option value="perplexity">Perplexity AI</option>
                      <option value="google-gemini">Google Gemini</option>
                      <option value="microsoft-copilot">Microsoft Copilot</option>
                      <option value="github-copilot">GitHub Copilot</option>
                      <option value="dall-e">DALL-E</option>
                      <option value="midjourney">Midjourney</option>
                      <option value="copy-ai">Copy.ai</option>
                      <option value="jasper">Jasper AI</option>
                      <option value="grammarly">Grammarly</option>
                      <option value="notion-ai">Notion AI</option>
                      <option value="synthesia">Synthesia</option>
                      <option value="runwayml">RunwayML</option>
                      <option value="elevenlabs">ElevenLabs</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="platform2" className="block text-sm font-semibold text-gray-700 mb-2">
                      Second Platform
                    </label>
                    <select 
                      id="platform2"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Select a platform</option>
                      <option value="chatgpt">ChatGPT</option>
                      <option value="claude">Claude</option>
                      <option value="perplexity">Perplexity AI</option>
                      <option value="google-gemini">Google Gemini</option>
                      <option value="microsoft-copilot">Microsoft Copilot</option>
                      <option value="github-copilot">GitHub Copilot</option>
                      <option value="dall-e">DALL-E</option>
                      <option value="midjourney">Midjourney</option>
                      <option value="copy-ai">Copy.ai</option>
                      <option value="jasper">Jasper AI</option>
                      <option value="grammarly">Grammarly</option>
                      <option value="notion-ai">Notion AI</option>
                      <option value="synthesia">Synthesia</option>
                      <option value="runwayml">RunwayML</option>
                      <option value="elevenlabs">ElevenLabs</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition"
                >
                  Compare Platforms →
                </button>
              </form>
              
              <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Platform-specific optimization strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Content format preferences for each platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Authority and trust signal requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Performance metrics and benchmarks
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    Implementation roadmap and best practices
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Popular Comparisons */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Comparisons</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/compare/chatgpt-vs-claude" className="block p-6 bg-white rounded-lg hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-2">ChatGPT vs Claude</h3>
                  <p className="text-gray-600 text-sm">Compare the leading AI models</p>
                </a>
                <a href="/compare/chatgpt-vs-perplexity" className="block p-6 bg-white rounded-lg hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-2">ChatGPT vs Perplexity</h3>
                  <p className="text-gray-600 text-sm">Conversational AI vs search-focused AI</p>
                </a>
                <a href="/compare/claude-vs-google-gemini" className="block p-6 bg-white rounded-lg hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-2">Claude vs Google Gemini</h3>
                  <p className="text-gray-600 text-sm">Anthropic vs Google's latest AI</p>
                </a>
                <a href="/compare/microsoft-copilot-vs-github-copilot" className="block p-6 bg-white rounded-lg hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 mb-2">Microsoft vs GitHub Copilot</h3>
                  <p className="text-gray-600 text-sm">Compare Microsoft's AI assistants</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}