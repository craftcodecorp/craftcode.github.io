import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    image?: string;
    images?: Array<{ url: string; alt?: string; width?: number; height?: number }>;
    locale?: string;
  };
  twitter?: {
    card?: string;
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  jsonLd?: object | object[];
  noindex?: boolean;
}

/**
 * Default SEO values for the CraftCode Digital Hub
 */
export const defaultSeo: SeoProps = {
  title: 'CraftCode Digital Hub | Soluções Digitais para Negócios com Propósito',
  description: 'Desenvolvemos software robusto, inteligência de dados e soluções inovadoras com excelência técnica para negócios com propósito.',
  openGraph: {
    type: 'website',
    image: '/og-image.jpg', // This needs to be created and placed in the public folder
    siteName: 'CraftCode'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@craftcodecorp',
    creator: '@italocastilho'
  }
};

/**
 * SEO component for managing metadata
 * Uses react-helmet-async for SSR compatibility
 */
export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  jsonLd,
  noindex = false,
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://craftcode.com.br';
  const fullTitle = title ? `${title} | CraftCode` : defaultSeo.title;
  const metaDescription = description || defaultSeo.description;
  const url = canonical || openGraph?.url || siteUrl;
  
  // Merge with default values
  const og = {
    ...defaultSeo.openGraph,
    ...openGraph,
    title: openGraph?.title || fullTitle,
    description: openGraph?.description || metaDescription,
    url: url
  };
  
  const tw = {
    ...defaultSeo.twitter,
    ...twitter,
    title: twitter?.title || fullTitle,
    description: twitter?.description || metaDescription
  };
  
  // Handle image URLs
  const ogImage = og.image || og.images?.[0]?.url;
  const twImage = tw.image || ogImage;
  
  const getAbsoluteUrl = (path?: string) => {
    if (!path) return undefined;
    return path.startsWith('http') ? path : `${siteUrl}${path}`;
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      {og.type && <meta property="og:type" content={og.type} />}
      <meta property="og:title" content={og.title || fullTitle} />
      <meta property="og:description" content={og.description || metaDescription} />
      <meta property="og:url" content={og.url} />
      {og.siteName && <meta property="og:site_name" content={og.siteName} />}
      {ogImage && <meta property="og:image" content={getAbsoluteUrl(ogImage)} />}
      
      {/* Twitter */}
      {tw.card && <meta name="twitter:card" content={tw.card} />}
      {tw.site && <meta name="twitter:site" content={tw.site} />}
      {tw.creator && <meta name="twitter:creator" content={tw.creator} />}
      <meta name="twitter:title" content={tw.title || fullTitle} />
      <meta name="twitter:description" content={tw.description || metaDescription} />
      {twImage && <meta name="twitter:image" content={getAbsoluteUrl(twImage)} />}
      
      {/* No Index if specified */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
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
