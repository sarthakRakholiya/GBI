import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ContactForm from "@/components/ui/ContactForm";
import SEO from "@/components/ui/SEO";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import Map from "@/components/ui/Map";

const Contact = () => {
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

  const contactStructuredData = {
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "GBI Precision Bearings",
      url: "https://www.gbiprecisionbearings.com",
      logo: "https://www.gbiprecisionbearings.com/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1234 Industrial Drive, Suite 500",
        addressLocality: "Chicago",
        addressRegion: "IL",
        postalCode: "60601",
        addressCountry: "US",
      },
      telephone: "+1 (312) 555-7890",
      email: "info@gbibearings.com",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "13:00",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact GBI Precision Bearings | Ball & Tapered Roller Bearings"
        description="Get in touch with our team of bearing specialists. Contact GBI Precision Bearings for expert consultation on ball bearings and tapered roller bearings."
        canonicalUrl="https://www.gbiprecisionbearings.com/contact"
        keywords="contact GBI bearings, bearing specialists, ball bearing consultation, tapered roller bearing experts"
        structuredData={contactStructuredData}
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
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 animate-fade-in">
              Get in touch with our team of experts to discuss your bearing
              requirements.
            </p>
            <div className="h-1 w-20 bg-gbi-700 rounded animate-fade-in"></div>
          </div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section
        className="py-16 md:py-24"
        id="contact-information"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 animate-on-scroll">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our products or services? Our team is
                  here to help you find the perfect bearing solution for your
                  application.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-gbi-50 rounded-full flex items-center justify-center mt-1">
                      <MapPin size={20} className="text-gbi-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Visit Us</h3>
                      <p
                        className="text-gray-600 mt-1"
                        itemProp="address"
                        itemScope
                        itemType="https://schema.org/PostalAddress"
                      >
                        <span className="font-semibold">
                          Gayatri Bearing Industries (GBI)
                        </span>
                        <br />
                        <span itemProp="streetAddress">
                          Rolex Industrial Park, Plot No. 44,
                        </span>
                        <br />
                        <span itemProp="addressLocality">NH 27, Bhojpara,</span>
                        <br />
                        <span itemProp="addressRegion">Gujarat</span>
                        <span itemProp="postalCode">360311</span>
                        <br />
                        <br />
                        <span className="font-semibold">Sales Office:</span>
                        <br />
                        Shop No - 15, Patel Complex, Gundala Chowkdi,
                        <br />
                        Gondal, Gujarat 360311
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-gbi-50 rounded-full flex items-center justify-center mt-1">
                      <Phone size={20} className="text-gbi-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="tel:+919879930867"
                          className="hover:text-gbi-700"
                          itemProp="telephone"
                        >
                          +91 98799 30867
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-gbi-50 rounded-full flex items-center justify-center mt-1">
                      <Mail size={20} className="text-gbi-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="mailto:gbibearingindustries@gmail.com"
                          className="hover:text-gbi-700"
                          itemProp="email"
                        >
                          gbibearingindustries@gmail.com
                        </a>
                      </p>
                      <p className="text-gray-500 text-sm">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-gbi-50 rounded-full flex items-center justify-center mt-1">
                      <Clock size={20} className="text-gbi-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">
                        Hours of Operation
                      </h3>
                      <div className="text-gray-600 mt-1 space-y-1">
                        <p>Monday to Tuesday: 8:00 AM - 7:00 PM IST</p>
                        <p>Wednesday: Closed</p>
                        <p>Thursday to Sunday: 8:00 AM - 7:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-on-scroll">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and a GBI representative will contact
                  you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Frequently Asked Questions
            </h2>
            <h3 className="section-title text-center">Common Inquiries</h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Find quick answers to our most frequently asked questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-on-scroll">
            {[
              {
                question:
                  "What information should I provide when requesting a quote?",
                answer:
                  "To provide an accurate quote, please include details such as bearing type, dimensions, quantity, application requirements, operating conditions (temperature, load, speed), and your desired delivery timeline. The more specific information you provide, the more precise our quote will be.",
              },
              {
                question: "What is your standard delivery timeframe?",
                answer:
                  "Standard delivery for stock items is typically 3-5 business days. Custom orders generally require 2-4 weeks depending on complexity and specifications. For urgent requirements, we offer expedited services at an additional cost.",
              },
              {
                question: "Do you offer engineering consultation services?",
                answer:
                  "Yes, our team of bearing engineers provides comprehensive consultation services to help you select the optimal bearing solution for your application. We can assist with bearing selection, application analysis, and custom design services.",
              },
              {
                question: "What warranty do you offer on your products?",
                answer:
                  "GBI bearings come with a standard 12-month warranty against manufacturing defects. Extended warranties are available for specific applications and industries. Please contact our sales team for detailed warranty information related to your specific requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="mb-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
              >
                <div className="flex justify-between items-center cursor-pointer">
                  <h4 className="text-lg font-semibold">{faq.question}</h4>
                  <ChevronDown size={20} className="text-gbi-700" />
                </div>
                <div className="mt-4 text-gray-600">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
