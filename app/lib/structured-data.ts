export interface StructuredDataOptions {
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  reviews?: Array<{
    author: string;
    datePublished: string;
    reviewBody: string;
    reviewRating: {
      ratingValue: number;
      bestRating?: number;
      worstRating?: number;
    };
  }>;
  additionalProperties?: Record<string, string>;
}

export function enhanceSchemaData(baseData: any, options: StructuredDataOptions = {}) {
  const enhancedData = { ...baseData };

  // Only add Aggregate Rating if we have actual rating data with valid values
  if (options.aggregateRating && 
      options.aggregateRating.ratingValue && 
      options.aggregateRating.ratingCount && 
      options.aggregateRating.ratingCount > 0) {
    enhancedData.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: options.aggregateRating.ratingValue,
      ratingCount: options.aggregateRating.ratingCount,
      bestRating: options.aggregateRating.bestRating || 5,
      worstRating: options.aggregateRating.worstRating || 1
    };
  }

  // Only add Reviews if we have actual review data
  if (options.reviews && options.reviews.length > 0) {
    enhancedData.review = options.reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      datePublished: review.datePublished,
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating.ratingValue,
        bestRating: review.reviewRating.bestRating || 5,
        worstRating: review.reviewRating.worstRating || 1
      }
    }));
  }

  // NOTE: additionalProperties is not a standard schema.org property
  // Removing this to avoid schema validation issues
  // Only add properties that are valid schema.org fields

  return enhancedData;
}

export function generateProductSchema(
  productData: {
    name: string;
    description: string;
    brand?: string;
    offers?: {
      price: number;
      priceCurrency?: string;
      availability?: string;
    }
  }, 
  options: StructuredDataOptions = {}
) {
  const baseProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productData.name,
    description: productData.description,
    ...(productData.brand && { brand: productData.brand }),
    ...(productData.offers && {
      offers: {
        '@type': 'Offer',
        price: productData.offers.price,
        priceCurrency: productData.offers.priceCurrency || 'USD',
        availability: productData.offers.availability || 'InStock'
      }
    })
  };

  return enhanceSchemaData(baseProductSchema, options);
}

export function renderSchemaScript(schemaData: any) {
  return `<script type="application/ld+json">${JSON.stringify(schemaData)}</script>`;
}