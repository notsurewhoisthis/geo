'use client';

export default function OrganizationSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || 
                 (typeof window !== 'undefined' ? window.location.origin : 'https://geo-engine-optimization-3b7f09edc005.herokuapp.com');

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Generative Engine Optimization',
    alternateName: 'GEO',
    url: domain,
    logo: `${domain}/logo.png`,
    description: 'Leading resource for Generative Engine Optimization (GEO) strategies, helping businesses optimize for AI-powered search engines like ChatGPT, Claude, and Perplexity.',
    sameAs: [
      'https://twitter.com/genengineopt',
      'https://linkedin.com/company/generative-engine-optimization',
      'https://github.com/generative-engine-optimization'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@generative-engine.org',
      url: `${domain}/contact`
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    foundingDate: '2024',
    knowsAbout: [
      'Generative Engine Optimization',
      'AI Search Optimization',
      'ChatGPT Optimization',
      'Claude Optimization',
      'Perplexity Optimization',
      'LLM Optimization',
      'AI Content Strategy',
      'Generative AI SEO'
    ],
    offers: {
      '@type': 'AggregateOffer',
      offerCount: 10,
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GEO Audit Tool',
            description: 'Comprehensive audit tool for Generative Engine Optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content Optimizer',
            description: 'AI-powered content optimization for generative engines'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Visibility Tracker',
            description: 'Track your visibility across AI platforms'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}