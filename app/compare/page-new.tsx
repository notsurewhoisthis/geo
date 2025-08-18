export default async function ComparisonsPage() {
  const { getAllComparisons, platforms } = await import('@/app/lib/platform-comparisons');
  const comparisons = getAllComparisons();
  
  // Group comparisons by platform for better organization
  const comparisonsByPlatform: { [key: string]: any[] } = {};
  
  platforms.forEach((platform: any) => {
    comparisonsByPlatform[platform.id] = comparisons.filter((comp: any) => 
      comp.slug.includes(platform.id)
    );
  });
  
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            AI Platform Comparison Guides
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare optimization strategies across {platforms.length} leading AI platforms. 
            Learn how to maximize your content's visibility on multiple AI systems.
          </p>
        </div>
        
        {/* Platform Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">All Platforms</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {platforms.map((platform: any) => (
              <div
                key={platform.id}
                className="p-4 bg-gray-800 rounded-lg border border-gray-700"
              >
                <h3 className="font-semibold text-white mb-1">{platform.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{platform.vendor} • {platform.type}</p>
                <p className="text-xs text-purple-400">{platform.strengths.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Comparisons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Popular Comparisons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.slice(0, 9).map((comp: any) => (
              <a
                key={comp.slug}
                href={`/compare/${comp.slug}`}
                className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{comp.title}</h3>
                <p className="text-gray-400 text-sm">{comp.description}</p>
                <div className="mt-4 flex items-center text-purple-400 text-sm">
                  <span>View Comparison →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* All Comparisons by Platform */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">All Comparisons by Platform</h2>
          {platforms.map((platform: any) => (
            <div key={platform.id} className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">
                {platform.name} Comparisons
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {comparisonsByPlatform[platform.id]?.slice(0, 6).map((comp: any) => (
                  <a
                    key={comp.slug}
                    href={`/compare/${comp.slug}`}
                    className="block p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-medium text-white mb-1">
                      vs {comp.platform1 === platform.name ? comp.platform2 : comp.platform1}
                    </h4>
                    <p className="text-gray-400 text-xs">Compare optimization strategies →</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* SEO Content */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Compare AI Platform Optimization Strategies?
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Each AI platform has unique characteristics that affect how content is discovered, 
              processed, and presented to users. Understanding these differences is crucial for 
              maximizing your content's reach across the AI ecosystem.
            </p>
            <p>
              Our comprehensive comparison guides analyze {comparisons.length} unique platform 
              combinations, providing actionable insights for optimizing your content across 
              multiple AI systems simultaneously.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Platform-specific content structure requirements</li>
              <li>Citation and source preferences for each AI</li>
              <li>Keyword and entity optimization strategies</li>
              <li>Schema markup requirements and best practices</li>
              <li>Technical optimization tips for each platform</li>
              <li>Performance metrics and success indicators</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}