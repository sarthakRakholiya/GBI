
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProcessHero from "@/components/sections/ProcessHero";
import ManufacturingProcesses from "@/components/sections/ManufacturingProcesses";

const Process = () => {
  // Initialize animation for scroll elements
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('show');
        }
      });
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Manufacturing Process | GBI Bearings</title>
        <meta name="description" content="Learn about our state-of-the-art bearing manufacturing processes from forging to final assembly." />
      </Helmet>
      <Navbar />
      <main>
        <ProcessHero />
        <ManufacturingProcesses />
      </main>
      <Footer />
    </>
  );
};

export default Process;
