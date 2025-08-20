import { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

interface Industry {
  slug: string
  name: string
  category: string
  description: string
  marketSize: string
  growth: string
  aiAdoption: string
  geoImpact: string
  challenges: string[]
  opportunities: string[]
}

export const metadata: Metadata = {
  title: 'Industry-Specific GEO Strategies | 560+ Industries',
  description: 'Discover Generative Engine Optimization strategies for 560+ industries. Get tailored AI optimization guides for your sector with market insights and proven techniques.',
  keywords: 'industry GEO, sector-specific AI optimization, industry AI strategies, generative engine optimization by industry',
  alternates: {
    canonical: 'https://generative-engine.org/industries',
  },
}

async function getAllIndustries(): Promise<Industry[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'industries.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  } catch (error) {
    console.error('Error loading industries data:', error)
    return []
  }
}

export default async function IndustriesPage() {
  const industries = await getAllIndustries()
  
  // Group industries by category
  const categorizedIndustries = industries.reduce((acc, industry) => {
    const category = industry.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(industry)
    return acc
  }, {} as Record<string, Industry[]>)
  
  // Sort categories by number of industries
  const sortedCategories = Object.entries(categorizedIndustries)
    .sort((a, b) => b[1].length - a[1].length)
  
  // Get top industries by market size
  const topIndustries = [...industries]
    .sort((a, b) => {
      const aSizeNumber = parseFloat(a.marketSize.replace(/[^0-9.]/g, ''))
      const bSizeNumber = parseFloat(b.marketSize.replace(/[^0-9.]/g, ''))
      return bSizeNumber - aSizeNumber
    })
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industry-Specific GEO Strategies
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover tailored Generative Engine Optimization strategies for {industries.length}+ industries. 
              Get proven AI visibility techniques for your specific sector.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">{industries.length}</div>
                <div className="text-sm text-blue-200">Industries Covered</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">{sortedCategories.length}</div>
                <div className="text-sm text-blue-200">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-sm text-blue-200">Avg. AI Visibility Boost</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#all-industries" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                Browse All Industries
              </a>
              <a 
                href="#top-industries" 
                className="border border-blue-300 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition"
              >
                View Top Industries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Industries Section */}
      <section id="top-industries" className="py-16 px-4">
        <div className="container-blog">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Top Industries by Market Size
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Start with the largest market opportunities for maximum GEO impact
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {topIndustries.map((industry, index) => (
                <Link 
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl font-bold text-indigo-600">#{index + 1}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{industry.marketSize}</div>
                      <div className="text-xs text-gray-500">Market Size</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {industry.category}
                    </span>
                    <span className="text-blue-600 font-semibold text-sm">
                      {industry.growth} growth
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {industry.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 text-sm font-semibold">
                      {industry.aiAdoption} AI adoption
                    </span>
                    <span className="text-indigo-600 font-semibold">
                      View Guide →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Industries by Category */}
      <section id="all-industries" className="py-16 px-4 bg-white">
        <div className="container-blog">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              All Industries by Category
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Find your industry and discover tailored GEO strategies
            </p>
            
            {sortedCategories.map(([category, categoryIndustries]) => (
              <div key={category} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category}
                  </h3>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {categoryIndustries.length} industries
                  </span>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryIndustries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-indigo-50 transition border border-gray-200 hover:border-indigo-300"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {industry.name}
                      </h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-600 font-medium">
                          {industry.marketSize}
                        </span>
                        <span className="text-purple-600">
                          {industry.aiAdoption} AI
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        {industry.growth} growth
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Can't Find Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're constantly adding new industries. Request a custom GEO strategy for your specific sector.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Industry Analysis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}