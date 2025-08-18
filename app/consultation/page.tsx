import { Metadata } from 'next'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Book GEO Strategy Consultation | Expert Generative Engine Optimization Guidance',
  description: 'Schedule a personalized consultation with our GEO experts. Get custom strategy development, implementation roadmap, and optimization guidance for your business.',
  keywords: 'GEO consultation, generative engine optimization strategy, AI platform optimization consulting, expert GEO guidance',
}

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "GEO Strategy Consultation",
  "description": "Personalized Generative Engine Optimization strategy development and implementation guidance",
  "provider": {
    "@type": "Organization",
    "name": "Generative Engine Optimization",
    "url": "https://generative-engine.org"
  },
  "serviceType": "Consulting",
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Online consultation",
    "availableLanguage": "English"
  }
}

export default function ConsultationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      
      <div className="container mx-auto px-6 py-8">
        <Breadcrumbs 
          items={[
            { name: 'Home', href: '/' },
            { name: 'Consultation', href: '/consultation' }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              Expert Strategy Session
            </div>
            
            <h1 className="text-4xl font-bold mb-6">Book Your GEO Strategy Consultation</h1>
            <p className="text-xl text-gray-600">
              Get personalized guidance from our Generative Engine Optimization experts. 
              Develop a custom strategy that drives real results for your business.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">What You'll Get</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive AI Platform Analysis</h3>
                    <p className="text-gray-600 text-sm">
                      Deep dive into your current visibility across ChatGPT, Claude, Perplexity, 
                      and other major AI platforms. Identify gaps and opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Custom GEO Strategy Development</h3>
                    <p className="text-gray-600 text-sm">
                      Tailored optimization roadmap based on your industry, target audience, 
                      and business goals. Platform-specific tactics and content recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Implementation Roadmap</h3>
                    <p className="text-gray-600 text-sm">
                      Step-by-step action plan with timelines, priorities, and success metrics. 
                      Resource requirements and team assignments clearly defined.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Competitive Intelligence</h3>
                    <p className="text-gray-600 text-sm">
                      Analysis of how competitors are performing in AI platforms and 
                      strategies to gain competitive advantage through superior GEO.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Consultation Options</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-blue-800">Strategy Session</h3>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">60 min</span>
                  </div>
                  <p className="text-blue-700 mb-4 text-sm">
                    Perfect for businesses ready to implement GEO but need expert guidance on strategy and priorities.
                  </p>
                  <ul className="text-blue-600 text-sm space-y-1 mb-4">
                    <li>• Current state analysis</li>
                    <li>• Custom GEO strategy</li>
                    <li>• Implementation roadmap</li>
                    <li>• Q&A and guidance</li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Book Strategy Session
                  </button>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-green-800">Deep Dive Analysis</h3>
                    <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">90 min</span>
                  </div>
                  <p className="text-green-700 mb-4 text-sm">
                    Comprehensive analysis for enterprises and complex websites requiring detailed competitive intelligence.
                  </p>
                  <ul className="text-green-600 text-sm space-y-1 mb-4">
                    <li>• Comprehensive audit</li>
                    <li>• Competitive analysis</li>
                    <li>• Multi-platform strategy</li>
                    <li>• Technical implementation guide</li>
                    <li>• Follow-up support</li>
                  </ul>
                  <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Book Deep Dive Session
                  </button>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-purple-800">Quick Assessment</h3>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold">30 min</span>
                  </div>
                  <p className="text-purple-700 mb-4 text-sm">
                    Fast evaluation for businesses exploring GEO opportunities and quick wins.
                  </p>
                  <ul className="text-purple-600 text-sm space-y-1 mb-4">
                    <li>• Current visibility assessment</li>
                    <li>• Quick win identification</li>
                    <li>• High-level recommendations</li>
                    <li>• Next steps guidance</li>
                  </ul>
                  <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Book Quick Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Perfect for These Industries</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-3">SaaS & Technology</h3>
                <p className="text-gray-600 text-sm mb-4">
                  AI platforms are critical for tech companies. Our experts understand the unique challenges 
                  of optimizing technical content for AI comprehension.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Developer tool optimization</li>
                  <li>• Technical documentation GEO</li>
                  <li>• API and integration guides</li>
                  <li>• Product comparison strategies</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-3">E-commerce & Retail</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Product discovery through AI is exploding. Get ahead with strategies that 
                  put your products in AI recommendations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Product description optimization</li>
                  <li>• Review and rating integration</li>
                  <li>• Comparison table strategies</li>
                  <li>• Shopping guide optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Professional Services</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Build authority and trust in AI platforms. Position your expertise 
                  where potential clients are seeking advice.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Thought leadership content</li>
                  <li>• Case study optimization</li>
                  <li>• FAQ and Q&A strategies</li>
                  <li>• Authority signal building</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-800 font-bold">SM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Martinez</h4>
                    <p className="text-sm text-gray-600">VP Marketing, TechFlow</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">
                  "The consultation transformed our content strategy. We went from 12% AI platform 
                  visibility to 78% in just 4 months. The ROI has been incredible."
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-800 font-bold">MK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Kim</h4>
                    <p className="text-sm text-gray-600">Founder, DataMind Solutions</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic">
                  "Finally, someone who understands both technical SEO and AI optimization. 
                  The strategic roadmap was exactly what we needed to prioritize our efforts."
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">How quickly can I see results from GEO optimization?</h3>
                <p className="text-gray-600 text-sm">
                  Initial improvements often appear within 2-4 weeks, with significant gains typically 
                  visible within 2-3 months. Results depend on content quality, implementation speed, 
                  and competition in your space.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Do you provide ongoing support after the consultation?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we offer follow-up support options including monthly strategy reviews, 
                  implementation assistance, and performance monitoring. We'll discuss these 
                  during your consultation based on your needs.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">What if my industry is highly technical or niche?</h3>
                <p className="text-gray-600 text-sm">
                  Our experts have experience across diverse industries including highly technical 
                  fields. We adapt our strategies to your specific domain, audience, and the unique 
                  ways AI platforms handle your industry's content.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Can you help with international or multi-language optimization?</h3>
                <p className="text-gray-600 text-sm">
                  Absolutely. We provide guidance on optimizing for AI platforms in different regions 
                  and languages, including cultural considerations and platform preferences that vary by geography.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Dominate AI Platform Visibility?</h2>
            <p className="text-gray-600 mb-6">
              Book your consultation today and get the strategic advantage your business needs 
              in the age of AI-powered search and recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
              <a 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us First
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Free 15-minute discovery call available to discuss your specific needs
            </p>
          </section>
        </div>
      </div>
    </>
  )
}