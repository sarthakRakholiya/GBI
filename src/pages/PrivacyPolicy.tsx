import React from "react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Privacy Policy"
        description="Learn about how we collect, use, and protect your information"
      />
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          <div className="prose prose-lg prose-gbi max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
              <p className="text-gray-600 text-sm font-medium">
                Effective Date: March 15, 2024
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                At GBI Bearings, your privacy is important to us. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or engage with our
                products and services. By using our website, you agree to the
                terms of this Privacy Policy.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We may collect the following types of information:
                </p>
                <div className="grid gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-600">
                      Name, email address, phone number, company name, job
                      title, and other identifying information you provide
                      voluntarily through contact forms, inquiries, or
                      subscriptions.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Business Information
                    </h3>
                    <p className="text-gray-600">
                      Details about your company's requirements, product
                      preferences, and purchase history.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Technical Information
                    </h3>
                    <p className="text-gray-600">
                      IP address, browser type, operating system, device
                      information, pages visited, and usage data collected via
                      cookies or analytics tools.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  The information we collect may be used to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Respond to your inquiries and provide customer support",
                    "Process orders and deliver products",
                    "Improve our website, services, and customer experience",
                    "Send newsletters, promotional materials, or important updates (only with your consent)",
                    "Comply with legal obligations and protect our rights",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-gbi-100 text-gbi-700 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  3. Sharing Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, rent, or trade your personal information. We
                  may share your data with:
                </p>
                <div className="grid gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Service Providers
                    </h3>
                    <p className="text-gray-600">
                      Trusted third-party service providers who assist in
                      operating our website and services
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Logistics Partners
                    </h3>
                    <p className="text-gray-600">
                      Logistics and shipping partners to fulfill product
                      deliveries
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gbi-700 mb-2">
                      Legal Authorities
                    </h3>
                    <p className="text-gray-600">
                      Legal or regulatory authorities when required by law or to
                      protect our rights
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  4. Data Security
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational
                    measures to protect your personal data against unauthorized
                    access, alteration, disclosure, or destruction.
                  </p>
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  5. Cookies and Tracking Technologies
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    Our website may use cookies and similar technologies to
                    enhance user experience, analyze performance, and
                    personalize content. You can adjust your browser settings to
                    disable cookies, but this may affect the website's
                    functionality.
                  </p>
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  6. Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have rights regarding your
                  personal data, such as:
                </p>
                <ul className="space-y-2">
                  {[
                    "Access to the data we hold about you",
                    "Request correction or deletion of your data",
                    "Opt-out of marketing communications",
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
                  Please contact us to exercise any of these rights.
                </p>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  7. Third-Party Links
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    Our website may contain links to external sites. We are not
                    responsible for the content or privacy practices of those
                    websites.
                  </p>
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mt-8">
                  8. Changes to This Privacy Policy
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. Changes
                    will be posted on this page with an updated effective date.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  9. Contact Us
                </h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please contact:
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

export default PrivacyPolicy;
