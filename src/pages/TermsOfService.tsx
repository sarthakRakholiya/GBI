import React from "react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our services"
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
                These Terms of Service ("Terms") govern your use of GBI
                Bearing's website, products, and services. By accessing our
                website or placing an order, you agree to be bound by these
                Terms.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  1. Website Usage
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    You may use our website for lawful purposes only. You agree
                    not to disrupt or attempt to gain unauthorized access to any
                    part of the site or its related systems.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  2. Product Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    We make every effort to provide accurate product details,
                    specifications, and availability. However, we reserve the
                    right to correct any errors or update information at any
                    time without prior notice.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  3. Orders and Payment Terms
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-gbi-100 text-gbi-700 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                        1
                      </span>
                      <span className="text-gray-600">
                        All quotations and purchase orders are subject to
                        confirmation.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-gbi-100 text-gbi-700 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                        2
                      </span>
                      <span className="text-gray-600">
                        Standard payment terms are Net 30 — payment is due
                        within 30 days from the invoice date.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-gbi-100 text-gbi-700 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium">
                        3
                      </span>
                      <span className="text-gray-600">
                        Orders will be processed upon confirmation and may be
                        subject to lead times depending on availability.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  4. Intellectual Property
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    All website content including images, logos, text, and
                    graphics is the property of GBI Bearing and is protected by
                    applicable intellectual property laws. Use without
                    permission is strictly prohibited.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  5. Limitation of Liability
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    GBI Bearing shall not be liable for any direct, indirect,
                    incidental, or consequential damages arising from the use of
                    our website, products, or services.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  6. Warranty and Returns
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    Product warranties (if applicable) will be as per the
                    product documentation or as agreed upon during the quotation
                    stage. Returns are subject to inspection and company policy.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  7. Third-Party Links
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    External links on our website are for reference purposes. We
                    are not responsible for the content or practices of linked
                    third-party websites.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  8. Termination
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    We reserve the right to restrict or terminate access to our
                    website or services at our discretion, without prior notice,
                    for any misuse or violation of these Terms.
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  9. Governing Law
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    These Terms shall be governed by and interpreted in
                    accordance with the laws of India. Any disputes shall fall
                    under the jurisdiction of the courts located in [Insert
                    City, India].
                  </p>
                </div>
              </section>

              <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="h-8 w-1 bg-gbi-700 rounded-full mr-3"></span>
                  10. Contact
                </h2>
                <p className="text-gray-700 mb-6">
                  For any inquiries regarding these Terms, please contact:
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
                        Sales Office: Shop No - 15, Patel Complex, Gundala
                        Chowkdi, Gondal, Gujarat 360311
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

export default TermsOfService;
