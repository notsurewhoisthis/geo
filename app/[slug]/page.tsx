import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { parseMarkdown, extractTableOfContents, extractKeyTakeaways, extractFAQPairs } from '@/app/lib/markdown'
import ShareButtons from '@/app/components/ShareButtons'
import { BlogBreadcrumbs } from '@/app/components/Breadcrumbs'
import { RelatedArticles } from '@/app/components/RelatedArticles'

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

// Enable ISR (Incremental Static Regeneration) - revalidate every 60 seconds
export const revalidate = 60

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
  
  // Parse markdown content and extract TOC
  const htmlContent = parseMarkdown(post.content, `/${post.slug}`)
  const tableOfContents = extractTableOfContents(post.content)
  const keyTakeaways = extractKeyTakeaways(post.content)
  const faqPairs = extractFAQPairs(post.content)
  
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <BlogBreadcrumbs title={post.title} />
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
      
      {/* Article Content with Table of Contents */}
      <div className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Table of Contents - Desktop */}
            {tableOfContents.length > 0 && (
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <nav className="bg-white rounded-lg border border-gray-200 p-6">
                    <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Table of Contents
                    </h2>
                    <ul className="space-y-2">
                      {tableOfContents.map((heading) => (
                        <li key={heading.id} className={`${heading.level === 1 ? '' : heading.level === 2 ? 'ml-4' : 'ml-8'}`}>
                          <a 
                            href={`#${heading.id}`}
                            className={`
                              block text-sm hover:text-blue-600 transition-colors
                              ${heading.level === 1 ? 'font-semibold text-gray-900' : 
                                heading.level === 2 ? 'text-gray-700' : 'text-gray-600'}
                            `}
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  
                  {/* Reading Progress */}
                  <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Reading time</span>
                      <span className="font-medium">{post.metrics.readingTime} min</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Word count</span>
                      <span className="font-medium">{post.metrics.wordCount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </aside>
            )}
            
            {/* Main Article Content */}
            <article className={`${tableOfContents.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12 max-w-4xl mx-auto'}`}>
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:mb-8
                  prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12
                  prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                  prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-700 prose-a:underline prose-a:decoration-blue-200 hover:prose-a:decoration-blue-600
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2
                  prose-li:text-gray-700 prose-li:leading-relaxed
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700
                  prose-code:bg-gray-100 prose-code:text-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
                  prose-img:rounded-lg prose-img:shadow-lg
                  prose-hr:border-gray-200 prose-hr:my-12"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
              
              {/* Author Bio */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        About {post.author.name}
                      </h3>
                      <p className="text-gray-600">
                        {post.author.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Share Section */}
              <ShareButtons title={post.title} slug={post.slug} />
            </article>
          </div>
        </div>
      </div>
      
      {/* Related Articles Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <RelatedArticles 
            currentSlug={post.slug}
            currentTags={post.tags}
            allPosts={allPosts}
            maxArticles={3}
          />
        </div>
      </div>
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              '@id': `https://generative-engine.org/${post.slug}#article`,
              headline: post.title,
              description: post.description,
              image: `https://generative-engine.org/api/og?title=${encodeURIComponent(post.title)}`,
              datePublished: post.publishedAt,
              dateModified: post.updatedAt || post.publishedAt,
              author: {
                '@type': 'Person',
                name: post.author.name,
                description: post.author.bio,
                url: 'https://generative-engine.org/about#team',
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
              keywords: post.keywords.join(', '),
              articleSection: 'Generative Engine Optimization',
              wordCount: post.metrics.wordCount,
              timeRequired: `PT${post.metrics.readingTime}M`,
              inLanguage: 'en-US',
              isAccessibleForFree: true,
              hasPart: tableOfContents.map((heading, index) => ({
                '@type': 'WebPageElement',
                '@id': `#${heading.id}`,
                name: heading.text,
                position: index + 1,
              })),
              speakable: keyTakeaways.length > 0 ? {
                '@type': 'SpeakableSpecification',
                cssSelector: ['.key-takeaways'],
                xpath: ['//div[@class="key-takeaways"]']
              } : undefined,
              backstory: keyTakeaways.length > 0 ? keyTakeaways.join(' ') : undefined,
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://generative-engine.org',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://generative-engine.org/blog',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: post.title,
                  item: `https://generative-engine.org/${post.slug}`,
                },
              ],
            },
            // FAQ Schema - Use extracted Q&A if available, fallback to generated
            faqPairs.length > 0 ? {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqPairs.map(qa => ({
                '@type': 'Question',
                name: qa.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: qa.answer,
                },
              })),
            } : {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.tags.slice(0, 3).map((tag, index) => ({
                '@type': 'Question',
                name: `What is ${tag} in GEO?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `${tag} is a key concept in Generative Engine Optimization that helps improve visibility in AI-powered search results. It involves optimizing content specifically for how AI models understand and retrieve information.`,
                },
              })),
            },
          ]),
        }}
      />
    </div>
  )
}