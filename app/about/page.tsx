import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About GEO Platform - Leaders in Generative Engine Optimization',
  description: 'Learn about the GEO Platform team, our mission to democratize Generative Engine Optimization knowledge, and our expertise in AI-powered search optimization.',
  keywords: 'GEO team, generative engine optimization experts, AI SEO specialists, ChatGPT optimization, about GEO platform',
  openGraph: {
    title: 'About GEO Platform',
    description: 'Meet the experts behind the leading Generative Engine Optimization platform',
    url: 'https://generative-engine.org/about',
    type: 'website',
  },
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'GEO Research Team',
      role: 'Content & Strategy',
      bio: 'Pioneering research in Generative Engine Optimization with focus on LLM behavior and content optimization strategies.',
      expertise: ['GEO Strategy', 'AI Content', 'LLM Research'],
    },
    {
      name: 'Technical Team',
      role: 'Platform Development',
      bio: 'Building cutting-edge tools and platforms for GEO implementation and measurement.',
      expertise: ['AI Integration', 'Analytics', 'Automation'],
    },
  ]

  const stats = [
    { label: 'Articles Published', value: '100+', description: 'In-depth GEO guides' },
    { label: 'AI Visibility Boost', value: '40%', description: 'Average improvement' },
    { label: 'Active Readers', value: '50K+', description: 'Monthly visitors' },
    { label: 'Industry First', value: '2024', description: 'GEO Platform launch' },
  ]

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'GEO Platform',
      description: 'Leading platform for Generative Engine Optimization education and implementation',
      foundingDate: '2024',
      knowsAbout: [
        'Generative Engine Optimization',
        'AI SEO',
        'ChatGPT Optimization',
        'Claude Optimization',
        'Perplexity AI',
        'LLM Content Strategy',
      ],
      areaServed: {
        '@type': 'Place',
        name: 'Global',
      },
      member: teamMembers.map(member => ({
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        knowsAbout: member.expertise,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About GEO Platform
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              We're pioneering the field of Generative Engine Optimization, helping businesses and content creators maximize their visibility in AI-powered search results.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4">
                  As AI-powered search engines like ChatGPT, Claude, and Perplexity reshape how people find information, traditional SEO is no longer enough. We're here to bridge that gap.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our mission is to democratize Generative Engine Optimization knowledge, providing cutting-edge strategies, tools, and insights that help content creators thrive in the AI era.
                </p>
                <p className="text-lg text-gray-700">
                  With over 400 million ChatGPT users and growing adoption of AI search, GEO isn't just the future—it's the present.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why GEO Matters</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">Traditional SEO doesn't optimize for LLM retrieval</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">AI search prioritizes different ranking factors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">40% visibility boost with proper GEO implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700">First-mover advantage in emerging search landscape</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Platform Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">GEO Strategy</h3>
                <p className="text-gray-700">
                  Developing comprehensive strategies for optimizing content across all major AI platforms including ChatGPT, Claude, and Perplexity.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Analysis</h3>
                <p className="text-gray-700">
                  Conducting ongoing research into LLM behavior, ranking factors, and optimization techniques based on academic studies and real-world testing.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
                <p className="text-gray-700">
                  Providing practical, actionable guidance for implementing GEO strategies that deliver measurable improvements in AI visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-gray-50" id="team">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-700 mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Master GEO?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of marketers and content creators who are already optimizing for AI-powered search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Read Our Guides
              </Link>
              <Link 
                href="/glossary"
                className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition"
              >
                Learn GEO Terms
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}