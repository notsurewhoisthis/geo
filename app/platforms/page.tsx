import { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

interface Platform {
  slug: string
  name: string
  company: string
  type: string
  userBase: string
  launch: string
  primaryUse: string
  geoOptimization: {
    citationWeight: number
    statisticsWeight: number
    faqWeight: number
    conversationalWeight: number
    authorityWeight: number
  }
  keyFeatures: string[]
  optimizationStrategies: string[]
  contentPreferences: string[]
  industries: string[]
}

export const metadata: Metadata = {
  title: 'AI Platform Optimization Guides | 103+ Platforms',
  description: 'Master Generative Engine Optimization for 103+ AI platforms. Get platform-specific strategies for ChatGPT, Claude, Perplexity, and more with proven GEO techniques.',
  keywords: 'AI platform optimization, ChatGPT SEO, Claude optimization, Perplexity AI visibility, generative engine platforms',
  alternates: {
    canonical: 'https://generative-engine.org/platforms',
  },
}

async function getAllPlatforms(): Promise<Platform[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'platforms.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading platforms data:', error)
    return []
  }
}

export default async function PlatformsPage() {
  const platforms = await getAllPlatforms()
  
  // Group platforms by type
  const categorizedPlatforms = platforms.reduce((acc, platform) => {
    const type = platform.type || 'Other'
    if (!acc[type]) {
      acc[type] = []
    }
    acc[type].push(platform)
    return acc
  }, {} as Record<string, Platform[]>)
  
  // Sort categories by number of platforms
  const sortedCategories = Object.entries(categorizedPlatforms)
    .sort((a, b) => b[1].length - a[1].length)
  
  // Get top platforms by user base
  const topPlatforms = [...platforms]
    .sort((a, b) => {
      // Extract numeric values from user base strings
      const aUsers = parseInt(a.userBase.replace(/[^0-9]/g, '')) || 0
      const bUsers = parseInt(b.userBase.replace(/[^0-9]/g, '')) || 0
      return bUsers - aUsers
    })
    .slice(0, 6)
  
  // Calculate average GEO scores for each platform
  const platformsWithScores = platforms.map(platform => ({
    ...platform,
    geoScore: Math.round(
      (platform.geoOptimization.citationWeight +
       platform.geoOptimization.statisticsWeight +
       platform.geoOptimization.faqWeight +
       platform.geoOptimization.conversationalWeight +
       platform.geoOptimization.authorityWeight) / 5
    )
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Platform Optimization Guides
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Master Generative Engine Optimization for {platforms.length}+ AI platforms. 
              Get platform-specific strategies that actually work.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">{platforms.length}</div>
                <div className="text-sm text-blue-200">AI Platforms</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">{sortedCategories.length}</div>
                <div className="text-sm text-blue-200">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm text-blue-200">Avg. GEO Score</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#all-platforms" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Browse All Platforms
              </a>
              <a 
                href="#top-platforms" 
                className="border border-purple-300 hover:bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                View Top Platforms
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Platforms Section */}
      <section id="top-platforms" className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Top AI Platforms by User Base
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Focus on platforms with the largest reach for maximum GEO impact
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {topPlatforms.map((platform, index) => {
                const geoScore = Math.round(
                  (platform.geoOptimization.citationWeight +
                   platform.geoOptimization.statisticsWeight +
                   platform.geoOptimization.faqWeight +
                   platform.geoOptimization.conversationalWeight +
                   platform.geoOptimization.authorityWeight) / 5
                )
                
                return (
                  <Link 
                    key={platform.slug}
                    href={`/platforms/${platform.slug}`}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl font-bold text-purple-600">#{index + 1}</div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">{platform.userBase}</div>
                        <div className="text-xs text-gray-500">Users</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {platform.name}
                    </h3>
                    
                    <div className="text-sm text-gray-600 mb-3">
                      by {platform.company}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {platform.type}
                      </span>
                      <span className="text-green-600 font-semibold text-sm">
                        {geoScore}% GEO Score
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {platform.primaryUse}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 text-sm">
                        Launched {platform.launch}
                      </span>
                      <span className="text-indigo-600 font-semibold">
                        View Guide →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* All Platforms by Category */}
      <section id="all-platforms" className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              All Platforms by Type
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Find your target platforms and discover tailored GEO strategies
            </p>
            
            {sortedCategories.map(([category, categoryPlatforms]) => (
              <div key={category} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category}
                  </h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {categoryPlatforms.length} platforms
                  </span>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryPlatforms.map((platform) => {
                    const geoScore = Math.round(
                      (platform.geoOptimization.citationWeight +
                       platform.geoOptimization.statisticsWeight +
                       platform.geoOptimization.faqWeight +
                       platform.geoOptimization.conversationalWeight +
                       platform.geoOptimization.authorityWeight) / 5
                    )
                    
                    return (
                      <Link
                        key={platform.slug}
                        href={`/platforms/${platform.slug}`}
                        className="bg-gray-50 rounded-lg p-4 hover:bg-purple-50 transition border border-gray-200 hover:border-purple-300"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {platform.name}
                        </h4>
                        <div className="text-sm text-gray-600 mb-2">
                          {platform.company}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-600 font-medium">
                            {platform.userBase}
                          </span>
                          <span className="text-green-600">
                            {geoScore}% GEO
                          </span>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          {platform.primaryUse}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Platform Optimization Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  GEO Impact Metrics
                </h3>
                <p className="text-gray-600 mb-4">
                  Detailed citation weights and optimization scores for each platform
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Citation weight analysis</li>
                  <li>• Statistics impact scores</li>
                  <li>• FAQ optimization rates</li>
                  <li>• Authority measurements</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Platform-Specific Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Tailored optimization techniques for each AI platform's algorithm
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Content preferences</li>
                  <li>• Key feature targeting</li>
                  <li>• Industry alignments</li>
                  <li>• User base insights</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Implementation Guides
                </h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step optimization playbooks for immediate results
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Quick win strategies</li>
                  <li>• Content templates</li>
                  <li>• Testing frameworks</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing a Platform?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get personalized recommendations based on your industry and goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tools/platform-finder"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Use Platform Finder Tool
              </Link>
              <Link 
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}