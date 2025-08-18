# GEO Platform - Generative Engine Optimization

## Project Purpose
An automated SEO content generation platform that discovers trending topics in Generative Engine Optimization, researches them deeply, generates high-quality content, and publishes it automatically to a Next.js website.

## Tech Stack
- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with dark theme (bg-gray-900, purple-blue gradients)  
- **Font**: Inter font family
- **Deployment**: Heroku (standalone build)
- **Domain**: generative-engine.org (to be configured via Cloudflare)
- **Repository**: GitHub at https://github.com/notsurewhoisthis/geo
- **Automation**: n8n workflows for content generation
- **APIs**: Perplexity for research, OpenAI for content generation

## Current Deployment Status
- **Live URL**: https://geo-engine-optimization-3b7f09edc005.herokuapp.com/
- **GitHub**: Connected and ready for automated commits
- **Heroku**: Deployed with automatic build from GitHub pushes
- **Domain**: generative-engine.org needs Cloudflare DNS configuration

## Architecture
- App router structure (`/app`)
- Dynamic sitemap generation (`/app/sitemap.xml/route.ts`)
- Blog data stored as JSON files (`/public/blog-data/`)
- Dynamic blog listing page (`/app/blog/page.tsx`)
- Component structure with Header/Footer (`/app/components/`)
- API routes for additional functionality (`/app/api/`)