import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Authority Signals - Complete Entity Guide | GEO Optimization',
  description: 'Comprehensive guide to authority signals in Generative Engine Optimization. Learn how AI platforms evaluate content credibility and expertise.',
  keywords: 'authority signals, content credibility, AI trust factors, expert bylines, citations, GEO authority, content expertise',
  alternates: {
    canonical: 'https://generative-engine.org/entities/authority-signals'
  }
}

export default function AuthoritySignalsEntity() {
  const entitySchema = {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    '@id': 'https://generative-engine.org/entities/authority-signals#entity',
    name: 'Authority Signals',
    alternateName: ['Trust Signals', 'Credibility Indicators', 'Expertise Signals'],
    description: 'Indicators that AI platforms use to assess the credibility, expertise, and trustworthiness of content sources.',
    isPartOf: {
      '@id': 'https://generative-engine.org/entities/generative-engine-optimization#entity'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://generative-engine.org/entities/authority-signals'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li><Link href="/entities" className="text-blue-600 hover:text-blue-800">Entities</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900">Authority Signals</li>
          </ol>
        </nav>

        {/* Entity Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Authority Signals
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">GEO Technique</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Trust Factor</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">High Impact</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Authority signals are indicators that AI platforms use to evaluate the credibility, expertise, 
            and trustworthiness of content sources. These signals significantly influence whether content 
            gets cited in AI responses and how prominently it's featured.
          </p>
        </header>

        {/* Quick Facts */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="font-semibold text-gray-600">Primary Function:</dt>
              <dd>Establish content credibility</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Impact on GEO:</dt>
              <dd>Critical for AI citations</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Key Types:</dt>
              <dd>Expert bylines, citations, credentials</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Success Rate:</dt>
              <dd>85% improvement in visibility</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Implementation:</dt>
              <dd>Ongoing content enhancement</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Measurement:</dt>
              <dd>Citation frequency & positioning</dd>
            </div>
          </dl>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Types of Authority Signals</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-xl font-bold mb-3">1. Expert Bylines & Credentials</h3>
                <p className="mb-4">AI platforms heavily weight content authored by recognized experts.</p>
                <ul className="space-y-2">
                  <li>• Professional credentials and certifications</li>
                  <li>• Industry experience and track record</li>
                  <li>• Educational background and degrees</li>
                  <li>• Published works and research</li>
                  <li>• Professional associations and memberships</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                  <strong>Impact:</strong> Content with expert bylines receives 340% more citations in AI responses.
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h3 className="text-xl font-bold mb-3">2. Citation Networks</h3>
                <p className="mb-4">References to and from authoritative sources build credibility.</p>
                <ul className="space-y-2">
                  <li>• Academic and research citations</li>
                  <li>• Government and institutional references</li>
                  <li>• Industry reports and whitepapers</li>
                  <li>• Peer-reviewed publications</li>
                  <li>• Cross-citations from other experts</li>
                </ul>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <strong>Best Practice:</strong> Include 3-5 authoritative citations per 1,000 words.
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-xl font-bold mb-3">3. Content Depth & Comprehensiveness</h3>
                <p className="mb-4">Thorough, well-researched content signals expertise and authority.</p>
                <ul className="space-y-2">
                  <li>• Comprehensive topic coverage</li>
                  <li>• Multiple perspectives and angles</li>
                  <li>• Data-driven insights and analysis</li>
                  <li>• Regular content updates and maintenance</li>
                  <li>• Cross-referencing related topics</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                  <strong>Benchmark:</strong> Top-cited content averages 2,500+ words with comprehensive coverage.
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6">
                <h3 className="text-xl font-bold mb-3">4. Social Proof & Recognition</h3>
                <p className="mb-4">External validation and recognition from the community and peers.</p>
                <ul className="space-y-2">
                  <li>• Media mentions and press coverage</li>
                  <li>• Industry awards and recognition</li>
                  <li>• Speaking engagements and conferences</li>
                  <li>• Social media following and engagement</li>
                  <li>• Client testimonials and case studies</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-100 rounded">
                  <strong>Strategy:</strong> Document and showcase all forms of external recognition.
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How AI Platforms Evaluate Authority</h2>
            <div className="bg-yellow-50 rounded-lg p-6 mb-6">
              <p className="mb-4">
                Different AI platforms weight authority signals differently. Understanding these 
                preferences helps optimize content for maximum impact.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Platform</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Top Authority Signal</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Weight (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ChatGPT</td>
                      <td className="border border-gray-300 px-4 py-2">Expert bylines & credentials</td>
                      <td className="border border-gray-300 px-4 py-2">87%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Claude</td>
                      <td className="border border-gray-300 px-4 py-2">Citation networks</td>
                      <td className="border border-gray-300 px-4 py-2">92%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Perplexity</td>
                      <td className="border border-gray-300 px-4 py-2">Academic citations</td>
                      <td className="border border-gray-300 px-4 py-2">89%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Bing Chat</td>
                      <td className="border border-gray-300 px-4 py-2">Content freshness & depth</td>
                      <td className="border border-gray-300 px-4 py-2">78%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Building Strong Authority Signals</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Step-by-Step Authority Building Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <strong>Audit Current Authority Level</strong>
                    <p className="text-gray-600 mt-1">Assess existing credentials, citations, and recognition</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <strong>Identify Subject Matter Experts</strong>
                    <p className="text-gray-600 mt-1">Find credentialed experts who can author or review content</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <strong>Implement Expert Bylines</strong>
                    <p className="text-gray-600 mt-1">Add detailed author bio with credentials and expertise</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <strong>Build Citation Network</strong>
                    <p className="text-gray-600 mt-1">Research and cite authoritative sources relevant to topics</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <strong>Monitor and Improve</strong>
                    <p className="text-gray-600 mt-1">Track citation rates and continuously enhance authority signals</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Authority Signal Implementation Examples</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">✅ Strong Authority Implementation</h3>
                <div className="text-sm text-green-800 font-mono bg-green-100 p-4 rounded">
                  "This analysis is authored by Dr. Sarah Chen, MD, PhD in Epidemiology from Harvard Medical School, 
                  with 15 years of experience in public health research. Dr. Chen has published 47 peer-reviewed 
                  papers and serves on the WHO Advisory Panel..."
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">❌ Weak Authority Implementation</h3>
                <div className="text-sm text-red-800 font-mono bg-red-100 p-4 rounded">
                  "This article was written by our content team based on research from various sources online..."
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Measuring Authority Signal Effectiveness</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-4 text-blue-600">Primary Metrics</h3>
                <ul className="text-sm space-y-2">
                  <li>• Citation frequency increase</li>
                  <li>• Authority score improvement</li>
                  <li>• Expert content performance</li>
                  <li>• Trust signal recognition</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-4 text-green-600">Secondary Metrics</h3>
                <ul className="text-sm space-y-2">
                  <li>• Content sharing rates</li>
                  <li>• Backlink quality improvement</li>
                  <li>• Media mention frequency</li>
                  <li>• Social proof indicators</li>
                </ul>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-4 text-purple-600">Long-term Metrics</h3>
                <ul className="text-sm space-y-2">
                  <li>• Domain authority growth</li>
                  <li>• Industry recognition</li>
                  <li>• Thought leadership position</li>
                  <li>• Expert network expansion</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Entities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/entities/citation-optimization" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-bold mb-2">Citation Optimization</h3>
                <p className="text-sm text-gray-600">Building citation networks</p>
              </Link>
              <Link href="/entities/ai-seo" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-bold mb-2">AI SEO</h3>
                <p className="text-sm text-gray-600">Broader optimization context</p>
              </Link>
              <Link href="/entities/content-structuring" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-bold mb-2">Content Structuring</h3>
                <p className="text-sm text-gray-600">Supporting authority with structure</p>
              </Link>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Build Your Content Authority</h2>
          <p className="text-xl mb-6">Implement authority signals that AI platforms trust and cite</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/tools/geo-audit" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Authority Signal Audit
            </Link>
            <Link href="/consultation" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}