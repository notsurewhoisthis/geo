// Platform URL redirect mappings
export const platformRedirects: Record<string, string> = {
  // GPT-4o variations
  'gpt4o': 'gpt-4o',
  'gpt-4-o': 'gpt-4o',
  'chatgpt-4o': 'gpt-4o',
  
  // Claude 4.1 Opus variations
  'claude-4-1': 'claude-4-1-opus',
  'claude-opus': 'claude-4-1-opus',
  'claude-4': 'claude-4-1-opus',
  'claude-4-opus': 'claude-4-1-opus',
  
  // Gemini 2.5 Pro variations
  'gemini': 'gemini-2-5-pro',
  'gemini-pro': 'gemini-2-5-pro',
  'gemini-2': 'gemini-2-5-pro',
  'gemini-2-5': 'gemini-2-5-pro',
  'gemini-2.5': 'gemini-2-5-pro',
  'gemini-1-5-pro': 'google-gemini',
  'bard': 'google-gemini',
  'google-bard': 'google-gemini',
  
  // DeepSeek-R1 variations
  'deepseek': 'deepseek-r1',
  'deepseek-r-1': 'deepseek-r1',
  'deep-seek-r1': 'deepseek-r1',
  
  // Llama 4 variations
  'llama': 'llama-4',
  'llama4': 'llama-4',
  'meta-llama': 'llama-4',
  'meta-llama-4': 'llama-4',
  
  // OpenAI o3 variations
  'o3': 'openai-o3',
  'openai-o-3': 'openai-o3',
  'openai-03': 'openai-o3',
  
  // ChatGPT variations (legacy)
  'gpt': 'chatgpt',
  'gpt-4': 'chatgpt',
  'gpt-3': 'chatgpt',
  'gpt-3.5': 'chatgpt',
  'gpt-4-turbo': 'chatgpt',
  'openai': 'chatgpt',
  'openai-chatgpt': 'chatgpt',
  
  // Claude variations
  'claude-2': 'claude',
  'claude-3': 'claude',
  'claude-instant': 'claude',
  'anthropic': 'claude',
  'anthropic-claude': 'claude',
  
  // Perplexity variations
  'perplexity-ai': 'perplexity',
  'perplexity-search': 'perplexity',
  
  // Microsoft Copilot variations
  'copilot': 'microsoft-copilot',
  'bing-chat': 'microsoft-copilot',
  'bing-copilot': 'microsoft-copilot',
  'ms-copilot': 'microsoft-copilot',
  
  // GitHub Copilot variations
  'copilot-x': 'github-copilot',
  'gh-copilot': 'github-copilot',
  
  // DALL-E variations
  'dalle': 'dall-e',
  'dalle-2': 'dall-e',
  'dalle-3': 'dall-e',
  'dall-e-2': 'dall-e',
  'dall-e-3': 'dall-e',
  
  // Midjourney variations
  'mj': 'midjourney',
  'mid-journey': 'midjourney',
  
  // Jasper variations
  'jasper-ai': 'jasper',
  'jarvis': 'jasper',
  
  // Copy.ai variations
  'copyai': 'copy-ai',
  
  // Notion AI variations
  'notion': 'notion-ai',
  
  // ElevenLabs variations
  'eleven-labs': 'elevenlabs',
  '11labs': 'elevenlabs',
  
  // RunwayML variations
  'runway': 'runwayml',
  'runway-ml': 'runwayml',
}

// Get the correct platform slug
export function getCorrectPlatformSlug(slug: string): string | null {
  // First check if it's already a valid slug
  const validSlugs = [
    'gpt-4o', 'claude-4-1-opus', 'gemini-2-5-pro', 'deepseek-r1', 
    'llama-4', 'openai-o3', 'chatgpt', 'claude', 'perplexity', 
    'google-gemini'
  ]
  
  if (validSlugs.includes(slug)) {
    return slug
  }
  
  // Check if it needs redirection
  const normalized = slug.toLowerCase()
  return platformRedirects[normalized] || null
}