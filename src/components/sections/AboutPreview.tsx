import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { features } from "@/lib/data";

const AboutPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements =
              section.querySelectorAll(".animate-on-scroll");
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("show");
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Text Content */}
          <div>
            <div className="animate-on-scroll">
              <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
                About GBI
              </h2>
              <h3 className="section-title">
                Excellence Through Precision Engineering
              </h3>
              <p className="section-subtitle">
                Delivering industry-leading bearings through innovation and
                meticulous manufacturing.
              </p>
            </div>

            <div className="animate-on-scroll">
              <p className="mb-6 text-gray-600">
                Since 1995, GBI has been at the forefront of bearing technology,
                setting the standard for precision, durability, and performance
                in the most demanding applications across India and
                internationally.
              </p>
              <p className="mb-6 text-gray-600">
                Our state-of-the-art manufacturing facilities in Gujarat and
                rigorous quality control processes ensure that every bearing
                that leaves our factory meets or exceeds industry standards and
                customer expectations.
              </p>
            </div>

            <Link
              to="/about"
              className="animate-on-scroll inline-flex items-center text-gbi-700 hover:text-gbi-800 font-medium group"
            >
              Learn more about our journey
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="animate-on-scroll card-hover bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-10 w-10 bg-gbi-50 rounded-md flex items-center justify-center mb-4">
                  <feature.icon size={20} className="text-gbi-700" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-on-scroll">
          {[
            { label: "Years of Experience", value: "25+" },
            { label: "States Served", value: "20+" },
            { label: "Bearing Types", value: "100+" },
            { label: "Satisfied Clients", value: "500+" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-3xl md:text-4xl font-bold text-gbi-700 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
