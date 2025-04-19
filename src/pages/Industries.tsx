import React, { useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SEO from "@/components/ui/SEO";
import { industries } from "@/lib/data";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Industries = () => {
  const location = useLocation();
  const industriesRef = useRef<HTMLDivElement>(null);

  // Initialize animations for scroll elements
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.85) {
          element.classList.add("show");
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to industry section if hash is present
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && industries.some((i) => i.id === hash)) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, [location.hash]);

  // Create structured data for industries
  const industriesStructuredData = {
    "@type": "ItemList",
    itemListElement: industries.map((industry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: `${industry.name} Bearing Solutions`,
        description: industry.description,
        url: `https://www.gbiprecisionbearings.com/industries#${industry.id}`,
        provider: {
          "@type": "Organization",
          name: "GBI Precision Bearings",
        },
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Industry-Specific Bearing Solutions | GBI Precision Bearings"
        description="Specialized ball and tapered roller bearing solutions for automotive, industrial, aerospace, railway, and other demanding applications."
        canonicalUrl="https://www.gbiprecisionbearings.com/industries"
        keywords="industrial bearings, automotive bearings, aerospace bearings, railway bearings, ball bearings by industry, tapered roller bearings applications"
        structuredData={industriesStructuredData}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gbi-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gbi-50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Industries <span className="text-gradient">We Serve</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 animate-fade-in">
              Delivering reliable bearing solutions across diverse sectors with
              unique demands.
            </p>
            <div className="h-1 w-20 bg-gbi-700 rounded animate-fade-in"></div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Industry Solutions
            </h2>
            <h3 className="section-title text-center">
              Trusted Across Sectors
            </h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              GBI bearings deliver exceptional performance in the most demanding
              applications across diverse industries.
            </p>
          </div>

          {/* Industry Navigation */}
          <div className="flex flex-wrap gap-3 justify-center mb-16 animate-on-scroll">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-gbi-700 hover:bg-gbi-50 text-gray-700 hover:text-gbi-700 text-sm font-medium transition-colors"
              >
                {industry.name}
              </a>
            ))}
          </div>

          {/* Individual Industry Sections */}
          <div ref={industriesRef} className="space-y-24">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-on-scroll"
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  {/* Image */}
                  <div
                    className={
                      isEven ? "order-1 lg:order-1" : "order-1 lg:order-2"
                    }
                  >
                    <div className="relative">
                      <img
                        src={industry.image}
                        alt={`${industry.name} - GBI Precision Bearings applications`}
                        className="rounded-lg shadow-lg w-full object-cover h-80 lg:h-auto"
                        itemProp="image"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback images based on industry type
                          const fallbacks = {
                            automotive:
                              "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg",
                            industrial:
                              "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
                            aerospace:
                              "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
                            railway:
                              "https://images.pexels.com/photos/958174/pexels-photo-958174.jpeg",
                          };
                          e.currentTarget.src =
                            fallbacks[industry.id as keyof typeof fallbacks] ||
                            "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg";
                        }}
                      />

                      {/* Floating card */}
                      <div
                        className={`absolute -bottom-6 ${
                          isEven ? "-right-6 md:-right-8" : "-left-6 md:-left-8"
                        } bg-white rounded-lg p-6 shadow-lg w-3/4 max-w-xs`}
                      >
                        <div className="flex items-center mb-3">
                          <div className="h-10 w-10 bg-gbi-50 rounded-full flex items-center justify-center">
                            <Icon size={20} className="text-gbi-700" />
                          </div>
                          <h4
                            className="ml-3 text-lg font-semibold"
                            itemProp="name"
                          >
                            {industry.name}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Specialized bearing solutions optimized for{" "}
                          {industry.name.toLowerCase()} applications.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={
                      isEven ? "order-2 lg:order-2" : "order-2 lg:order-1"
                    }
                  >
                    <h3 className="text-3xl font-bold mb-4">
                      {industry.name}{" "}
                      <span className="text-gradient">Solutions</span>
                    </h3>
                    <p className="text-gray-600 mb-6" itemProp="description">
                      {industry.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4">
                        Key Applications
                      </h4>
                      <ul
                        className="space-y-3"
                        itemProp="additionalProperty"
                        itemScope
                        itemType="https://schema.org/PropertyValue"
                      >
                        {industry.applications.map((app, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle
                              size={20}
                              className="text-gbi-700 mt-0.5 mr-3 flex-shrink-0"
                            />
                            <span itemProp="value">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to="/products"
                        className="btn-primary group flex items-center justify-center"
                      >
                        View Compatible Products
                        <ChevronRight
                          size={18}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                      <Link
                        to="/contact"
                        className="btn-secondary flex items-center justify-center"
                      >
                        Request Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Success Stories
            </h2>
            <h3 className="section-title text-center">Industry Case Studies</h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Real-world examples of how our bearing solutions have solved
              complex challenges across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
            {[
              {
                title: "Extending Gearbox Life in Wind Turbines",
                industry: "Energy",
                description:
                  "Custom bearing solution increased service intervals by 40% and reduced maintenance costs.",
                image:
                  "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
              },
              {
                title: "High-Speed Railway Axle Performance",
                industry: "Railway",
                description:
                  "Specialized bearings enabling 350km/h operation with extended service life in extreme conditions.",
                image:
                  "https://images.pexels.com/photos/2986237/pexels-photo-2986237.jpeg",
              },
              {
                title: "Mining Equipment Reliability Enhancement",
                industry: "Mining",
                description:
                  "Heavy-duty bearings that withstand abrasive environments, reducing downtime by 60%.",
                image:
                  "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 card-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      // Fallback image if the original one fails to load
                      e.currentTarget.src =
                        "https://images.pexels.com/photos/3862369/pexels-photo-3862369.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-gbi-700 text-white text-xs rounded-md">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{study.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {study.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-gbi-700 hover:text-gbi-800 text-sm font-medium group"
                  >
                    Read case study
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gbi-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Solve Your Industry Challenges
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Connect with our industry specialists to discuss your specific
              application requirements and discover the ideal bearing solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-gbi-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Schedule a Consultation
              </Link>
              {/* Browse Products button hidden
              <Link 
                to="/products" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                Browse Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
              */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Industries;
