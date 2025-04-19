import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true); // Track if we're in the hero section
  const location = useLocation();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = window.innerHeight * 0.8;
      const isInHeroSection = window.scrollY < heroSectionHeight;
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setIsHeroSection(isInHeroSection && location.pathname === "/");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    /* Products link commented out
    {
      name: "Products",
      path: "/products",
    },
    */
    {
      name: "Industries",
      path: "/industries",
    },
    {
      name: "Process",
      path: "/process",
    },
    {
      name: "Quality",
      path: "/quality",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4",
        isMenuOpen && "h-full"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="h-10 w-fit bg-gbi-700 rounded-md flex items-center justify-center border border-gray-300 px-2">
              <span className="text-white font-title font-bold text-2xl">
                GBI
              </span>
            </div>
            <div className="ml-2">
              <span
                className={cn(
                  "font-title font-bold text-xl transition-colors",
                  scrolled ? "text-gbi-700" : "text-gbi-700"
                )}
              >
                GAYATRI
              </span>
              <span
                className={cn(
                  "font-title font-light text-xs block leading-none transition-colors",
                  isHeroSection && location.pathname === "/"
                    ? "text-white"
                    : "text-gray-700"
                )}
              >
                BEARINGS
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
                location.pathname === link.path
                  ? isHeroSection && location.pathname === "/"
                    ? "text-gbi-700 font-semibold"
                    : "text-gbi-700 font-semibold"
                  : isHeroSection && location.pathname === "/"
                  ? "text-white hover:text-white/80"
                  : scrolled
                  ? "text-gray-700 hover:text-gbi-700"
                  : "text-gray-700 hover:text-gbi-700"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 transform origin-bottom-right transition-transform duration-300",
                  location.pathname === link.path
                    ? "bg-gbi-700 scale-x-100"
                    : isHeroSection && location.pathname === "/"
                    ? "bg-white scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                    : "bg-gbi-700 scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                )}
              />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={cn(
            "hidden md:inline-flex px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg",
            isHeroSection && location.pathname === "/"
              ? "bg-white text-gbi-700 hover:bg-white/90"
              : "bg-gbi-700 text-white hover:bg-gbi-800"
          )}
        >
          Get a Quote
        </Link>

        <button
          className={cn(
            "md:hidden focus:outline-none",
            isHeroSection && location.pathname === "/"
              ? "text-white"
              : "text-gray-700"
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        style={{
          top: "60px",
          height: "calc(100% - 60px)",
          overflowY: "auto",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-gbi-50 text-gbi-700 font-semibold"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 bg-gbi-700 hover:bg-gbi-800 text-white px-4 py-3 rounded-md text-base font-medium transition-colors shadow-md text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
