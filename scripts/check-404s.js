const fs = require('fs');
const path = require('path');

// Function to check if a route exists in the app directory
function checkRouteExists(route) {
  // Remove domain and leading slash
  const cleanRoute = route.replace('https://www.generative-engine.org/', '').replace(/\/$/, '');
  
  if (!cleanRoute) return { exists: true, type: 'homepage' }; // Homepage always exists
  
  // Check for static pages
  const staticPages = [
    'about', 'blog', 'glossary', 'community', 'contact', 'consultation',
    'getting-started', 'resources', 'tutorials', 'use-cases', 'guide',
    'authors', 'benchmarks', 'tech-view', 'coming-soon'
  ];
  
  if (staticPages.includes(cleanRoute)) {
    const pagePath = path.join('app', cleanRoute, 'page.tsx');
    return { exists: fs.existsSync(pagePath), type: 'static', path: pagePath };
  }
  
  // Check for tool pages
  if (cleanRoute.startsWith('tools/')) {
    const toolName = cleanRoute.replace('tools/', '');
    const pagePath = path.join('app/tools', toolName, 'page.tsx');
    return { exists: fs.existsSync(pagePath), type: 'tool', path: pagePath };
  }
  
  // Check for entity pages
  if (cleanRoute.startsWith('entities/')) {
    const entityName = cleanRoute.replace('entities/', '');
    const pagePath = path.join('app/entities', entityName, 'page.tsx');
    return { exists: fs.existsSync(pagePath), type: 'entity', path: pagePath };
  }
  
  // Check for case studies
  if (cleanRoute.startsWith('case-studies/')) {
    const caseName = cleanRoute.replace('case-studies/', '');
    const pagePath = path.join('app/case-studies', caseName, 'page.tsx');
    const dirPath = path.join('app/case-studies');
    return { 
      exists: fs.existsSync(pagePath) || fs.existsSync(path.join(dirPath, '[slug]', 'page.tsx')), 
      type: 'case-study', 
      path: pagePath 
    };
  }
  
  // Check for comparison pages
  if (cleanRoute.startsWith('compare/')) {
    // These are dynamically generated
    const comparePath = path.join('app/compare/[comparison]/page.tsx');
    return { exists: fs.existsSync(comparePath), type: 'comparison-dynamic', path: comparePath };
  }
  
  // Check for industry pages
  if (cleanRoute.startsWith('industries/')) {
    const industryPath = path.join('app/industries/[industry]/page.tsx');
    return { exists: fs.existsSync(industryPath), type: 'industry-dynamic', path: industryPath };
  }
  
  // Check for platform pages
  if (cleanRoute.startsWith('platforms/')) {
    const platformPath = path.join('app/platforms/[platform]/page.tsx');
    return { exists: fs.existsSync(platformPath), type: 'platform-dynamic', path: platformPath };
  }
  
  // Check for blog posts (dynamic)
  // Blog posts are handled by [slug] route
  const blogPath = path.join('app/[slug]/page.tsx');
  const isBlogPost = !cleanRoute.includes('/') && fs.existsSync(blogPath);
  if (isBlogPost) {
    // Check if blog data file exists
    const blogDataPath = path.join('public/blog-data', `${cleanRoute}.json`);
    return { 
      exists: fs.existsSync(blogDataPath), 
      type: 'blog-post', 
      path: blogDataPath 
    };
  }
  
  return { exists: false, type: 'unknown', route: cleanRoute };
}

// Simulated sitemap URLs (you would normally parse the actual sitemap.xml)
const sitemapUrls = [
  'https://www.generative-engine.org/',
  'https://www.generative-engine.org/about',
  'https://www.generative-engine.org/blog',
  'https://www.generative-engine.org/glossary',
  'https://www.generative-engine.org/community',
  'https://www.generative-engine.org/tools/visibility-tracker',
  'https://www.generative-engine.org/tools/geo-audit',
  'https://www.generative-engine.org/tools/content-optimizer',
  'https://www.generative-engine.org/tools/keyword-analyzer',
  'https://www.generative-engine.org/tools/competitor-analysis',
  'https://www.generative-engine.org/tools/platform-compare',
  'https://www.generative-engine.org/tools/platform-finder',
  'https://www.generative-engine.org/tools/platform-comparison',
  'https://www.generative-engine.org/tools/chatgpt-optimizer',
  'https://www.generative-engine.org/entities/llm-optimization',
  'https://www.generative-engine.org/entities/claude-optimization',
  'https://www.generative-engine.org/entities/perplexity-optimization',
  'https://www.generative-engine.org/entities/citation-optimization',
  'https://www.generative-engine.org/case-studies/example-case-1',
  'https://www.generative-engine.org/case-studies/example-case-2',
];

console.log('🔍 Checking for 404 pages...\n');

const missing = [];
const existing = [];

sitemapUrls.forEach(url => {
  const result = checkRouteExists(url);
  if (result.exists) {
    existing.push({ url, ...result });
  } else {
    missing.push({ url, ...result });
    console.log(`❌ MISSING: ${url}`);
    if (result.path) console.log(`   Expected at: ${result.path}`);
  }
});

// Check for case-studies directory
const caseStudiesDir = 'app/case-studies';
if (!fs.existsSync(caseStudiesDir)) {
  console.log('\n📁 case-studies directory does not exist!');
} else {
  const hasDynamicRoute = fs.existsSync(path.join(caseStudiesDir, '[slug]', 'page.tsx'));
  const hasStaticPages = fs.readdirSync(caseStudiesDir).some(dir => 
    dir !== '[slug]' && fs.existsSync(path.join(caseStudiesDir, dir, 'page.tsx'))
  );
  console.log(`\n📁 case-studies: dynamic route: ${hasDynamicRoute}, static pages: ${hasStaticPages}`);
}

// Check entities directory structure
const entitiesDir = 'app/entities';
if (fs.existsSync(entitiesDir)) {
  const entities = fs.readdirSync(entitiesDir).filter(f => 
    fs.statSync(path.join(entitiesDir, f)).isDirectory()
  );
  console.log('\n📁 Existing entity pages:', entities);
}

console.log('\n📊 Summary:');
console.log(`✅ Existing pages: ${existing.length}`);
console.log(`❌ Missing pages: ${missing.length}`);

if (missing.length > 0) {
  console.log('\n🚨 Missing page types:');
  const typeCount = {};
  missing.forEach(m => {
    typeCount[m.type] = (typeCount[m.type] || 0) + 1;
  });
  Object.entries(typeCount).forEach(([type, count]) => {
    console.log(`   ${type}: ${count}`);
  });
}