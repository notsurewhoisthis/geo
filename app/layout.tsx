import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://generative-engine.org'),
  title: {
    default: 'GEO - Generative Engine Optimization | AI SEO Platform',
    template: '%s | GEO Platform'
  },
  description: 'Master Generative Engine Optimization (GEO) with cutting-edge strategies for ChatGPT, Claude, Perplexity, and AI-powered search. Learn how to optimize content for LLMs and boost AI visibility by 40%.',
  keywords: 'generative engine optimization, GEO, AI SEO, ChatGPT optimization, Claude optimization, Perplexity AI, LLM optimization, AI content optimization, AI search visibility, generative AI marketing',
  authors: [{ name: 'GEO Content Team', url: 'https://generative-engine.org/about' }],
  creator: 'GEO Platform',
  publisher: 'GEO Platform',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://generative-engine.org',
    types: {
      'application/rss+xml': [
        { url: '/feed.xml', title: 'GEO Platform RSS Feed' },
        { url: '/rss.xml', title: 'GEO Platform RSS Feed' }
      ]
    }
  },
  openGraph: {
    title: 'GEO - Generative Engine Optimization Platform',
    description: 'Master the art of Generative Engine Optimization with cutting-edge strategies for AI-powered search. Boost your AI visibility by 40%.',
    url: 'https://generative-engine.org',
    siteName: 'GEO Platform',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GEO - Generative Engine Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO - Generative Engine Optimization Platform',
    description: 'Master Generative Engine Optimization for ChatGPT, Claude, and AI search. Boost visibility by 40%.',
    images: ['/twitter-image.png'],
    creator: '@geoplatform',
    site: '@geoplatform',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GEO Platform',
    alternateName: 'Generative Engine Optimization Platform',
    url: 'https://generative-engine.org',
    logo: 'https://generative-engine.org/logo.png',
    description: 'Leading platform for Generative Engine Optimization (GEO) education and resources',
    sameAs: [
      'https://twitter.com/geoplatform',
      'https://linkedin.com/company/geoplatform',
      'https://github.com/geoplatform'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@generative-engine.org',
      url: 'https://generative-engine.org/contact'
    },
    foundingDate: '2024',
    knowsAbout: [
      'Generative Engine Optimization',
      'AI SEO',
      'ChatGPT Optimization',
      'LLM Optimization',
      'AI Content Strategy'
    ],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'GEO Education and Resources',
        description: 'Free educational content about Generative Engine Optimization'
      }
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'GEO Platform',
    url: 'https://generative-engine.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://generative-engine.org/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="GEO Platform RSS Feed" href="/feed.xml" />
        <link rel="alternate" type="application/rss+xml" title="GEO Platform RSS Feed" href="/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}