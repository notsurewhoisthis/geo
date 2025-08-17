import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">GEO Platform</h3>
            <p className="text-gray-400">
              Leading the way in Generative Engine Optimization
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/blog" className="text-gray-400 hover:text-purple-400 transition">Blog</Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-purple-400 transition">Sitemap</Link>
              <Link href="/resources" className="text-gray-400 hover:text-purple-400 transition">Resources</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <Link href="/documentation" className="text-gray-400 hover:text-purple-400 transition">Documentation</Link>
              <Link href="/api" className="text-gray-400 hover:text-purple-400 transition">API Reference</Link>
              <Link href="/guides" className="text-gray-400 hover:text-purple-400 transition">Guides</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://twitter.com" className="text-gray-400 hover:text-purple-400 transition">Twitter</a>
              <a href="https://github.com/notsurewhoisthis/geo" className="text-gray-400 hover:text-purple-400 transition">GitHub</a>
              <a href="https://discord.com" className="text-gray-400 hover:text-purple-400 transition">Discord</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GEO Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}