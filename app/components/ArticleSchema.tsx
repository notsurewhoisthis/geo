'use client';

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}

export default function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  author = 'GEO Research Team',
  image,
  url
}: ArticleSchemaProps) {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || 
                 (typeof window !== 'undefined' ? window.location.origin : 'https://geo-engine-optimization-3b7f09edc005.herokuapp.com');

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: domain
    },
    publisher: {
      '@type': 'Organization',
      name: 'Generative Engine Optimization',
      logo: {
        '@type': 'ImageObject',
        url: `${domain}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${domain}${image}`,
        width: 1200,
        height: 630
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}