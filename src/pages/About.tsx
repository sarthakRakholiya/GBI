import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { ArrowRight, History, Target, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              About <span className="text-gradient">GBI Bearings</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 animate-fade-in">
              Pioneering precision in bearing technology with over four decades
              of excellence and innovation.
            </p>
            <div className="h-1 w-20 bg-gbi-700 rounded animate-fade-in"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
                Our Story
              </h2>
              <h3 className="section-title">A Legacy of Innovation</h3>
              <p className="text-gray-600 mb-6">
                Founded in 1995 by Champakbhai Rakholiya, GBI Bearings emerged
                from a vision to revolutionize the bearing industry. Our
                founder, a mechanical engineering pioneer, recognized the
                growing demand for high-precision bearings in emerging
                industrial applications.
              </p>
              <p className="text-gray-600 mb-6">
                What began as a specialized workshop has evolved into a global
                leader in bearing technology. Today, we operate state-of-the-art
                manufacturing facilities in Gujarat, serving clients across
                India and internationally.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence has earned us numerous industry
                certifications, including ISO 9001:2015, ISO 14001:2015, and
                IATF 16949:2016, reflecting our dedication to quality and
                environmental responsibility.
              </p>
            </div>

            <div className="animate-on-scroll">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3862369/pexels-photo-3862369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="GBI Manufacturing Facility"
                  className="rounded-lg shadow-lg w-full"
                  loading="lazy"
                  width="1260"
                  height="750"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
                  }}
                />

                {/* Timeline overlay */}
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-lg p-6 shadow-lg w-3/4">
                  <h4 className="text-lg font-semibold mb-3">Our Journey</h4>
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="w-24 font-bold text-gbi-700">1995</div>
                      <div className="flex-1">Founded in Gujarat, India</div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-gbi-700">2000</div>
                      <div className="flex-1">
                        First manufacturing facility established
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-gbi-700">2005</div>
                      <div className="flex-1">
                        ISO 9001 certification achieved
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-gbi-700">2010</div>
                      <div className="flex-1">
                        Advanced R&D center established
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-24 font-bold text-gbi-700">2018</div>
                      <div className="flex-1">Industry 4.0 implementation</div>
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

      {/* Vision and Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Our Purpose
            </h2>
            <h3 className="section-title text-center">Vision & Mission</h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Driving innovation and excellence in bearing technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 animate-on-scroll card-hover">
              <div className="h-12 w-12 bg-gbi-50 rounded-full flex items-center justify-center mb-6">
                <Target size={24} className="text-gbi-700" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
              <p className="text-gray-600 mb-4">
                To be the global leader in precision bearing technology, setting
                new standards for quality, innovation, and customer satisfaction
                in the industry.
              </p>
              <p className="text-gray-600">
                We envision a future where our bearings power the next
                generation of industrial and automotive applications, enabling
                greater efficiency and reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 animate-on-scroll card-hover">
              <div className="h-12 w-12 bg-gbi-50 rounded-full flex items-center justify-center mb-6">
                <History size={24} className="text-gbi-700" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
              <p className="text-gray-600 mb-4">
                To deliver superior bearing solutions through continuous
                innovation, rigorous quality control, and exceptional customer
                service.
              </p>
              <p className="text-gray-600">
                We are committed to understanding our customers' unique
                challenges and providing tailored solutions that optimize
                performance and drive success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Guiding Principles
            </h2>
            <h3 className="section-title text-center">Our Core Values</h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              The principles that define our company culture and guide our
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We maintain the highest standards in manufacturing, quality control, and customer service.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description:
                  "We prioritize our customers' needs and work closely with them to deliver optimal solutions.",
              },
              {
                icon: Globe,
                title: "Innovation",
                description:
                  "We continuously invest in R&D to develop cutting-edge bearing technologies.",
              },
              {
                icon: Target,
                title: "Reliability",
                description:
                  "We ensure consistent quality and performance in every bearing we produce.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-100 shadow-sm bg-white animate-on-scroll card-hover"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-12 w-12 bg-gbi-50 rounded-full flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-gbi-700" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
              Our Leader
            </h2>
            <h3 className="section-title text-center">Founder & CEO</h3>
            <p className="section-subtitle max-w-2xl mx-auto">
              Meet the visionary leader driving innovation and excellence at GBI
              Bearings.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 animate-on-scroll card-hover">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img
                    src="/leader.jpg"
                    alt="Champakbhai Rakholiya - Founder & CEO of GBI Bearings"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-semibold mb-1">
                    Champakbhai Rakholiya
                  </h4>
                  <p className="text-gbi-700 font-medium mb-4">
                    Founder & Chief Executive Officer
                  </p>
                  <p className="text-gray-600 mb-4">
                    With over 25 years of experience in precision engineering,
                    Champakbhai Rakholiya founded GBI Bearings in 1995 with a
                    vision to revolutionize the bearing industry in India.
                  </p>
                  <p className="text-gray-600 mb-4">
                    As a mechanical engineering pioneer, he recognized the
                    growing demand for high-precision bearings in emerging
                    industrial applications and established GBI as a leader in
                    the field.
                  </p>
                  <p className="text-gray-600">
                    Under his leadership, GBI has grown from a specialized
                    workshop to a global manufacturer with state-of-the-art
                    facilities, earning numerous industry certifications
                    including ISO 9001:2015.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gbi-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the GBI Difference
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Discover how our precision bearings can enhance your operations
              and drive success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Explore Products button hidden
              <Link
                to="/products"
                className="bg-white text-gbi-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Explore Products
              </Link>
              */}
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                Contact Us
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

export default About;
