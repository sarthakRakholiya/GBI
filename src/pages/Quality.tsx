import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { qualityCertifications } from "@/lib/data";
import Marquee from "react-fast-marquee";
import {
  CheckCircle,
  ArrowRight,
  Search,
  FileText,
  Gauge,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

// Testimonials data
const testimonials = [
  "GBI Bearings deliver unmatched precision and durability – a game-changer for our operations.",
  "We've been sourcing from GBI for over 5 years – their consistency and service are top-notch.",
  "GBI bearings have significantly reduced our maintenance downtime. Truly reliable!",
  "In the world of machinery, we can't afford failures. That's why we trust GBI.",
  "Their commitment to quality and timely delivery sets them apart in the industry.",
  "GBI is not just a vendor – they're a long-term partner in our success.",
  "From inquiry to installation, GBI's support team made everything seamless.",
  "Superior performance and competitive pricing – GBI bearings check all the boxes.",
  "We've tried many brands, but GBI stands out with its quality and precision.",
  "GBI's innovative bearing solutions helped us enhance our machine efficiency.",
  "Fast response, excellent customer service, and premium products – that's GBI.",
  "We trust GBI Bearings for all our critical applications – never disappointed.",
  "The durability of GBI bearings has exceeded our expectations in every use.",
  "Working with GBI feels like working with people who genuinely care about quality.",
  "GBI understands industrial needs – their products speak the language of performance.",
  "We've seen increased output and reduced wear-and-tear since switching to GBI.",
  "Dependable products, great team, and timely logistics – GBI delivers excellence.",
  "GBI's bearings perform under pressure, literally! Highly recommended.",
  "They've become our go-to supplier for all bearing requirements.",
  "What we admire most is GBI's dedication to constant innovation and quality control.",
];

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "International standard for quality management systems",
    icon: Shield,
    pdfLink: "/documents/ISO9001.pdf",
  },
  {
    title: "GST Registration",
    description: "Government of India tax registration",
    icon: FileText,
    pdfLink: "/documents/gst-reg.pdf",
  },
];

