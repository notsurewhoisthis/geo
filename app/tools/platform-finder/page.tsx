import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Platform Finder - Find the Right AI Platform for GEO',
  description: 'Discover which AI platforms are best suited for your content type and optimization goals. Get personalized recommendations based on your needs.',
  keywords: 'AI platform finder, best AI platform, GEO platform selection, AI tool finder',
  alternates: {
    canonical: 'https://generative-engine.org/tools/platform-finder',
  },
}

export default function PlatformFinderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-6xl mb-6 block">🔍</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Platform Finder
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Find the perfect AI platform for your content optimization needs with our intelligent recommendation tool.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-20 px-4">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Your Ideal AI Platform</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What type of content do you primarily create?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="">Select content type</option>
                    <option value="blog">Blog Posts & Articles</option>
                    <option value="technical">Technical Documentation</option>
                    <option value="marketing">Marketing Copy</option>
                    <option value="academic">Academic & Research</option>
                    <option value="creative">Creative Writing</option>
                    <option value="code">Code & Programming</option>
                    <option value="visual">Visual Content</option>
                    <option value="video">Video Scripts</option>
                    <option value="social">Social Media</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What's your primary optimization goal?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="">Select your goal</option>
                    <option value="visibility">Maximum AI Visibility</option>
                    <option value="citations">Increase Citations</option>
                    <option value="authority">Build Authority</option>
                    <option value="engagement">User Engagement</option>
                    <option value="conversions">Drive Conversions</option>
                    <option value="education">Educational Impact</option>
                    <option value="technical">Technical Accuracy</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What's your industry?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="">Select your industry</option>
                    <option value="technology">Technology & Software</option>
                    <option value="healthcare">Healthcare & Medical</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="education">Education & E-learning</option>
                    <option value="ecommerce">E-commerce & Retail</option>
                    <option value="media">Media & Entertainment</option>
                    <option value="consulting">Consulting & Services</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="nonprofit">Non-profit</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How much content do you publish?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="">Select frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">2-3 times per week</option>
                    <option value="biweekly">Weekly</option>
                    <option value="monthly">2-3 times per month</option>
                    <option value="occasional">Monthly or less</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition"
                >
                  Get Platform Recommendations →
                </button>
              </form>
            </div>
            
            {/* Results Section */}
            <div id="results" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Platforms for You</h2>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        🥇 ChatGPT - Best Match (95%)
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Ideal for your content type with excellent visibility potential
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>✓ Excellent for blog posts and articles</li>
                        <li>✓ High citation potential</li>
                        <li>✓ Strong in your industry vertical</li>
                      </ul>
                    </div>
                    <a href="/platforms/chatgpt" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                      View Guide →
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        🥈 Perplexity AI - Strong Match (88%)
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Great for research-backed content with citation focus
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>✓ Prioritizes authoritative sources</li>
                        <li>✓ Excellent for technical content</li>
                        <li>✓ Growing user base in your sector</li>
                      </ul>
                    </div>
                    <a href="/platforms/perplexity" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                      View Guide →
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        🥉 Claude - Good Match (82%)
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Strong for detailed, analytical content
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>✓ Excels with comprehensive content</li>
                        <li>✓ Good for technical accuracy</li>
                        <li>✓ Growing adoption in enterprise</li>
                      </ul>
                    </div>
                    <a href="/platforms/claude" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                      View Guide →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">💡 Optimization Tips for Your Profile:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Focus on FAQ-style formatting for maximum visibility</li>
                  <li>• Include 5-8 authoritative citations per piece</li>
                  <li>• Target 1,500-2,000 word count for comprehensive coverage</li>
                  <li>• Use structured data markup for better AI comprehension</li>
                  <li>• Update content regularly to maintain freshness signals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}