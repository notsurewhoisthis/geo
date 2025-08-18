⚠️ CRITICAL WARNING: DO NOT MODIFY STYLES ⚠️
**NEVER TOUCH OR MODIFY**:
- `/app/globals.css` - The global styles are carefully crafted and balanced
- Any Tailwind classes in components unless explicitly asked
- CSS modules or style files without explicit permission
- Component layouts or visual hierarchy
- The website styling has been perfected - DO NOT CHANGE IT

## 🎯 Project Overview
**GEO (Generative Engine Optimization)** - A Next.js 15 blog platform with automated content publishing via n8n integration. Live at https://www.generative-engine.org

## 🚨 CRITICAL: Next.js Standalone Deployment on Heroku

### The Problem That Broke Production (Aug 18, 2025)
When deploying Next.js with `output: 'standalone'` mode to Heroku, the CSS completely broke. The website displayed with NO styling at all.

### Root Cause
Next.js standalone mode DOES NOT automatically copy static files (CSS, JS, fonts) to the standalone output directory. The `.next/standalone` folder only contains the server files, NOT the static assets.

### The Solution
Modified `package.json` build script to manually copy static files:
```json
"build": "next build && cp -r .next/static .next/standalone/.next/ && cp -r public .next/standalone/",
"start": "node .next/standalone/server.js"
```

### Key Learnings
1. **Standalone mode is incomplete**: It doesn't include static files by default
2. **Manual copying required**: Must copy `.next/static` and `public` folders to standalone output
3. **Start script must use standalone server**: Use `node .next/standalone/server.js` not `next start`
4. **Always verify CSS is served**: Check that CSS files return actual CSS content, not HTML 404 pages

### How to Verify CSS is Working
```bash
# Check if CSS file is being served correctly (should return CSS, not HTML)
curl -s https://www.generative-engine.org/_next/static/css/[hash].css | head -c 100
```

### Never Make These Mistakes Again
- ❌ Don't assume standalone mode copies everything
- ❌ Don't use `next start` with standalone builds
- ❌ Don't deploy without verifying static assets are included
- ✅ Always copy static files in build script
- ✅ Always test CSS loading in production after deployment

## 📝 Blog System Architecture & n8n Integration

### How Blog Posts Work
1. **n8n pushes blog posts** directly to Heroku as JSON files in `/public/blog-data/`
2. **Next.js reads these files** at build time and generates static pages
3. **ISR (Incremental Static Regeneration)** with 60-second revalidation allows new posts to appear

### Content Format Types
Blog posts can have two content formats:
- **Markdown content**: New posts from n8n (processed through markdown processor)
- **HTML content**: Legacy posts with direct HTML (bypasses markdown processing)

### Markdown Processing Pipeline
Located in `/app/lib/markdown.ts`:
1. **Removes duplicate H1**: Strips the first H1 heading to prevent title duplication
2. **Applies SEO optimizations**: 
   - Adds heading anchors with IDs
   - Improves typography (smart quotes, em dashes)
   - Adds proper spacing and formatting
3. **Extracts Table of Contents**: Generates TOC from headings (skipping first H1)

### Critical Fix (Aug 18, 2025)
**Problem**: Blog posts pushed by n8n weren't getting markdown formatting applied
**Solution**: Fixed markdown processor to:
- Remove duplicate H1 headings (`processedContent.replace(/^#\s+.*\n+/, '')`)
- Apply SEO-optimized HTML formatting to all markdown content
- Ensure TOC extraction skips the first H1

### Testing Blog Posts Locally
```bash
# Start dev server
npm run dev

# Test specific blog post
curl -s http://localhost:3000/[slug] | grep -c '<h1 class="text-4xl'  # Should be 1

# Check if markdown processing is working
curl -s http://localhost:3000/[slug] | grep -o '<h2[^>]*>.*</h2>' | head -3
```

### Deployment Checklist for Blog Changes
1. **Build locally first**: `npm run build`
2. **Test markdown processing**: Check H1 count and heading formatting
3. **Deploy to Heroku**: `git push heroku main`
4. **Verify in production**: Check live blog posts for proper formatting

## ✅ Fully Automated Blog Publishing Pipeline

### Complete Workflow (No Manual Steps!)
1. **n8n creates blog post** → Pushes JSON to GitHub `/public/blog-data/`
2. **GitHub webhook triggers** → Heroku auto-deployment (instant)
3. **Heroku builds & deploys** → Static generation with ISR
4. **Blog goes live** → Available within 2-3 minutes

### Deployment Configuration
- **Heroku App**: geo-engine-optimization
- **GitHub Repo**: notsurewhoisthis/GEO (main branch)
- **Auto-Deploy**: ✅ ENABLED via Heroku GitHub Integration
- **Pipeline**: geo-pipeline (production)
- **ISR Revalidation**: 60 seconds

### Manual Override (if ever needed)
```bash
git pull origin main && git push heroku main
```

### Monitoring & Verification
- **Activity**: https://dashboard.heroku.com/apps/geo-engine-optimization/activity
- **Deploy Settings**: https://dashboard.heroku.com/apps/geo-engine-optimization/deploy/github
- **Live Site**: https://www.generative-engine.org

