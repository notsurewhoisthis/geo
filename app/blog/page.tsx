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

export default async function BlogPage() {
  const posts = await getBlogPosts()
  
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">
          GEO Insights & Resources
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Stay ahead with the latest trends, strategies, and best practices in Generative Engine Optimization
        </p>
      </header>
      
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 mb-4">No blog posts yet. Check back soon!</p>
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            ← Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`} className="group">
              <article className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500" />
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt || post.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.metrics.readingTime} min read</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
      
      <div className="mt-16 text-center">
        <div className="bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Our AI-powered content system discovers and publishes new GEO insights daily
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg hover:shadow-xl transition">
            Learn More About GEO
          </Link>
        </div>
      </div>
    </div>
  )
}