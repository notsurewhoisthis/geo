const fs = require('fs');
const path = require('path');

// Load the real platforms data
const platformsPath = path.join(__dirname, 'public', 'data', 'platforms.json');
const platforms = JSON.parse(fs.readFileSync(platformsPath, 'utf8'));

// Create a mapping of real platform names
const realPlatforms = platforms.map(p => ({
  slug: p.slug,
  name: p.name,
  company: p.company
}));

console.log('Real platforms available:', realPlatforms.map(p => p.name).join(', '));

// Generate realistic comparisons between actual platforms
const comparisons = [];
const usedPairs = new Set();

// Helper function to create comparison slug
function createComparisonSlug(platform1, platform2) {
  return `${platform1.slug}-vs-${platform2.slug}`;
}

// Generate comparisons for each platform with 3-4 other platforms
realPlatforms.forEach((platform1, i) => {
  let comparisonCount = 0;
  const maxComparisons = 4;
  
  realPlatforms.forEach((platform2, j) => {
    if (i === j || comparisonCount >= maxComparisons) return;
    
    const pairKey = [platform1.slug, platform2.slug].sort().join('-');
    if (usedPairs.has(pairKey)) return;
    
    // Skip comparisons between products from same company
    if (platform1.company === platform2.company && platform1.company !== 'OpenAI') return;
    
    usedPairs.add(pairKey);
    comparisonCount++;
    
    comparisons.push({
      slug: createComparisonSlug(platform1, platform2),
      title: `${platform1.name} vs ${platform2.name} Optimization Guide`,
      platform1: platform1.name,
      platform2: platform2.name,
      description: `Compare GEO optimization strategies for ${platform1.name} and ${platform2.name}. Learn how to maximize visibility across both AI platforms with detailed comparison of content preferences, optimization weights, and implementation strategies.`,
      category: determineCategory(platform1, platform2),
      difficulty: determineDifficulty(platform1, platform2),
      impact: 'High'
    });
  });
});

function determineCategory(p1, p2) {
  if ((p1.company === 'OpenAI' || p1.company === 'Anthropic') && 
      (p2.company === 'OpenAI' || p2.company === 'Anthropic')) {
    return 'Leading AI Models';
  }
  if (p1.slug.includes('midjourney') || p1.slug.includes('dall-e') ||
      p2.slug.includes('midjourney') || p2.slug.includes('dall-e')) {
    return 'Image Generation';
  }
  if (p1.slug.includes('jasper') || p1.slug.includes('copy-ai') ||
      p2.slug.includes('jasper') || p2.slug.includes('copy-ai')) {
    return 'Content Writing';
  }
  return 'AI Platform Comparison';
}

function determineDifficulty(p1, p2) {
  const advancedPlatforms = ['claude', 'chatgpt', 'perplexity', 'gemini'];
  const isP1Advanced = advancedPlatforms.some(ap => p1.slug.includes(ap));
  const isP2Advanced = advancedPlatforms.some(ap => p2.slug.includes(ap));
  
  if (isP1Advanced && isP2Advanced) return 'Advanced';
  if (isP1Advanced || isP2Advanced) return 'Intermediate';
  return 'Beginner';
}

// Sort comparisons alphabetically
comparisons.sort((a, b) => a.slug.localeCompare(b.slug));

// Write comparisons to file
const comparisonsPath = path.join(__dirname, 'public', 'data', 'comparisons.json');
fs.writeFileSync(comparisonsPath, JSON.stringify(comparisons, null, 2));

console.log(`\nGenerated ${comparisons.length} platform comparisons`);
console.log('Comparisons saved to:', comparisonsPath);

// Update the platform-comparisons.ts file to use real platforms
const tsContent = `// Auto-generated platform comparisons based on real platforms
export const platformComparisons = ${JSON.stringify(comparisons, null, 2)};

export const platforms = ${JSON.stringify(realPlatforms.map(p => ({
  id: p.slug,
  name: p.name,
  vendor: p.company,
  type: 'AI Platform',
  strengths: ['optimization', 'content generation', 'analysis'],
  releaseYear: 2024
})), null, 2)};

export function getComparisonBySlug(slug: string) {
  return platformComparisons.find(comp => comp.slug === slug);
}

export function getAllComparisons() {
  return platformComparisons;
}

export function getPlatformComparisons(platformId: string) {
  return platformComparisons.filter(comp => 
    comp.slug.includes(platformId)
  );
}
`;

const tsPath = path.join(__dirname, 'app', 'lib', 'platform-comparisons.ts');
fs.writeFileSync(tsPath, tsContent);

console.log('Updated platform-comparisons.ts with real platform data');