import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

const SEO = ({
  title = "GBI Precision Bearings | Leading Bearing Manufacturer in India",
  description = "India's premier manufacturer of precision ball bearings, tapered roller bearings & industrial components. High-quality bearings with ISO certification, bulk discounts & pan-India delivery.",
  keywords = "ball bearings, tapered roller bearings, precision bearings, industrial bearings, bearing manufacturer India, GBI bearings, bearing supplier Gujarat, bulk bearings order, bearing price India, bearing distributor, automotive bearings, industrial machinery bearings, bearing components, ISO certified bearings, bearing wholesale",
  canonicalUrl = "https://www.gbibearings.in",
  ogImage = "/seo-image.png",
  structuredData,
}: SEOProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    name: "GBI Precision Bearings",
    url: "https://www.gbibearings.in",
    logo: "https://www.gbibearings.in/logo.png",
    description: description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "Gujarat",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [
      "https://www.facebook.com/gbibearings",
      "https://www.linkedin.com/company/gbi-bearings",
    ],
  };

  const productStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "GBI Precision Bearings Collection",
    description:
      "High-quality precision bearings for industrial applications including ball bearings and tapered roller bearings",
    brand: {
      "@type": "Brand",
      name: "GBI Bearings",
    },
    manufacturer: {
      "@type": "Organization",
      name: "GBI Precision Bearings",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      highPrice: "50000",
      lowPrice: "500",
      offerCount: "100+",
      seller: {
        "@type": "Organization",
        name: "GBI Precision Bearings",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productStructuredData)}
      </script>

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
