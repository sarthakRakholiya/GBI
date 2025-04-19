import React, { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
// import ProductsPreview from "@/components/sections/ProductsPreview";
import IndustriesPreview from "@/components/sections/IndustriesPreview";
import QualityPreview from "@/components/sections/QualityPreview";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SEO from "@/components/ui/SEO";
import { faqItems } from "@/lib/data";
import {
  ArrowRight,
  PackageCheck,
  Settings,
  CircleCheck,
  BadgeCheck,
  Volume2,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  // Initialize animations for scroll elements
  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    const scrollThreshold = 100; // Only process scroll events if moved more than 100px

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) return;
      lastScrollY = currentScrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const animatedElements =
            document.querySelectorAll(".animate-on-scroll");
          animatedElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.85) {
              element.classList.add("show");
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".section-title"],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ball Bearings",
          url: "https://www.gbiprecisionbearings.com/products#ball-bearings",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tapered Roller Bearings",
          url: "https://www.gbiprecisionbearings.com/products#tapered-bearings",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="GBI Precision Bearings - Ball & Tapered Roller Bearing Specialists"
        description="Leading manufacturer of high-quality ball and tapered roller bearings for automotive, industrial, aerospace, and railway applications."
        keywords="ball bearings, tapered roller bearings, precision bearings, industrial bearings, automotive bearings, aerospace bearings"
        structuredData={structuredData}
      />
      <Navbar />
      <Hero />
      <AboutPreview />

      {/* Bearing Types Overview Section */}
      <section
        className="py-16 md:py-24 bg-white relative overflow-hidden"
        id="bearing-types"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Our Specialties
            </h2>
            <h3 className="section-title text-center">
              Comprehensive Bearing Solutions
            </h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Expertise in both ball and tapered roller bearings for all your
              application needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Ball Bearings */}
            <div className="bg-gray-50 rounded-lg p-6 animate-on-scroll">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gbi-700"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-center mb-4">
                Ball Bearings
              </h4>
              <p className="text-gray-600 mb-6 text-center">
                Versatile bearings designed for high-speed applications with
                reduced friction and noise. Ideal for a wide range of uses from
                automotive to electronics.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-gbi-700 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Deep groove ball bearings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gbi-700 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Angular contact ball bearings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gbi-700 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Self-aligning ball bearings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gbi-700 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Thrust ball bearings</span>
                </li>
              </ul>
              {/* Explore Ball Bearings button hidden
              <div className="text-center">
                <Link
                  to="/products"
                  className="inline-flex items-center text-gbi-700 hover:text-gbi-800 font-medium group"
                >
                  Explore Ball Bearings
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
              */}
            </div>

            {/* Tapered Roller Bearings */}
            <div
              className="bg-gray-50 rounded-lg p-6 animate-on-scroll"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gbi-700"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M4 12h16"></path>
                    <path d="m3 7 3 5 3-5"></path>
                    <path d="m15 7 3 5 3-5"></path>
                    <path d="M7 17 4 12l3 5Z"></path>
                    <path d="m17 17-3-5 3 5Z"></path>
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-center mb-4">
                Tapered Roller Bearings
              </h4>
              <p className="text-gray-600 mb-6 text-center">
                Engineered to handle combined loads (radial and axial) with
                superior load capacity and durability in demanding industrial
                applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-gbi-700 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Single row tapered roller bearings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gbi-700 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Double row tapered roller bearings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gbi-700 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Four-row tapered roller bearings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gbi-700 rounded-full p-1 text-white mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Matched tapered bearing pairs</span>
                </li>
              </ul>
              {/* Explore Tapered Bearings button hidden
              <div className="text-center">
                <Link
                  to="/products"
                  className="inline-flex items-center text-gbi-700 hover:text-gbi-800 font-medium group"
                >
                  Explore Tapered Bearings
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* <ProductsPreview /> */}
      <IndustriesPreview />
      <QualityPreview />

      {/* Why Choose GBI Section */}
      <section
        className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
        id="why-gbi"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Our Advantages
            </h2>
            <h3 className="section-title text-center">
              Why Choose GBI Bearings
            </h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Premium quality materials, precise manufacturing, and thorough
              testing make our bearings the industry standard
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Material */}
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="flex justify-center mb-4">
                <div className="bg-gbi-700/10 rounded-full p-4">
                  <PackageCheck className="w-8 h-8 text-gbi-700" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                Material
              </h4>
              <p className="text-center text-gray-600">
                Premium SAE 52100 / 100 CR6 Material
              </p>
            </div>

            {/* Grinding Tolerance */}
            <div
              className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gbi-700/10 rounded-full p-4">
                  <Settings className="w-8 h-8 text-gbi-700" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                Grinding Tolerance
              </h4>
              <p className="text-center text-gray-600">
                P0 & P6 Compatible Manufacturing Facility
              </p>
            </div>

            {/* Roughness */}
            <div
              className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gbi-700/10 rounded-full p-4">
                  <CircleCheck className="w-8 h-8 text-gbi-700" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                Roughness
              </h4>
              <p className="text-center text-gray-600">
                100% Controlled Ra in Cup, Cone & Rollers
              </p>
            </div>

            {/* Roundness */}
            <div
              className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gbi-700/10 rounded-full p-4">
                  <BadgeCheck className="w-8 h-8 text-gbi-700" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                Roundness
              </h4>
              <p className="text-center text-gray-600">
                100% Controlled Roundness in Cup, Cone & Rollers
              </p>
            </div>

            {/* Vibration & Noise */}
            <div
              className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gbi-700/10 rounded-full p-4">
                  <Volume2 className="w-8 h-8 text-gbi-700" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                Vibration & Noise
              </h4>
              <p className="text-center text-gray-600">
                100% Vibration & Noise Tested
              </p>
            </div>

            {/* Warranty */}
            <div
              className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gbi-700/10 rounded-full p-4">
                  <ShieldCheck className="w-8 h-8 text-gbi-700" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-center mb-2">
                Warranty
              </h4>
              <p className="text-center text-gray-600">
                1 Year Warranty on all Products*
              </p>
            </div>
          </div>

          <div
            className="text-center mt-8 text-sm text-gray-500 animate-on-scroll"
            style={{ animationDelay: "600ms" }}
          >
            * Subject to proper installation and maintenance as per GBI
            guidelines.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="py-16 md:py-24 bg-gray-50"
        id="faq-section"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              FAQ
            </h2>
            <h3 className="section-title text-center">
              Frequently Asked Questions
            </h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Get answers to common questions about our products and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-200">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="py-6 animate-on-scroll"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h4 className="text-xl font-semibold mb-3" itemProp="name">
                    {item.question}
                  </h4>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-600" itemProp="text">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
