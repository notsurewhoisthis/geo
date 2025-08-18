import { Metadata } from 'next'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Getting Started with GEO | Complete Beginner\'s Guide to Generative Engine Optimization',
  description: 'Learn how to start optimizing for AI platforms with our step-by-step GEO guide. From basics to advanced strategies for ChatGPT, Claude, Perplexity and more.',
  keywords: 'getting started with GEO, generative engine optimization tutorial, AI platform optimization guide, how to optimize for ChatGPT',
}

const jsonLdGuide = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Getting Started with Generative Engine Optimization (GEO)",
  "description": "Complete step-by-step guide to optimizing content for AI platforms like ChatGPT, Claude, and Perplexity",
  "totalTime": "PT30M",
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Website or content platform"
    },
    {
      "@type": "HowToSupply", 
      "name": "Content management system access"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Audit Current Content",
      "text": "Analyze your existing content for AI platform optimization opportunities"
    },
    {
      "@type": "HowToStep",
      "name": "Implement Basic GEO Principles",
      "text": "Add citations, statistics, and structured data to your content"
    },
    {
      "@type": "HowToStep",
      "name": "Optimize for Specific Platforms",
      "text": "Tailor content for different AI platforms' preferences and algorithms"
    }
  ]
}

export default function GettingStartedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      
      <div className="container mx-auto px-6 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Getting Started', href: '/getting-started' }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              Beginner-Friendly Guide
            </div>
            
            <h1 className="text-4xl font-bold mb-6">Getting Started with GEO</h1>
            <p className="text-xl text-gray-600">
              Your complete guide to optimizing content for AI platforms. Learn the fundamentals 
              of Generative Engine Optimization in just 30 minutes.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">What is GEO?</h3>
              <p className="text-sm text-gray-600">Learn the basics of optimizing for AI platforms</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Quick Implementation</h3>
              <p className="text-sm text-gray-600">Start seeing results in hours, not months</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold mb-2">Measurable Impact</h3>
              <p className="text-sm text-gray-600">Track your AI platform visibility growth</p>
            </div>
          </div>

          <main className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>✅ Core GEO principles and strategies</li>
                  <li>✅ Platform-specific optimization techniques</li>
                  <li>✅ Content formatting for AI comprehension</li>
                  <li>✅ Authority signal implementation</li>
                  <li>✅ Performance measurement and tracking</li>
                  <li>✅ Common mistakes and how to avoid them</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Step 1: Understanding GEO Fundamentals</h2>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">What Makes Content AI-Friendly?</h3>
                <p className="mb-4">
                  AI platforms like ChatGPT, Claude, and Perplexity have different content preferences 
                  than traditional search engines. Understanding these differences is crucial for effective optimization.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">✅ AI Platforms Prefer:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cited, authoritative information</li>
                      <li>• Statistical data and specific numbers</li>
                      <li>• Clear, structured content formatting</li>
                      <li>• FAQ and Q&A style content</li>
                      <li>• Expert opinions and analysis</li>
                      <li>• Recent, up-to-date information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-700">❌ Avoid These Elements:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Keyword stuffing and repetition</li>
                      <li>• Promotional or sales-focused language</li>
                      <li>• Unsupported claims without evidence</li>
                      <li>• Overly technical jargon without explanation</li>
                      <li>• Outdated or unverified information</li>
                      <li>• Content without clear structure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Step 2: Quick Content Audit</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">15-Minute Content Assessment</h3>
                <p className="mb-4">
                  Before optimizing, understand your current content's AI-readiness with this quick checklist:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white border border-yellow-300 rounded p-4">
                    <h4 className="font-semibold mb-2">Authority & Citations (25 points)</h4>
                    <ul className="text-sm space-y-1">
                      <li>□ Sources cited for major claims (10 pts)</li>
                      <li>□ Expert quotes or references (5 pts)</li>
                      <li>□ Links to authoritative sources (5 pts)</li>
                      <li>□ Author credentials displayed (5 pts)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-yellow-300 rounded p-4">
                    <h4 className="font-semibold mb-2">Data & Statistics (20 points)</h4>
                    <ul className="text-sm space-y-1">
                      <li>□ Specific numbers and percentages (10 pts)</li>
                      <li>□ Research data or studies mentioned (5 pts)</li>
                      <li>□ Benchmarks or comparisons (5 pts)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-yellow-300 rounded p-4">
                    <h4 className="font-semibold mb-2">Structure & Format (15 points)</h4>
                    <ul className="text-sm space-y-1">
                      <li>□ Clear headings and subheadings (5 pts)</li>
                      <li>□ Bullet points and lists (5 pts)</li>
                      <li>□ FAQ or Q&A sections (5 pts)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white border border-yellow-300 rounded">
                  <h4 className="font-semibold mb-2">Your GEO Readiness Score:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>50-60 points:</strong> Excellent AI optimization 🎉</li>
                    <li>• <strong>35-49 points:</strong> Good foundation, needs refinement 👍</li>
                    <li>• <strong>20-34 points:</strong> Moderate optimization required ⚠️</li>
                    <li>• <strong>Below 20:</strong> Significant GEO work needed 🔧</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Step 3: Implement Core GEO Elements</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold mb-3">Add Authority Signals</h3>
                  <p className="mb-3">
                    Transform unsupported statements into authoritative content:
                  </p>
                  <div className="bg-gray-50 p-4 rounded mb-3">
                    <div className="mb-2">
                      <span className="text-red-600 font-semibold">❌ Before:</span>
                      <span className="text-red-600"> "AI is becoming more popular in business."</span>
                    </div>
                    <div>
                      <span className="text-green-600 font-semibold">✅ After:</span>
                      <span className="text-green-600"> "According to McKinsey's 2024 study, 79% of executives report AI adoption has increased business efficiency by an average of 23% [1]."</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold mb-3">Integrate Statistical Data</h3>
                  <p className="mb-3">
                    Replace vague statements with specific, quantified information:
                  </p>
                  <div className="bg-gray-50 p-4 rounded mb-3">
                    <div className="mb-2">
                      <span className="text-red-600 font-semibold">❌ Before:</span>
                      <span className="text-red-600"> "Many companies see good results."</span>
                    </div>
                    <div>
                      <span className="text-green-600 font-semibold">✅ After:</span>
                      <span className="text-green-600"> "Companies implementing this strategy report an average 45% increase in conversion rates within 3 months."</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold mb-3">Structure for AI Comprehension</h3>
                  <p className="mb-3">
                    Format content for easy AI parsing and understanding:
                  </p>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-semibold mb-2">Optimal Content Structure:</h4>
                    <ul className="text-sm space-y-1">
                      <li>1. Clear, descriptive headings (H1, H2, H3)</li>
                      <li>2. Introduction with key takeaways</li>
                      <li>3. Main content with subheadings</li>
                      <li>4. Bullet points for lists and features</li>
                      <li>5. FAQ section for common questions</li>
                      <li>6. Conclusion with actionable next steps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Step 4: Platform-Specific Optimization</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-800">ChatGPT Optimization</h3>
                  <ul className="text-sm space-y-2 text-blue-700">
                    <li>• Conversational, Q&A style content</li>
                    <li>• Step-by-step instructions and guides</li>
                    <li>• Clear problem-solution frameworks</li>
                    <li>• Examples and case studies</li>
                    <li>• Practical, actionable advice</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-800">Claude Optimization</h3>
                  <ul className="text-sm space-y-2 text-green-700">
                    <li>• Technical depth and accuracy</li>
                    <li>• Comprehensive analysis and reasoning</li>
                    <li>• Multiple perspectives on topics</li>
                    <li>• Nuanced explanations of complex subjects</li>
                    <li>• Ethical considerations and implications</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-purple-800">Perplexity Optimization</h3>
                  <ul className="text-sm space-y-2 text-purple-700">
                    <li>• Real-time data and current events</li>
                    <li>• Research-backed information</li>
                    <li>• Citations from authoritative sources</li>
                    <li>• Comparative analysis and data</li>
                    <li>• Recent studies and publications</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-orange-800">Bing Chat Optimization</h3>
                  <ul className="text-sm space-y-2 text-orange-700">
                    <li>• Structured data and schema markup</li>
                    <li>• Integration with Microsoft ecosystem</li>
                    <li>• Business and productivity focus</li>
                    <li>• Visual content and infographics</li>
                    <li>• Local and location-based information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Step 5: Measure Your Success</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Track These Key Metrics</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Direct AI Platform Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Citations in AI responses</li>
                      <li>• Brand mentions in AI conversations</li>
                      <li>• Direct traffic from AI platforms</li>
                      <li>• Query ranking in AI search results</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Indirect Impact Indicators</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Increase in branded search queries</li>
                      <li>• Higher quality lead generation</li>
                      <li>• Improved domain authority metrics</li>
                      <li>• Enhanced user engagement signals</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white border border-green-300 rounded">
                  <h4 className="font-semibold mb-2">Free Monitoring Tools</h4>
                  <ul className="text-sm space-y-1">
                    <li>• <a href="/tools/visibility-tracker" className="text-blue-600 hover:text-blue-800">GEO Visibility Tracker</a> - Monitor AI platform mentions</li>
                    <li>• Google Analytics - Track referral traffic patterns</li>
                    <li>• Google Search Console - Monitor query performance</li>
                    <li>• Brand mention monitoring - Track citations and references</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Common Mistakes to Avoid</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">❌ Over-Optimization</h3>
                  <p className="text-red-700 text-sm">
                    Don't sacrifice readability for AI optimization. Content should be natural and valuable for human readers first.
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">❌ Ignoring Source Quality</h3>
                  <p className="text-red-700 text-sm">
                    AI platforms heavily weight source credibility. Low-quality citations can hurt more than help.
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">❌ Platform Silos</h3>
                  <p className="text-red-700 text-sm">
                    Don't optimize for just one AI platform. A balanced approach works across multiple platforms.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
              <p className="text-gray-600 mb-6">
                You now have the fundamentals. Let's put your knowledge into practice with advanced tools and strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/tools/geo-audit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Free GEO Audit
                </a>
                <a 
                  href="/guide" 
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Read Advanced Guide
                </a>
                <a 
                  href="/contact" 
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Expert Help
                </a>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}