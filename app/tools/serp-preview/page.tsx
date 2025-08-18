'use client'

import React, { useState, useEffect } from 'react'

export default function SerpPreviewTool() {
  const [title, setTitle] = useState('GEO - Generative Engine Optimization | AI SEO Platform')
  const [description, setDescription] = useState('Master Generative Engine Optimization (GEO) with cutting-edge strategies for ChatGPT, Claude, Perplexity, and AI-powered search.')
  const [url, setUrl] = useState('https://generative-engine.org/blog/sample-post')
  const [favicon, setFavicon] = useState('/favicon.ico')
  
  // Character counts
  const titleLength = title.length
  const descLength = description.length
  
  // Warnings
  const titleWarning = titleLength > 60 ? 'Too long - may be truncated' : titleLength < 30 ? 'Too short - use more keywords' : ''
  const descWarning = descLength > 160 ? 'Too long - will be truncated' : descLength < 120 ? 'Too short - add more detail' : ''

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">SERP Preview Tool</h1>
        <p className="text-gray-600 mb-8">
          Preview how your page will appear in search results and AI responses. Optimize for both traditional search engines and AI platforms.
        </p>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Page Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Page Title ({titleLength}/60)
                {titleWarning && <span className="text-red-500 ml-2 text-xs">{titleWarning}</span>}
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter page title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Meta Description ({descLength}/160)
                {descWarning && <span className="text-red-500 ml-2 text-xs">{descWarning}</span>}
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 h-24"
                placeholder="Enter meta description..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">URL</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="https://example.com/page"
              />
            </div>
          </div>
        </div>

        {/* Google SERP Preview */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Google Search Preview</h2>
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex items-start space-x-3">
              <img src={favicon} alt="favicon" className="w-6 h-6 mt-1" />
              <div className="flex-1">
                <div className="text-sm text-gray-600 mb-1">
                  {url.replace('https://', '').replace('http://', '')}
                </div>
                <h3 className="text-xl text-blue-700 hover:underline cursor-pointer mb-2">
                  {title.slice(0, 60)}{titleLength > 60 && '...'}
                </h3>
                <p className="text-sm text-gray-700">
                  {description.slice(0, 160)}{descLength > 160 && '...'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ChatGPT/AI Preview */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">ChatGPT/Claude Citation Preview</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm">
            <p className="mb-2">According to {new URL(url).hostname}:</p>
            <p className="pl-4 border-l-2 border-gray-600 italic">
              "{description.slice(0, 150)}..."
            </p>
            <p className="text-blue-400 mt-2">
              Source: [{title.slice(0, 50)}]({url})
            </p>
          </div>
        </div>

        {/* Social Media Preview */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Social Media Preview</h2>
          <div className="border rounded-lg overflow-hidden max-w-md">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <span className="text-gray-500">OG Image Preview</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{description.slice(0, 120)}...</p>
              <p className="text-xs text-gray-500 mt-2">{new URL(url).hostname}</p>
            </div>
          </div>
        </div>

        {/* SEO Tips */}
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Optimization Tips</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Include primary keyword in the first 60 characters of title</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Use action words and numbers for higher CTR</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Include semantic keywords in description for AI platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Keep URL short and keyword-rich</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Add structured data for rich snippets</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}