import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Smartphone,
  Home,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gbi-700 rounded-md flex items-center justify-center">
                <span className="text-white font-title font-bold text-xl">
                  GBI
                </span>
              </div>
              <div className="ml-2">
                <span className="font-title font-bold text-xl text-white">
                  GBI
                </span>
                <span className="font-title font-light text-xs block leading-none text-gray-400">
                  BEARINGS
                </span>
              </div>
            </div>
            <p className="text-gray-400">
              Gayatri Bearing Industries (GBI), founded in 1995 by Champakbhai
              Rakholiya (Founder & CEO), is a leading manufacturer of precision
              bearings, delivering reliable solutions for the most demanding
              applications.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-title text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                /* Products link commented out
                { name: "Products", path: "/products" },
                */
                { name: "Industries", path: "/industries" },
                { name: "Quality", path: "/quality" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-1 opacity-70 group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-title text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 text-gbi-500" />
                <span className="text-gray-400">
                  Rolex Industrial Park, Plot No. 44, <br />
                  NH 27, Bhojpara, <br />
                  Gujarat 360311
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 text-gbi-500" />
                <span className="text-gray-400">
                  Sales Office: <br />
                  Shop No - 15, Chowkdi Patel Complex, <br />
                  Punit Nagar, Gundala, <br />
                  Gondal, Gujarat 360311
                </span>
              </li>
              <li className="flex items-center">
                <PhoneCall size={20} className="mr-3 text-gbi-500" />
                <a
                  href="tel:+919879930867"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 98799 30867
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-gbi-500" />
                <a
                  href="mailto:gayatri.ind25@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  gayatri.ind25@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-title text-lg font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and industry
              insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gbi-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-gbi-700 hover:bg-gbi-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Gayatri Bearing Industries (GBI).
            All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