const Quality = () => {
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
  return (
    <div className="min-h-screen">
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
              Our Quality <span className="text-gradient">Assurance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 animate-fade-in">
              Rigorous testing and certification ensuring every bearing meets
              the highest standards.
            </p>
            <div className="h-1 w-20 bg-gbi-700 rounded animate-fade-in"></div>
          </div>
        </div>
      </section>

      {/* Quality Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
                Our Commitment
              </h2>
              <h3 className="section-title">
                Uncompromising Quality Standards
              </h3>
              <p className="text-gray-600 mb-6">
                At GBI, quality is not just a department—it's a core value
                embedded in every aspect of our operations. Our comprehensive
                quality assurance program ensures that every bearing leaving our
                facilities meets or exceeds industry standards and customer
                expectations.
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art testing facilities and metrology labs
                employ the latest technology to rigorously inspect and validate
                every component throughout the manufacturing process. This
                unwavering commitment to quality has established GBI as a
                trusted partner for applications where failure is not an option.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "100% component inspection",
                  "Advanced metrology systems",
                  "Automated testing processes",
                  "Continuous training programs",
                  "Statistical process control",
                  "Complete traceability",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-gbi-700 mt-0.5 mr-3 flex-shrink-0"
                    />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="relative">
                <div className="w-full rounded-lg shadow-lg overflow-hidden bg-gray-100 relative">
                  <img
                    src="https://images.pexels.com/photos/3862369/pexels-photo-3862369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="GBI Manufacturing Facility"
                    className="w-full h-72 object-cover"
                  />
                </div>

                {/* Floating statistics */}
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-lg p-6 shadow-lg w-3/4 max-w-xs">
                  <h4 className="text-lg font-semibold mb-4">
                    Quality by the Numbers
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Field failure rate</span>
                      <span className="font-bold text-gbi-700">0.001%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality inspectors</span>
                      <span className="font-bold text-gbi-700">120+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inspection points</span>
                      <span className="font-bold text-gbi-700">50+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Testing equipment</span>
                      <span className="font-bold text-gbi-700">$15M+</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gbi-700 rounded-lg opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Our Process
            </h2>
            <h3 className="section-title text-center">
              Comprehensive Quality Control
            </h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Every GBI bearing undergoes a rigorous multi-stage quality control
              process.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto animate-on-scroll">
            {/* Process line */}
            <div className="absolute h-full w-1 bg-gray-200 left-1/2 -translate-x-1/2 hidden md:block"></div>

            {/* Process steps */}
            <div className="space-y-16 relative">
              {[
                {
                  step: 1,
                  title: "Material Verification",
                  description:
                    "Every batch of raw material undergoes chemical composition analysis and mechanical property testing to ensure it meets our specifications.",
                  icon: Search,
                },
                {
                  step: 2,
                  title: "Precision Manufacturing",
                  description:
                    "CNC machines with real-time monitoring systems ensure dimensional accuracy at every stage of the manufacturing process.",
                  icon: Gauge,
                  right: true,
                },
                {
                  step: 3,
                  title: "Surface Analysis",
                  description:
                    "Advanced surface inspection systems detect microscopic imperfections invisible to the human eye, ensuring optimal surface finish.",
                  icon: Search,
                },
                {
                  step: 4,
                  title: "Functional Testing",
                  description:
                    "Bearings undergo load testing, noise analysis, and rotation performance evaluation under simulated operating conditions.",
                  icon: Gauge,
                  right: true,
                },
                {
                  step: 5,
                  title: "Final Inspection & Certification",
                  description:
                    "Random sampling for detailed analysis and comprehensive documentation ensures complete traceability of every bearing batch.",
                  icon: FileText,
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    process.right ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-8`}
                >
                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      process.right ? "md:text-right" : ""
                    } bg-white p-6 rounded-lg shadow-sm border border-gray-100`}
                  >
                    <div
                      className={`flex items-center ${
                        process.right ? "justify-end" : ""
                      } mb-4`}
                    >
                      <div className="h-10 w-10 bg-gbi-50 rounded-full flex items-center justify-center">
                        <process.icon size={20} className="text-gbi-700" />
                      </div>
                      <div className="ml-3">
                        <span className="text-sm font-medium text-gbi-700">
                          Step {process.step}
                        </span>
                        <h4 className="text-lg font-semibold">
                          {process.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-gray-600">{process.description}</p>
                  </div>

                  {/* Circle on timeline */}
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gbi-700 shadow-lg z-10 flex-shrink-0">
                    <span className="text-white font-medium">
                      {process.step}
                    </span>
                  </div>

                  {/* Empty div for layout */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Our Credentials
            </h2>
            <h3 className="section-title text-center">
              Certifications & Compliance
            </h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our commitment to quality is validated by internationally
              recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-on-scroll">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gbi-50 rounded-lg flex items-center justify-center mr-4">
                    <cert.icon size={24} className="text-gbi-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    <a
                      href={cert.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gbi-700 hover:text-gbi-800 font-medium"
                    >
                      View Certificate Details
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-fluid ">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              What Our Clients Say
            </h2>
            <h3 className="section-title text-center">Customer Testimonials</h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Hear from our customers about their experience with GBI bearings.
            </p>
          </div>

          <div>
            <Marquee
              gradient={true}
              gradientColor="#ffebeb"
              gradientWidth={50}
              speed={40}
              pauseOnHover={true}
              direction="left"
              className=""
            >
              {testimonials.map((quote, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 bg-white p-6 rounded-lg shadow-sm border border-gray-100 mx-4"
                >
                  <div className="mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gbi-200"
                    >
                      <path
                        d="M9.33333 21.3333C7.86667 21.3333 6.66667 20.8 5.73333 19.7333C4.8 18.6667 4.33333 17.3333 4.33333 15.7333C4.33333 14 4.93333 12.2667 6.13333 10.5333C7.33333 8.8 9.06667 7.33333 11.3333 6.13333L12.6667 8.13333C11.0667 9 9.8 9.93333 8.86667 10.9333C7.93333 11.9333 7.46667 12.9333 7.46667 13.9333C7.46667 14.3333 7.53333 14.6667 7.66667 14.9333C7.8 15.2 8 15.4 8.26667 15.5333C8.66667 15.7333 9.13333 15.8 9.66667 15.7333C10.2 15.6667 10.7333 15.4667 11.2667 15.1333C11.8 14.8 12.2667 14.3333 12.6667 13.7333C13.0667 13.1333 13.2667 12.4 13.2667 11.5333C13.2667 10.6667 13.0667 9.93333 12.6667 9.33333C12.2667 8.73333 11.7333 8.26667 11.0667 7.93333L12.6667 6C13.3333 6.13333 13.9333 6.4 14.4667 6.8C15 7.2 15.4667 7.66667 15.8667 8.2C16.2667 8.73333 16.5333 9.33333 16.7333 10C16.9333 10.6667 17.0667 11.3333 17.0667 12C17.0667 13.0667 16.8667 14.0667 16.4667 15C16.0667 15.9333 15.5333 16.7333 14.8667 17.4C14.2 18.0667 13.4 18.6 12.5333 19C11.6667 19.4 11 19.6667 10.5333 19.8C10.0667 19.9333 9.66667 20 9.33333 20V21.3333ZM23.3333 21.3333C21.8667 21.3333 20.6667 20.8 19.7333 19.7333C18.8 18.6667 18.3333 17.3333 18.3333 15.7333C18.3333 14 18.9333 12.2667 20.1333 10.5333C21.3333 8.8 23.0667 7.33333 25.3333 6.13333L26.6667 8.13333C25.0667 9 23.8 9.93333 22.8667 10.9333C21.9333 11.9333 21.4667 12.9333 21.4667 13.9333C21.4667 14.3333 21.5333 14.6667 21.6667 14.9333C21.8 15.2 22 15.4 22.2667 15.5333C22.6667 15.7333 23.1333 15.8 23.6667 15.7333C24.2 15.6667 24.7333 15.4667 25.2667 15.1333C25.8 14.8 26.2667 14.3333 26.6667 13.7333C27.0667 13.1333 27.2667 12.4 27.2667 11.5333C27.2667 10.6667 27.0667 9.93333 26.6667 9.33333C26.2667 8.73333 25.7333 8.26667 25.0667 7.93333L26.6667 6C27.3333 6.13333 27.9333 6.4 28.4667 6.8C29 7.2 29.4667 7.66667 29.8667 8.2C30.2667 8.73333 30.5333 9.33333 30.7333 10C30.9333 10.6667 31.0667 11.3333 31.0667 12C31.0667 13.0667 30.8667 14.0667 30.4667 15C30.0667 15.9333 29.5333 16.7333 28.8667 17.4C28.2 18.0667 27.4 18.6 26.5333 19C25.6667 19.4 25 19.6667 24.5333 19.8C24.0667 19.9333 23.6667 20 23.3333 20V21.3333Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <blockquote className="text-gray-600">{quote}</blockquote>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gbi-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the GBI Quality Difference
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Ready to enhance your equipment reliability with
              precision-engineered bearings? Contact our team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-gbi-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Request a Consultation
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                Browse Products
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};
export default Quality;
