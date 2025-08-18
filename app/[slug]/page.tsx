import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt: string
  content: string
  publishedAt: string
  updatedAt: string
  author: {
    name: string
    bio: string
  }
  tags: string[]
  keywords: string[]
  metrics: {
    readingTime: number
    wordCount: number
  }
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const blogDataPath = path.join(process.cwd(), 'public', 'blog-data', `${slug}.json`)
    
    if (!fs.existsSync(blogDataPath)) {
      return null
    }
    
    const content = fs.readFileSync(blogDataPath, 'utf8')
    const post = JSON.parse(content) as BlogPost
    
    return post
  } catch (error) {
    console.error('Error loading blog post:', error)
    return null
  }
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDataPath = path.join(process.cwd(), 'public', 'blog-data')
    
    if (!fs.existsSync(blogDataPath)) {
      return []
    }
    
    const files = fs.readdirSync(blogDataPath).filter(file => file.endsWith('.json'))
    
    const posts = files.map(file => {
      const content = fs.readFileSync(path.join(blogDataPath, file), 'utf8')
      return JSON.parse(content) as BlogPost
    })
    
    return posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - GEO',
      description: 'The requested blog post could not be found.',
    }
  }
  
  return {
    title: `${post.title} | GEO`,
    description: post.description,
    keywords: post.keywords.join(', '),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://generative-engine.org/${post.slug}`,
      siteName: 'GEO Platform',
      images: [
        {
          url: `https://generative-engine.org/api/og?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`https://generative-engine.org/api/og?title=${encodeURIComponent(post.title)}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    notFound()
  }
  
  const allPosts = await getAllBlogPosts()
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3)
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-blue-600 transition">
                Blog
              </Link>
            </li>
            <li>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium">
                {post.title}
              </span>
            </li>
          </ol>
        </div>
      </nav>
      
      {/* Article Header */}
      <header className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <span className="font-medium">{post.author.name}</span>
            </div>
            
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </time>
            
            <span>{post.metrics.readingTime} min read</span>
            <span>{post.metrics.wordCount.toLocaleString()} words</span>
          </div>
        </div>
      </header>
      
      {/* Article Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6">
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4"></div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt || relatedPost.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={relatedPost.publishedAt}>
                        {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </time>
                      <span>{relatedPost.metrics.readingTime} min read</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            image: `https://generative-engine.org/api/og?title=${encodeURIComponent(post.title)}`,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: {
              '@type': 'Person',
              name: post.author.name,
              description: post.author.bio,
            },
            publisher: {
              '@type': 'Organization',
              name: 'GEO Platform',
              logo: {
                '@type': 'ImageObject',
                url: 'https://generative-engine.org/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://generative-engine.org/${post.slug}`,
            },
            keywords: post.keywords,
            wordCount: post.metrics.wordCount,
            timeRequired: `PT${post.metrics.readingTime}M`,
          }),
        }}
      />
    </div>
  )
}