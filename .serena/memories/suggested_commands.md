# Development Commands for GEO Platform

## Core Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting

## Git Commands
- `git status` - Check repository status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push origin main` - Push to GitHub (triggers Heroku deployment)
- `git push heroku main` - Direct push to Heroku

## Heroku Commands
- `heroku login` - Authenticate with Heroku
- `heroku logs --tail -a geo-engine-optimization` - View live logs
- `heroku config -a geo-engine-optimization` - View environment variables
- `heroku releases -a geo-engine-optimization` - View deployment history

## Testing Commands
- Manual testing: Visit https://geo-engine-optimization-3b7f09edc005.herokuapp.com/
- Test sitemap: Visit /sitemap.xml
- Test blog listing: Visit /blog
- Test API routes: Visit /api/geo/tips

## n8n Integration Commands (when ready)
- Access n8n at: https://henihazbay.app.n8n.cloud/
- Test webhook triggers manually
- Monitor workflow execution logs

## Content Generation Testing
- Check `/public/blog-data/` for new JSON files
- Verify sitemap includes new pages
- Test individual blog post pages
- Validate internal linking updates