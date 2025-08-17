

 🎯 Master Prompt: Automated SEO Content Pipeline

  Project Context

  You're building an n8n automation workflow that creates a self-sustaining SEO content machine.
  This system will automatically discover trending topics, research them deeply, generate
  SEO-optimized pages, and deploy them to a Next.js website hosted on Heroku via GitHub.

your project folder is here: 
/Users/heni/GEO
github url https://github.com/notsurewhoisthis/geo - you can login via  github cli / mcp to make sure it’s set up as intented. 
web page hosted on heroku: https://geo-engine-optimization-3b7f09edc005.herokuapp.com/ use heroku login command to login and make the necessary changes when needed. 
Domain is generative-engine.org use cloudflare mcp to configure the domain so all new pages are under this domain. 


  Core Requirements

  📊 Workflow Architecture

  Create an n8n workflow with the following sequential nodes:

  1. Trend Discovery Node (Perplexity API)
    - Query: "What are the top 5 trending topics in Generative engine optimisation today/this week that people are searching for
   but have limited quality content available? Make sure you check linkedin and reddit for this on top of other sources.”
    - Extract: topic name, search volume indicators, competition level
    - Output format: JSON with slug, title, keywords[], searchIntent
  2. Deep Research Node (Perplexity API - Enhanced)
    - For each trending topic, execute 3 research queries:
        - "Comprehensive guide about [TOPIC]: facts, statistics, expert opinions"
      - "Common questions and pain points about [TOPIC]"
      - "Latest developments and future predictions for [TOPIC]"
    - Aggregate research into structured data
  3. Content Generation Node (OpenAI/Claude API)
    - Generate full page content (2000-3000 words)
    - Include: H1, meta description, multiple H2/H3 sections, FAQ section
    - Output as structured JSON matching your existing blog post schema
  4. Page Creation Node (Code Node)
    - Generate Next.js page file at app/[topic-slug]/page.tsx
    - Create JSON data file at public/blog-data/[topic-slug].json
    - Follow exact structure from lookatmyprofile-web project
  5. SEO Enhancement Node
    - Update app/sitemap.xml/route.ts with new page
    - Inject internal links into 3-5 existing related pages
    - Generate Open Graph and Twitter Card metadata
  6. Git Operations Node (GitHub API)
    - Commit all changes with message: "Add trending topic: [TOPIC]"
    - Push to main branch
    - Trigger Heroku deployment

  🎨 Technical Specifications

  Page Template Structure (Must Match Existing):
  // Each generated page must include:
  - Metadata with Open Graph tags
  - Breadcrumb schema
  - FAQ schema
  - Related posts component
  - Consistent dark theme (bg-gray-900, purple-pink gradients)
  - Mobile-responsive design
  - Reading time and word count

  Data Schema (public/blog-data/[slug].json):
  {
    "slug": "topic-slug",
    "title": "SEO Optimized Title (50-60 chars)",
    "description": "Meta description (150-160 chars)",
    "excerpt": "Compelling excerpt for previews",
    "content": "Full HTML content with proper heading structure",
    "publishedAt": "ISO date",
    "updatedAt": "ISO date",
    "author": {
      "name": “GEO Content Team",
      "bio": "Automated content generation system"
    },
    "tags": ["tag1", "tag2", "tag3"],
    "keywords": ["keyword1", "keyword2", "..."],
    "metrics": {
      "readingTime": 8,
      "wordCount": 2500
    }
  }

  🔍 SEO Requirements

  On-Page SEO:
  - Title tag: Include primary keyword, under 60 characters
  - Meta description: Include keyword, call-to-action, under 160 characters
  - URL structure: /topic-name (clean, keyword-rich slugs)
  - Heading hierarchy: One H1, multiple H2s, H3s under H2s
  - Internal linking: Link to 5-10 related pages
  - Image alt text: Descriptive, keyword-inclusive
  - Schema markup: Article, FAQ, BreadcrumbList

  Technical SEO:
  - Auto-update sitemap.xml with priority and changefreq
  - Update robots.txt if needed
  - Ensure mobile-first responsive design
  - Optimize Core Web Vitals (lazy loading, minimal JS)
  - Generate both HTML and JSON-LD structured data

  🔄 Automation Rules

  Scheduling:
  - Run daily at 3 AM UTC
  - Limit: Maximum 2 new pages per day
  - Duplicate check: Skip if topic exists in last 30 days

  Quality Gates:
  - Minimum word count: 1500 words
  - Required sections: Introduction, 3+ main sections, FAQ, Conclusion
  - Internal links: Minimum 5, maximum 15
  - External links: 2-3 authoritative sources

  Error Handling:
  - If Perplexity fails: Retry 3 times with exponential backoff
  - If content generation fails: Log error, skip topic
  - If GitHub push fails: Queue for manual review

  💻 Implementation Details

  Environment Variables Required:
  PERPLEXITY_API_KEY=
  OPENAI_API_KEY=
  GITHUB_TOKEN=
  GITHUB_REPO=username/repo-name
  HEROKU_APP_NAME=
  DOMAIN_NAME=yourdomain.com

  File Operations:
  1. Read existing pages from GitHub
  2. Check for topic duplicates
  3. Generate new files
  4. Update linking in existing files
  5. Commit all changes atomically

  Consistency Requirements:
  - Use exact same Tailwind classes as existing pages
  - Maintain dark theme with gradient accents
  - Follow existing component structure
  - Use same font families (Geist Sans/Mono)
  - Keep same header/footer components

  📝 Example Outputs

  Generated Page Path: app/ai-instagram-trends-2025/page.tsx
  Generated Data Path: public/blog-data/ai-instagram-trends-2025.json
  URL: https://yourdomain.com/ai-instagram-trends-2025

  🚀 Deployment Flow

  1. n8n workflow triggers on schedule
  2. Discovers trending topic via Perplexity
  3. Researches and generates content
  4. Creates all necessary files
  5. Updates sitemap and internal links
  6. Commits to GitHub
  7. GitHub webhook triggers Heroku build
  8. New page is live within 5 minutes

  ⚠️ Critical Constraints

  - MUST maintain existing design system exactly
  - MUST pass Next.js build without errors
  - MUST include all SEO meta tags
  - MUST update sitemap.xml dynamically
  - MUST create bidirectional internal links
  - MUST follow existing URL structure
  - MUST preserve mobile responsiveness
  - NEVER break existing pages
  - NEVER duplicate existing topics
  

  🎯 Success Criteria

  - Pages rank on Google within 48 hours
  - Each page loads in under 2 seconds
  - All pages score 90+ on PageSpeed Insights
  - Internal linking increases session duration
  - No build errors or deployment failures
  - Consistent look and feel across all pages

  ---
  Build Instructions

  1. Create n8n workflow with the nodes described above
  2. Test with a single topic first
  3. Verify GitHub integration works
  4. Confirm Heroku auto-deploys
  5. Monitor for 24 hours before full automation
  6. Set up error notifications via email/Slack

  Remember: Every generated page should be indistinguishable from manually created pages in terms of
   quality, SEO optimization, and design consistency.