export default async function ComparisonPage({ params }: { params: Promise<{ comparison: string }> }) {
  const { comparison } = await params;
  const { marked } = await import('marked');
  const fs = await import('fs');
  const path = await import('path');
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
  
  // Read the markdown content
  const filePath = path.join(process.cwd(), 'content', 'comparisons', `${comparison}.md`);
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error('Error reading comparison file:', error);
    content = '# Comparison content not found';
  }
  
  const htmlContent = await marked(content);
  
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