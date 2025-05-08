import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import CustomCursor from "@/components/ui/CustomCursor";
import {
  motion,
  useScroll,
  useTransform,
  useDragControls,
} from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const { scrollY } = useScroll();
  const [isExpanded, setIsExpanded] = useState(false);
  const dragControls = useDragControls();

  // Parallax values
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Array of hero background images
  const heroImages = [
    "https://jvnbearings.com/wp-content/uploads/2023/05/BALL-BEARING-MANUFACTURING-PROCESS_result.webp",
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop&fm=webp&w=1920&h=1080",
    "https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?q=80&w=2000&auto=format&fit=crop&fm=webp&w=1920&h=1080",
    "https://baartgroup.com/wp-content/uploads/Tapered-Bearings-On-Shaft-scaled.jpeg",
    "https://i.ytimg.com/vi/FL1UHMXAhKc/maxresdefault.jpg",
  ];

  useEffect(() => {
    if (!api) return;

    // Set up autoplay interval
    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Increased to 5 seconds for better viewing

    return () => clearInterval(autoplayInterval);
  }, [api]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
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
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pb-20 sm:pb-24"
    >
      <CustomCursor color="#FF4B4B" size={40} />

      {/* Background Image Carousel with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-full"
        style={{ y: y1 }}
      >
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
                <div className="relative w-full h-full min-h-screen">
                  <img
                    src={image}
                    alt={`Industrial bearings and machinery ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover object-center"
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Dark overlay on top of image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60"></div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div className="absolute inset-0 z-0" style={{ y: y2 }}>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gbi-700/10 blur-3xl top-1/4 -right-20 animate-pulse" />
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-gbi-800/5 blur-3xl -bottom-20 -left-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-gbi-600/10 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </motion.div>

      {/* Red accent line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gbi-700 z-10"
        style={{ y: y3 }}
      />

      <motion.div
        className="container mx-auto px-4 relative z-20 hero-content pt-20 sm:pt-24 md:pt-28"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* GBI Logo in center */}
          <motion.div
            className="flex justify-center mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Outer ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#C0C0C0"
                  strokeWidth="4"
                  fill="none"
                  opacity="0.5"
                />
                {/* Inner ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  stroke="#C0C0C0"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.5"
                />
                {/* Bearing balls */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 360) / 12;
                  const rad = (angle * Math.PI) / 180;
                  const r = 35; // midway between 25 and 45
                  const cx = 50 + r * Math.cos(rad);
                  const cy = 50 + r * Math.sin(rad);
                  return (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="4.5"
                      fill="#C0C0C0"
                      opacity="0.8"
                    />
                  );
                })}
              </motion.svg>
              {/* GBI Logo in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gbi-700 rounded-lg px-1.5 py-0.5 transform scale-[0.9]">
                  <span className="text-white font-bold text-base sm:text-xl tracking-wider">
                    GBI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-bold text-white mb-3 sm:mb-4 md:mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient bg-gradient-to-r from-gbi-500 to-gbi-700">
              Precision
            </span>{" "}
            in Motion
          </motion.h1>

          <motion.h2
            className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 font-light mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto text-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Leading manufacturer of precision bearings in Gujarat, delivering
            excellence in ball and tapered bearings for India's industrial
            applications
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md bg-gbi-700 hover:bg-gbi-800 text-white text-sm sm:text-base"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gbi-800 group-hover:translate-x-0 ease">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Explore Products
              </span>
              <span className="relative invisible">Explore Products</span>
            </Link>

            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 overflow-hidden font-medium transition duration-300 ease-out rounded-lg shadow-md bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm text-sm sm:text-base"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white/20 group-hover:translate-x-0 ease">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                Get a Quote
              </span>
              <span className="relative invisible">Get a Quote</span>
            </Link>
          </motion.div>

          {/* Stats Section with parallax */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mt-4 sm:mt-6 md:mt-8 px-2 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ y: y3 }}
          >
            {[
              { label: "Years of Excellence", value: "40+" },
              { label: "Products", value: "100+" },
              { label: "Industries Served", value: "20+" },
              { label: "Quality Rating", value: "99.9%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-white/10"
              >
                <div className="text-sm sm:text-lg md:text-xl font-bold text-gbi-500 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[8px] sm:text-[10px] md:text-xs text-white/70 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with parallax - hidden on small screens */}
      <motion.div
        className="hidden sm:flex fixed bottom-8 left-0 right-0 flex-col items-center justify-center z-20 cursor-pointer"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ y: y2 }}
      >
        <span className="text-white/80 text-sm font-medium mb-2">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white/80 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>

      {/* Draggable Offer Section */}
      <motion.div
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-30 block sm:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          opacity: useTransform(scrollY, [0, 500], [1, 0]),
          display: useTransform(scrollY, [0, 500], ["block", "none"]),
        }}
        drag
        dragControls={dragControls}
        dragMomentum={true}
        dragConstraints={heroRef}
        dragElastic={0.2}
        dragTransition={{
          bounceStiffness: 200,
          bounceDamping: 15,
          power: 0.8,
          timeConstant: 200,
        }}
        whileDrag={{
          scale: 1.05,
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        onDragEnd={(event, info) => {
          if (!heroRef.current) return;

          const rect = heroRef.current.getBoundingClientRect();
          const elementRect = (
            event.target as HTMLElement
          ).getBoundingClientRect();

          // Calculate boundaries
          const maxX = rect.width - elementRect.width;
          const maxY = rect.height - elementRect.height;

          // Get current position
          const currentX = info.point.x;
          const currentY = info.point.y;

          // Calculate bounce
          let bounceX = 0;
          let bounceY = 0;

          // X-axis bounce
          if (currentX < 0) {
            bounceX = Math.abs(currentX) * 0.3;
          } else if (currentX > maxX) {
            bounceX = -(currentX - maxX) * 0.3;
          }

          // Y-axis bounce
          if (currentY < 0) {
            bounceY = Math.abs(currentY) * 0.3;
          } else if (currentY > maxY) {
            bounceY = -(currentY - maxY) * 0.3;
          }

          // Apply physics-based bounce
          return {
            x: bounceX,
            y: bounceY,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              velocity: {
                x: info.velocity.x * 0.5,
                y: info.velocity.y * 0.5,
              },
            },
          };
        }}
      >
        <div className="relative max-w-[240px] sm:max-w-[280px]">
          {/* Tooltip - only visible in collapsed state */}
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gbi-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap flex items-center gap-1"
            initial={{ opacity: 0, y: 5 }}
            animate={{
              opacity: isExpanded ? 0 : 1,
              y: isExpanded ? 5 : 0,
              visibility: isExpanded ? "hidden" : "visible",
            }}
            transition={{
              duration: 0.2,
              opacity: { duration: 0.2 },
              visibility: { delay: isExpanded ? 0 : 0.2 },
            }}
          >
            <span>Offer</span>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gbi-700 rotate-45"></div>
          </motion.div>

          {/* Main offer card */}
          <motion.div
            className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg overflow-hidden cursor-pointer"
            animate={{
              height: isExpanded ? "auto" : "40px",
              width: isExpanded ? "240px" : "40px",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              height: { duration: 0.3 },
              width: { duration: 0.3 },
            }}
            onClick={() => !isExpanded && setIsExpanded(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Drag handle for mobile */}
            <div
              className="absolute top-0 left-0 w-full h-10 flex items-center justify-center cursor-move"
              onPointerDown={(e) => {
                e.stopPropagation();
                dragControls.start(e);
              }}
            >
              <div className="w-6 h-1 bg-white/30 rounded-full" />
            </div>

            {/* Close button - only visible in expanded view */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors duration-200 z-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                visibility: isExpanded ? "visible" : "hidden",
              }}
              transition={{
                duration: 0.2,
                opacity: { duration: 0.2 },
                visibility: { delay: isExpanded ? 0 : 0.2 },
              }}
            >
              <X size={16} />
            </motion.button>

            {/* Offer content */}
            <motion.div
              className="p-3 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                visibility: isExpanded ? "visible" : "hidden",
              }}
              transition={{
                duration: 0.2,
                opacity: { duration: 0.2 },
                visibility: { delay: isExpanded ? 0 : 0.2 },
              }}
            >
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-0.5">
                    Special Offer
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-tight">
                    Get up to 60% off on bulk orders
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-gbi-700 rounded-full p-1.5 sm:p-2">
                    <span className="text-white font-bold text-sm sm:text-base">
                      up to 60%
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-1.5 sm:mt-2 pt-1.5 sm:pt-2 border-t border-white/10">
                <p className="text-white/70 text-[10px] sm:text-xs leading-tight">
                  Limited time offer
                </p>
              </div>
            </motion.div>

            {/* Collapsed state - always visible when not expanded */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isExpanded ? 0 : 1,
                visibility: isExpanded ? "hidden" : "visible",
              }}
              transition={{
                duration: 0.2,
                opacity: { duration: 0.2 },
                visibility: { delay: isExpanded ? 0.2 : 0 },
              }}
            >
              <div className="bg-gbi-700 rounded-full p-2 flex items-center justify-center">
                <span className="text-white font-bold text-sm">60%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