## 📚 Quick Reference

### Key Commands
```bash
# Development
npm run dev                  # Start dev server on port 3000
npm run build               # Build for production (includes static copy)
npm start                   # Start production server

# Deployment (manual override if needed)
git pull origin main && git push heroku main

# Heroku Management
heroku logs --tail -a geo-engine-optimization
heroku releases -a geo-engine-optimization
heroku open -a geo-engine-optimization
```

### Important Files
- `/app/[slug]/page.tsx` - Blog post renderer
- `/app/lib/markdown.ts` - Markdown processor with SEO
- `/public/blog-data/*.json` - Blog post data files
- `/app/globals.css` - DO NOT MODIFY
- `package.json` - Contains critical build script for static files
- `next.config.mjs` - Standalone output configuration

### Project Links
- **Live Site**: https://www.generative-engine.org
- **GitHub**: https://github.com/notsurewhoisthis/GEO
- **Heroku Dashboard**: https://dashboard.heroku.com/apps/geo-engine-optimization
- **Handoff Doc**: `/docs/ai-context/HANDOFF.md`

## 🚀 SEO/GEO Implementation (December 2024)

### Overview
Comprehensive SEO and Generative Engine Optimization (GEO) implementation targeting both traditional search engines and AI platforms (ChatGPT, Claude, Perplexity). Goal: 40% AI visibility boost, 50% organic traffic increase.

### Key SEO/GEO Systems Implemented

#### 1. Dynamic Content Systems (Auto-updates for new posts!)
- **RSS Feed** (`/app/feed.xml/route.ts`): Full-content RSS with CDATA sections for AI consumption
- **News Sitemap** (`/app/news-sitemap.xml/route.ts`): Auto-includes posts from last 48 hours
- **Main Sitemap** (`/app/sitemap.xml/route.ts`): Updated with actual lastmod dates and images
- **All systems automatically include new blog posts** - no manual updates needed!

#### 2. AI Crawler Optimization
- **robots.txt**: Explicit permissions for 15+ AI crawlers (GPTBot, Claude-Web, PerplexityBot, etc.)
- **RSS alternate links**: Added to layout metadata for content discovery
- **News sitemap**: Special handling for fresh content indexing

#### 3. Schema Markup (Triple-Layer Implementation)
- **Organization Schema**: Brand authority signals in layout.tsx
- **WebSite Schema**: SearchAction and potentialAction for AI understanding
- **Article Schema**: Enhanced blog posts with author, dates, images
- **BreadcrumbList**: Navigation context for every blog post
- **FAQPage Schema**: Extracted from blog content Q&A sections
- **AboutPage Schema**: Team expertise and authority signals
- **DefinedTermSet**: Glossary page with 30+ GEO terms

#### 4. Content Enhancements
- **Homepage** (`/app/page.tsx`): Complete rewrite with GEO statistics, comparison tables, FAQ
- **About Page** (`/app/about/page.tsx`): Team expertise, platform stats, mission
- **Glossary Page** (`/app/glossary/page.tsx`): 30+ GEO terms categorized and defined

#### 5. Dynamic Blog Post Optimization
- **Auto-schema generation**: Every new blog post gets Article + BreadcrumbList schemas
- **Meta descriptions**: AI-optimized summaries for search and AI platforms
- **Open Graph/Twitter Cards**: Social sharing optimization
- **Heading structure**: Proper H1-H6 hierarchy maintained

### Testing SEO Implementation
```bash
# Verify RSS feed
curl -s http://localhost:3000/feed.xml | grep -c '<item>'

# Check news sitemap (should only show recent posts)
curl -s http://localhost:3000/news-sitemap.xml | grep '<news:publication_date>'

# Verify schema markup
curl -s http://localhost:3000 | grep -o '@type.*Organization'
curl -s http://localhost:3000/[slug] | grep -o '@type.*Article'

# Test AI crawler permissions
curl -s http://localhost:3000/robots.txt | grep 'GPTBot'
```

### SEO Performance Metrics to Monitor
- **AI Platform Visibility**: Track citations in ChatGPT, Claude, Perplexity
- **Organic Traffic**: Monitor via Google Analytics
- **Core Web Vitals**: Check via PageSpeed Insights
- **Schema Validation**: Test with Google's Rich Results Test
- **Crawler Activity**: Monitor server logs for AI bot visits

### Ongoing SEO Tasks
- Phase 2.2: Add Key Takeaways and FAQ sections to blog posts
- Phase 2.3: Create pillar pages (Complete GEO Guide, Tools, Resources)
- Phase 3: AI-specific content optimization
- Phase 4: Internal linking improvements
- Phase 5: Content calendar and keyword strategy

### Critical SEO Files
- `/public/robots.txt` - AI crawler permissions
- `/app/feed.xml/route.ts` - RSS feed generator
- `/app/news-sitemap.xml/route.ts` - News sitemap
- `/app/sitemap.xml/route.ts` - Main sitemap
- `/app/layout.tsx` - Global schemas and metadata
- `/app/[slug]/page.tsx` - Blog post schemas
- `/app/page.tsx` - Homepage GEO content
- `/app/about/page.tsx` - Authority signals
- `/app/glossary/page.tsx` - GEO terminology