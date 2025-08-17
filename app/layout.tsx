import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GEO - Generative Engine Optimization',
  description: 'Master the art of Generative Engine Optimization with cutting-edge strategies and insights',
  keywords: 'generative engine optimization, GEO, AI SEO, LLM optimization, AI content optimization',
  authors: [{ name: 'GEO Content Team' }],
  openGraph: {
    title: 'GEO - Generative Engine Optimization',
    description: 'Master the art of Generative Engine Optimization with cutting-edge strategies and insights',
    url: 'https://generative-engine.org',
    siteName: 'GEO Platform',
    images: [
      {
        url: 'https://generative-engine.org/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GEO - Generative Engine Optimization',
    description: 'Master the art of Generative Engine Optimization with cutting-edge strategies and insights',
    images: ['https://generative-engine.org/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}