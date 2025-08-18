#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Base data for expansion
const industryCategories = [
  'Technology', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Education',
  'Real Estate', 'Transportation', 'Energy', 'Hospitality', 'Media', 'Automotive',
  'Agriculture', 'Construction', 'Telecommunications', 'Aerospace', 'Pharmaceutical',
  'Food & Beverage', 'Entertainment', 'Insurance', 'Legal', 'Consulting',
  'Non-Profit', 'Government', 'Sports', 'Fashion', 'Beauty', 'Gaming'
];

const industryTypes = [
  'AI Software', 'Data Analytics', 'Cloud Computing', 'Cybersecurity', 'Fintech',
  'Edtech', 'Healthtech', 'E-commerce Platforms', 'SaaS Solutions', 'Mobile Apps',
  'IoT Systems', 'Blockchain', 'Machine Learning', 'Robotics', 'Virtual Reality',
  'Augmented Reality', 'Digital Marketing', 'Social Media', 'Content Management',
  'Customer Service', 'Supply Chain', 'Logistics', 'Project Management',
  'Human Resources', 'Accounting', 'Legal Tech', 'Real Estate Tech',
  'Travel Tech', 'Food Delivery', 'Ride Sharing', 'Streaming Services',
  'Gaming Platforms', 'Fitness Tech', 'Language Learning', 'Online Education'
];

const marketSizes = ['$1.2B', '$2.5B', '$3.8B', '$5.1B', '$7.3B', '$9.6B', '$12.4B', '$15.7B', '$20.3B', '$25.8B', '$32.1B', '$40.2B', '$50.5B', '$65.8B', '$85.2B', '$110.7B', '$142.3B', '$180.1B', '$230.5B', '$300.8B'];
const growthRates = ['8.5%', '12.3%', '15.7%', '18.2%', '22.6%', '27.1%', '31.8%', '35.4%', '42.7%', '48.9%'];
const aiAdoptionRates = ['45%', '52%', '61%', '68%', '74%', '79%', '83%', '87%', '91%', '95%'];

// AI Platforms data
const aiPlatformTypes = [
  'Conversational AI', 'Code Assistant', 'Writing Assistant', 'Design AI', 'Research AI',
  'Analytics AI', 'Creative AI', 'Business AI', 'Education AI', 'Healthcare AI',
  'Marketing AI', 'Sales AI', 'Customer Support AI', 'HR AI', 'Legal AI',
  'Financial AI', 'Developer AI', 'Content AI', 'SEO AI', 'Social Media AI'
];

const platformCategories = [
  'Language Models', 'Code Generation', 'Image Generation', 'Video Creation', 'Audio Processing',
  'Data Analysis', 'Business Intelligence', 'Customer Service', 'Content Creation', 'SEO Tools',
  'Marketing Automation', 'Design Tools', 'Writing Tools', 'Research Tools', 'Educational Tools'
];

// Comparison techniques
const traditionalTechniques = [
  'Keyword Research', 'Link Building', 'Content Marketing', 'Technical SEO', 'Local SEO',
  'Voice Search Optimization', 'Mobile SEO', 'E-commerce SEO', 'Video SEO', 'Image SEO',
  'Social Media SEO', 'International SEO', 'Enterprise SEO', 'Programmatic SEO',
  'Featured Snippets Optimization', 'Core Web Vitals', 'Page Speed Optimization',
  'Schema Markup', 'Internal Linking', 'Content Clusters', 'Topic Authority',
  'Brand SEO', 'Reputation Management', 'Conversion Rate Optimization'
];

