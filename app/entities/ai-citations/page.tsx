import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Citations: How Generative AI Systems Reference Sources | GEO Platform',
  description: 'Master AI citations in ChatGPT, Claude, and Perplexity. Learn how AI models cite sources, best practices for getting cited, and the future of AI attribution systems.',
  keywords: 'AI citations, ChatGPT citations, Claude citations, Perplexity citations, AI source attribution, generative AI references, AI content visibility',
  openGraph: {
    title: 'AI Citations: The Key to Generative AI Visibility',
    description: 'Understanding how AI systems cite sources and how to optimize your content for AI attribution.',
    url: 'https://generative-engine.org/entities/ai-citations',
    type: 'article',
  },
  alternates: {
    canonical: 'https://generative-engine.org/entities/ai-citations',
  },
}

export default function AICitationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI Citations: How Generative AI Systems Reference Sources',
    description: 'Comprehensive guide to AI citations in ChatGPT, Claude, and Perplexity, including best practices for getting cited and technical implementation.',
    author: {
      '@type': 'Organization',
      name: 'GEO Platform',
      url: 'https://generative-engine.org'
    },
    publisher: {
      '@type': 'Organization',
      name: 'GEO Platform',
      logo: {
        '@type': 'ImageObject',
        url: 'https://generative-engine.org/logo.png'
      }
    },
    datePublished: '2025-01-20',
    dateModified: '2025-01-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://generative-engine.org/entities/ai-citations'
    },
    keywords: 'AI citations, ChatGPT citations, Claude citations, Perplexity citations, AI attribution',
    articleSection: 'Entity Definitions',
    wordCount: 2100,
    timeRequired: 'PT10M'
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://generative-engine.org'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Entities',
        item: 'https://generative-engine.org/entities'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'AI Citations',
        item: 'https://generative-engine.org/entities/ai-citations'
      }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are AI citations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI citations refer to the practice of referencing and attributing sources and tools (like ChatGPT, Claude, or Perplexity) used to produce content in AI-generated outputs. They ensure transparency, credibility, and proper attribution.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I get my content cited by AI systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use structured data and schema markup, maintain clear authorship and publication dates, publish high-quality authoritative content, use consistent branding, and ensure your content is indexed in reputable repositories.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why do AI citations matter for SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI citations drive traffic to original sources, increase content visibility, build trust and authority, and as AI becomes the primary information mediator, citations become crucial for maintaining web presence.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-6 py-8">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI Citations: The Currency of Generative AI Visibility
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master the art and science of AI citations across ChatGPT, Claude, and Perplexity. Learn how AI models reference sources and optimize your content for maximum attribution.
              </p>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              {/* Key Statistics */}
              <section className="mb-12 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-xl p-8 border border-blue-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">The AI Citation Revolution</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400">60%</div>
                    <p className="text-gray-300 mt-2">of queries now answered by generative AI</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400">40.6%</div>
                    <p className="text-gray-300 mt-2">visibility boost from proper citations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">3x</div>
                    <p className="text-gray-300 mt-2">higher trust with source attribution</p>
                  </div>
                </div>
              </section>

              {/* What Are AI Citations */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Understanding AI Citations</h2>
                
                <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Definition & Purpose</h3>
                  <p className="text-gray-300 mb-4">
                    AI citations are formal acknowledgments of either the generative AI tool itself or the sources used to answer queries. They serve as the bridge between AI-generated content and original sources, ensuring transparency, credibility, and proper attribution in the age of automated content generation.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong className="text-white">Transparency:</strong> Users can verify information sources</li>
                    <li><strong className="text-white">Trust:</strong> Citations build credibility and authority</li>
                    <li><strong className="text-white">Attribution:</strong> Original creators receive proper credit</li>
                    <li><strong className="text-white">Compliance:</strong> Meet academic and legal standards</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Citations Matter for Visibility</h3>
                  <p className="text-gray-300 mb-4">
                    As AI systems become the primary information mediators, citations determine which sources get visibility and traffic. Without proper citations, your content becomes invisible in AI responses, losing potential traffic and authority signals.
                  </p>
                </div>
              </section>

              {/* How Different Systems Handle Citations */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Citation Systems Across AI Platforms</h2>
                
                <div className="space-y-6">
                  {/* ChatGPT */}
                  <div className="bg-gradient-to-r from-green-800/30 to-teal-800/30 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">ChatGPT (OpenAI)</h3>
                    <p className="text-gray-300 mb-4">
                      Follows academic conventions (APA, MLA, Chicago) with OpenAI as the author, model version, and date specified.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                      <p className="text-green-400">MLA Format:</p>
                      <p className="text-gray-300">"Explain antibiotics" prompt. ChatGPT, 13 Feb. version, OpenAI, 16 Feb. 2023, chat.openai.com</p>
                    </div>
                  </div>

                  {/* Claude */}
                  <div className="bg-gradient-to-r from-orange-800/30 to-red-800/30 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Claude (Anthropic)</h3>
                    <p className="text-gray-300 mb-4">
                      Similar approach to ChatGPT, citing Anthropic as creator with version and date. Emphasizes constitutional AI principles in attribution.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                      <p className="text-orange-400">APA Format:</p>
                      <p className="text-gray-300">Anthropic. (2025). Claude (3.5 Sonnet) [Large language model]. https://claude.ai</p>
                    </div>
                  </div>

                  {/* Perplexity */}
                  <div className="bg-gradient-to-r from-blue-800/30 to-indigo-800/30 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Perplexity</h3>
                    <p className="text-gray-300 mb-4">
                      Uses inline numeric citations [1], [2] with direct links to sources. Provides immediate, visible source attribution for enhanced verifiability.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <p className="text-blue-400 mb-2">Example Output:</p>
                      <p className="text-gray-300">
                        AI citations improve content visibility by 40.6% <span className="text-blue-400">[1]</span>. 
                        Major platforms now require source attribution <span className="text-blue-400">[2]</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Practices for Getting Cited */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">How to Get Your Content Cited by AI</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Technical Optimization</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Use semantic HTML and schema markup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Implement structured data (JSON-LD)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Clear meta tags and publication dates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        <span>Machine-readable author information</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Content Strategy</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">✓</span>
                        <span>Publish authoritative, original content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">✓</span>
                        <span>Maintain consistent branding and naming</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">✓</span>
                        <span>Join recognized indexing services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">✓</span>
                        <span>Monitor and request proper attribution</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Implementation */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Technical Implementation of AI Citations</h2>
                
                <div className="bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">How AI Systems Process Citations</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">1. Source Extraction</h4>
                      <p className="text-gray-300">
                        During answer synthesis, models retrieve relevant documents and maintain mappings between generated text and source materials.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">2. Inline Attribution</h4>
                      <p className="text-gray-300">
                        Systems assign bracketed labels ([1], [2]) or footnotes to specific statements, linking them to original sources.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-green-400 mb-2">3. Transparency Layer</h4>
                      <p className="text-gray-300">
                        Web outputs provide clickable citations leading directly to source content with proper formatting (APA/MLA/Chicago).
                      </p>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-orange-400 mb-2">4. Verification Systems</h4>
                      <p className="text-gray-300">
                        Emerging cryptographic validation and signed attestations improve provenance tracking and citation reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Comparison Table */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">AI Citation Systems Comparison</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-800/50 rounded-lg overflow-hidden">
                    <thead className="bg-gray-700/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-white">AI System</th>
                        <th className="px-6 py-3 text-left text-white">Citation Format</th>
                        <th className="px-6 py-3 text-left text-white">Source Attribution</th>
                        <th className="px-6 py-3 text-left text-white">User Visibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 text-gray-300 font-semibold">ChatGPT</td>
                        <td className="px-6 py-4 text-gray-300">MLA, APA, Chicago</td>
                        <td className="px-6 py-4 text-gray-300">Tool as author with version</td>
                        <td className="px-6 py-4 text-gray-300">In-text, reference section</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-300 font-semibold">Claude</td>
                        <td className="px-6 py-4 text-gray-300">Academic formats</td>
                        <td className="px-6 py-4 text-gray-300">Creator, date, version</td>
                        <td className="px-6 py-4 text-gray-300">In-text, references</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-300 font-semibold">Perplexity</td>
                        <td className="px-6 py-4 text-gray-300">Numeric inline [1], [2]</td>
                        <td className="px-6 py-4 text-gray-300">Direct web links</td>
                        <td className="px-6 py-4 text-gray-300">Inline with direct access</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-gray-300 font-semibold">Bing Chat</td>
                        <td className="px-6 py-4 text-gray-300">Superscript numbers</td>
                        <td className="px-6 py-4 text-gray-300">Web sources</td>
                        <td className="px-6 py-4 text-gray-300">Sidebar with sources</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Future of AI Citations */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">The Future of AI Citations</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Emerging Trends 2025-2027</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>📊 <strong className="text-white">Automated Attribution Protocols:</strong> Standardized, machine-readable citation formats</li>
                      <li>🔐 <strong className="text-white">Cryptographic Validation:</strong> Blockchain-based source verification</li>
                      <li>🔗 <strong className="text-white">Direct Database Integration:</strong> Real-time links to DOIs and preprint servers</li>
                      <li>📱 <strong className="text-white">Multi-modal Citations:</strong> Attribution for images, code, and media</li>
                      <li>⚖️ <strong className="text-white">Regulatory Frameworks:</strong> Legal requirements for AI source traceability</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">Optimize Your Content for AI Citations</h2>
                <p className="text-gray-300 mb-6">
                  Start implementing citation optimization strategies today. With 60% of queries now answered by AI, proper citation practices are essential for maintaining visibility and authority in the generative AI era.
                </p>
                <div className="flex gap-4">
                  <Link href="/tools/geo-audit" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
                    Audit Your Citations
                  </Link>
                  <Link href="/glossary" className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition">
                    Learn More Terms
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}