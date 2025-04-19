import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProcessHero = () => {
  return (
    <div className="relative bg-gray-50 py-24 md:py-32">
      {/* Overlay pattern */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c8c9' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-gbi-700 transition-colors">
              Home
            </Link>
            <ArrowRight size={14} className="mx-2 text-gray-400" />
            <span className="text-gbi-700">Our Process</span>
          </div>

          {/* Title with accent */}
          <div className="relative mb-6">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gbi-700"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-gray-900 pl-4">
              Our Manufacturing{" "}
              <span className="text-gradient bg-gradient-to-r from-gbi-500 to-gbi-700">
                Process
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-10 pl-4">
            Discover how our precision bearings are manufactured at our
            state-of-the-art facility in Gujarat, from raw materials to finished
            products, using advanced technology and rigorous quality control.
          </p>

          {/* Statistics badges */}
          <div className="flex flex-wrap gap-4 pl-4">
            <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <span className="text-xl font-semibold text-gbi-700">
                ISO 9001:2015
              </span>
              <span className="block text-sm text-gray-600">Certified</span>
            </div>
            <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <span className="text-xl font-semibold text-gbi-700">
                8+ Steps
              </span>
              <span className="block text-sm text-gray-600">
                Precision Process
              </span>
            </div>
            <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
              <span className="text-xl font-semibold text-gbi-700">
                0.001mm
              </span>
              <span className="block text-sm text-gray-600">Tolerance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute w-64 h-64 rounded-full bg-gbi-100/30 blur-3xl top-1/4 -right-20 animate-pulse"></div>
      <div
        className="absolute w-96 h-96 rounded-full bg-gbi-200/20 blur-3xl -bottom-20 -left-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default ProcessHero;