// Helper functions
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSlug(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Generate massive industries dataset (500+ entries)
function generateIndustries() {
  const industries = [];
  let idCounter = 1;

  // Generate combinations of categories and types
  for (const category of industryCategories) {
    for (let i = 0; i < Math.min(20, industryTypes.length); i++) {
      const type = industryTypes[(i + industryCategories.indexOf(category) * 3) % industryTypes.length];
      const name = `${category} ${type}`;
      const slug = generateSlug(name);

      // Skip if already exists or name is too generic
      if (industries.some(ind => ind.slug === slug) || name.length > 50) continue;

      industries.push({
        slug,
        name,
        category,
        description: `Advanced ${name.toLowerCase()} solutions leveraging AI and machine learning to transform ${category.toLowerCase()} operations and drive digital innovation.`,
        marketSize: randomChoice(marketSizes),
        growth: randomChoice(growthRates),
        aiAdoption: randomChoice(aiAdoptionRates),
        searchVolume: randomNumber(1000, 50000),
        commercialIntent: randomChoice(['High', 'Medium-High', 'Medium']),
        challenges: [
          `Legacy system integration in ${category.toLowerCase()}`,
          `Scalability issues with traditional ${type.toLowerCase()}`,
          `Data privacy and security concerns`,
          `High implementation costs and ROI uncertainty`,
          `Skill gap in AI/ML technologies`
        ],
        geoOpportunities: [
          `Create authoritative content about ${name.toLowerCase()} best practices`,
          `Develop comprehensive ${category.toLowerCase()} case studies with measurable results`,
          `Build citation-rich resources on ${type.toLowerCase()} implementation`,
          `Establish thought leadership in ${category.toLowerCase()} AI trends`,
          `Generate FAQ content addressing common ${name.toLowerCase()} challenges`
        ],
        keyMetrics: {
          implementationTime: `${randomNumber(3, 12)} months`,
          roiImprovement: `${randomNumber(150, 500)}%`,
          costReduction: `${randomNumber(20, 60)}%`,
          efficiencyGain: `${randomNumber(25, 80)}%`,
          customerSatisfaction: `${randomNumber(85, 98)}%`
        },
        tools: [
          `${name} Analytics Platform`,
          `${category} AI Assistant`,
          `${type} Optimization Tool`,
          `${category} Performance Monitor`
        ],
        caseStudies: [
          {
            company: `Leading ${category} Company`,
            improvement: `+${randomNumber(150, 400)}% efficiency`,
            strategy: `Implemented comprehensive ${name.toLowerCase()} optimization with AI-powered analytics`
          },
          {
            company: `Fortune 500 ${category} Enterprise`,
            improvement: `${randomNumber(40, 80)}% cost reduction`,
            strategy: `Deployed advanced ${type.toLowerCase()} solutions with machine learning integration`
          }
        ]
      });

      if (industries.length >= 600) break;
    }
    if (industries.length >= 600) break;
  }

  return industries;
}

// Generate massive AI platforms dataset (100+ entries)
function generatePlatforms() {
  const platforms = [];
  const baseNames = [
    'GPT', 'Claude', 'Gemini', 'LaMDA', 'PaLM', 'Codex', 'Copilot', 'Bard', 'ChatGPT',
    'Assistant', 'Writer', 'Creator', 'Analyst', 'Designer', 'Optimizer', 'Generator',
    'Intelligence', 'Brain', 'Mind', 'Logic', 'Reason', 'Insight', 'Vision', 'Expert'
  ];

  const companies = [
    'OpenAI', 'Anthropic', 'Google', 'Microsoft', 'Meta', 'Amazon', 'IBM', 'Salesforce',
    'Adobe', 'Nvidia', 'DeepMind', 'Hugging Face', 'Cohere', 'AI21', 'Stability AI'
  ];

  let platformId = 1;
  for (const category of platformCategories) {
    for (let i = 0; i < 8; i++) {
      const baseName = randomChoice(baseNames);
      const company = randomChoice(companies);
      const name = `${company} ${baseName}`;
      const slug = generateSlug(name);

      if (platforms.some(p => p.slug === slug)) continue;

      platforms.push({
        slug,
        name,
        company,
        category,
        type: randomChoice(aiPlatformTypes),
        description: `Advanced ${category.toLowerCase()} platform leveraging cutting-edge AI technology for enhanced productivity and innovation.`,
        primaryUse: `${category.toLowerCase()} optimization and automation`,
        userBase: `${randomNumber(10, 500)}M`,
        industries: [
          randomChoice(['Healthcare', 'Finance', 'Technology', 'Education', 'Retail']),
          randomChoice(['Manufacturing', 'Media', 'Legal', 'Automotive', 'Real Estate'])
        ],
        geoOptimization: {
          currentScore: randomNumber(60, 95),
          potential: randomNumber(5, 25),
          visibility: randomChoice(['High', 'Medium-High', 'Medium']),
          citationRate: `${randomNumber(15, 45)}%`,
          citationWeight: randomNumber(75, 95),
          statisticsWeight: randomNumber(70, 95)
        },
        keyFeatures: [
          `Advanced ${category.toLowerCase()} capabilities`,
          `Enterprise-grade security and compliance`,
          `Seamless API integration`,
          `Real-time collaboration tools`,
          `Custom model fine-tuning`
        ],
        optimizationStrategies: [
          `Create comprehensive ${name} implementation guides`,
          `Develop case studies showcasing ${category.toLowerCase()} success stories`,
          `Build authoritative content on ${name} best practices`,
          `Establish citation-rich resources for ${category.toLowerCase()}`
        ],
        contentPreferences: [
          randomChoice(['Statistical', 'Conversational', 'Technical', 'Educational']),
          randomChoice(['Data-driven', 'Case-study based', 'Best-practice focused', 'Industry-specific'])
        ],
        metrics: {
          responseTime: `${randomNumber(100, 2000)}ms`,
          accuracy: `${randomNumber(85, 99)}%`,
          userSatisfaction: `${randomNumber(80, 95)}%`,
          adoption: randomChoice(aiAdoptionRates)
        }
      });

      if (platforms.length >= 120) break;
    }
    if (platforms.length >= 120) break;
  }

  return platforms;
}

// Generate massive comparisons dataset (50+ entries)
function generateComparisons() {
  const comparisons = [];
  const geoTechniques = [
    'Topic Authority Building', 'Citation & Reference Building', 'AI-Optimized Content',
    'Conversational Content Strategy', 'Statistical Content Enhancement', 'FAQ Optimization',
    'Schema Markup for AI', 'Entity Recognition Optimization', 'Semantic Content Structure',
    'AI Accessibility Optimization', 'Natural Language Processing', 'Machine Learning SEO'
  ];

  let compId = 1;
  for (const geoTech of geoTechniques) {
    for (let i = 0; i < Math.min(5, traditionalTechniques.length); i++) {
      const traditionalTech = traditionalTechniques[i];
      const title = `GEO vs ${traditionalTech}`;
      const slug = generateSlug(title);

      if (comparisons.some(c => c.slug === slug)) continue;

      comparisons.push({
        slug,
        title,
        subtitle: `${geoTech} vs ${traditionalTech} strategies comparison`,
        geoTechnique: geoTech,
        traditionalTechnique: traditionalTech,
        category: randomChoice(['Core Strategy', 'Content Strategy', 'Technical Strategy', 'Authority Building']),
        difficulty: randomChoice(['Beginner', 'Intermediate', 'Advanced']),
        impact: randomChoice(['High', 'Medium-High', 'Medium']),
        timeToResults: randomChoice(['2-4 weeks', '4-8 weeks', '6-12 weeks', '3-6 months']),
        comparison: {
          focus: {
            geo: `AI-powered ${geoTech.toLowerCase()} approach`,
            traditional: `Traditional ${traditionalTech.toLowerCase()} methodology`
          },
          primaryGoal: {
            geo: `Optimize for AI platform visibility and recommendations`,
            traditional: `Improve search engine rankings and organic traffic`
          }
        },
        advantages: {
          geo: [
            'Future-proof strategy for AI-first search',
            'Higher authority and trust signals',
            'Better content quality and depth',
            'Direct integration with AI training data'
          ],
          traditional: [
            'Established methodology and tools',
            'Immediate traffic generation',
            'Clear ROI measurement',
            'Extensive professional ecosystem'
          ]
        },
        futureOutlook: `${geoTech} expected to dominate as AI becomes primary search method, while ${traditionalTech} remains supplementary but declining.`
      });

      if (comparisons.length >= 60) break;
    }
    if (comparisons.length >= 60) break;
  }

  return comparisons;
}

// Generate and save datasets
function generateMassiveDatasets() {
  console.log('🚀 Generating massive programmatic SEO datasets...\n');

  // Generate industries
  console.log('📊 Generating 600+ industry entries...');
  const industries = generateIndustries();
  const industriesPath = path.join(__dirname, '../public/data/industries.json');
  fs.writeFileSync(industriesPath, JSON.stringify(industries, null, 2));
  console.log(`✅ Generated ${industries.length} industry pages`);

  // Generate platforms
  console.log('🤖 Generating 120+ AI platform entries...');
  const platforms = generatePlatforms();
  const platformsPath = path.join(__dirname, '../public/data/platforms.json');
  fs.writeFileSync(platformsPath, JSON.stringify(platforms, null, 2));
  console.log(`✅ Generated ${platforms.length} platform pages`);

  // Generate comparisons
  console.log('⚔️ Generating 60+ comparison entries...');
  const comparisons = generateComparisons();
  const comparisonsPath = path.join(__dirname, '../public/data/comparisons.json');
  fs.writeFileSync(comparisonsPath, JSON.stringify(comparisons, null, 2));
  console.log(`✅ Generated ${comparisons.length} comparison pages`);

  const totalPages = industries.length + platforms.length + comparisons.length;
  console.log(`\n🎉 MASSIVE DATASET GENERATION COMPLETE!`);
  console.log(`📈 Total programmatic pages: ${totalPages}`);
  console.log(`📊 Breakdown:`);
  console.log(`   • ${industries.length} industry pages`);
  console.log(`   • ${platforms.length} platform pages`);
  console.log(`   • ${comparisons.length} comparison pages`);
  console.log(`\n🚀 Run 'npm run build' to generate all ${totalPages} static pages!`);
}

// Run the generator
if (require.main === module) {
  generateMassiveDatasets();
}

module.exports = { generateMassiveDatasets };