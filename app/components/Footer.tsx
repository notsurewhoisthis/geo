import Link from 'next/link'

export default function Footer() {
  // Popular platform comparisons for SEO
  const popularComparisons = [
    { slug: 'gpt-4o-vs-claude-4-1-opus', title: 'GPT-4o vs Claude Opus' },
    { slug: 'gemini-2-5-pro-vs-gpt-5', title: 'Gemini Pro vs GPT-5' },
    { slug: 'deepseek-r1-vs-openai-o3', title: 'DeepSeek vs OpenAI o3' },
    { slug: 'llama-4-vs-claude-4-1-sonnet', title: 'Llama 4 vs Claude Sonnet' },
    { slug: 'mistral-large-2-vs-qwen-2-5', title: 'Mistral vs Qwen2.5' },
    { slug: 'grok-4-vs-gemini-2-0-flash', title: 'Grok 4 vs Gemini Flash' }
  ];

  const topPlatforms = [
    { slug: 'gpt-4o', name: 'GPT-4o' },
    { slug: 'claude-4-1-opus', name: 'Claude 4.1 Opus' },
    { slug: 'gemini-2-5-pro', name: 'Gemini 2.5 Pro' },
    { slug: 'deepseek-r1', name: 'DeepSeek-R1' },
    { slug: 'llama-4', name: 'Llama 4' },
    { slug: 'openai-o3', name: 'OpenAI o3' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container-blog py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold text-white">GEO Platform</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Master Generative Engine Optimization across 19 AI platforms. Compare optimization strategies for ChatGPT, Claude, Gemini, and more.
            </p>
            <div className="flex gap-4">
              <Link href="/feed.xml" className="text-gray-500 hover:text-purple-400 transition text-sm">RSS Feed</Link>
              <Link href="/sitemap.xml" className="text-gray-500 hover:text-purple-400 transition text-sm">Sitemap</Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <Link href="/blog" className="text-gray-400 hover:text-purple-400 transition text-sm">Blog</Link>
              <Link href="/tools" className="text-gray-400 hover:text-purple-400 transition text-sm">GEO Tools</Link>
              <Link href="/glossary" className="text-gray-400 hover:text-purple-400 transition text-sm">GEO Glossary</Link>
              <Link href="/guide" className="text-gray-400 hover:text-purple-400 transition text-sm">Complete Guide</Link>
              <Link href="/resources" className="text-gray-400 hover:text-purple-400 transition text-sm">All Resources</Link>
              <Link href="/about" className="text-gray-400 hover:text-purple-400 transition text-sm">About</Link>
            </div>
          </div>
          
          {/* Platform Comparisons */}
          <div>
            <h4 className="font-semibold text-white mb-4">AI Platforms</h4>
            <div className="flex flex-col gap-2">
              <Link href="/compare" className="text-purple-400 hover:text-purple-300 transition text-sm font-medium">
                All 171 Comparisons →
              </Link>
              {topPlatforms.map(platform => (
                <Link 
                  key={platform.slug}
                  href={`/platforms/${platform.slug}`} 
                  className="text-gray-400 hover:text-purple-400 transition text-sm"
                >
                  {platform.name} Guide
                </Link>
              ))}
            </div>
          </div>
          
          {/* Popular Comparisons */}
          <div>
            <h4 className="font-semibold text-white mb-4">Popular Comparisons</h4>
            <div className="flex flex-col gap-2">
              {popularComparisons.map(comp => (
                <Link 
                  key={comp.slug}
                  href={`/compare/${comp.slug}`} 
                  className="text-gray-400 hover:text-purple-400 transition text-sm"
                >
                  {comp.title}
                </Link>
              ))}
              <Link href="/compare" className="text-purple-400 hover:text-purple-300 transition text-sm font-medium mt-1">
                View All →
              </Link>
            </div>
          </div>
        </div>
        
        {/* SEO Links Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            <div>
              <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">OpenAI Models</h5>
              <div className="flex flex-col gap-1">
                <Link href="/compare/gpt-4o-vs-gpt-5" className="text-xs text-gray-600 hover:text-purple-400">GPT-4o vs GPT-5</Link>
                <Link href="/compare/gpt-4-5-vs-openai-o3" className="text-xs text-gray-600 hover:text-purple-400">GPT-4.5 vs o3</Link>
                <Link href="/compare/chatgpt-5-mini-vs-gpt-4o" className="text-xs text-gray-600 hover:text-purple-400">ChatGPT Mini vs GPT-4o</Link>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Google Models</h5>
              <div className="flex flex-col gap-1">
                <Link href="/compare/gemini-2-5-pro-vs-gemini-2-0-flash" className="text-xs text-gray-600 hover:text-purple-400">Gemini Pro vs Flash</Link>
                <Link href="/compare/gemini-2-5-pro-vs-gemma-3" className="text-xs text-gray-600 hover:text-purple-400">Gemini vs Gemma</Link>
                <Link href="/compare/gemini-2-0-flash-vs-gpt-4o" className="text-xs text-gray-600 hover:text-purple-400">Gemini Flash vs GPT-4o</Link>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Anthropic Models</h5>
              <div className="flex flex-col gap-1">
                <Link href="/compare/claude-4-1-opus-vs-claude-4-1-sonnet" className="text-xs text-gray-600 hover:text-purple-400">Opus vs Sonnet</Link>
                <Link href="/compare/claude-3-7-sonnet-vs-claude-4-1-opus" className="text-xs text-gray-600 hover:text-purple-400">Claude 3.7 vs 4.1</Link>
                <Link href="/compare/claude-4-1-opus-vs-gpt-5" className="text-xs text-gray-600 hover:text-purple-400">Claude vs GPT-5</Link>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Open Source</h5>
              <div className="flex flex-col gap-1">
                <Link href="/compare/llama-3-1-vs-llama-4" className="text-xs text-gray-600 hover:text-purple-400">Llama 3.1 vs 4</Link>
                <Link href="/compare/mistral-large-2-vs-llama-4" className="text-xs text-gray-600 hover:text-purple-400">Mistral vs Llama</Link>
                <Link href="/compare/qwen-2-5-vs-phi-4" className="text-xs text-gray-600 hover:text-purple-400">Qwen vs Phi-4</Link>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Reasoning Models</h5>
              <div className="flex flex-col gap-1">
                <Link href="/compare/deepseek-r1-vs-openai-o3" className="text-xs text-gray-600 hover:text-purple-400">DeepSeek vs o3</Link>
                <Link href="/compare/openai-o3-vs-claude-4-1-opus" className="text-xs text-gray-600 hover:text-purple-400">o3 vs Claude Opus</Link>
                <Link href="/compare/deepseek-r1-vs-gpt-5" className="text-xs text-gray-600 hover:text-purple-400">DeepSeek vs GPT-5</Link>
              </div>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Quick Links</h5>
              <div className="flex flex-col gap-1">
                <Link href="/platforms" className="text-xs text-gray-600 hover:text-purple-400">All Platforms</Link>
                <Link href="/industries" className="text-xs text-gray-600 hover:text-purple-400">Industries</Link>
                <Link href="/use-cases" className="text-xs text-gray-600 hover:text-purple-400">Use Cases</Link>
                <Link href="/tutorials" className="text-xs text-gray-600 hover:text-purple-400">Tutorials</Link>
                <Link href="/case-studies" className="text-xs text-gray-600 hover:text-purple-400">Case Studies</Link>
                <Link href="/benchmarks" className="text-xs text-gray-600 hover:text-purple-400">AI Benchmarks</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GEO Platform - Generative Engine Optimization. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Optimizing content for ChatGPT, Claude, Gemini, and 16 other AI platforms.
          </p>
        </div>
      </div>
    </footer>
  )
}