import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Quality from "./pages/Quality";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Catalog from "@/pages/Catalog";
import { initGA, trackPageView, trackUniqueVisitor } from "@/lib/analytics";

// Scroll to top component that will execute on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

// Analytics component to handle tracking
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA
    initGA();

    // Track unique visitor
    trackUniqueVisitor();
  }, []);

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

const App = () => {
  // Initialize animation detection for scroll elements
  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    const scrollThreshold = 100; // Only process scroll events if moved more than 100px

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) return;
      lastScrollY = currentScrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const animatedElements =
            document.querySelectorAll(".animate-on-scroll");
          animatedElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.85) {
              element.classList.add("show");
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Analytics />
          <div className="overflow-x-hidden w-full">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/process" element={<Process />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
