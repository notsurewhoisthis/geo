import { Metadata } from 'next'
import { Breadcrumbs } from '@/app/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'GEO Academy | Comprehensive Generative Engine Optimization Training',
  description: 'Master Generative Engine Optimization with our comprehensive academy. Structured courses, certifications, and hands-on training for AI platform optimization.',
  keywords: 'GEO academy, AI optimization training, GEO certification, ChatGPT optimization course, Claude AI training, Perplexity optimization education',
  openGraph: {
    title: 'GEO Academy | Comprehensive Training & Certification',
    description: 'Master Generative Engine Optimization with structured courses and certifications',
    url: 'https://generative-engine.org/academy',
    type: 'website',
  },
}

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Academy', href: '/academy' }
          ]}
        />
        
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              GEO Academy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master Generative Engine Optimization with comprehensive courses, certifications, and hands-on training programs designed for professionals.
            </p>
          </header>

          {/* Hero Stats */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-xl p-8 border border-purple-500/20">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">2,500+</div>
                  <div className="text-gray-300">Students Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">97%</div>
                  <div className="text-gray-300">Completion Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">12</div>
                  <div className="text-gray-300">Comprehensive Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.9★</div>
                  <div className="text-gray-300">Average Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* Certification Programs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Certification Programs</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-800/40 to-teal-800/40 rounded-xl p-8 border border-green-500/20 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">POPULAR</span>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">🎓</span>
                  <h3 className="text-2xl font-bold text-white mb-2">GEO Fundamentals</h3>
                  <p className="text-gray-300">Master the basics of Generative Engine Optimization</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Understanding AI Platforms</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Content Optimization Strategies</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Citation & Source Management</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Performance Measurement</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">$299</div>
                  <div className="text-gray-300 mb-4">6 weeks • Self-paced</div>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-800/40 to-purple-800/40 rounded-xl p-8 border border-blue-500/20 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">ADVANCED</span>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">🚀</span>
                  <h3 className="text-2xl font-bold text-white mb-2">GEO Professional</h3>
                  <p className="text-gray-300">Advanced strategies for enterprise implementation</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Multi-Platform Optimization</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Enterprise Strategy Development</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Advanced Analytics & ROI</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-blue-400 mr-2">✓</span>
                    <span>Team Leadership & Training</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">$799</div>
                  <div className="text-gray-300 mb-4">10 weeks • Instructor-led</div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-xl p-8 border border-purple-500/20 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">EXPERT</span>
                </div>
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">👑</span>
                  <h3 className="text-2xl font-bold text-white mb-2">GEO Master</h3>
                  <p className="text-gray-300">Become a certified GEO consultant and trainer</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span>Consultant-Level Expertise</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span>Research & Case Study Development</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span>Industry Thought Leadership</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span>
                    <span>Training Certification Program</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">$1,499</div>
                  <div className="text-gray-300 mb-4">16 weeks • Mentorship</div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Courses */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Specialized Courses</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 rounded-xl p-6 border border-orange-500/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🤖</span>
                  <h3 className="text-xl font-bold text-white">ChatGPT Optimization Specialist</h3>
                </div>
                <p className="text-gray-300 mb-4">Deep dive into ChatGPT-specific optimization techniques and strategies.</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">4 weeks • $199</span>
                  <span className="text-orange-400 font-semibold">Available Now</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🧠</span>
                  <h3 className="text-xl font-bold text-white">Claude AI Mastery</h3>
                </div>
                <p className="text-gray-300 mb-4">Master Claude AI optimization with advanced constitutional AI principles.</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">4 weeks • $199</span>
                  <span className="text-cyan-400 font-semibold">Available Now</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-violet-800/30 to-purple-800/30 rounded-xl p-6 border border-violet-500/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔍</span>
                  <h3 className="text-xl font-bold text-white">Perplexity Citation Excellence</h3>
                </div>
                <p className="text-gray-300 mb-4">Advanced citation strategies for maximum Perplexity AI visibility.</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">3 weeks • $149</span>
                  <span className="text-violet-400 font-semibold">Coming Soon</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-800/30 to-orange-800/30 rounded-xl p-6 border border-yellow-500/20">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📊</span>
                  <h3 className="text-xl font-bold text-white">GEO Analytics & Measurement</h3>
                </div>
                <p className="text-gray-300 mb-4">Comprehensive training on GEO performance tracking and optimization.</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">5 weeks • $249</span>
                  <span className="text-yellow-400 font-semibold">Available Now</span>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Format Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Learning Formats</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <span className="text-3xl mb-4 block">🏠</span>
                <h3 className="text-xl font-bold text-white mb-3">Self-Paced Online</h3>
                <p className="text-gray-300 mb-4">Learn at your own speed with lifetime access to course materials.</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Video lessons & tutorials</li>
                  <li>• Interactive exercises</li>
                  <li>• Downloadable resources</li>
                  <li>• Community forum access</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <span className="text-3xl mb-4 block">👥</span>
                <h3 className="text-xl font-bold text-white mb-3">Live Cohorts</h3>
                <p className="text-gray-300 mb-4">Join scheduled cohorts with live instruction and peer interaction.</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Live weekly sessions</li>
                  <li>• Group projects & collaboration</li>
                  <li>• Real-time Q&A with instructors</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <span className="text-3xl mb-4 block">🎯</span>
                <h3 className="text-xl font-bold text-white mb-3">1-on-1 Mentorship</h3>
                <p className="text-gray-300 mb-4">Personalized training with expert GEO practitioners and consultants.</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Personalized curriculum</li>
                  <li>• Direct mentor access</li>
                  <li>• Custom project guidance</li>
                  <li>• Career advancement support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Instructor Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Expert Instructors</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-xl p-6 border border-purple-500/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  DR
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Dr. Sarah Chen</h3>
                <p className="text-purple-300 mb-3">Lead GEO Researcher</p>
                <p className="text-gray-300 text-sm">Pioneer in Generative Engine Optimization with 8+ years in AI research.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 rounded-xl p-6 border border-green-500/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  MJ
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Marcus Johnson</h3>
                <p className="text-green-300 mb-3">Enterprise GEO Consultant</p>
                <p className="text-gray-300 text-sm">Former Google AI strategist specializing in large-scale optimization.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 rounded-xl p-6 border border-orange-500/20 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                  LP
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lisa Patel</h3>
                <p className="text-orange-300 mb-3">Technical Implementation Expert</p>
                <p className="text-gray-300 text-sm">Expert in schema markup and technical GEO implementation.</p>
              </div>
            </div>
          </section>

          {/* Student Success Stories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Student Success Stories</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AK
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Alex Kim</h4>
                    <p className="text-gray-400 text-sm">Marketing Director at TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The GEO Fundamentals course transformed our content strategy. We saw a 65% increase in AI platform visibility within 3 months."
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    RG
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Rachel Green</h4>
                    <p className="text-gray-400 text-sm">SEO Consultant</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "The Professional certification opened new consulting opportunities. My clients are seeing incredible results with GEO implementation."
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your GEO Journey?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of professionals who have mastered Generative Engine Optimization through our comprehensive academy programs.
              </p>
              <div className="space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg">
                  View All Courses
                </button>
                <button className="border border-purple-500 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
                  Schedule Consultation
                </button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  💰 30-day money-back guarantee • 🎓 Industry-recognized certifications • 🌟 Lifetime access to updates
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}