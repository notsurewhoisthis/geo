'use client'

import React, { useState } from 'react'

export default function MetaTagGenerator() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    author: '',
    robots: 'index, follow',
    canonical: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogUrl: '',
    twitterCard: 'summary_large_image',
    twitterSite: '',
    twitterCreator: '',
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'UTF-8',
    language: 'en',
  })

  const [generatedTags, setGeneratedTags] = useState('')
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateTags = () => {
    let tags = `<!-- Basic Meta Tags -->\n`
    tags += `<meta charset="${formData.charset}">\n`
    tags += `<meta name="viewport" content="${formData.viewport}">\n`
    
    if (formData.title) {
      tags += `<title>${formData.title}</title>\n`
    }
    
    if (formData.description) {
      tags += `<meta name="description" content="${formData.description}">\n`
    }
    
    if (formData.keywords) {
      tags += `<meta name="keywords" content="${formData.keywords}">\n`
    }
    
    if (formData.author) {
      tags += `<meta name="author" content="${formData.author}">\n`
    }
    
    tags += `<meta name="robots" content="${formData.robots}">\n`
    
    if (formData.canonical) {
      tags += `<link rel="canonical" href="${formData.canonical}">\n`
    }
    
    tags += `<meta http-equiv="content-language" content="${formData.language}">\n\n`
    
    // Open Graph tags
    tags += `<!-- Open Graph Meta Tags -->\n`
    tags += `<meta property="og:title" content="${formData.ogTitle || formData.title}">\n`
    tags += `<meta property="og:description" content="${formData.ogDescription || formData.description}">\n`
    tags += `<meta property="og:type" content="website">\n`
    
    if (formData.ogUrl) {
      tags += `<meta property="og:url" content="${formData.ogUrl}">\n`
    }
    
    if (formData.ogImage) {
      tags += `<meta property="og:image" content="${formData.ogImage}">\n`
    }
    
    tags += `<meta property="og:locale" content="${formData.language.replace('-', '_')}">\n\n`
    
    // Twitter Card tags
    tags += `<!-- Twitter Card Meta Tags -->\n`
    tags += `<meta name="twitter:card" content="${formData.twitterCard}">\n`
    tags += `<meta name="twitter:title" content="${formData.ogTitle || formData.title}">\n`
    tags += `<meta name="twitter:description" content="${formData.ogDescription || formData.description}">\n`
    
    if (formData.ogImage) {
      tags += `<meta name="twitter:image" content="${formData.ogImage}">\n`
    }
    
    if (formData.twitterSite) {
      tags += `<meta name="twitter:site" content="${formData.twitterSite}">\n`
    }
    
    if (formData.twitterCreator) {
      tags += `<meta name="twitter:creator" content="${formData.twitterCreator}">\n`
    }
    
    // AI/GEO specific tags
    tags += `\n<!-- AI/GEO Optimization Tags -->\n`
    tags += `<meta name="geo.position" content="latitude;longitude">\n`
    tags += `<meta name="ICBM" content="latitude, longitude">\n`
    tags += `<meta name="geo.region" content="US">\n`
    tags += `<meta name="geo.placename" content="City, State">\n`
    tags += `<meta name="ai-content-type" content="article">\n`
    tags += `<meta name="ai-crawl-priority" content="high">\n`
    
    setGeneratedTags(tags)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedTags)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Meta Tag Generator</h1>
        <p className="text-gray-600 mb-8">
          Generate SEO-optimized meta tags for your website. Includes support for Open Graph, Twitter Cards, and AI crawler optimization.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Basic SEO Tags</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Page Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Your Page Title (50-60 characters)"
                    maxLength={60}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Meta Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm h-20"
                    placeholder="Page description (150-160 characters)"
                    maxLength={160}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Keywords</label>
                  <input
                    type="text"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Author Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Robots</label>
                  <select
                    name="robots"
                    value={formData.robots}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  >
                    <option value="index, follow">Index, Follow (Default)</option>
                    <option value="noindex, follow">NoIndex, Follow</option>
                    <option value="index, nofollow">Index, NoFollow</option>
                    <option value="noindex, nofollow">NoIndex, NoFollow</option>
                    <option value="all">All</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Canonical URL</label>
                  <input
                    type="url"
                    name="canonical"
                    value={formData.canonical}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="https://example.com/page"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Social Media Tags</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">OG Title</label>
                  <input
                    type="text"
                    name="ogTitle"
                    value={formData.ogTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="Leave empty to use main title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">OG Description</label>
                  <textarea
                    name="ogDescription"
                    value={formData.ogDescription}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm h-16"
                    placeholder="Leave empty to use main description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">OG Image URL</label>
                  <input
                    type="url"
                    name="ogImage"
                    value={formData.ogImage}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">OG URL</label>
                  <input
                    type="url"
                    name="ogUrl"
                    value={formData.ogUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="https://example.com/page"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Twitter Card Type</label>
                  <select
                    name="twitterCard"
                    value={formData.twitterCard}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  >
                    <option value="summary">Summary</option>
                    <option value="summary_large_image">Summary Large Image</option>
                    <option value="app">App</option>
                    <option value="player">Player</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Twitter Site</label>
                  <input
                    type="text"
                    name="twitterSite"
                    value={formData.twitterSite}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                    placeholder="@yoursite"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={generateTags}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Generate Meta Tags
            </button>
          </div>

          {/* Output */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Generated HTML</h2>
                {generatedTags && (
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                  >
                    {copied ? 'Copied!' : 'Copy to Clipboard'}
                  </button>
                )}
              </div>
              
              {generatedTags ? (
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
                  <code>{generatedTags}</code>
                </pre>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-500">
                  <p>Fill in the form and click "Generate Meta Tags" to see the output here.</p>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Pro Tips for GEO</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Keep titles under 60 characters for full visibility</li>
                <li>• Descriptions should be 150-160 characters</li>
                <li>• Include target keywords naturally in title and description</li>
                <li>• Use unique titles and descriptions for each page</li>
                <li>• OG images should be 1200x630px for best results</li>
                <li>• Add schema markup for enhanced AI understanding</li>
                <li>• Include semantic keywords for LLM optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}