import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: Record<string, unknown>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = "https://www.gbiprecisionbearings.com",
  keywords = "ball bearings, tapered roller bearings, precision bearings",
  ogImage = "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
}) => {
  // Generate structured data for the page
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GBI Precision Bearings",
    url: "https://www.gbiprecisionbearings.com",
    logo: "https://www.gbiprecisionbearings.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 98799 30867",
      contactType: "Customer Service",
      areaServed: "India",
      availableLanguage: ["English", "Gujarati", "Hindi"],
    },
    sameAs: [
      "https://www.facebook.com/GayatriBearingIndustries",
      "https://www.linkedin.com/company/gayatri-bearing-industries",
      "https://twitter.com/GBIBearings",
    ],
  };

  const pageStructuredData = structuredData
    ? { ...baseStructuredData, ...structuredData }
    : baseStructuredData;

  const structuredDataJSON = JSON.stringify(pageStructuredData);

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      <script type="application/ld+json">{structuredDataJSON}</script>
    </Helmet>
  );
};

export default SEO;
