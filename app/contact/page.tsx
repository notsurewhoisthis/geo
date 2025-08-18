import { Metadata } from 'next'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact Our GEO Experts | Generative Engine Optimization Consultation',
  description: 'Get expert guidance on Generative Engine Optimization strategy. Contact our team for personalized consultation, technical support, and custom GEO implementation.',
  keywords: 'GEO consultation, generative engine optimization experts, AI platform optimization help, GEO strategy consultation',
}

const jsonLdContact = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Generative Engine Optimization",
    "url": "https://generative-engine.org",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hello@generative-engine.org",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint", 
        "contactType": "technical support",
        "email": "support@generative-engine.org",
        "availableLanguage": "English"
      }
    ]
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />
      
      <div className="container mx-auto px-6 py-8">
        <Breadcrumbs 
          items={[
            { name: 'Home', href: '/' },
            { name: 'Contact', href: '/contact' }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Contact Our GEO Experts</h1>
            <p className="text-xl text-gray-600">
              Ready to optimize for AI platforms? Get personalized guidance from our 
              Generative Engine Optimization specialists.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get Expert Consultation</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Strategy Consultation</h3>
                  <p className="text-blue-700 mb-4">
                    Personalized GEO strategy development for your specific industry and goals.
                  </p>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• AI platform analysis and optimization roadmap</li>
                    <li>• Content audit and recommendations</li>
                    <li>• Competitive GEO analysis</li>
                    <li>• Implementation timeline and priorities</li>
                  </ul>
                  <a 
                    href="/consultation" 
                    className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Book Consultation
                  </a>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Technical Support</h3>
                  <p className="text-green-700 mb-4">
                    Implementation guidance and technical assistance for GEO optimization.
                  </p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Schema markup and structured data</li>
                    <li>• Content formatting for AI platforms</li>
                    <li>• Technical SEO and GEO integration</li>
                    <li>• Performance monitoring and optimization</li>
                  </ul>
                  <a 
                    href="mailto:support@generative-engine.org" 
                    className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Get Technical Help
                  </a>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-purple-800">Custom Solutions</h3>
                  <p className="text-purple-700 mb-4">
                    Enterprise-level GEO implementations and custom optimization solutions.
                  </p>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Enterprise GEO strategy development</li>
                    <li>• Custom tool development and integration</li>
                    <li>• Team training and workshops</li>
                    <li>• Ongoing optimization and monitoring</li>
                  </ul>
                  <a 
                    href="mailto:enterprise@generative-engine.org" 
                    className="inline-block mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Discuss Enterprise Needs
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">General Inquiries</h3>
                  <p className="text-gray-600 mb-2">
                    Questions about GEO, our tools, or general support
                  </p>
                  <a 
                    href="mailto:hello@generative-engine.org" 
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    hello@generative-engine.org
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Support</h3>
                  <p className="text-gray-600 mb-2">
                    Implementation help, bug reports, and technical questions
                  </p>
                  <a 
                    href="mailto:support@generative-engine.org" 
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    support@generative-engine.org
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Enterprise & Partnerships</h3>
                  <p className="text-gray-600 mb-2">
                    Large-scale implementations and business partnerships
                  </p>
                  <a 
                    href="mailto:enterprise@generative-engine.org" 
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    enterprise@generative-engine.org
                  </a>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Response Times</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>General inquiries:</strong> Within 24 hours</li>
                    <li>• <strong>Technical support:</strong> Within 12 hours</li>
                    <li>• <strong>Enterprise requests:</strong> Within 4 hours</li>
                    <li>• <strong>Urgent issues:</strong> Same day response</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Quick Start Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/getting-started" className="text-blue-600 hover:text-blue-800">
                        → Getting Started Guide
                      </a>
                    </li>
                    <li>
                      <a href="/tools/geo-audit" className="text-blue-600 hover:text-blue-800">
                        → Free GEO Audit Tool
                      </a>
                    </li>
                    <li>
                      <a href="/glossary" className="text-blue-600 hover:text-blue-800">
                        → GEO Terminology Guide
                      </a>
                    </li>
                    <li>
                      <a href="/guide" className="text-blue-600 hover:text-blue-800">
                        → Complete Implementation Guide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Prefer Self-Service?</h2>
              <p className="text-gray-600 mb-6">
                Explore our comprehensive resources and tools to get started with GEO optimization immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/tools" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore GEO Tools
                </a>
                <a 
                  href="/guide" 
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Read Implementation Guide
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}