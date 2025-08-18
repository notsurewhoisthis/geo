import Link from 'next/link'
import fs from 'fs'
import path from 'path'

interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt: string
  publishedAt: string
  author: {
    name: string
  }
  tags: string[]
  metrics: {
    readingTime: number
    wordCount: number
  }
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDataPath = path.join(process.cwd(), 'public', 'blog-data')
  
  try {
    if (!fs.existsSync(blogDataPath)) {
      return []
    }
    
    const files = fs.readdirSync(blogDataPath).filter(file => file.endsWith('.json'))
    
    const posts = files.map(file => {
      const content = fs.readFileSync(path.join(blogDataPath, file), 'utf8')
      return JSON.parse(content) as BlogPost
    })
    
    // Sort by publish date, newest first
    return posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

// Enable ISR - revalidate every 60 seconds to pick up new blog posts
export const revalidate = 60

export default async function BlogPage() {
  const posts = await getBlogPosts()
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="container-blog">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Generative Engine Optimization Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay ahead with the latest trends, strategies, and best practices in Generative Engine Optimization
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container-blog">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <p className="text-gray-500 mb-4 text-lg">No articles published yet</p>
                <p className="text-gray-400 mb-8">Our AI-powered content system is preparing fresh insights. Check back soon!</p>
                <Link href="/" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  ← Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/${post.slug}`} className="group">
                    <article className="article-card h-full flex flex-col">
                      <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600"></div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          {post.tags[0] && (
                            <span className="badge badge-blue">{post.tags[0]}</span>
                          )}
                          <time className="text-sm text-gray-500">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </time>
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                          {post.excerpt || post.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">
                            {post.metrics.readingTime} min read
                          </span>
                          <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
              
              {/* Pagination Placeholder */}
              <div className="mt-12 flex justify-center">
                <nav className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                    1
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition font-medium">
                    2
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition font-medium">
                    3
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition font-medium">
                    Next →
                  </button>
                </nav>
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-blog">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our AI-powered content system discovers and publishes new Generative Engine Optimization insights daily. Stay informed with the latest strategies and techniques.
            </p>
            <div className="flex gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-3 rounded-lg border border-gray-300 flex-1 max-w-sm focus:outline-none focus:border-blue-500 transition"
              />
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}