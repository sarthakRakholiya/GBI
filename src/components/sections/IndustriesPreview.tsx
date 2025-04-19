import React, { useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data";
import IndustryCard from "@/components/ui/IndustryCard";

const IndustriesPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElements =
            entry.target.querySelectorAll(".animate-on-scroll");
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("show");
            }, 150 * index);
          });
        }
      });
    },
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      id="industries-section"
    >
      {/* Red accent line */}
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-gbi-700 hidden lg:block"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">
            Industries We Serve
          </h2>
          <h3 className="section-title text-center">
            Trusted Across Industries
          </h3>
          <p className="section-subtitle max-w-2xl mx-auto">
            GBI ball and tapered roller bearings deliver exceptional performance
            in the most demanding applications across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} {...industry} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Link
            to="/industries"
            className="btn-primary inline-flex items-center group"
            aria-label="View all industries served by GBI Precision Bearings"
          >
            Explore All Industries
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;
