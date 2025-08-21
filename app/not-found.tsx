import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Generative Engine Optimization',
  description: 'The page you are looking for could not be found. Explore our GEO tools, guides, and resources.',
  robots: 'noindex, nofollow',
}

export default function NotFound() {
  const popularPages = [
    { title: 'Visibility Tracker', href: '/tools/visibility-tracker', description: 'Track AI platform visibility' },
    { title: 'GEO Audit', href: '/tools/geo-audit', description: 'Audit your GEO implementation' },
    { title: 'Content Optimizer', href: '/tools/content-optimizer', description: 'Optimize content for AI' },
    { title: 'Blog', href: '/blog', description: 'Latest GEO insights and guides' },
    { title: 'Glossary', href: '/glossary', description: 'GEO terminology explained' },
    { title: 'About', href: '/about', description: 'Learn about our mission' },
  ]

  const categories = [
    { title: 'Tools', href: '/tools', count: '10+' },
    { title: 'Industries', href: '/industries', count: '560+' },
    { title: 'Platforms', href: '/platforms', count: '15+' },
    { title: 'Comparisons', href: '/compare', count: '60+' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Header */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-white mt-4 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Search Suggestion */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <p className="text-gray-300 mb-4">
            Try searching for what you need or explore our popular pages:
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Popular Pages</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors text-left"
              >
                <h4 className="text-white font-semibold mb-1">{page.title}</h4>
                <p className="text-gray-400 text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Browse by Category */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Browse by Category</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {category.count}
                </div>
                <div className="text-white font-semibold mt-2">{category.title}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            Still can't find what you're looking for?{' '}
            <Link href="/contact" className="text-purple-400 hover:text-purple-300">
              Contact us
            </Link>{' '}
            for assistance.
          </p>
        </div>
      </div>
    </div>
  )
}