import React from "react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Cookie Policy"
        description="Learn about how we use cookies and similar technologies"
      />
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          <div className="prose prose-lg prose-gbi max-w-none">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
              <p className="text-gray-600 text-sm font-medium">
                Effective Date: March 15, 2024
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                This Cookie Policy explains how GBI Bearing ("we", "us", or
                "our") uses cookies and similar technologies on our website. By
                using our site, you agree to the use of cookies in accordance
                with this policy.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  1. What Are Cookies?
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    Cookies are small text files that are stored on your device
                    when you visit a website. They help enhance your browsing
                    experience by remembering your preferences and activity.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  2. Types of Cookies We Use
                </h2>
                <div className="grid gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Essential Cookies
                    </h3>
                    <p className="text-gray-600">
                      These cookies are necessary for the website to function
                      properly. They allow core functionalities such as
                      security, network management, and accessibility.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Performance & Analytics Cookies
                    </h3>
                    <p className="text-gray-600">
                      These cookies help us understand how visitors interact
                      with our website by collecting and reporting information
                      anonymously (e.g., Google Analytics).
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Functionality Cookies
                    </h3>
                    <p className="text-gray-600">
                      These cookies remember user preferences and choices to
                      provide a more personalized experience.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Third-Party Cookies
                    </h3>
                    <p className="text-gray-600">
                      Some cookies may be placed by third-party services we use
                      (e.g., embedded content, analytics providers).
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  3. Why We Use Cookies
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">We use cookies to:</p>
                  <ul className="space-y-2">
                    {[
                      "Ensure proper website functionality",
                      "Analyze traffic and user behavior",
                      "Improve website performance and content",
                      "Remember your preferences for future visits",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-gbi-100 text-gbi-700 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  4. How to Manage Cookies
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    You can manage or disable cookies via your browser settings.
                    Most browsers allow you to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "View what cookies are stored",
                      "Delete cookies",
                      "Block third-party or all cookies",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-6 w-6 rounded-full bg-gbi-100 text-gbi-700 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Please note that disabling cookies may affect the
                    functionality and user experience of our website.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  5. Third-Party Tools
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We may use third-party analytics and tracking tools, such
                    as:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-gbi-100 text-gbi-700 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                        1
                      </span>
                      <span className="text-gray-600">
                        Google Analytics – for tracking website traffic and user
                        interactions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-gbi-100 text-gbi-700 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                        2
                      </span>
                      <span className="text-gray-600">
                        Social Media Widgets – to enable content sharing and
                        engagement
                      </span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    These services may also set their own cookies as per their
                    respective privacy policies.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  6. Changes to This Policy
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    We may update this Cookie Policy from time to time. All
                    updates will be posted on this page with a revised effective
                    date.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  7. Contact Us
                </h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our use of cookies, please
                  contact:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-gbi-700 mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Gayatri Bearing Industries (GBI)
                      </p>
                      <p className="text-gray-600">
                        Rolex Industrial Park, Plot No. 44, NH 27, Bhojpara,
                        Gujarat 360311
                      </p>
                      <p className="text-gray-600 mt-2">
                        Sales Office: Shop No - 15, Chowkdi Patel Complex, Punit
                        Nagar, Gundala, Gondal, Gujarat 360311
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-gbi-700 mr-3" size={20} />
                    <a
                      href="mailto:gayatri.ind25@gmail.com"
                      className="text-gray-600 hover:text-gbi-700 transition-colors"
                    >
                      gayatri.ind25@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gbi-700 mr-3" size={20} />
                    <a
                      href="tel:+919879930867"
                      className="text-gray-600 hover:text-gbi-700 transition-colors"
                    >
                      +91 98799 30867
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CookiePolicy;
