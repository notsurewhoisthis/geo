import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Blog - Generative Engine Optimization Insights',
  description: 'Learn cutting-edge GEO strategies, AI optimization techniques, and best practices for ranking in ChatGPT, Claude, Perplexity, and other AI search engines.',
  keywords: 'GEO blog, generative engine optimization, AI SEO, ChatGPT optimization, Claude optimization, AI search insights',
  alternates: {
    canonical: 'https://generative-engine.org/blog',
  },
}

interface BlogPost {
  slug: string
  title: string
  description: string
  author: string
  publishedAt: string
  tags: string[]
  content?: string
  htmlContent?: string
  category?: string
}

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const currentPage = parseInt(params.page || '1', 10)
  const postsPerPage = 9
  
  // Read all blog posts
  const blogDataDir = path.join(process.cwd(), 'public', 'blog-data')
  const posts: BlogPost[] = []
  
  try {
    const files = fs.readdirSync(blogDataDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    for (const file of jsonFiles) {
      const filePath = path.join(blogDataDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const post = JSON.parse(fileContent)
      posts.push(post)
    }
    
    // Sort posts by publishedAt date (newest first)
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
  }

  // Calculate pagination
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = posts.slice(startIndex, endIndex)

  // Generate page numbers
  const pageNumbers = []
  const maxVisiblePages = 5
  let startPage = Math.max(1, currentPage - 2)
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container-blog">
          <h1 className="text-5xl font-bold mb-6">GEO Insights & Updates</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Stay ahead of the curve with our latest research on Generative Engine Optimization, 
            AI search strategies, and the future of content discovery.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="container-blog">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <article key={post.slug} className="blog-card">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{post.author}</span>
                        <span>•</span>
                        <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</time>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
                        <Link href={`/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                  {currentPage > 1 && (
                    <Link
                      href={`/blog?page=${currentPage - 1}`}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition font-medium"
                    >
                      ← Previous
                    </Link>
                  )}
                  
                  {pageNumbers.map(page => (
                    <Link
                      key={page}
                      href={`/blog?page=${page}`}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        page === currentPage
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </Link>
                  ))}
                  
                  {currentPage < totalPages && (
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
                      className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition font-medium"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-blog">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with GEO Insights
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest GEO strategies, AI optimization techniques, and search engine updates delivered to your inbox.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}