import Link from 'next/link'

export default function PlatformComparisonsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="container-blog">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400 text-purple-900 rounded-full text-sm font-bold mb-6 animate-pulse">
            🆕 NEW: 171 AI Platform Comparisons
          </div>
          <h2 className="section-title text-white mb-4">AI Platform Optimization Battleground</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Compare optimization strategies across 19 leading AI platforms. 
            Learn how to maximize visibility on ChatGPT, Claude, Gemini, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              19 AI Platforms
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              171 Unique Comparisons
            </span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              Real-Time Optimization Data
            </span>
          </div>
        </div>
        
        {/* Featured Platform Battles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🔥 Hot Platform Battles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Top Comparisons */}
            <Link href="/compare/gpt-4o-vs-claude-4-1-opus" className="block bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-lg p-6 hover:from-orange-500/30 hover:to-red-500/30 transition-all hover:scale-105 border border-orange-400/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-orange-300 uppercase">Most Popular</span>
                <span className="text-2xl">⚔️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">GPT-4o vs Claude 4.1 Opus</h3>
              <p className="text-gray-300 mb-4">OpenAI's multimodal champion vs Anthropic's reasoning powerhouse</p>
              <div className="flex items-center justify-between">
                <span className="text-orange-300 font-semibold">Compare Now →</span>
                <span className="text-xs text-gray-400">2,341 views</span>
              </div>
            </Link>
            
            <Link href="/compare/gemini-2-5-pro-vs-gpt-5" className="block bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-6 hover:from-blue-500/30 hover:to-purple-500/30 transition-all hover:scale-105 border border-blue-400/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-300 uppercase">Future Tech</span>
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Gemini 2.5 Pro vs GPT-5</h3>
              <p className="text-gray-300 mb-4">Google's latest vs OpenAI's next-gen model optimization</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-300 font-semibold">Compare Now →</span>
                <span className="text-xs text-gray-400">1,892 views</span>
              </div>
            </Link>
            
            <Link href="/compare/deepseek-r1-vs-openai-o3" className="block bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-lg p-6 hover:from-green-500/30 hover:to-teal-500/30 transition-all hover:scale-105 border border-green-400/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-green-300 uppercase">Reasoning Focus</span>
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">DeepSeek-R1 vs OpenAI o3</h3>
              <p className="text-gray-300 mb-4">Advanced reasoning models for complex problem-solving</p>
              <div className="flex items-center justify-between">
                <span className="text-green-300 font-semibold">Compare Now →</span>
                <span className="text-xs text-gray-400">1,456 views</span>
              </div>
            </Link>
            
            <Link href="/compare/llama-3-1-vs-llama-4" className="block bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-6 hover:from-purple-500/30 hover:to-pink-500/30 transition-all hover:scale-105 border border-purple-400/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-purple-300 uppercase">Open Source</span>
                <span className="text-2xl">🦙</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Llama 3.1 vs Llama 4</h3>
              <p className="text-gray-300 mb-4">Meta's open-source evolution in optimization requirements</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-300 font-semibold">Compare Now →</span>
                <span className="text-xs text-gray-400">1,234 views</span>
              </div>
            </Link>
            
            <Link href="/compare/claude-4-1-sonnet-vs-gemini-2-0-flash" className="block bg-gradient-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-sm rounded-lg p-6 hover:from-yellow-500/30 hover:to-amber-500/30 transition-all hover:scale-105 border border-yellow-400/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-yellow-300 uppercase">Speed vs Balance</span>
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Claude Sonnet vs Gemini Flash</h3>
              <p className="text-gray-300 mb-4">Balanced performance vs speed-optimized approaches</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-300 font-semibold">Compare Now →</span>
                <span className="text-xs text-gray-400">987 views</span>
              </div>
            </Link>
            
            <Link href="/compare/mistral-large-2-vs-qwen2-5" className="block bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg p-6 hover:from-indigo-500/30 hover:to-cyan-500/30 transition-all hover:scale-105 border border-indigo-400/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-indigo-300 uppercase">Global Models</span>
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mistral vs Qwen2.5</h3>
              <p className="text-gray-300 mb-4">European vs Asian model optimization differences</p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-300 font-semibold">Compare Now →</span>
                <span className="text-xs text-gray-400">765 views</span>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Platform Categories Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Compare by Platform Category</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">🎯</span> OpenAI Models
              </h4>
              <ul className="space-y-2">
                <li><Link href="/compare/gpt-4o-vs-gpt-5" className="text-gray-300 hover:text-white text-sm transition">GPT-4o vs GPT-5</Link></li>
                <li><Link href="/compare/gpt-4-5-vs-chatgpt-5-mini" className="text-gray-300 hover:text-white text-sm transition">GPT-4.5 vs ChatGPT 5 Mini</Link></li>
                <li><Link href="/compare/openai-o3-vs-gpt-5" className="text-gray-300 hover:text-white text-sm transition">OpenAI o3 vs GPT-5</Link></li>
                <li><Link href="/compare/gpt-4o-vs-gpt-4-5" className="text-gray-300 hover:text-white text-sm transition">GPT-4o vs GPT-4.5</Link></li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">🔮</span> Google Gemini
              </h4>
              <ul className="space-y-2">
                <li><Link href="/compare/gemini-2-5-pro-vs-gemini-2-0-flash" className="text-gray-300 hover:text-white text-sm transition">Gemini 2.5 Pro vs 2.0 Flash</Link></li>
                <li><Link href="/compare/gemini-2-5-pro-vs-gemma-3" className="text-gray-300 hover:text-white text-sm transition">Gemini Pro vs Gemma 3</Link></li>
                <li><Link href="/compare/gemini-2-0-flash-vs-nova-pro" className="text-gray-300 hover:text-white text-sm transition">Gemini Flash vs Nova Pro</Link></li>
                <li><Link href="/compare/gemini-2-5-pro-vs-claude-4-1-opus" className="text-gray-300 hover:text-white text-sm transition">Gemini vs Claude Opus</Link></li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">🎭</span> Anthropic Claude
              </h4>
              <ul className="space-y-2">
                <li><Link href="/compare/claude-4-1-opus-vs-claude-4-1-sonnet" className="text-gray-300 hover:text-white text-sm transition">Claude Opus vs Sonnet</Link></li>
                <li><Link href="/compare/claude-3-7-sonnet-vs-claude-4-1-sonnet" className="text-gray-300 hover:text-white text-sm transition">Claude 3.7 vs 4.1 Sonnet</Link></li>
                <li><Link href="/compare/claude-4-1-opus-vs-gpt-5" className="text-gray-300 hover:text-white text-sm transition">Claude Opus vs GPT-5</Link></li>
                <li><Link href="/compare/claude-3-7-sonnet-vs-gpt-4o" className="text-gray-300 hover:text-white text-sm transition">Claude 3.7 vs GPT-4o</Link></li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">🌟</span> Open Source & More
              </h4>
              <ul className="space-y-2">
                <li><Link href="/compare/llama-3-1-vs-llama-4" className="text-gray-300 hover:text-white text-sm transition">Llama 3.1 vs Llama 4</Link></li>
                <li><Link href="/compare/mistral-large-2-vs-qwen2-5" className="text-gray-300 hover:text-white text-sm transition">Mistral vs Qwen2.5</Link></li>
                <li><Link href="/compare/deepseek-r1-vs-phi-4" className="text-gray-300 hover:text-white text-sm transition">DeepSeek-R1 vs Phi-4</Link></li>
                <li><Link href="/compare/grok-4-vs-nova-pro" className="text-gray-300 hover:text-white text-sm transition">Grok 4 vs Nova Pro</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Quick Comparison Matrix */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Comparison Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-sm rounded-lg">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-4 text-white">Model</th>
                  <th className="text-center p-4 text-white">Best For</th>
                  <th className="text-center p-4 text-white">Optimization Priority</th>
                  <th className="text-center p-4 text-white">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-gray-300">GPT-4o</td>
                  <td className="p-4 text-center text-gray-300">Multimodal Content</td>
                  <td className="p-4 text-center text-gray-300">Visual + Text</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Medium</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-gray-300">Claude 4.1 Opus</td>
                  <td className="p-4 text-center text-gray-300">Complex Reasoning</td>
                  <td className="p-4 text-center text-gray-300">Citations + Logic</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs">Hard</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-gray-300">Gemini 2.5 Pro</td>
                  <td className="p-4 text-center text-gray-300">Long Context</td>
                  <td className="p-4 text-center text-gray-300">Structure + Depth</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Medium</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 text-gray-300">DeepSeek-R1</td>
                  <td className="p-4 text-center text-gray-300">Math & Code</td>
                  <td className="p-4 text-center text-gray-300">Technical Accuracy</td>
                  <td className="p-4 text-center"><span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Easy</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">19</div>
              <div className="text-sm text-gray-300">AI Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-1">171</div>
              <div className="text-sm text-gray-300">Comparisons</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Optimization Tips</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">Daily</div>
              <div className="text-sm text-gray-300">Updates</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/compare" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-10 py-5 rounded-lg font-bold text-xl hover:from-yellow-300 hover:to-orange-300 transition-all hover:scale-105 shadow-xl">
            Explore All 171 Platform Comparisons →
          </Link>
          <p className="text-gray-400 text-sm mt-4">Find the perfect optimization strategy for your AI platform mix</p>
        </div>
      </div>
    </section>
  )
}