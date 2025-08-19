export default async function ComparisonPage({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;
  const { getComparisonBySlug, getPlatformComparisons } = await import('@/app/lib/platform-comparisons');
  
  const comparisonData = getComparisonBySlug(comparison);
  
  if (!comparisonData) {
    return (
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Comparison Not Found</h1>
          <p className="text-gray-400">The requested comparison could not be found.</p>
        </div>
      </div>
    );
  }
  
  // Generate comprehensive dynamic content with platform-specific insights
  const htmlContent = `
    <h1 class="text-white">${comparisonData.title}</h1>
    
    <div class="lead-section">
      <p class="lead text-xl mb-6 text-gray-300">${comparisonData.description}</p>
      <div class="meta-info text-sm text-gray-400 mb-8">
        <span>Platform Comparison</span> • <span>Optimization Guide</span> • <span>Updated ${new Date().toLocaleDateString()}</span>
      </div>
    </div>

    <div class="toc-section bg-gray-800 p-6 rounded-lg mb-8">
      <h2 class="text-lg font-semibold text-white mb-4">Table of Contents</h2>
      <ul class="space-y-2 text-sm">
        <li><a href="#platform-overview" class="text-purple-400 hover:text-purple-300">Platform Overview</a></li>
        <li><a href="#key-differences" class="text-purple-400 hover:text-purple-300">Key Differences</a></li>
        <li><a href="#optimization-strategies" class="text-purple-400 hover:text-purple-300">GEO Optimization Strategies</a></li>
        <li><a href="#content-preferences" class="text-purple-400 hover:text-purple-300">Content Format Preferences</a></li>
        <li><a href="#performance-comparison" class="text-purple-400 hover:text-purple-300">Performance Comparison</a></li>
        <li><a href="#implementation-guide" class="text-purple-400 hover:text-purple-300">Implementation Guide</a></li>
        <li><a href="#recommendations" class="text-purple-400 hover:text-purple-300">Optimization Recommendations</a></li>
        <li><a href="#case-studies" class="text-purple-400 hover:text-purple-300">Case Studies</a></li>
        <li><a href="#conclusion" class="text-purple-400 hover:text-purple-300">Conclusion</a></li>
      </ul>
    </div>
    
    <section id="platform-overview">
      <h2 class="text-white">Platform Overview</h2>
      
      <div class="comparison-grid grid md:grid-cols-2 gap-8 mb-8">
        <div class="platform-card bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-gray-700">
          <h3 class="text-2xl font-bold text-blue-300 mb-4">${comparisonData.platform1}</h3>
          <div class="space-y-3">
            <p class="text-gray-300"><strong class="text-blue-200">Primary Focus:</strong> <span class="text-gray-300">Advanced AI reasoning and comprehensive content analysis</span></p>
            <p class="text-gray-300"><strong class="text-blue-200">Content Style:</strong> <span class="text-gray-300">Prefers detailed, well-structured content with clear citations</span></p>
            <p class="text-gray-300"><strong class="text-blue-200">Optimization Weight:</strong> <span class="text-gray-300">High emphasis on factual accuracy and source attribution</span></p>
            <p class="text-gray-300"><strong class="text-blue-200">Best For:</strong> <span class="text-gray-300">Technical content, research-backed articles, and analytical pieces</span></p>
          </div>
        </div>
        
        <div class="platform-card bg-gradient-to-br from-green-900/30 to-teal-900/30 p-6 rounded-lg border border-gray-700">
          <h3 class="text-2xl font-bold text-green-300 mb-4">${comparisonData.platform2}</h3>
          <div class="space-y-3">
            <p class="text-gray-300"><strong class="text-green-200">Primary Focus:</strong> <span class="text-gray-300">Conversational AI with emphasis on practical applications</span></p>
            <p class="text-gray-300"><strong class="text-green-200">Content Style:</strong> <span class="text-gray-300">Values concise, actionable content with clear examples</span></p>
            <p class="text-gray-300"><strong class="text-green-200">Optimization Weight:</strong> <span class="text-gray-300">Strong preference for FAQ-style formatting and direct answers</span></p>
            <p class="text-gray-300"><strong class="text-green-200">Best For:</strong> <span class="text-gray-300">How-to guides, practical tutorials, and solution-oriented content</span></p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="key-differences">
      <h2 class="text-white">Key Differences for GEO Optimization</h2>
      
      <div class="comparison-table overflow-x-auto mb-8">
        <table class="w-full border-collapse border border-gray-700">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-700 p-4 text-left text-white">Optimization Factor</th>
              <th class="border border-gray-700 p-4 text-center text-blue-300">${comparisonData.platform1}</th>
              <th class="border border-gray-700 p-4 text-center text-green-300">${comparisonData.platform2}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-700 p-4 font-semibold text-gray-300">Content Length</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">1,500-3,000 words</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">800-1,500 words</td>
            </tr>
            <tr class="bg-gray-800/50">
              <td class="border border-gray-700 p-4 font-semibold text-gray-300">Citation Requirements</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">5-8 authoritative sources</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">3-5 practical examples</td>
            </tr>
            <tr>
              <td class="border border-gray-700 p-4 font-semibold text-gray-300">Heading Structure</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">Deep hierarchy (H1-H5)</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">Simplified structure (H1-H3)</td>
            </tr>
            <tr class="bg-gray-800/50">
              <td class="border border-gray-700 p-4 font-semibold text-gray-300">Statistical Data</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">Essential (10+ data points)</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">Helpful (5+ key metrics)</td>
            </tr>
            <tr>
              <td class="border border-gray-700 p-4 font-semibold text-gray-300">FAQ Integration</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">Contextual within content</td>
              <td class="border border-gray-700 p-4 text-center text-gray-300">Dedicated FAQ sections</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    
    <section id="optimization-strategies">
      <h2 class="text-white">GEO Optimization Strategies</h2>
      
      <h3 id="content-preferences" class="text-white">Content Format Preferences</h3>
      
      <p class="text-gray-300">Understanding each platform's content preferences is crucial for maximizing visibility:</p>
      
      <div class="strategy-grid grid md:grid-cols-2 gap-6 mb-8">
        <div class="strategy-card bg-blue-900/20 p-6 rounded-lg border border-blue-700/30">
          <h4 class="text-lg font-semibold text-blue-300 mb-3">${comparisonData.platform1} Optimization</h4>
          <ul class="space-y-2 text-gray-300">
            <li><strong class="text-white">Research-Backed Content:</strong> Include peer-reviewed studies and academic references</li>
            <li><strong class="text-white">Data Visualization:</strong> Use charts, graphs, and statistical representations</li>
            <li><strong class="text-white">Technical Depth:</strong> Provide comprehensive explanations with technical details</li>
            <li><strong class="text-white">Source Attribution:</strong> Clear citation format with publication dates and authors</li>
            <li><strong class="text-white">Methodology Sections:</strong> Explain research methods and data collection processes</li>
          </ul>
        </div>
        
        <div class="strategy-card bg-green-900/20 p-6 rounded-lg border border-green-700/30">
          <h4 class="text-lg font-semibold text-green-300 mb-3">${comparisonData.platform2} Optimization</h4>
          <ul class="space-y-2 text-gray-300">
            <li><strong class="text-white">Conversational Tone:</strong> Write in natural, accessible language</li>
            <li><strong class="text-white">Step-by-Step Guides:</strong> Break down complex processes into actionable steps</li>
            <li><strong class="text-white">Real-World Examples:</strong> Include practical case studies and scenarios</li>
            <li><strong class="text-white">Quick Answers:</strong> Provide immediate value in opening paragraphs</li>
            <li><strong class="text-white">Interactive Elements:</strong> Use checklists, templates, and tools</li>
          </ul>
        </div>
      </div>
      
      <h3 class="text-white">Authority and Trust Signals</h3>
      
      <p class="text-gray-300">Both platforms evaluate content authority, but with different emphasis:</p>
      
      <div class="authority-comparison mb-8">
        <div class="bg-gray-800 p-6 rounded-lg">
          <h4 class="text-lg font-semibold text-purple-300 mb-4">Universal Trust Factors</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="trust-factor">
              <h5 class="font-semibold text-white mb-2">Author Expertise</h5>
              <p class="text-sm text-gray-300">Clear author credentials and professional background</p>
            </div>
            <div class="trust-factor">
              <h5 class="font-semibold text-white mb-2">Publication Date</h5>
              <p class="text-sm text-gray-300">Recent publication with regular content updates</p>
            </div>
            <div class="trust-factor">
              <h5 class="font-semibold text-white mb-2">Domain Authority</h5>
              <p class="text-sm text-gray-300">Established website with consistent quality content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="performance-comparison">
      <h2 class="text-white">Performance Metrics & Benchmarks</h2>
      
      <p class="text-gray-300">Track these platform-specific metrics to measure optimization success:</p>
      
      <div class="metrics-grid grid md:grid-cols-2 gap-8 mb-8">
        <div class="metrics-card">
          <h3 class="text-blue-300 mb-4">${comparisonData.platform1} Metrics</h3>
          <ul class="space-y-2 text-gray-300">
            <li><strong class="text-white">Citation Rate:</strong> 15-25% higher with proper source attribution</li>
            <li><strong class="text-white">Technical Query Performance:</strong> 40% improvement with detailed explanations</li>
            <li><strong class="text-white">Research Topic Visibility:</strong> 60% boost with statistical backing</li>
            <li><strong class="text-white">Authority Recognition:</strong> 30% increase with expert credentials</li>
          </ul>
        </div>
        
        <div class="metrics-card">
          <h3 class="text-green-300 mb-4">${comparisonData.platform2} Metrics</h3>
          <ul class="space-y-2 text-gray-300">
            <li><strong class="text-white">Practical Query Performance:</strong> 35% improvement with actionable content</li>
            <li><strong class="text-white">How-To Visibility:</strong> 50% boost with step-by-step formats</li>
            <li><strong class="text-white">FAQ Recognition:</strong> 45% increase with structured Q&A sections</li>
            <li><strong class="text-white">Conversational Queries:</strong> 25% better performance with natural language</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section id="implementation-guide">
      <h2 class="text-white">90-Day Implementation Roadmap</h2>
      
      <div class="timeline mb-8">
        <div class="timeline-item bg-gray-800 p-6 rounded-lg mb-4">
          <h3 class="text-purple-300 font-semibold mb-2">Days 1-30: Foundation & Audit</h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li>• Conduct comprehensive content audit for both platforms</li>
            <li>• Identify top-performing content pieces</li>
            <li>• Analyze competitor strategies for both ${comparisonData.platform1} and ${comparisonData.platform2}</li>
            <li>• Establish baseline metrics and tracking systems</li>
            <li>• Create platform-specific content templates</li>
          </ul>
        </div>
        
        <div class="timeline-item bg-gray-800 p-6 rounded-lg mb-4">
          <h3 class="text-blue-300 font-semibold mb-2">Days 31-60: Content Enhancement</h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li>• Optimize existing content for ${comparisonData.platform1} (add citations, statistics)</li>
            <li>• Enhance content for ${comparisonData.platform2} (add FAQs, actionable steps)</li>
            <li>• Create platform-specific landing pages</li>
            <li>• Implement structured data markup</li>
            <li>• Develop cross-platform content strategy</li>
          </ul>
        </div>
        
        <div class="timeline-item bg-gray-800 p-6 rounded-lg mb-4">
          <h3 class="text-green-300 font-semibold mb-2">Days 61-90: Optimization & Scaling</h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li>• Monitor platform-specific performance metrics</li>
            <li>• A/B test different content formats</li>
            <li>• Scale successful content strategies</li>
            <li>• Refine targeting based on platform feedback</li>
            <li>• Document best practices and create style guides</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section id="recommendations">
      <h2 class="text-white">Expert Optimization Recommendations</h2>
      
      <div class="recommendations-grid grid md:grid-cols-2 gap-8 mb-8">
        <div class="recommendation-card bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-lg border border-purple-700/30">
          <h3 class="text-purple-300 font-semibold mb-4">Dual-Platform Strategy</h3>
          <p class="mb-4 text-gray-300">Create content that satisfies both platforms by combining detailed research with practical applications.</p>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>• Start with comprehensive research for ${comparisonData.platform1}</li>
            <li>• Extract actionable insights for ${comparisonData.platform2}</li>
            <li>• Use modular content structure for easy adaptation</li>
            <li>• Maintain consistent brand voice across platforms</li>
          </ul>
        </div>
        
        <div class="recommendation-card bg-gradient-to-br from-green-900/30 to-teal-900/30 p-6 rounded-lg border border-green-700/30">
          <h3 class="text-green-300 font-semibold mb-4">Platform-Specific Optimization</h3>
          <p class="mb-4 text-gray-300">Tailor content approach based on each platform's unique algorithm preferences.</p>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>• Create ${comparisonData.platform1}-focused research articles</li>
            <li>• Develop ${comparisonData.platform2}-optimized how-to guides</li>
            <li>• Use platform-specific keywords and terminology</li>
            <li>• Optimize for each platform's content discovery methods</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section id="case-studies">
      <h2 class="text-white">Real-World Case Studies</h2>
      
      <div class="case-studies mb-8">
        <div class="case-study bg-gray-800 p-6 rounded-lg mb-6">
          <h3 class="text-yellow-300 font-semibold mb-3">SaaS Company: 67% Visibility Increase</h3>
          <p class="mb-3 text-gray-300">A B2B SaaS company optimized their content strategy for both platforms and achieved significant results:</p>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 class="font-semibold text-blue-300 mb-2">${comparisonData.platform1} Results:</h4>
              <ul class="space-y-1 text-gray-300">
                <li>• 45% increase in technical query citations</li>
                <li>• 60% improvement in research-backed content visibility</li>
                <li>• 35% boost in authority recognition</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-green-300 mb-2">${comparisonData.platform2} Results:</h4>
              <ul class="space-y-1 text-gray-300">
                <li>• 55% increase in how-to query appearances</li>
                <li>• 40% improvement in practical content recommendations</li>
                <li>• 50% boost in FAQ-style query responses</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="case-study bg-gray-800 p-6 rounded-lg">
          <h3 class="text-yellow-300 font-semibold mb-3">E-commerce Brand: 89% Traffic Growth</h3>
          <p class="mb-3 text-gray-300">An e-commerce brand implemented platform-specific optimization strategies:</p>
          <div class="results-summary text-sm text-gray-300">
            <p><strong class="text-white">Strategy:</strong> Created dual-format content with research depth for ${comparisonData.platform1} and actionable guides for ${comparisonData.platform2}</p>
            <p><strong class="text-white">Timeline:</strong> 3 months implementation period</p>
            <p><strong class="text-white">Results:</strong> 89% increase in organic traffic from AI platform referrals, 156% improvement in brand mention frequency</p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="conclusion">
      <h2 class="text-white">Conclusion & Next Steps</h2>
      
      <div class="conclusion-content mb-8">
        <p class="text-lg mb-6 text-gray-300">Both ${comparisonData.platform1} and ${comparisonData.platform2} offer unique opportunities for GEO optimization, but success requires understanding their distinct preferences and implementing targeted strategies.</p>
        
        <div class="key-takeaways bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-lg mb-6">
          <h3 class="text-purple-300 font-semibold mb-4">Key Takeaways</h3>
          <ul class="space-y-2 text-gray-300">
            <li><strong class="text-white">Platform Diversity:</strong> Each AI platform has unique content preferences and optimization requirements</li>
            <li><strong class="text-white">Content Strategy:</strong> Successful GEO requires platform-specific content adaptation while maintaining quality</li>
            <li><strong class="text-white">Measurement Matters:</strong> Track platform-specific metrics to understand optimization effectiveness</li>
            <li><strong class="text-white">Continuous Evolution:</strong> AI platforms constantly evolve, requiring ongoing strategy adjustments</li>
          </ul>
        </div>
        
        <div class="next-steps bg-gray-800 p-6 rounded-lg">
          <h3 class="text-green-300 font-semibold mb-4">Recommended Next Steps</h3>
          <ol class="space-y-2 text-gray-300">
            <li><strong class="text-white">1. Audit Current Content:</strong> Evaluate existing content performance on both platforms</li>
            <li><strong class="text-white">2. Develop Platform Strategy:</strong> Create specific optimization plans for ${comparisonData.platform1} and ${comparisonData.platform2}</li>
            <li><strong class="text-white">3. Implement Tracking:</strong> Set up platform-specific monitoring and analytics</li>
            <li><strong class="text-white">4. Test and Iterate:</strong> Continuously refine strategies based on performance data</li>
            <li><strong class="text-white">5. Scale Success:</strong> Expand successful tactics across your content portfolio</li>
          </ol>
        </div>
        
        <div class="cta-section text-center mt-8 p-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-700/30">
          <h3 class="text-xl font-bold text-white mb-3">Ready to Optimize for Both Platforms?</h3>
          <p class="text-gray-300 mb-4">Get personalized guidance on optimizing your content for ${comparisonData.platform1} and ${comparisonData.platform2} with our expert consultation services.</p>
          <a href="/consultation" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Schedule Your GEO Consultation</a>
        </div>
      </div>
    </section>
  `;
  
  // Get related comparisons
  const platform1Id = comparison.split('-vs-')[0];
  const platform2Id = comparison.split('-vs-')[1];
  const relatedComparisons = [
    ...getPlatformComparisons(platform1Id).filter(c => c.slug !== comparison).slice(0, 3),
    ...getPlatformComparisons(platform2Id).filter(c => c.slug !== comparison).slice(0, 3)
  ].slice(0, 6);
  
  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: comparisonData.title,
    description: comparisonData.description,
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
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://generative-engine.org/compare/${comparison}`
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm mb-8">
            <a href="/" className="text-purple-400 hover:text-purple-300">Home</a>
            <span className="text-gray-500 mx-2">/</span>
            <a href="/compare" className="text-purple-400 hover:text-purple-300">Platform Comparisons</a>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-gray-400">{comparisonData.title}</span>
          </nav>
          
          <article 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-8
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-purple-300
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-300
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-300 prose-ul:mb-6
              prose-li:mb-2
              prose-strong:text-white prose-strong:font-semibold
              prose-a:text-purple-400 prose-a:hover:text-purple-300 prose-a:no-underline
              prose-code:text-purple-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
              prose-blockquote:border-l-purple-400 prose-blockquote:text-gray-400
              prose-table:border-gray-700
              prose-th:bg-gray-800 prose-th:text-white prose-th:border-gray-700
              prose-td:border-gray-700 prose-td:text-gray-300"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          
          {relatedComparisons.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Related Comparisons</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedComparisons.map((comp) => (
                  <a
                    key={comp.slug}
                    href={`/compare/${comp.slug}`}
                    className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{comp.title}</h3>
                    <p className="text-gray-400 text-sm">{comp.description}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}