'use client'

import React, { useState } from 'react'

export default function SchemaValidator() {
  const [schemaInput, setSchemaInput] = useState('')
  const [validationResult, setValidationResult] = useState<any>(null)
  const [isValidating, setIsValidating] = useState(false)
  
  // Example schemas
  const exampleSchemas = {
    article: `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "description": "Article description",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2025-01-18",
  "publisher": {
    "@type": "Organization",
    "name": "Your Site",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  }
}`,
    organization: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Organization",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png",
  "sameAs": [
    "https://twitter.com/yourorg",
    "https://linkedin.com/company/yourorg"
  ]
}`,
    faq: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is GEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Generative Engine Optimization is..."
    }
  }]
}`,
    product: `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}`
  }

  const validateSchema = () => {
    setIsValidating(true)
    const results = {
      valid: false,
      errors: [] as string[],
      warnings: [] as string[],
      suggestions: [] as string[],
      schemaType: '',
      score: 0
    }

    try {
      // Parse JSON
      const schema = JSON.parse(schemaInput)
      
      // Check for @context
      if (!schema['@context']) {
        results.errors.push('Missing @context property')
      } else if (!schema['@context'].includes('schema.org')) {
        results.warnings.push('@context should reference schema.org')
      }

      // Check for @type
      if (!schema['@type']) {
        results.errors.push('Missing @type property')
      } else {
        results.schemaType = schema['@type']
      }

      // Validate based on type
      if (schema['@type'] === 'Article') {
        if (!schema.headline) results.errors.push('Article requires headline')
        if (!schema.author) results.warnings.push('Article should have author')
        if (!schema.datePublished) results.warnings.push('Article should have datePublished')
        if (!schema.publisher) results.warnings.push('Article should have publisher')
        if (!schema.image) results.suggestions.push('Add image for better visibility')
      }

      if (schema['@type'] === 'Organization') {
        if (!schema.name) results.errors.push('Organization requires name')
        if (!schema.url) results.warnings.push('Organization should have url')
        if (!schema.logo) results.suggestions.push('Add logo for brand recognition')
        if (!schema.sameAs) results.suggestions.push('Add sameAs for social profiles')
      }

      if (schema['@type'] === 'FAQPage') {
        if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
          results.errors.push('FAQPage requires mainEntity array')
        } else {
          schema.mainEntity.forEach((item: any, index: number) => {
            if (!item.name) results.errors.push(`Question ${index + 1} missing name`)
            if (!item.acceptedAnswer) results.errors.push(`Question ${index + 1} missing acceptedAnswer`)
          })
        }
      }

      // Check for GEO optimizations
      if (!schema.author?.['@type']) {
        results.suggestions.push('Use nested @type for author (better for AI)')
      }
      if (!schema.about && ['Article', 'BlogPosting'].includes(schema['@type'])) {
        results.suggestions.push('Add "about" property for topic modeling')
      }
      if (!schema.mentions && ['Article', 'BlogPosting'].includes(schema['@type'])) {
        results.suggestions.push('Add "mentions" for entity connections')
      }
      if (!schema.keywords) {
        results.suggestions.push('Add keywords for better AI understanding')
      }

      // Calculate score
      let score = 100
      score -= results.errors.length * 20
      score -= results.warnings.length * 10
      score -= results.suggestions.length * 5
      results.score = Math.max(0, score)

      results.valid = results.errors.length === 0

      setValidationResult(results)
    } catch (e: any) {
      setValidationResult({
        valid: false,
        errors: [`JSON Parse Error: ${e.message}`],
        warnings: [],
        suggestions: [],
        schemaType: '',
        score: 0
      })
    }

    setIsValidating(false)
  }

  const loadExample = (type: keyof typeof exampleSchemas) => {
    setSchemaInput(exampleSchemas[type])
    setValidationResult(null)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Schema Markup Validator</h1>
        <p className="text-gray-600 mb-8">
          Validate and optimize your structured data for search engines and AI platforms. Get suggestions for GEO optimization.
        </p>

        {/* Example Templates */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Load Example Schema</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => loadExample('article')}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              Article
            </button>
            <button
              onClick={() => loadExample('organization')}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              Organization
            </button>
            <button
              onClick={() => loadExample('faq')}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              FAQPage
            </button>
            <button
              onClick={() => loadExample('product')}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
            >
              Product
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Schema JSON-LD</h2>
              <textarea
                value={schemaInput}
                onChange={(e) => setSchemaInput(e.target.value)}
                className="w-full h-96 px-4 py-3 border rounded-lg font-mono text-sm"
                placeholder="Paste your JSON-LD schema here..."
              />
              <button
                onClick={validateSchema}
                disabled={!schemaInput || isValidating}
                className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
              >
                {isValidating ? 'Validating...' : 'Validate Schema'}
              </button>
            </div>
          </div>

          {/* Results */}
          <div>
            {validationResult && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Validation Results</h2>
                
                {/* Score */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Schema Score</span>
                    <span className={`text-2xl font-bold ${
                      validationResult.score >= 80 ? 'text-green-600' : 
                      validationResult.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {validationResult.score}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${
                        validationResult.score >= 80 ? 'bg-green-600' : 
                        validationResult.score >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                      }`}
                      style={{ width: `${validationResult.score}%` }}
                    />
                  </div>
                </div>

                {/* Status */}
                <div className={`p-4 rounded-lg mb-4 ${
                  validationResult.valid ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  <p className="font-semibold">
                    {validationResult.valid ? '✓ Valid Schema' : '✗ Invalid Schema'}
                  </p>
                  {validationResult.schemaType && (
                    <p className="text-sm mt-1">Type: {validationResult.schemaType}</p>
                  )}
                </div>

                {/* Errors */}
                {validationResult.errors.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-red-600 mb-2">Errors ({validationResult.errors.length})</h3>
                    <ul className="space-y-1">
                      {validationResult.errors.map((error: string, i: number) => (
                        <li key={i} className="text-sm text-red-600 flex items-start">
                          <span className="mr-2">✗</span>
                          <span>{error}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Warnings */}
                {validationResult.warnings.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-yellow-600 mb-2">Warnings ({validationResult.warnings.length})</h3>
                    <ul className="space-y-1">
                      {validationResult.warnings.map((warning: string, i: number) => (
                        <li key={i} className="text-sm text-yellow-600 flex items-start">
                          <span className="mr-2">⚠</span>
                          <span>{warning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* GEO Suggestions */}
                {validationResult.suggestions.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-blue-600 mb-2">GEO Optimization Tips</h3>
                    <ul className="space-y-1">
                      {validationResult.suggestions.map((suggestion: string, i: number) => (
                        <li key={i} className="text-sm text-blue-600 flex items-start">
                          <span className="mr-2">💡</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Best Practices */}
            <div className="bg-green-50 rounded-lg p-6 mt-6">
              <h3 className="font-semibold mb-3">Schema Best Practices for GEO</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Always include @context and @type</li>
                <li>• Use nested types for better AI understanding</li>
                <li>• Include "about" and "mentions" for entity connections</li>
                <li>• Add "keywords" array for topic modeling</li>
                <li>• Use "sameAs" to connect social profiles</li>
                <li>• Include images with proper ImageObject markup</li>
                <li>• Add author information with Person type</li>
                <li>• Use ISO 8601 format for dates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}