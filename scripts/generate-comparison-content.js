const fs = require('fs');
const path = require('path');

// Platform data with detailed characteristics
const platforms = {
  'gpt-4o': {
    name: 'GPT-4o',
    vendor: 'OpenAI',
    type: 'Multimodal LLM',
    strengths: ['reasoning', 'coding', 'vision', 'creative writing', 'analysis'],
    weaknesses: ['cost', 'latency for complex tasks', 'token limits'],
    context: '128K tokens',
    training: 'Up to April 2023',
    pricing: '$5/1M input, $15/1M output tokens',
    features: ['function calling', 'vision understanding', 'code execution', 'web browsing'],
    bestFor: ['complex reasoning', 'multimodal tasks', 'code generation', 'creative content'],
    optimization: {
      citations: 'High',
      statistics: 'Medium',
      structure: 'Very High',
      freshness: 'Medium'
    }
  },
  'gpt-4-5': {
    name: 'GPT-4.5',
    vendor: 'OpenAI',
    type: 'Advanced LLM',
    strengths: ['improved reasoning', 'faster inference', 'better context retention'],
    weaknesses: ['still in development', 'pricing uncertainty'],
    context: '256K tokens (projected)',
    training: 'Up to December 2023 (projected)',
    pricing: 'TBD',
    features: ['enhanced multimodal', 'better tool use', 'improved factuality'],
    bestFor: ['enterprise applications', 'research', 'long-form content'],
    optimization: {
      citations: 'Very High',
      statistics: 'High',
      structure: 'Very High',
      freshness: 'High'
    }
  },
  'gpt-5': {
    name: 'GPT-5',
    vendor: 'OpenAI',
    type: 'Next-Gen AGI',
    strengths: ['AGI capabilities', 'perfect reasoning', 'unlimited context'],
    weaknesses: ['not yet released', 'speculative features'],
    context: '1M+ tokens (projected)',
    training: 'Up to 2024 (projected)',
    pricing: 'Premium tier expected',
    features: ['AGI reasoning', 'perfect memory', 'autonomous agents'],
    bestFor: ['future-proofing', 'AGI applications', 'complex automation'],
    optimization: {
      citations: 'Critical',
      statistics: 'Very High',
      structure: 'Critical',
      freshness: 'Critical'
    }
  },
  'gemini-2-5-pro': {
    name: 'Gemini 2.5 Pro',
    vendor: 'Google',
    type: 'Multimodal LLM',
    strengths: ['long context', 'vision', 'coding', 'Google integration'],
    weaknesses: ['availability restrictions', 'API complexity'],
    context: '2M tokens',
    training: 'Up to 2024',
    pricing: '$3.5/1M input, $10.5/1M output tokens',
    features: ['2M context window', 'native multimodal', 'Google Search integration'],
    bestFor: ['document analysis', 'long-context tasks', 'multimodal understanding'],
    optimization: {
      citations: 'High',
      statistics: 'Very High',
      structure: 'High',
      freshness: 'Very High'
    }
  },
  'gemini-2-0-flash': {
    name: 'Gemini 2.0 Flash',
    vendor: 'Google',
    type: 'Fast Multimodal',
    strengths: ['speed', 'cost-efficiency', 'multimodal', 'low latency'],
    weaknesses: ['reduced capabilities vs Pro', 'smaller context'],
    context: '1M tokens',
    training: 'Up to 2024',
    pricing: '$0.075/1M input, $0.3/1M output tokens',
    features: ['fast inference', 'multimodal', 'streaming', 'real-time apps'],
    bestFor: ['real-time applications', 'chat interfaces', 'high-volume tasks'],
    optimization: {
      citations: 'Medium',
      statistics: 'High',
      structure: 'High',
      freshness: 'High'
    }
  },
  'claude-3-7-sonnet': {
    name: 'Claude 3.7 Sonnet',
    vendor: 'Anthropic',
    type: 'Balanced LLM',
    strengths: ['balance of speed and capability', 'safety', 'helpfulness'],
    weaknesses: ['smaller context than Opus', 'less creative'],
    context: '200K tokens',
    training: 'Up to August 2023',
    pricing: '$3/1M input, $15/1M output tokens',
    features: ['constitutional AI', 'XML support', 'artifacts'],
    bestFor: ['customer service', 'content moderation', 'safe applications'],
    optimization: {
      citations: 'Very High',
      statistics: 'Medium',
      structure: 'Very High',
      freshness: 'Medium'
    }
  },
  'claude-4-1-opus': {
    name: 'Claude 4.1 Opus',
    vendor: 'Anthropic',
    type: 'Advanced LLM',
    strengths: ['complex reasoning', 'safety', 'long context', 'accuracy'],
    weaknesses: ['higher cost', 'slower inference'],
    context: '500K tokens',
    training: 'Up to 2024',
    pricing: '$15/1M input, $75/1M output tokens',
    features: ['advanced reasoning', 'computer use', 'enhanced safety'],
    bestFor: ['research', 'complex analysis', 'professional writing'],
    optimization: {
      citations: 'Critical',
      statistics: 'High',
      structure: 'Critical',
      freshness: 'High'
    }
  },
  'claude-4-1-sonnet': {
    name: 'Claude 4.1 Sonnet',
    vendor: 'Anthropic',
    type: 'Balanced Advanced',
    strengths: ['improved speed', 'better balance', 'enhanced capabilities'],
    weaknesses: ['middle-tier pricing', 'not as powerful as Opus'],
    context: '200K tokens',
    training: 'Up to 2024',
    pricing: '$8/1M input, $24/1M output tokens',
    features: ['faster reasoning', 'improved safety', 'better tool use'],
    bestFor: ['production applications', 'balanced workloads', 'API services'],
    optimization: {
      citations: 'High',
      statistics: 'High',
      structure: 'Very High',
      freshness: 'High'
    }
  },
  'llama-3-1': {
    name: 'Llama 3.1',
    vendor: 'Meta',
    type: 'Open Source LLM',
    strengths: ['open source', 'customizable', 'no API costs', 'fine-tunable'],
    weaknesses: ['requires infrastructure', 'no built-in safety'],
    context: '128K tokens',
    training: 'Up to 2023',
    pricing: 'Free (self-hosted)',
    features: ['open weights', '405B parameters', 'multilingual'],
    bestFor: ['self-hosting', 'custom applications', 'research'],
    optimization: {
      citations: 'Medium',
      statistics: 'Medium',
      structure: 'High',
      freshness: 'Low'
    }
  },
  'llama-4': {
    name: 'Llama 4',
    vendor: 'Meta',
    type: 'Next-Gen Open',
    strengths: ['expected improvements', 'open source', 'larger scale'],
    weaknesses: ['not yet released', 'speculative features'],
    context: '256K+ tokens (projected)',
    training: 'Up to 2024 (projected)',
    pricing: 'Free (self-hosted)',
    features: ['improved architecture', 'better efficiency', 'enhanced capabilities'],
    bestFor: ['future open-source applications', 'enterprise self-hosting'],
    optimization: {
      citations: 'High',
      statistics: 'High',
      structure: 'Very High',
      freshness: 'Medium'
    }
  },
  'grok-4': {
    name: 'Grok 4',
    vendor: 'xAI',
    type: 'Real-time LLM',
    strengths: ['real-time data', 'X integration', 'humor', 'uncensored'],
    weaknesses: ['limited availability', 'controversial outputs'],
    context: '100K tokens',
    training: 'Real-time updates',
    pricing: 'X Premium+ subscription',
    features: ['X/Twitter integration', 'real-time knowledge', 'uncensored responses'],
    bestFor: ['social media analysis', 'current events', 'unrestricted queries'],
    optimization: {
      citations: 'Low',
      statistics: 'High',
      structure: 'Medium',
      freshness: 'Critical'
    }
  },
  'deepseek-r1': {
    name: 'DeepSeek-R1',
    vendor: 'DeepSeek',
    type: 'Reasoning LLM',
    strengths: ['mathematical reasoning', 'code generation', 'problem-solving'],
    weaknesses: ['limited multimodal', 'Chinese-focused'],
    context: '64K tokens',
    training: 'Up to 2024',
    pricing: '$0.5/1M tokens',
    features: ['chain-of-thought', 'mathematical proofs', 'code execution'],
    bestFor: ['STEM applications', 'coding', 'mathematical problems'],
    optimization: {
      citations: 'High',
      statistics: 'Critical',
      structure: 'Very High',
      freshness: 'Medium'
    }
  },
  'openai-o3': {
    name: 'OpenAI o3',
    vendor: 'OpenAI',
    type: 'Reasoning Model',
    strengths: ['advanced reasoning', 'chain-of-thought', 'problem-solving'],
    weaknesses: ['high latency', 'expensive', 'limited availability'],
    context: '128K tokens',
    training: 'Up to 2024',
    pricing: '$20/1M reasoning tokens',
    features: ['multi-step reasoning', 'self-reflection', 'verification'],
    bestFor: ['complex problems', 'research', 'verification tasks'],
    optimization: {
      citations: 'Critical',
      statistics: 'Critical',
      structure: 'Critical',
      freshness: 'High'
    }
  },
  'qwen2-5': {
    name: 'Qwen2.5',
    vendor: 'Alibaba',
    type: 'Multilingual LLM',
    strengths: ['multilingual', 'Chinese excellence', 'open source option'],
    weaknesses: ['Western market penetration', 'documentation'],
    context: '128K tokens',
    training: 'Up to 2024',
    pricing: 'Variable/Free options',
    features: ['multilingual support', 'code capabilities', 'tool use'],
    bestFor: ['Asian markets', 'multilingual applications', 'Chinese content'],
    optimization: {
      citations: 'Medium',
      statistics: 'High',
      structure: 'High',
      freshness: 'Medium'
    }
  },
  'mistral-large-2': {
    name: 'Mistral Large 2',
    vendor: 'Mistral AI',
    type: 'European LLM',
    strengths: ['European compliance', 'efficiency', 'multilingual'],
    weaknesses: ['smaller scale', 'limited features'],
    context: '128K tokens',
    training: 'Up to 2024',
    pricing: '€3/1M input, €9/1M output tokens',
    features: ['EU compliance', 'efficient architecture', 'function calling'],
    bestFor: ['European markets', 'GDPR compliance', 'efficient inference'],
    optimization: {
      citations: 'High',
      statistics: 'High',
      structure: 'High',
      freshness: 'Medium'
    }
  },
  'chatgpt-5-mini': {
    name: 'ChatGPT 5 Mini',
    vendor: 'OpenAI',
    type: 'Efficient LLM',
    strengths: ['cost-effective', 'fast', 'good for simple tasks'],
    weaknesses: ['limited capabilities', 'smaller context'],
    context: '16K tokens',
    training: 'Up to 2024',
    pricing: '$0.15/1M input, $0.6/1M output tokens',
    features: ['fast inference', 'basic capabilities', 'affordable'],
    bestFor: ['high-volume tasks', 'simple queries', 'cost-sensitive applications'],
    optimization: {
      citations: 'Low',
      statistics: 'Medium',
      structure: 'High',
      freshness: 'Low'
    }
  },
  'nova-pro': {
    name: 'Nova Pro',
    vendor: 'Amazon',
    type: 'AWS LLM',
    strengths: ['AWS integration', 'enterprise features', 'scalability'],
    weaknesses: ['AWS lock-in', 'complexity'],
    context: '300K tokens',
    training: 'Up to 2024',
    pricing: 'AWS pricing model',
    features: ['AWS services integration', 'enterprise security', 'Bedrock platform'],
    bestFor: ['AWS applications', 'enterprise deployments', 'cloud-native apps'],
    optimization: {
      citations: 'High',
      statistics: 'High',
      structure: 'High',
      freshness: 'High'
    }
  },
  'gemma-3': {
    name: 'Gemma 3',
    vendor: 'Google',
    type: 'Lightweight Open',
    strengths: ['lightweight', 'open source', 'efficient'],
    weaknesses: ['limited capabilities', 'small scale'],
    context: '8K tokens',
    training: 'Up to 2024',
    pricing: 'Free (open source)',
    features: ['2B-9B parameters', 'efficient inference', 'mobile-friendly'],
    bestFor: ['edge devices', 'mobile apps', 'resource-constrained environments'],
    optimization: {
      citations: 'Low',
      statistics: 'Medium',
      structure: 'Medium',
      freshness: 'Low'
    }
  },
  'phi-4': {
    name: 'Phi-4',
    vendor: 'Microsoft',
    type: 'Small Language Model',
    strengths: ['tiny size', 'efficient', 'good performance/size ratio'],
    weaknesses: ['limited capabilities', 'small context'],
    context: '16K tokens',
    training: 'Up to 2024',
    pricing: 'Free (open source)',
    features: ['14B parameters', 'efficient training', 'good benchmarks'],
    bestFor: ['edge computing', 'mobile devices', 'quick inference'],
    optimization: {
      citations: 'Low',
      statistics: 'Medium',
      structure: 'Medium',
      freshness: 'Low'
    }
  }
};

