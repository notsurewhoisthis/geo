# Code Style and Conventions - GEO Platform

## TypeScript/React Conventions
- **File Extensions**: `.tsx` for React components, `.ts` for utilities
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Exports**: Default exports for pages and components
- **Interface Naming**: Descriptive names (e.g., `BlogPost`, `Metadata`)

## Next.js Patterns
- **App Router**: Use `/app` directory structure
- **Page Components**: Server components by default
- **Metadata**: Use Next.js metadata API for SEO
- **Dynamic Routes**: `[slug]` directory pattern for dynamic pages
- **API Routes**: In `/app/api/` with `route.ts` files

## Styling Guidelines
- **Framework**: Tailwind CSS classes only
- **Theme**: Dark theme with `bg-gray-900` base
- **Colors**: Blue-purple gradients (`from-blue-400 to-blue-600`)
- **Typography**: Inter font family
- **Responsive**: Mobile-first approach with responsive prefixes
- **Components**: Consistent component classes like `article-card`, `badge-blue`

## File Structure Patterns
```
/app/
  layout.tsx         # Root layout with metadata
  page.tsx          # Homepage
  [slug]/
    page.tsx        # Dynamic blog post pages
  blog/
    page.tsx        # Blog listing
  api/
    route.ts        # API endpoints
  components/       # Shared components
/public/
  blog-data/        # JSON data files
  robots.txt        # SEO configuration
```

## Content Data Schema
```typescript
interface BlogPost {
  slug: string
  title: string (50-60 chars for SEO)
  description: string (150-160 chars for meta)
  excerpt: string
  content: string (HTML format)
  publishedAt: string (ISO date)
  updatedAt: string (ISO date)
  author: { name: string, bio: string }
  tags: string[]
  keywords: string[]
  metrics: { readingTime: number, wordCount: number }
}
```

## SEO Requirements
- All pages must have proper metadata
- Open Graph and Twitter Card tags required
- Schema.org structured data for articles
- Dynamic sitemap generation
- Internal linking between related posts
- Clean URL slugs (lowercase, hyphenated)