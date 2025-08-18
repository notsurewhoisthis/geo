import { Metadata } from 'next'
import { Suspense } from 'react'
import { languages, localeContent } from '@/app/lib/i18n-config'

interface ComingSoonPageProps {
  searchParams: Promise<{ lang?: string }>
}

export const metadata: Metadata = {
  title: 'Coming Soon | Generative Engine Optimization',
  description: 'This language version of our GEO platform is coming soon. Currently available in English with more languages on the way.',
  robots: 'noindex, nofollow',
}

async function ComingSoonContent({ searchParams }: ComingSoonPageProps) {
  const resolvedSearchParams = await searchParams
  const langCode = resolvedSearchParams.lang || 'en'
  const language = languages.find(lang => lang.code === langCode)
  const content = localeContent[langCode as keyof typeof localeContent] || localeContent['en']
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl mb-6 block">🚀</span>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're working hard to bring Generative Engine Optimization to more languages.
            </p>
          </div>

          {language && (
            <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-xl p-8 border border-purple-500/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {language.nativeName} ({language.name})
              </h2>
              <p className="text-gray-300 mb-6">
                The {language.name} version of our platform is currently under development. 
                We're committed to providing the same high-quality GEO content and tools in your language.
              </p>
              
              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-white mb-3">What to expect:</h3>
                <ul className="text-gray-300 space-y-2 text-left max-w-md mx-auto">
                  <li>• Comprehensive GEO guides in {language.name}</li>
                  <li>• Localized content optimization strategies</li>
                  <li>• Regional AI platform insights</li>
                  <li>• Native language customer support</li>
                </ul>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4">
                Be the first to know when we launch in your language.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                Notify Me
              </button>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Available Now</h3>
              <p className="text-gray-300 mb-4">
                Access our complete GEO platform in English.
              </p>
              <a 
                href="https://generative-engine.org" 
                className="inline-block border border-purple-500 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
              >
                Visit English Site
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              🌍 Planned languages: German, Spanish, French, Italian, Portuguese, Japanese, Chinese, Korean, and more
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ComingSoonPage(props: ComingSoonPageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <ComingSoonContent {...props} />
    </Suspense>
  )
}