function generateComparisonContent(platform1Id, platform2Id) {
  const p1 = platforms[platform1Id];
  const p2 = platforms[platform2Id];
  
  if (!p1 || !p2) return null;
  
  // Generate comprehensive comparison content
  const content = `# ${p1.name} vs ${p2.name}: Complete Optimization Guide for 2025

## Executive Summary

When optimizing content for AI platforms, choosing between **${p1.name}** and **${p2.name}** requires understanding their fundamental differences in architecture, capabilities, and content preferences. This comprehensive guide provides actionable strategies for maximizing visibility on both platforms.

**Key Takeaway**: ${p1.name} excels at ${p1.strengths[0]} and ${p1.strengths[1]}, while ${p2.name} specializes in ${p2.strengths[0]} and ${p2.strengths[1]}. Your optimization strategy should align with these core strengths.

## Quick Comparison Table

| Feature | ${p1.name} | ${p2.name} |
|---------|------------|------------|
| **Vendor** | ${p1.vendor} | ${p2.vendor} |
| **Type** | ${p1.type} | ${p2.type} |
| **Context Window** | ${p1.context} | ${p2.context} |
| **Training Data** | ${p1.training} | ${p2.training} |
| **Pricing** | ${p1.pricing} | ${p2.pricing} |
| **Best For** | ${p1.bestFor.slice(0, 2).join(', ')} | ${p2.bestFor.slice(0, 2).join(', ')} |

## Platform Deep Dive

### ${p1.name} Characteristics

${p1.name} represents ${p1.vendor}'s approach to ${p1.type.toLowerCase()}, featuring a ${p1.context} context window and training data up to ${p1.training.replace('Up to ', '')}. 

**Core Strengths:**
${p1.strengths.map(s => `- **${s.charAt(0).toUpperCase() + s.slice(1)}**: Exceptional performance in ${s}-related tasks`).join('\n')}

**Key Features:**
${p1.features.map(f => `- ${f.charAt(0).toUpperCase() + f.slice(1)}`).join('\n')}

**Limitations to Consider:**
${p1.weaknesses.map(w => `- ${w.charAt(0).toUpperCase() + w.slice(1)}`).join('\n')}

### ${p2.name} Characteristics

${p2.name} is ${p2.vendor}'s ${p2.type.toLowerCase()} solution, offering a ${p2.context} context window with training data through ${p2.training.replace('Up to ', '')}.

**Core Strengths:**
${p2.strengths.map(s => `- **${s.charAt(0).toUpperCase() + s.slice(1)}**: Leading capability in ${s} applications`).join('\n')}

**Key Features:**
${p2.features.map(f => `- ${f.charAt(0).toUpperCase() + f.slice(1)}`).join('\n')}

**Limitations to Consider:**
${p2.weaknesses.map(w => `- ${w.charAt(0).toUpperCase() + w.slice(1)}`).join('\n')}

## Content Optimization Strategies

### Optimizing for ${p1.name}

Based on ${p1.name}'s architecture and training, prioritize these optimization factors:

#### 1. Citation Strategy (Weight: ${p1.optimization.citations})
${p1.optimization.citations === 'Critical' ? 
  `Citations are absolutely essential for ${p1.name}. Include 5-7 authoritative sources with proper formatting. Use academic citations, primary sources, and recent research papers.` :
  p1.optimization.citations === 'Very High' || p1.optimization.citations === 'High' ?
  `${p1.name} highly values cited content. Include 3-5 authoritative sources, preferably from recognized institutions and peer-reviewed publications.` :
  `While ${p1.name} doesn't heavily prioritize citations, including 1-2 authoritative sources can still improve content credibility.`}

#### 2. Statistical Content (Weight: ${p1.optimization.statistics})
${p1.optimization.statistics === 'Critical' || p1.optimization.statistics === 'Very High' ?
  `Pack your content with data points, percentages, and quantitative analysis. ${p1.name} strongly favors statistically-backed arguments. Aim for 10+ data points per 1000 words.` :
  p1.optimization.statistics === 'High' ?
  `Include relevant statistics and data to support key points. Target 5-7 statistical references per article.` :
  `Basic statistical support is sufficient. Focus on 2-3 key data points that strengthen your main arguments.`}

#### 3. Content Structure (Weight: ${p1.optimization.structure})
${p1.optimization.structure === 'Critical' || p1.optimization.structure === 'Very High' ?
  `Implement strict hierarchical structure with clear H1-H6 headings, bullet points, numbered lists, and tables. ${p1.name} relies heavily on well-structured content for comprehension.` :
  `Use clear headings and logical flow. Standard markdown formatting with H2-H3 headers and occasional lists will suffice.`}

#### 4. Content Freshness (Weight: ${p1.optimization.freshness})
${p1.optimization.freshness === 'Critical' || p1.optimization.freshness === 'Very High' ?
  `${p1.name} strongly prioritizes recent content. Update articles monthly and include current dates, recent events, and trending topics.` :
  p1.optimization.freshness === 'High' ?
  `Regular updates improve visibility. Refresh content quarterly and include recent examples.` :
  `While not critical, occasional updates (bi-annually) help maintain relevance.`}

### Optimizing for ${p2.name}

${p2.name} requires a different optimization approach based on its unique characteristics:

#### 1. Citation Strategy (Weight: ${p2.optimization.citations})
${p2.optimization.citations === 'Critical' ? 
  `${p2.name} demands extensive citations. Include 7-10 sources with diverse perspectives. Prioritize recent research and authoritative institutions.` :
  p2.optimization.citations === 'Very High' || p2.optimization.citations === 'High' ?
  `Strong citation presence improves ranking. Include 4-6 credible sources with proper attribution.` :
  `Basic citations (1-3 sources) provide sufficient authority for ${p2.name}.`}

#### 2. Statistical Content (Weight: ${p2.optimization.statistics})
${p2.optimization.statistics === 'Critical' || p2.optimization.statistics === 'Very High' ?
  `${p2.name} heavily rewards data-rich content. Include charts, graphs, and 15+ statistics per article. Use percentages, growth rates, and comparative data.` :
  p2.optimization.statistics === 'High' ?
  `Incorporate 7-10 meaningful statistics throughout your content. Focus on relevant industry data.` :
  `Include 3-5 key statistics to support main points without overwhelming the narrative.`}

#### 3. Content Structure (Weight: ${p2.optimization.structure})
${p2.optimization.structure === 'Critical' || p2.optimization.structure === 'Very High' ?
  `${p2.name} requires meticulous structure. Use detailed table of contents, clear sections, subsections, and visual hierarchy. Include FAQ sections and summaries.` :
  `Maintain clear organization with standard headings, lists, and logical flow throughout.`}

#### 4. Content Freshness (Weight: ${p2.optimization.freshness})
${p2.optimization.freshness === 'Critical' ?
  `${p2.name} exclusively favors ultra-fresh content. Update weekly or bi-weekly. Include real-time data and breaking news.` :
  p2.optimization.freshness === 'Very High' || p2.optimization.freshness === 'High' ?
  `Keep content current with monthly updates and recent examples. Date-stamp your content.` :
  `Periodic updates (quarterly) maintain adequate freshness for ${p2.name}.`}

## Practical Implementation Guide

### For ${p1.name} Optimization

1. **Content Length**: Aim for ${p1.context.includes('K') ? 'comprehensive articles of 2,000-5,000 words' : 'detailed long-form content exceeding 5,000 words'}
2. **Keyword Density**: Focus on semantic relevance rather than keyword stuffing
3. **Media Integration**: ${p1.features.includes('vision') || p1.features.includes('multimodal') ? 'Include relevant images with detailed alt text' : 'Text-focused content performs best'}
4. **Update Frequency**: ${p1.optimization.freshness === 'Critical' || p1.optimization.freshness === 'Very High' ? 'Weekly to bi-weekly' : 'Monthly to quarterly'}

### For ${p2.name} Optimization

1. **Content Length**: Optimize for ${p2.context.includes('M') ? 'extensive documentation-style content (10,000+ words)' : 'detailed articles of 3,000-7,000 words'}
2. **Technical Depth**: ${p2.bestFor.includes('research') || p2.bestFor.includes('analysis') ? 'Include technical specifications and detailed methodology' : 'Balance technical detail with accessibility'}
3. **Cross-referencing**: ${p2.vendor === 'Google' ? 'Leverage internal linking and knowledge graph connections' : 'Build strong internal link networks'}
4. **Multimedia**: ${p2.features.includes('multimodal') || p2.features.includes('vision') ? 'Essential - include diagrams, charts, and visual explanations' : 'Helpful but not critical'}

## Use Case Comparison

### When to Optimize for ${p1.name}

Choose ${p1.name} as your primary optimization target when:
${p1.bestFor.map(use => `- Your content focuses on ${use}`).join('\n')}
- Your audience values ${p1.strengths.slice(0, 2).join(' and ')}
- You need ${p1.type.toLowerCase()} capabilities

### When to Optimize for ${p2.name}

Prioritize ${p2.name} optimization when:
${p2.bestFor.map(use => `- Your use case involves ${use}`).join('\n')}
- You require ${p2.strengths.slice(0, 2).join(' and ')}
- Your content benefits from ${p2.type.toLowerCase()} features

## Performance Metrics

### ${p1.name} Success Indicators
- **Visibility Score**: Track appearance in ${p1.vendor} platforms
- **Citation Rate**: Monitor how often ${p1.name} references your content
- **Engagement Metrics**: ${p1.features.includes('web browsing') ? 'Click-through from AI responses' : 'User satisfaction scores'}
- **Ranking Factors**: ${Object.entries(p1.optimization).filter(([k, v]) => v === 'Critical' || v === 'Very High').map(([k]) => k).join(', ')}

### ${p2.name} Success Indicators
- **Platform Visibility**: Measure presence in ${p2.vendor} ecosystems
- **Authority Signals**: ${p2.optimization.citations === 'Critical' || p2.optimization.citations === 'Very High' ? 'Citation quality and diversity' : 'Domain authority and trustworthiness'}
- **User Metrics**: ${p2.features.includes('real-time') ? 'Real-time engagement rates' : 'Session duration and depth'}
- **Key Optimizations**: ${Object.entries(p2.optimization).filter(([k, v]) => v === 'Critical' || v === 'Very High').map(([k]) => k).join(', ')}

## Advanced Optimization Techniques

### Cross-Platform Synergies

While ${p1.name} and ${p2.name} have different optimization requirements, certain strategies benefit both:

1. **Semantic Richness**: Both platforms benefit from semantically rich, contextual content
2. **E-E-A-T Signals**: Expertise, Experience, Authoritativeness, and Trustworthiness matter for both
3. **User Intent Matching**: Align content with specific user queries and needs
4. **Technical Excellence**: Clean code, fast loading, and mobile optimization help universally

### Platform-Specific Hacks

#### ${p1.name} Optimization Hacks
${p1.vendor === 'OpenAI' ? 
  `- Use OpenAI's specific formatting preferences (markdown, code blocks)
- Leverage function calling syntax in technical content
- Include ChatGPT-style conversational elements` :
  p1.vendor === 'Google' ?
  `- Integrate with Google's knowledge graph
- Use schema.org markup extensively
- Optimize for featured snippets` :
  p1.vendor === 'Anthropic' ?
  `- Emphasize safety and ethical considerations
- Use clear, unambiguous language
- Include constitutional AI principles` :
  `- Focus on platform-specific features
- Align with vendor's core mission
- Use native formatting preferences`}

#### ${p2.name} Optimization Hacks
${p2.vendor === 'OpenAI' ? 
  `- Structure content for GPT's training patterns
- Include diverse perspectives and viewpoints
- Use clear section breaks and transitions` :
  p2.vendor === 'Google' ?
  `- Leverage Google's entity understanding
- Include location and temporal context
- Optimize for voice search patterns` :
  p2.vendor === 'Anthropic' ?
  `- Prioritize helpful, harmless, honest content
- Include detailed explanations and reasoning
- Avoid controversial or ambiguous statements` :
  `- Research platform-specific preferences
- Align with vendor ecosystem
- Test and iterate based on results`}

## Common Pitfalls to Avoid

### ${p1.name} Optimization Mistakes
1. **Over-optimization**: Don't sacrifice readability for ${p1.optimization.structure === 'Critical' ? 'structure' : 'optimization signals'}
2. **Ignoring Context Window**: With ${p1.context}, ${p1.context.includes('K') && parseInt(p1.context) < 100 ? 'avoid overly long content that exceeds limits' : 'leverage the full context for comprehensive coverage'}
3. **Outdated Information**: ${p1.optimization.freshness === 'Critical' || p1.optimization.freshness === 'Very High' ? 'Critical - outdated content severely impacts visibility' : 'Keep reasonably current to maintain relevance'}

### ${p2.name} Optimization Mistakes
1. **Insufficient Depth**: ${p2.context.includes('M') ? 'Take advantage of large context windows with comprehensive content' : 'Provide adequate detail within context limits'}
2. **Weak Citations**: ${p2.optimization.citations === 'Critical' || p2.optimization.citations === 'Very High' ? 'Poor citation quality drastically reduces visibility' : 'Maintain citation standards for credibility'}
3. **Poor Structure**: ${p2.optimization.structure === 'Critical' || p2.optimization.structure === 'Very High' ? 'Disorganized content performs poorly' : 'Clear organization improves comprehension'}

## Measurement and Analytics

### KPIs for ${p1.name}
- **Primary Metrics**: ${p1.bestFor.includes('research') ? 'Citation accuracy, research depth' : p1.bestFor.includes('coding') ? 'Code quality, implementation success' : 'Content relevance, user satisfaction'}
- **Secondary Metrics**: Response inclusion rate, factual accuracy, user engagement
- **Optimization Score**: Calculate based on ${Object.keys(p1.optimization).join(', ')} weights

### KPIs for ${p2.name}
- **Primary Metrics**: ${p2.bestFor.includes('enterprise') ? 'Enterprise adoption, implementation rate' : p2.bestFor.includes('real-time') ? 'Freshness score, update frequency' : 'Visibility score, ranking position'}
- **Secondary Metrics**: Cross-reference rate, authority score, trust signals
- **Performance Index**: Weighted average of ${Object.keys(p2.optimization).join(', ')}

## Migration Strategy

### Transitioning from ${p1.name} to ${p2.name}
If you're currently optimized for ${p1.name} and want to target ${p2.name}:

1. **Content Audit**: Review existing content against ${p2.name} requirements
2. **Gap Analysis**: Identify missing elements (${Object.entries(p2.optimization).filter(([k, v]) => p1.optimization[k] !== v).map(([k]) => k).join(', ')})
3. **Gradual Migration**: Update highest-traffic content first
4. **Testing Phase**: A/B test optimizations before full rollout

### Dual Optimization Strategy
To optimize for both platforms simultaneously:

1. **Core Content**: Create foundational content meeting both platforms' minimum requirements
2. **Platform Layers**: Add platform-specific optimizations as separate layers
3. **Dynamic Serving**: Use conditional content delivery based on platform detection
4. **Unified Analytics**: Track performance across both platforms

## Future-Proofing Your Strategy

### ${p1.name} Evolution Trends
${p1.training.includes('2024') || p1.training.includes('2025') ?
  `As a recent model, ${p1.name} represents current best practices. Expect incremental improvements in ${p1.strengths[0]} and ${p1.strengths[1]}.` :
  `${p1.name} may see updates to address ${p1.weaknesses[0]}. Prepare for enhanced ${p1.features[0]} capabilities.`}

### ${p2.name} Development Trajectory
${p2.training.includes('2024') || p2.training.includes('2025') ?
  `${p2.name} is at the forefront of ${p2.type.toLowerCase()} development. Future versions will likely enhance ${p2.strengths[0]}.` :
  `Watch for ${p2.vendor}'s roadmap regarding ${p2.weaknesses[0]} improvements and ${p2.features[0]} enhancements.`}

## Conclusion and Recommendations

When choosing between ${p1.name} and ${p2.name} for optimization:

**Choose ${p1.name} if:**
- Your primary use case aligns with ${p1.bestFor[0]}
- You need ${p1.strengths[0]} capabilities
- Your budget accommodates ${p1.pricing}
- You value ${p1.vendor}'s ecosystem

**Choose ${p2.name} if:**
- Your focus is on ${p2.bestFor[0]}
- You require ${p2.strengths[0]} features
- Cost considerations favor ${p2.pricing}
- You're invested in ${p2.vendor}'s platform

**For maximum reach**, implement a dual optimization strategy that leverages the strengths of both platforms while avoiding their respective weaknesses.

Remember: The AI landscape evolves rapidly. Regularly review and update your optimization strategy based on platform updates and performance metrics.

## Related Resources

- [${p1.name} Optimization Guide](/platforms/${platform1Id})
- [${p2.name} Optimization Guide](/platforms/${platform2Id})
- [Understanding GEO Fundamentals](/guide)
- [Platform Comparison Tool](/tools/platform-compare)
- [GEO Audit Tool](/tools/geo-audit)`;

  return content;
}

// Generate all comparison combinations
function generateAllComparisons() {
  const platformIds = Object.keys(platforms);
  const comparisons = [];
  
  // Generate all unique pairs
  for (let i = 0; i < platformIds.length; i++) {
    for (let j = i + 1; j < platformIds.length; j++) {
      const id1 = platformIds[i];
      const id2 = platformIds[j];
      comparisons.push({
        slug: `${id1}-vs-${id2}`,
        platforms: [id1, id2]
      });
    }
  }
  
  return comparisons;
}

// Main function to generate all comparison files
function main() {
  const comparisons = generateAllComparisons();
  const outputDir = path.join(__dirname, '..', 'content', 'comparisons');
  
  // Ensure directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`Generating ${comparisons.length} comparison files...`);
  
  let generated = 0;
  let errors = 0;
  
  comparisons.forEach(({ slug, platforms: [p1, p2] }) => {
    try {
      const content = generateComparisonContent(p1, p2);
      if (content) {
        const filePath = path.join(outputDir, `${slug}.md`);
        fs.writeFileSync(filePath, content);
        generated++;
        if (generated % 10 === 0) {
          console.log(`Generated ${generated} files...`);
        }
      } else {
        console.error(`Failed to generate content for ${slug}`);
        errors++;
      }
    } catch (error) {
      console.error(`Error generating ${slug}:`, error.message);
      errors++;
    }
  });
  
  console.log(`\nGeneration complete!`);
  console.log(`✅ Successfully generated: ${generated} files`);
  if (errors > 0) {
    console.log(`❌ Errors: ${errors} files`);
  }
  console.log(`📁 Output directory: ${outputDir}`);
}

// Run the script
main();