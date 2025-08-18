import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GEO Content Team - Expert Authors & Contributors',
  description: 'Meet the expert team behind GEO Platform. Our authors bring decades of combined experience in AI, SEO, and digital marketing.',
  alternates: {
    canonical: 'https://generative-engine.org/authors',
  },
}

const authors = [
  {
    id: 'sarah-chen',
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Strategy Officer',
    avatar: '👩‍🔬',
    bio: 'Former Google AI researcher with 10+ years in natural language processing and search algorithms. Published 20+ papers on semantic search and LLM optimization.',
    expertise: ['Natural Language Processing', 'Semantic Search', 'LLM Architecture', 'AI Strategy'],
    stats: {
      articles: 45,
      citations: 1200,
      yearsExperience: 12
    },
    social: {
      twitter: '@sarahchen_ai',
      linkedin: 'dr-sarah-chen',
      github: 'sarahchen'
    },
    achievements: [
      'PhD in Computer Science, Stanford University',
      'Former Google AI Research Lead',
      '20+ Published Papers on NLP',
      'TEDx Speaker on AI Search'
    ]
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    role: 'Head of SEO Engineering',
    avatar: '👨‍💻',
    bio: 'SEO veteran with 15 years of experience. Pioneered early GEO strategies at Fortune 500 companies. Speaks at major industry conferences.',
    expertise: ['Technical SEO', 'Content Strategy', 'GEO Implementation', 'Enterprise SEO'],
    stats: {
      articles: 62,
      citations: 2100,
      yearsExperience: 15
    },
    social: {
      twitter: '@mrodriguez_seo',
      linkedin: 'michael-rodriguez-seo',
      website: 'mrodriguez.com'
    },
    achievements: [
      '15+ Years in SEO',
      'Increased organic traffic by 400% for 3 Fortune 500s',
      'SearchEngineLand Contributor',
      'GEO Pioneer Award 2024'
    ]
  },
  {
    id: 'emily-watson',
    name: 'Emily Watson',
    role: 'Content Strategy Director',
    avatar: '👩‍💼',
    bio: 'Content marketing expert specializing in AI-optimized content creation. Developed GEO frameworks adopted by leading tech companies.',
    expertise: ['Content Marketing', 'AI Content Optimization', 'Brand Strategy', 'User Experience'],
    stats: {
      articles: 38,
      citations: 950,
      yearsExperience: 8
    },
    social: {
      twitter: '@emilywatson_content',
      linkedin: 'emily-watson-content'
    },
    achievements: [
      'Content Marketing Institute Award Winner',
      'Creator of GEO Content Framework',
      '100+ Successful AI Content Campaigns',
      'Marketing Week Top 30 Under 30'
    ]
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'AI Research Lead',
    avatar: '🧑‍🔬',
    bio: 'Machine learning engineer focused on generative AI and search systems. Former OpenAI contributor with expertise in GPT optimization.',
    expertise: ['Machine Learning', 'GPT Optimization', 'AI Systems', 'Data Science'],
    stats: {
      articles: 29,
      citations: 780,
      yearsExperience: 7
    },
    social: {
      twitter: '@davidkim_ml',
      github: 'davidkim-ai',
      linkedin: 'david-kim-ai'
    },
    achievements: [
      'MS in Machine Learning, MIT',
      'Former OpenAI Contributor',
      '10+ ML Patents',
      'ACM Distinguished Speaker'
    ]
  }
]

export default function AuthorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Expert Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our authors bring decades of combined experience in AI, SEO, and digital marketing. 
            Every article is crafted by experts who live and breathe generative engine optimization.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">174</div>
            <div className="text-gray-600">Articles Published</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5,030</div>
            <div className="text-gray-600">Total Citations</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">42</div>
            <div className="text-gray-600">Years Combined Experience</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
            <div className="text-gray-600">Industry Awards</div>
          </div>
        </div>

        {/* Author Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {authors.map((author) => (
            <div key={author.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-6">{author.avatar}</div>
                  <div className="flex-1">
                    <Link href={`/authors/${author.id}`} className="hover:text-green-600">
                      <h2 className="text-2xl font-bold mb-1">{author.name}</h2>
                    </Link>
                    <p className="text-gray-600 mb-2">{author.role}</p>
                    <div className="flex space-x-4 text-sm">
                      {author.social.twitter && (
                        <a href={`https://twitter.com/${author.social.twitter.replace('@', '')}`} 
                           className="text-blue-500 hover:text-blue-600">
                          Twitter
                        </a>
                      )}
                      {author.social.linkedin && (
                        <a href={`https://linkedin.com/in/${author.social.linkedin}`} 
                           className="text-blue-700 hover:text-blue-800">
                          LinkedIn
                        </a>
                      )}
                      {author.social.github && (
                        <a href={`https://github.com/${author.social.github}`} 
                           className="text-gray-700 hover:text-gray-900">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{author.bio}</p>

                {/* Author Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{author.stats.articles}</div>
                    <div className="text-sm text-gray-600">Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{author.stats.citations}</div>
                    <div className="text-sm text-gray-600">Citations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{author.stats.yearsExperience}</div>
                    <div className="text-sm text-gray-600">Years Exp.</div>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements</h3>
                  <ul className="space-y-1">
                    {author.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Link 
                    href={`/authors/${author.id}`}
                    className="text-green-600 hover:text-green-700 font-semibold text-sm"
                  >
                    View Full Profile & Articles →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Trust Our Team?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-semibold mb-2">Academic Excellence</h3>
              <p className="text-sm text-gray-600">
                PhDs and Masters degrees from Stanford, MIT, and other top universities
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-semibold mb-2">Industry Experience</h3>
              <p className="text-sm text-gray-600">
                Former employees of Google, OpenAI, Microsoft, and leading tech companies
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold mb-2">Recognized Experts</h3>
              <p className="text-sm text-gray-600">
                Conference speakers, published authors, and industry award winners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}