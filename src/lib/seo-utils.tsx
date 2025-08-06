import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterSite?: string;
  twitterCreator?: string;
  jsonLd?: Record<string, any>;
  noIndex?: boolean;
}

/**
 * Default SEO values for the CraftCode Digital Hub
 */
export const defaultSeo: SeoProps = {
  title: 'CraftCode Digital Hub | Soluções Digitais para Negócios com Propósito',
  description: 'Desenvolvemos software robusto, inteligência de dados e soluções inovadoras com excelência técnica para negócios com propósito.',
  ogType: 'website',
  ogImage: '/og-image.jpg', // This needs to be created and placed in the public folder
  twitterCard: 'summary_large_image',
  twitterSite: '@craftcodecorp',
  twitterCreator: '@italocastilho',
};

/**
 * SEO component for managing metadata
 * Uses react-helmet-async for SSR compatibility
 */
export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterSite,
  twitterCreator,
  jsonLd,
  noIndex = false,
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://craftcode.com.br';
  const fullTitle = title ? `${title} | CraftCode` : defaultSeo.title;
  const metaDescription = description || defaultSeo.description;
  const url = canonical || ogUrl || siteUrl;
  const image = ogImage || defaultSeo.ogImage;
  const absoluteImageUrl = image?.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={absoluteImageUrl} />}
      <meta property="og:site_name" content="CraftCode" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={absoluteImageUrl} />}
      
      {/* No Index if specified */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Structured Data / JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

/**
 * Generate JSON-LD structured data for organization
 */
export const generateOrganizationJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CraftCode',
    url: 'https://craftcode.com.br',
    logo: 'https://craftcode.com.br/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/craftcodecorp',
      'https://github.com/craftcodecorp',
      'https://twitter.com/craftcodecorp'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-99999-9999',
      contactType: 'customer service',
      email: 'contato@craftcode.com.br',
      availableLanguage: ['Portuguese', 'English']
    }
  };
};

/**
 * Generate JSON-LD structured data for a local business
 */
export const generateLocalBusinessJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'CraftCode',
    image: 'https://craftcode.com.br/logo.png',
    '@id': 'https://craftcode.com.br',
    url: 'https://craftcode.com.br',
    telephone: '+55-11-99999-9999',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Paulista, 1000',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01310-100',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5505,
      longitude: -46.6333
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://www.linkedin.com/company/craftcodecorp',
      'https://github.com/craftcodecorp',
      'https://twitter.com/craftcodecorp'
    ]
  };
};

/**
 * Generate JSON-LD structured data for a product
 */
export const generateProductJsonLd = (product: {
  name: string;
  description: string;
  image: string;
  price?: string;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock';
  url?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.priceCurrency || 'BRL',
        availability: `https://schema.org/${product.availability || 'InStock'}`,
        url: product.url || 'https://craftcode.com.br'
      }
    })
  };
};
