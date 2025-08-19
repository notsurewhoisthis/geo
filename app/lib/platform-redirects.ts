// Platform URL redirect mappings
export const platformRedirects: Record<string, string> = {
  // Google Gemini variations
  'gemini': 'google-gemini',
  'gemini-pro': 'google-gemini',
  'gemini-2-5-pro': 'google-gemini',
  'gemini-1-5-pro': 'google-gemini',
  'gemini-2-5': 'google-gemini',
  'gemini-1-5': 'google-gemini',
  'bard': 'google-gemini',
  'google-bard': 'google-gemini',
  
  // ChatGPT variations
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
    'chatgpt', 'claude', 'copy-ai', 'dall-e', 'elevenlabs',
    'github-copilot', 'google-gemini', 'grammarly', 'jasper',
    'microsoft-copilot', 'midjourney', 'notion-ai', 'perplexity',
    'runwayml', 'synthesia'
  ]
  
  if (validSlugs.includes(slug)) {
    return slug
  }
  
  // Check if it needs redirection
  const normalized = slug.toLowerCase()
  return platformRedirects[normalized] || null
}