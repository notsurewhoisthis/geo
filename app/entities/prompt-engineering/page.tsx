import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Prompt Engineering - Complete Entity Guide | GEO Optimization',
  description: 'Comprehensive guide to prompt engineering for Generative Engine Optimization. Learn how to craft effective prompts that influence AI responses and citations.',
  keywords: 'prompt engineering, AI prompts, GEO prompt optimization, ChatGPT prompts, Claude prompts, AI query optimization',
  alternates: {
    canonical: 'https://generative-engine.org/entities/prompt-engineering'
  }
}

export default function PromptEngineeringEntity() {
  const entitySchema = {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    '@id': 'https://generative-engine.org/entities/prompt-engineering#entity',
    name: 'Prompt Engineering',
    alternateName: ['AI Prompt Design', 'Query Engineering', 'Prompt Optimization'],
    description: 'The practice of crafting effective inputs for AI systems to generate desired outputs and influence content discovery in generative engines.',
    isPartOf: {
      '@id': 'https://generative-engine.org/entities/generative-engine-optimization#entity'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://generative-engine.org/entities/prompt-engineering'
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
            <li className="text-gray-900">Prompt Engineering</li>
          </ol>
        </nav>

        {/* Entity Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Prompt Engineering
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">GEO Technique</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AI Optimization</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Content Strategy</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Prompt engineering is the strategic practice of designing and optimizing inputs for AI systems 
            to generate desired outputs. In GEO, effective prompt engineering helps content creators 
            understand how their content will be discovered, cited, and recommended by AI platforms.
          </p>
        </header>

        {/* Quick Facts */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Facts</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="font-semibold text-gray-600">Primary Use:</dt>
              <dd>Testing and optimizing content for AI discovery</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Key Benefit:</dt>
              <dd>Predicts AI response patterns</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Success Rate:</dt>
              <dd>70% improvement in citation accuracy</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Skill Level:</dt>
              <dd>Intermediate to Advanced</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Platforms:</dt>
              <dd>ChatGPT, Claude, Perplexity, Bing Chat</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-600">Implementation:</dt>
              <dd>Testing and iteration cycles</dd>
            </div>
          </dl>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Prompt Engineering in GEO Context</h2>
            <p className="mb-6">
              In Generative Engine Optimization, prompt engineering serves multiple purposes beyond direct AI interaction:
            </p>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                <h3 className="text-xl font-bold mb-3">Content Discovery Testing</h3>
                <p className="mb-3">Use prompts to test how AI platforms discover and cite your content:</p>
                <ul className="space-y-2">
                  <li>• Test specific topic queries that target your content</li>
                  <li>• Analyze citation patterns and source preferences</li>
                  <li>• Identify gaps in content coverage</li>
                  <li>• Evaluate competitive positioning</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6">
                <h3 className="text-xl font-bold mb-3">User Intent Mapping</h3>
                <p className="mb-3">Engineer prompts that match real user queries:</p>
                <ul className="space-y-2">
                  <li>• Mirror natural language patterns users employ</li>
                  <li>• Test various question formats and complexity levels</li>
                  <li>• Identify high-value query variations</li>
                  <li>• Map content to user journey stages</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-xl font-bold mb-3">Platform-Specific Optimization</h3>
                <p className="mb-3">Different AI platforms respond better to specific prompt structures:</p>
                <ul className="space-y-2">
                  <li>• ChatGPT: Conversational, context-rich prompts</li>
                  <li>• Claude: Analytical, structured queries</li>
                  <li>• Perplexity: Research-oriented, fact-finding prompts</li>
                  <li>• Bing Chat: Action-oriented, solution-focused queries</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">GEO Prompt Engineering Frameworks</h2>
            
            <div className="bg-yellow-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">The CITE Framework</h3>
              <p className="mb-4">A systematic approach to GEO-focused prompt engineering:</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="bg-yellow-600 text-white rounded w-8 h-8 flex items-center justify-center font-bold">C</span>
                  <div>
                    <strong>Context</strong> - Provide relevant background and domain expertise
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-yellow-600 text-white rounded w-8 h-8 flex items-center justify-center font-bold">I</span>
                  <div>
                    <strong>Intent</strong> - Clearly define the desired information or outcome
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-yellow-600 text-white rounded w-8 h-8 flex items-center justify-center font-bold">T</span>
                  <div>
                    <strong>Target</strong> - Specify the audience or use case for the response
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-yellow-600 text-white rounded w-8 h-8 flex items-center justify-center font-bold">E</span>
                  <div>
                    <strong>Evidence</strong> - Request citations and source verification
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Example CITE Implementation</h3>
              <div className="bg-white p-4 rounded border font-mono text-sm">
                <p className="mb-2"><strong>Poor Prompt:</strong></p>
                <p className="text-gray-600 mb-4">"What is SEO?"</p>
                
                <p className="mb-2"><strong>CITE-Optimized Prompt:</strong></p>
                <p className="text-gray-600">
                  "As a digital marketing professional [Context], I need a comprehensive explanation 
                  of modern SEO practices that includes both traditional and AI-optimization techniques [Intent] 
                  to train my team of intermediate-level marketers [Target]. Please include specific 
                  examples and cite authoritative sources for each major point [Evidence]."
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Platform-Specific Prompt Strategies</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-4">ChatGPT Prompt Optimization</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Use conversational, natural language</li>
                  <li>• Include context and background information</li>
                  <li>• Request step-by-step explanations</li>
                  <li>• Ask for examples and practical applications</li>
                  <li>• Specify desired format and length</li>
                </ul>
                <div className="mt-4 p-3 bg-green-100 rounded text-sm">
                  <strong>Best Practice:</strong> ChatGPT responds well to prompts that mimic natural conversation patterns.
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-4">Claude Prompt Optimization</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Structure queries with clear logical flow</li>
                  <li>• Request analytical and detailed responses</li>
                  <li>• Include specific constraints and requirements</li>
                  <li>• Ask for multi-perspective analysis</li>
                  <li>• Emphasize accuracy and fact-checking</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded text-sm">
                  <strong>Best Practice:</strong> Claude excels with structured, analytical prompts that require deep thinking.
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-bold text-purple-900 mb-4">Perplexity Prompt Optimization</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Focus on research and fact-finding queries</li>
                  <li>• Request current and recent information</li>
                  <li>• Ask for source citations and verification</li>
                  <li>• Include comparative analysis requests</li>
                  <li>• Specify time-sensitive information needs</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-100 rounded text-sm">
                  <strong>Best Practice:</strong> Perplexity is optimized for research-oriented queries with source requirements.
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-bold text-orange-900 mb-4">Bing Chat Prompt Optimization</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Use action-oriented, solution-focused language</li>
                  <li>• Request practical recommendations</li>
                  <li>• Include location and context when relevant</li>
                  <li>• Ask for current trends and developments</li>
                  <li>• Specify desired format (lists, comparisons, etc.)</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-100 rounded text-sm">
                  <strong>Best Practice:</strong> Bing Chat performs best with practical, solution-oriented queries.
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Testing and Measuring Prompt Effectiveness</h2>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Prompt Testing Methodology</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <strong>Baseline Testing</strong>
                    <p className="text-gray-600 mt-1">Test basic prompts to establish current content citation rates</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <strong>Variation Testing</strong>
                    <p className="text-gray-600 mt-1">Create multiple prompt variations for the same query intent</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <strong>Cross-Platform Comparison</strong>
                    <p className="text-gray-600 mt-1">Test identical prompts across different AI platforms</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <strong>Citation Analysis</strong>
                    <p className="text-gray-600 mt-1">Track which content gets cited and in what context</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <strong>Optimization Iteration</strong>
                    <p className="text-gray-600 mt-1">Refine prompts based on performance data</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Common Prompt Engineering Mistakes in GEO</h2>
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">❌ Testing Only Generic Queries</h3>
                <p className="text-red-800 mb-2">
                  <strong>Mistake:</strong> Using broad, generic prompts that don't match real user intent
                </p>
                <p className="text-red-700 text-sm">
                  <strong>Solution:</strong> Test specific, contextual queries that match your target audience's language and needs
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">❌ Ignoring Platform Differences</h3>
                <p className="text-red-800 mb-2">
                  <strong>Mistake:</strong> Using identical prompts across all AI platforms
                </p>
                <p className="text-red-700 text-sm">
                  <strong>Solution:</strong> Adapt prompts to each platform's strengths and response patterns
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">❌ Not Testing Citation Context</h3>
                <p className="text-red-800 mb-2">
                  <strong>Mistake:</strong> Only checking if content is cited, not how it's presented
                </p>
                <p className="text-red-700 text-sm">
                  <strong>Solution:</strong> Analyze citation context, position, and surrounding information
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Advanced Prompt Engineering Techniques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-4 text-purple-600">Chain-of-Thought Prompting</h3>
                <p className="text-sm mb-3">Guide AI through complex reasoning processes</p>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                  "Let's think step by step about SEO strategy: First, identify target keywords... Then analyze competition... Finally, create content plan..."
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-4 text-blue-600">Role-Based Prompting</h3>
                <p className="text-sm mb-3">Assign specific expertise roles to improve responses</p>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                  "As an SEO expert with 10 years of experience, analyze this content strategy and provide recommendations..."
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-4 text-green-600">Few-Shot Learning</h3>
                <p className="text-sm mb-3">Provide examples to improve response quality</p>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                  "Here are 3 examples of effective meta descriptions: [examples]. Now create one for this page..."
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="font-bold mb-4 text-orange-600">Constraint Prompting</h3>
                <p className="text-sm mb-3">Set specific parameters and limitations</p>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                  "Explain SEO in exactly 200 words, using only terms a beginner would understand, include 3 actionable tips..."
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Entities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/entities/conversational-search-optimization" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-bold mb-2">Conversational Search Optimization</h3>
                <p className="text-sm text-gray-600">Natural language query optimization</p>
              </Link>
              <Link href="/entities/ai-seo" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-bold mb-2">AI SEO</h3>
                <p className="text-sm text-gray-600">Broader AI optimization context</p>
              </Link>
              <Link href="/entities/content-structuring" className="block p-4 border rounded-lg hover:bg-gray-50">
                <h3 className="font-bold mb-2">Content Structuring</h3>
                <p className="text-sm text-gray-600">Organizing content for AI understanding</p>
              </Link>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Master Prompt Engineering for GEO</h2>
          <p className="text-xl mb-6">Learn to craft prompts that reveal optimization opportunities</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/tools/visibility-tracker" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Test Your Content
            </Link>
            <Link href="/getting-started" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Learn GEO Basics
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}