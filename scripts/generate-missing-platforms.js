#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// The specific platform models used in comparisons that need platform pages
const missingPlatforms = [
  'gpt-4o', 'gpt-4-5', 'gpt-5', 'chatgpt-5-mini', 'openai-o3',
  'claude-3-7-sonnet', 'claude-4-1-opus', 'claude-4-1-sonnet', 
  'gemini-2-5-pro', 'gemini-2-0-flash', 'gemma-3',
  'llama-3-1', 'llama-4', 'deepseek-r1', 'grok-4',
  'mistral-large-2', 'qwen-2-5', 'qwen2-5', 'nova-pro', 'phi-4'
];

// Platform data mapping
const platformData = {
  'gpt-4o': {
    name: 'GPT-4o',
    company: 'OpenAI',
    type: 'Multimodal LLM',
    primaryUse: 'Advanced reasoning, coding, and multimodal tasks',
    userBase: '200M+',
    launch: '2024',
    industries: ['Technology', 'Education', 'Business', 'Research'],
    geoOptimization: {
      citationWeight: 85,
      statisticsWeight: 90,
      faqWeight: 80,
      conversationalWeight: 95,
      authorityWeight: 88
    },
    keyFeatures: ['Advanced reasoning', 'Vision capabilities', 'Code generation', 'Multimodal processing'],
    optimizationStrategies: [
      'Focus on structured data and citations',
      'Include comprehensive FAQ sections', 
      'Emphasize technical accuracy and depth',
      'Use conversational content formats'
    ],
    contentPreferences: ['Technical documentation', 'Comprehensive guides', 'FAQ content', 'Data-driven articles']
  },
  'gpt-4-5': {
    name: 'GPT-4.5',
    company: 'OpenAI', 
    type: 'Advanced LLM',
    primaryUse: 'Enhanced reasoning and faster inference',
    userBase: '100M+',
    launch: '2024',
    industries: ['Technology', 'Business', 'Research', 'Education'],
    geoOptimization: {
      citationWeight: 88,
      statisticsWeight: 92,
      faqWeight: 85,
      conversationalWeight: 90,
      authorityWeight: 90
    },
    keyFeatures: ['Improved reasoning', 'Faster processing', 'Enhanced accuracy', 'Better context handling'],
    optimizationStrategies: [
      'Emphasize authoritative sources and citations',
      'Include statistical data and metrics',
      'Create detailed FAQ sections',
      'Focus on comprehensive content'
    ],
    contentPreferences: ['Research papers', 'Technical guides', 'Statistical reports', 'Detailed documentation']
  },
  'gpt-5': {
    name: 'GPT-5',
    company: 'OpenAI',
    type: 'Next-gen LLM',
    primaryUse: 'Advanced AI reasoning and multimodal capabilities',
    userBase: '50M+',
    launch: '2024',
    industries: ['Technology', 'Research', 'Business', 'Science'],
    geoOptimization: {
      citationWeight: 95,
      statisticsWeight: 95,
      faqWeight: 90,
      conversationalWeight: 88,
      authorityWeight: 95
    },
    keyFeatures: ['Superior reasoning', 'Advanced multimodal', 'Enhanced accuracy', 'Better safety'],
    optimizationStrategies: [
      'Prioritize high-quality citations and sources',
      'Include comprehensive statistical analysis',
      'Create thorough FAQ sections',
      'Focus on authoritative content'
    ],
    contentPreferences: ['Academic papers', 'Research documentation', 'Technical specifications', 'Expert analysis']
  },
  'chatgpt-5-mini': {
    name: 'ChatGPT 5 Mini',
    company: 'OpenAI',
    type: 'Efficient LLM',
    primaryUse: 'Cost-effective AI for high-volume tasks',
    userBase: '150M+',
    launch: '2024',
    industries: ['Business', 'Education', 'Customer Service', 'Content Creation'],
    geoOptimization: {
      citationWeight: 70,
      statisticsWeight: 75,
      faqWeight: 85,
      conversationalWeight: 90,
      authorityWeight: 75
    },
    keyFeatures: ['Fast inference', 'Cost-effective', 'Good performance', 'Wide availability'],
    optimizationStrategies: [
      'Focus on conversational content',
      'Include practical FAQ sections',
      'Emphasize accessibility and clarity',
      'Use straightforward language'
    ],
    contentPreferences: ['How-to guides', 'FAQ content', 'Simple explanations', 'Practical tutorials']
  },
  'openai-o3': {
    name: 'OpenAI o3',
    company: 'OpenAI',
    type: 'Reasoning Model',
    primaryUse: 'Advanced reasoning and problem-solving',
    userBase: '25M+',
    launch: '2024',
    industries: ['Research', 'Science', 'Engineering', 'Academia'],
    geoOptimization: {
      citationWeight: 98,
      statisticsWeight: 95,
      faqWeight: 80,
      conversationalWeight: 75,
      authorityWeight: 95
    },
    keyFeatures: ['Advanced reasoning', 'Problem solving', 'Mathematical capabilities', 'Scientific analysis'],
    optimizationStrategies: [
      'Emphasize peer-reviewed sources and citations',
      'Include detailed statistical analysis',
      'Focus on scientific methodology',
      'Provide comprehensive technical details'
    ],
    contentPreferences: ['Research papers', 'Scientific documentation', 'Technical analysis', 'Academic content']
  },
  'claude-3-7-sonnet': {
    name: 'Claude 3.7 Sonnet',
    company: 'Anthropic',
    type: 'Balanced LLM',
    primaryUse: 'Balance of speed, capability, and safety',
    userBase: '50M+',
    launch: '2024',
    industries: ['Business', 'Customer Service', 'Content Creation', 'Education'],
    geoOptimization: {
      citationWeight: 90,
      statisticsWeight: 85,
      faqWeight: 88,
      conversationalWeight: 85,
      authorityWeight: 92
    },
    keyFeatures: ['Constitutional AI', 'Balanced performance', 'Safety focus', 'Long context'],
    optimizationStrategies: [
      'Emphasize ethical and safe content',
      'Include comprehensive citations',
      'Focus on balanced perspectives',
      'Provide clear, helpful information'
    ],
    contentPreferences: ['Ethical guidelines', 'Balanced analysis', 'Educational content', 'Helpful explanations']
  },
  'claude-4-1-opus': {
    name: 'Claude 4.1 Opus',
    company: 'Anthropic',
    type: 'Premium LLM',
    primaryUse: 'Most capable model for complex tasks',
    userBase: '30M+',
    launch: '2024',
    industries: ['Research', 'Business', 'Technology', 'Writing'],
    geoOptimization: {
      citationWeight: 95,
      statisticsWeight: 92,
      faqWeight: 85,
      conversationalWeight: 88,
      authorityWeight: 95
    },
    keyFeatures: ['Highest capability', 'Complex reasoning', 'Creative writing', 'Analysis'],
    optimizationStrategies: [
      'Provide comprehensive citations and sources',
      'Include detailed statistical analysis',
      'Focus on depth and nuance',
      'Emphasize quality over quantity'
    ],
    contentPreferences: ['In-depth analysis', 'Research papers', 'Creative content', 'Complex documentation']
  },
  'claude-4-1-sonnet': {
    name: 'Claude 4.1 Sonnet',
    company: 'Anthropic',
    type: 'Optimized LLM',
    primaryUse: 'Optimal balance of performance and speed',
    userBase: '75M+',
    launch: '2024',
    industries: ['Business', 'Technology', 'Education', 'Customer Service'],
    geoOptimization: {
      citationWeight: 88,
      statisticsWeight: 85,
      faqWeight: 90,
      conversationalWeight: 88,
      authorityWeight: 90
    },
    keyFeatures: ['Optimized performance', 'Fast processing', 'Reliable output', 'Good reasoning'],
    optimizationStrategies: [
      'Balance citations with readability',
      'Include practical FAQ sections',
      'Focus on clear communication',
      'Provide actionable insights'
    ],
    contentPreferences: ['Business guides', 'Educational content', 'FAQ documentation', 'Practical tutorials']
  },
  'gemini-2-5-pro': {
    name: 'Gemini 2.5 Pro',
    company: 'Google',
    type: 'Advanced Multimodal',
    primaryUse: 'Professional-grade AI for complex multimodal tasks',
    userBase: '100M+',
    launch: '2024',
    industries: ['Technology', 'Business', 'Research', 'Education'],
    geoOptimization: {
      citationWeight: 92,
      statisticsWeight: 95,
      faqWeight: 85,
      conversationalWeight: 80,
      authorityWeight: 90
    },
    keyFeatures: ['Multimodal capabilities', 'Large context window', 'Professional features', 'Integration with Google'],
    optimizationStrategies: [
      'Emphasize data-driven content',
      'Include comprehensive statistics',
      'Focus on authoritative sources',
      'Provide detailed technical information'
    ],
    contentPreferences: ['Technical documentation', 'Data analysis', 'Research reports', 'Professional guides']
  },
  'gemini-2-0-flash': {
    name: 'Gemini 2.0 Flash',
    company: 'Google',
    type: 'Fast Multimodal',
    primaryUse: 'Quick multimodal AI responses',
    userBase: '200M+',
    launch: '2024',
    industries: ['Customer Service', 'Content Creation', 'Education', 'Business'],
    geoOptimization: {
      citationWeight: 80,
      statisticsWeight: 85,
      faqWeight: 90,
      conversationalWeight: 95,
      authorityWeight: 82
    },
    keyFeatures: ['Fast processing', 'Multimodal input', 'Real-time responses', 'Wide availability'],
    optimizationStrategies: [
      'Focus on quick, clear answers',
      'Include practical FAQ sections',
      'Emphasize conversational content',
      'Provide immediate value'
    ],
    contentPreferences: ['Quick guides', 'FAQ content', 'How-to articles', 'Conversational explanations']
  },
  'gemma-3': {
    name: 'Gemma 3',
    company: 'Google',
    type: 'Lightweight Open Model',
    primaryUse: 'Efficient open-source AI for edge and mobile',
    userBase: '10M+',
    launch: '2024',
    industries: ['Technology', 'Mobile Development', 'Edge Computing', 'Research'],
    geoOptimization: {
      citationWeight: 75,
      statisticsWeight: 80,
      faqWeight: 85,
      conversationalWeight: 82,
      authorityWeight: 78
    },
    keyFeatures: ['Lightweight design', 'Open source', 'Mobile-friendly', 'Efficient processing'],
    optimizationStrategies: [
      'Focus on technical documentation',
      'Include developer-focused content',
      'Emphasize efficiency and performance',
      'Provide implementation guides'
    ],
    contentPreferences: ['Technical guides', 'Developer documentation', 'Implementation tutorials', 'Performance benchmarks']
  },
  'llama-3-1': {
    name: 'Llama 3.1',
    company: 'Meta',
    type: 'Open Source LLM',
    primaryUse: 'Open-source AI for research and development',
    userBase: '50M+',
    launch: '2024',
    industries: ['Research', 'Technology', 'Open Source', 'Academia'],
    geoOptimization: {
      citationWeight: 88,
      statisticsWeight: 85,
      faqWeight: 80,
      conversationalWeight: 78,
      authorityWeight: 85
    },
    keyFeatures: ['Open source', 'Research-friendly', 'Customizable', 'Community-driven'],
    optimizationStrategies: [
      'Emphasize research citations',
      'Include technical benchmarks',
      'Focus on open source community',
      'Provide implementation details'
    ],
    contentPreferences: ['Research papers', 'Technical documentation', 'Open source guides', 'Community tutorials']
  },
  'llama-4': {
    name: 'Llama 4',
    company: 'Meta',
    type: 'Next-gen Open LLM',
    primaryUse: 'Advanced open-source AI capabilities',
    userBase: '25M+',
    launch: '2024',
    industries: ['Research', 'Technology', 'Academia', 'Innovation'],
    geoOptimization: {
      citationWeight: 90,
      statisticsWeight: 88,
      faqWeight: 82,
      conversationalWeight: 80,
      authorityWeight: 88
    },
    keyFeatures: ['Advanced capabilities', 'Open source', 'Research focus', 'Innovation platform'],
    optimizationStrategies: [
      'Prioritize research citations',
      'Include performance benchmarks',
      'Focus on technical innovation',
      'Provide detailed methodology'
    ],
    contentPreferences: ['Research publications', 'Technical benchmarks', 'Innovation guides', 'Academic content']
  },
  'deepseek-r1': {
    name: 'DeepSeek-R1',
    company: 'DeepSeek',
    type: 'Reasoning Model',
    primaryUse: 'Advanced mathematical and logical reasoning',
    userBase: '15M+',
    launch: '2024',
    industries: ['Research', 'Mathematics', 'Science', 'Engineering'],
    geoOptimization: {
      citationWeight: 95,
      statisticsWeight: 98,
      faqWeight: 75,
      conversationalWeight: 70,
      authorityWeight: 92
    },
    keyFeatures: ['Mathematical reasoning', 'Logical analysis', 'Scientific computation', 'Problem solving'],
    optimizationStrategies: [
      'Emphasize mathematical and scientific citations',
      'Include detailed statistical analysis',
      'Focus on rigorous methodology',
      'Provide technical depth'
    ],
    contentPreferences: ['Mathematical papers', 'Scientific analysis', 'Technical documentation', 'Research methodology']
  },
  'grok-4': {
    name: 'Grok 4',
    company: 'xAI',
    type: 'Conversational AI',
    primaryUse: 'Real-time information and conversational AI',
    userBase: '20M+',
    launch: '2024',
    industries: ['Social Media', 'News', 'Entertainment', 'Communication'],
    geoOptimization: {
      citationWeight: 82,
      statisticsWeight: 80,
      faqWeight: 92,
      conversationalWeight: 95,
      authorityWeight: 78
    },
    keyFeatures: ['Real-time data', 'Conversational interface', 'Current events', 'Social integration'],
    optimizationStrategies: [
      'Focus on current events and trends',
      'Include conversational FAQ content',
      'Emphasize real-time relevance',
      'Provide timely information'
    ],
    contentPreferences: ['News articles', 'Current events', 'Conversational content', 'Trending topics']
  },
  'mistral-large-2': {
    name: 'Mistral Large 2',
    company: 'Mistral AI',
    type: 'European LLM',
    primaryUse: 'Privacy-focused AI for European market',
    userBase: '10M+',
    launch: '2024',
    industries: ['Business', 'Government', 'Privacy-focused', 'European Market'],
    geoOptimization: {
      citationWeight: 85,
      statisticsWeight: 88,
      faqWeight: 85,
      conversationalWeight: 82,
      authorityWeight: 90
    },
    keyFeatures: ['Privacy focus', 'European compliance', 'Business-oriented', 'Multilingual'],
    optimizationStrategies: [
      'Emphasize privacy and compliance',
      'Include European regulatory content',
      'Focus on business applications',
      'Provide multilingual support'
    ],
    contentPreferences: ['Business documentation', 'Compliance guides', 'Privacy policies', 'European content']
  },
  'qwen-2-5': {
    name: 'Qwen 2.5',
    company: 'Alibaba',
    type: 'Multilingual LLM',
    primaryUse: 'Chinese and multilingual AI capabilities',
    userBase: '30M+',
    launch: '2024',
    industries: ['Technology', 'E-commerce', 'Multilingual', 'Asia-Pacific'],
    geoOptimization: {
      citationWeight: 85,
      statisticsWeight: 90,
      faqWeight: 88,
      conversationalWeight: 85,
      authorityWeight: 88
    },
    keyFeatures: ['Multilingual support', 'Chinese language expertise', 'E-commerce integration', 'Cultural understanding'],
    optimizationStrategies: [
      'Include multilingual content',
      'Focus on cultural relevance',
      'Emphasize e-commerce applications',
      'Provide regional insights'
    ],
    contentPreferences: ['Multilingual guides', 'Cultural content', 'E-commerce documentation', 'Regional analysis']
  },
  'qwen2-5': {
    name: 'Qwen2.5',
    company: 'Alibaba',
    type: 'Enhanced Multilingual',
    primaryUse: 'Advanced multilingual and reasoning capabilities',
    userBase: '25M+',
    launch: '2024',
    industries: ['Technology', 'Global Business', 'Translation', 'Cross-cultural'],
    geoOptimization: {
      citationWeight: 88,
      statisticsWeight: 92,
      faqWeight: 85,
      conversationalWeight: 88,
      authorityWeight: 90
    },
    keyFeatures: ['Enhanced reasoning', 'Better multilingual', 'Improved accuracy', 'Cultural adaptation'],
    optimizationStrategies: [
      'Emphasize multilingual citations',
      'Include cross-cultural analysis',
      'Focus on global perspectives',
      'Provide comprehensive coverage'
    ],
    contentPreferences: ['Global analysis', 'Multilingual documentation', 'Cross-cultural guides', 'International content']
  },
  'nova-pro': {
    name: 'Nova Pro',
    company: 'Amazon',
    type: 'AWS LLM',
    primaryUse: 'Enterprise AI for AWS cloud services',
    userBase: '20M+',
    launch: '2024',
    industries: ['Cloud Computing', 'Enterprise', 'AWS Services', 'DevOps'],
    geoOptimization: {
      citationWeight: 90,
      statisticsWeight: 95,
      faqWeight: 88,
      conversationalWeight: 80,
      authorityWeight: 92
    },
    keyFeatures: ['AWS integration', 'Enterprise features', 'Cloud-native', 'Scalable'],
    optimizationStrategies: [
      'Focus on enterprise and cloud content',
      'Include AWS-specific documentation',
      'Emphasize scalability and performance',
      'Provide technical implementation guides'
    ],
    contentPreferences: ['Enterprise guides', 'Cloud documentation', 'AWS tutorials', 'Technical specifications']
  },
  'phi-4': {
    name: 'Phi-4',
    company: 'Microsoft',
    type: 'Small Language Model',
    primaryUse: 'Efficient AI for edge and mobile devices',
    userBase: '40M+',
    launch: '2024',
    industries: ['Mobile', 'Edge Computing', 'IoT', 'Efficiency-focused'],
    geoOptimization: {
      citationWeight: 78,
      statisticsWeight: 82,
      faqWeight: 88,
      conversationalWeight: 85,
      authorityWeight: 80
    },
    keyFeatures: ['Small size', 'Efficient processing', 'Mobile-friendly', 'Good performance/size ratio'],
    optimizationStrategies: [
      'Focus on efficiency and performance',
      'Include mobile and edge use cases',
      'Emphasize practical applications',
      'Provide optimization techniques'
    ],
    contentPreferences: ['Efficiency guides', 'Mobile documentation', 'Edge computing tutorials', 'Performance optimization']
  }
};

// Read existing platforms data
const platformsPath = path.join(__dirname, '..', 'public', 'data', 'platforms.json');
let existingPlatforms = [];

try {
  if (fs.existsSync(platformsPath)) {
    const content = fs.readFileSync(platformsPath, 'utf8');
    existingPlatforms = JSON.parse(content);
  }
} catch (error) {
  console.error('Error reading existing platforms:', error);
}

// Add missing platforms
const allPlatforms = [...existingPlatforms];

missingPlatforms.forEach(slug => {
  // Check if platform already exists
  const exists = existingPlatforms.find(p => p.slug === slug);
  if (!exists && platformData[slug]) {
    console.log(`Adding platform: ${slug}`);
    allPlatforms.push({
      slug,
      ...platformData[slug]
    });
  } else if (!platformData[slug]) {
    console.warn(`Warning: No data defined for platform ${slug}`);
  }
});

// Write updated platforms data
try {
  fs.writeFileSync(platformsPath, JSON.stringify(allPlatforms, null, 2));
  console.log(`✅ Updated platforms.json with ${allPlatforms.length} total platforms`);
  console.log(`Added ${allPlatforms.length - existingPlatforms.length} new platforms`);
} catch (error) {
  console.error('Error writing platforms file:', error);
}