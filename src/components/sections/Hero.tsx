import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();

  // Array of hero background images - updated with bearing-related images
  const heroImages = [
    "https://jvnbearings.com/wp-content/uploads/2023/05/BALL-BEARING-MANUFACTURING-PROCESS_result.webp",
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop&fm=webp&w=1920&h=1080", // Machinery with bearings
    "https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?q=80&w=2000&auto=format&fit=crop&fm=webp&w=1920&h=1080", // Industrial manufacturing
    "https://baartgroup.com/wp-content/uploads/Tapered-Bearings-On-Shaft-scaled.jpeg",
    "https://i.ytimg.com/vi/FL1UHMXAhKc/maxresdefault.jpg",
  ];

  useEffect(() => {
    if (!api) return;

    // Set up autoplay interval
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(autoplayInterval);
  }, [api]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollY = window.scrollY;

      // Opacity effect for content
      const opacity = Math.max(1 - scrollY / 700, 0.2);
      const content = heroRef.current.querySelector(
        ".hero-content"
      ) as HTMLElement;
      if (content) {
        content.style.opacity = opacity.toString();
        content.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black w-full"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 w-full">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <img
                  src={image}
                  alt={`Industrial bearings and machinery ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.6 }}
                  loading={index === 0 ? "eager" : "lazy"}
                  width="1920"
                  height="1080"
                  fetchPriority={index === 0 ? "high" : "low"}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.unsplash.com/photo-1562516710-38a6fa229b23?q=80&w=2070&auto=format&fit=crop";
                    target.alt = "Fallback industrial bearing image";
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Carousel arrows commented out
          <CarouselPrevious className="z-20" />
          <CarouselNext className="z-20" />
          */}
        </Carousel>
        {/* Dark overlay on top of image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60"></div>
      </div>

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gbi-700 z-10"></div>

      {/* Animated particles/circles */}
      <div className="absolute w-64 h-64 rounded-full bg-gbi-700/10 blur-3xl top-1/4 -right-20 animate-pulse z-10"></div>
      <div
        className="absolute w-96 h-96 rounded-full bg-gbi-800/5 blur-3xl -bottom-20 -left-20 animate-pulse z-10"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-20 hero-content">
        <div className="max-w-3xl">
          <h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-title font-bold text-white mb-3 sm:mb-4 animate-fade-in"
            style={{ textShadow: "0 4px 8px rgba(0,0,0,0.3)" }}
          >
            <span className="text-gradient bg-gradient-to-r from-gbi-500 to-gbi-700">
              Precision
            </span>{" "}
            in Motion
          </h1>

          <h2
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-6 sm:mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Leading manufacturer of precision bearings in Gujarat, delivering
            excellence in ball and tapered bearings for India's industrial
            applications
          </h2>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Explore Bearings button commented out
            <Link
              to="/products"
              className="btn-primary group bg-gbi-700 hover:bg-gbi-800 py-3 px-6 text-base flex items-center"
            >
              Explore Bearings
              <ChevronRight
                size={20}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
            */}

            <Link
              to="/contact"
              className="btn-secondary py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base flex items-center justify-center"
            >
              Get a Quote
              <ArrowRight
                size={18}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Discount Details */}
          <div
            className="flex items-center mt-4 sm:mt-6 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-lg p-2.5 sm:p-3 border border-white/20 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-gbi-700 h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M5.7 21a2 2 0 0 1-2-1.7L2 13.6a2 2 0 0 1 .5-1.6L10 4.5a2 2 0 0 1 2.8 0l7.5 7.5a2 2 0 0 1 .5 1.6l-1.7 5.7a2 2 0 0 1-2 1.7Z" />
                <path d="m9 12 3 3" />
                <path d="M14 12h.01" />
                <path d="M9 12h.01" />
              </svg>
            </div>
            <div className="ml-2 sm:ml-3 flex-grow">
              <h3 className="text-white font-semibold text-sm sm:text-base">
                Special Offer
              </h3>
              <p className="text-white/90 text-xs sm:text-sm">
                Get <span className="text-gbi-500 font-bold">60% OFF</span> on
                all bearings. Limited time offer!
              </p>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-6 space-y-2 sm:space-y-0 sm:space-x-3 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-md px-2.5 sm:px-3 py-2 sm:py-2.5 w-full sm:w-auto">
              <div className="bg-gbi-700 h-6 w-6 sm:h-7 sm:w-7 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 4C5.6 9.4 3.8 12.6 3.9 18.4 5 19.5 7 19.5 8.2 19.5 10.3 19.5 12.6 18.5 13.3 17M15.1 20.2c1.1-.5 3-.8 4.9-2.2.5-1.7.5-9 .5-11 0-4-3-5-6.5-5S8 3 8 7c0 2.5 0 8 2 11.5 2 3.5 5 2 5.1 1.7Z"></path>
                  <path d="M12 4C5.6 9.4 3.8 12.6 3.9 18.4 5 19.5 7 19.5 8.2 19.5 10.3 19.5 12.6 18.5 13.3 17"></path>
                </svg>
              </div>
              <div className="ml-2">
                <p className="text-white/90 text-[10px] sm:text-xs font-medium">
                  INDUSTRY STANDARD
                </p>
                <p className="text-white text-[10px] sm:text-xs">
                  ISO 9001 Certified
                </p>
              </div>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-md rounded-md px-2.5 sm:px-3 py-2 sm:py-2.5 w-full sm:w-auto">
              <div className="bg-gbi-700 h-6 w-6 sm:h-7 sm:w-7 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.179 3.179c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 3.5 12c0-.617.236-1.234.706-1.704L5.818 8.69a.979.979 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.179-3.179c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707 2.402 2.402 0 0 1 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div className="ml-2">
                <p className="text-white/90 text-[10px] sm:text-xs font-medium">
                  PRECISION ENGINEERED
                </p>
                <p className="text-white text-[10px] sm:text-xs">
                  Tolerance to 0.001mm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="fixed bottom-6 left-0 right-0 flex flex-col items-center justify-center animate-bounce z-20 cursor-pointer"
        onClick={handleScrollDown}
      >
        <span className="text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
          Scroll Down
        </span>
        <ChevronRight size={20} className="text-white/80 transform rotate-90" />
      </div>
    </div>
  );
};

export default Hero;
