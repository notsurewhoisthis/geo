import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  description?: string
  excerpt?: string
  tags?: string[]
  publishedAt: string
  metrics?: {
    readingTime: number
    wordCount: number
  }
}

interface RelatedArticlesProps {
  currentSlug: string
  currentTags?: string[]
  allPosts: BlogPost[]
  maxArticles?: number
}

export function RelatedArticles({ 
  currentSlug, 
  currentTags = [], 
  allPosts, 
  maxArticles = 3 
}: RelatedArticlesProps) {
  // Filter out current article and find related ones
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      // Calculate relevance score
      let score = 0
      
      // Check tag overlap
      if (post.tags && currentTags.length > 0) {
        const commonTags = post.tags.filter(tag => 
          currentTags.includes(tag)
        )
        score += commonTags.length * 2
      }
      
      // Check title similarity
      const currentWords = currentSlug.split('-')
      const postWords = post.slug.split('-')
      const commonWords = postWords.filter(word => 
        currentWords.includes(word) && word.length > 3
      )
      score += commonWords.length
      
      // Prefer recent posts
      const postDate = new Date(post.publishedAt)
      const daysSincePublished = Math.floor(
        (Date.now() - postDate.getTime()) / (1000 * 60 * 60 * 24)
      )
      if (daysSincePublished < 30) score += 1
      
      return { ...post, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, maxArticles)
    .filter(post => post.score > 0) // Only show if there's some relevance
  
  if (relatedPosts.length === 0) {
    // Fallback to most recent posts if no related found
    const recentPosts = allPosts
      .filter(post => post.slug !== currentSlug)
      .sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
      .slice(0, maxArticles)
    
    if (recentPosts.length > 0) {
      return (
        <section 
          className="related-articles bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 mt-12"
          aria-labelledby="recent-articles-heading"
        >
          <h2 
            id="recent-articles-heading"
            className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
          >
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Recent Articles
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )
    }
    
    return null
  }
  
  return (
    <section 
      className="related-articles bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mt-12"
      aria-labelledby="related-articles-heading"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <h2 
        id="related-articles-heading"
        className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
      >
        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Related Articles
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post, index) => (
          <div 
            key={post.slug}
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/Article"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <ArticleCard post={post} />
          </div>
        ))}
      </div>
    </section>
  )
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link 
      href={`/${post.slug}`}
      className="block bg-white rounded-lg border border-gray-200 p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
    >
      <article>
        <h3 
          className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2"
          itemProp="headline"
        >
          {post.title}
        </h3>
        <p 
          className="text-sm text-gray-600 mb-3 line-clamp-3"
          itemProp="description"
        >
          {post.excerpt || post.description || ''}
        </p>
        <div className="flex items-center text-xs text-gray-500">
          <time 
            dateTime={post.publishedAt}
            itemProp="datePublished"
          >
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
          {post.tags && post.tags.length > 0 && (
            <>
              <span className="mx-2">•</span>
              <span className="text-blue-600">{post.tags[0]}</span>
            </>
          )}
        </div>
      </article>
    </Link>
  )
}