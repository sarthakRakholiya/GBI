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
  canonicalUrl = "https://www.gbibearings.in",
  keywords = "ball bearings manufacturer in India, tapered roller bearings exporter, industrial bearing supplier Rajkot, precision bearing manufacturers, ISO certified bearing company Gujarat",
  ogImage = "/seo-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
}) => {
  // Generate structured data for the page
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GBI Precision Bearings",
    url: "https://www.gbibearings.in",
    logo: "/seo-image.png",
    slogan: "Precision That Drives Performance",
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
      <meta property="og:site_name" content="GBI Precision Bearings" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@GBIBearings" />

      {/* Additional SEO tags */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Rajkot, Gondal" />
      <meta name="geo.position" content="22.2734719;70.8032714" />
      <meta name="ICBM" content="22.2734719, 70.8032714" />
      <meta name="author" content="GBI Precision Bearings" />
      <meta name="robots" content="index, follow" />

      {/* Structured data */}
      <script type="application/ld+json">{structuredDataJSON}</script>
    </Helmet>
  );
};

export default SEO;
