export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const generateStructuredData = (type: 'Organization' | 'LocalBusiness' | 'WebSite', data?: any) => {
  const baseUrl = 'https://travelmasterthailand.com';
  
  const schemas = {
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Travel Master Thailand',
      description: 'Expert Thailand travel and tour packages with local guides and authentic experiences',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: 'REPLACE_WITH_WHATSAPP_NUMBER', // User should replace this
        contactType: 'customer service',
        availableLanguage: ['English', 'Thai']
      },
      sameAs: [
        'https://facebook.com/travelmasterthailand',
        'https://instagram.com/travelmasterthailand',
        'https://twitter.com/travelmasterthailand'
      ]
    },
    LocalBusiness: {
      '@context': 'https://schema.org',
      '@type': 'TravelAgency',
      name: 'Travel Master Thailand',
      description: 'Professional travel agency specializing in authentic Thailand experiences',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Thailand',
        addressLocality: 'Bangkok'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '13.7563',
        longitude: '100.5018'
      },
      url: baseUrl,
      telephone: 'REPLACE_WITH_WHATSAPP_NUMBER',
      priceRange: '$$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150+'
      }
    },
    WebSite: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Travel Master Thailand',
      url: baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    }
  };

  return schemas[type];
};

export const defaultSEO: SEOData = {
  title: 'Travel Master Thailand | Expert Thailand Travel & Tour Packages',
  description: 'Discover authentic Thailand with Travel Master Thailand. Expert-guided tours, custom packages, and unforgettable experiences across Bangkok, Phuket, Chiang Mai, and more.',
  keywords: 'Thailand travel, Thailand tours, Bangkok tours, Phuket packages, Thai cultural experiences, Thailand vacation, Thai temples, island hopping Thailand',
  image: '/images/og-hero-thailand.jpg',
  url: 'https://travelmasterthailand.com',
  type: 'website'
};