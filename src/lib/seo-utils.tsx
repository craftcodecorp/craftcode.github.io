import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, toAbsoluteUrl } from '@/lib/site-metadata';

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
    imageAlt?: string;
  };
  jsonLd?: object | object[];
  noindex?: boolean;
}

/**
 * Default SEO values for the CraftCode Technology
 */
export const defaultSeo: SeoProps = {
  title: 'CraftCode Technology | Soluções Digitais para Negócios com Propósito',
  description: 'Desenvolvemos software robusto, inteligência de dados e soluções inovadoras com excelência técnica para negócios com propósito.',
  openGraph: {
    type: 'website',
    image: '/images/og-craftcode.png', // Using the new PNG version with updated branding
    siteName: SITE_NAME,
    locale: 'pt_BR'
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
  const fullTitle = title?.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const metaDescription = description || defaultSeo.description;
  const canonicalUrl = canonical ? toAbsoluteUrl(canonical) : undefined;
  const url = canonicalUrl || (openGraph?.url ? toAbsoluteUrl(openGraph.url) : SITE_URL);
  
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
  const ogImage = og.images?.[0]?.url || og.image;
  const twImage = tw.image || ogImage;
  const ogImageMeta = og.images?.[0];

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      {og.type && <meta property="og:type" content={og.type} />}
      <meta property="og:title" content={og.title || fullTitle} />
      <meta property="og:description" content={og.description || metaDescription} />
      <meta property="og:url" content={og.url} />
      {og.siteName && <meta property="og:site_name" content={og.siteName} />}
      {og.locale && <meta property="og:locale" content={og.locale} />}
      {ogImage && <meta property="og:image" content={toAbsoluteUrl(ogImage)} />}
      {ogImageMeta?.alt && <meta property="og:image:alt" content={ogImageMeta.alt} />}
      {ogImageMeta?.width && <meta property="og:image:width" content={String(ogImageMeta.width)} />}
      {ogImageMeta?.height && <meta property="og:image:height" content={String(ogImageMeta.height)} />}
      
      {/* Twitter */}
      {tw.card && <meta name="twitter:card" content={tw.card} />}
      {tw.site && <meta name="twitter:site" content={tw.site} />}
      {tw.creator && <meta name="twitter:creator" content={tw.creator} />}
      <meta name="twitter:title" content={tw.title || fullTitle} />
      <meta name="twitter:description" content={tw.description || metaDescription} />
      {twImage && <meta name="twitter:image" content={toAbsoluteUrl(twImage)} />}
      {tw.imageAlt && <meta name="twitter:image:alt" content={tw.imageAlt} />}
      
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
    name: SITE_NAME,
    url: SITE_URL,
    logo: toAbsoluteUrl('/favicon.ico'),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: CONTACT_EMAIL,
      availableLanguage: ['Portuguese']
    }
  };
};

/**
 * Generate JSON-LD structured data for the website
 */
export const generateWebsiteJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    }
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
    image: toAbsoluteUrl(product.image),
    url: product.url || SITE_URL,
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
