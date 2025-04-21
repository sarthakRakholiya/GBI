import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { products } from "@/lib/data";
import { Search, ChevronDown, Filter, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import SEO from "@/components/ui/SEO";

const productsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "GBI Precision Bearings",
  description:
    "High-quality precision bearings, housings, and components for industrial applications",
  brand: {
    "@type": "Brand",
    name: "GBI Bearings",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
};

const Products = () => {
  const [filters, setFilters] = useState({
    category: "",
    application: "",
    search: "",
  });
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const location = useLocation();

  // Initialize animations for scroll elements
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.85) {
          element.classList.add("show");
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for product ID in URL hash
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && products.some((p) => p.id === hash)) {
      setActiveProduct(hash);

      // Scroll to product detail after a short delay
      setTimeout(() => {
        const element = document.getElementById("product-detail");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [location.hash]);

  // Update filtered products when filters change
  useEffect(() => {
    let result = products;

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    if (filters.category) {
      result = result.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.application) {
      result = result.filter((product) =>
        product.applications.includes(filters.application)
      );
    }

    setFilteredProducts(result);
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: "",
      application: "",
      search: "",
    });
  };

  // Get unique categories and applications
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const applications = Array.from(
    new Set(products.flatMap((p) => p.applications))
  );

  // Get active product details
  const activeProductDetails = activeProduct
    ? products.find((p) => p.id === activeProduct)
    : null;

  // Show product details in dialog
  const handleProductCardClick = (productId: string) => {
    setActiveProduct(productId);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gbi-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gbi-50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 animate-fade-in">
              Precision-engineered tapered roller bearings designed for the most
              demanding applications.
            </p>
            <div className="h-1 w-20 bg-gbi-700 rounded animate-fade-in"></div>
          </div>
        </div>
      </section>

      {/* Products Catalog Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-on-scroll">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  {(filters.category ||
                    filters.application ||
                    filters.search) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-gbi-700 hover:text-gbi-800 flex items-center"
                    >
                      <X size={16} className="mr-1" />
                      Clear all
                    </button>
                  )}
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label
                    htmlFor="search"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      value={filters.search}
                      onChange={(e) =>
                        handleFilterChange("search", e.target.value)
                      }
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500 focus:border-transparent"
                    />
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      value={filters.category}
                      onChange={(e) =>
                        handleFilterChange("category", e.target.value)
                      }
                      className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gbi-500 focus:border-transparent"
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                {/* Application Filter */}
                <div className="mb-6">
                  <label
                    htmlFor="application"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Application
                  </label>
                  <div className="relative">
                    <select
                      id="application"
                      value={filters.application}
                      onChange={(e) =>
                        handleFilterChange("application", e.target.value)
                      }
                      className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gbi-500 focus:border-transparent"
                    >
                      <option value="">All Applications</option>
                      {applications.map((application) => (
                        <option key={application} value={application}>
                          {application}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                {/* Active Filters */}
                {(filters.category ||
                  filters.application ||
                  filters.search) && (
                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Active Filters:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {filters.category && (
                        <div className="bg-gbi-50 text-gbi-700 text-xs rounded-full px-3 py-1 flex items-center">
                          Category: {filters.category}
                          <button
                            onClick={() => handleFilterChange("category", "")}
                            className="ml-1 text-gbi-700 hover:text-gbi-800"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                      {filters.application && (
                        <div className="bg-gbi-50 text-gbi-700 text-xs rounded-full px-3 py-1 flex items-center">
                          Application: {filters.application}
                          <button
                            onClick={() =>
                              handleFilterChange("application", "")
                            }
                            className="ml-1 text-gbi-700 hover:text-gbi-800"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                      {filters.search && (
                        <div className="bg-gbi-50 text-gbi-700 text-xs rounded-full px-3 py-1 flex items-center">
                          Search: "{filters.search}"
                          <button
                            onClick={() => handleFilterChange("search", "")}
                            className="ml-1 text-gbi-700 hover:text-gbi-800"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-6 flex items-center justify-between">
                <div className="text-gray-600">
                  Showing{" "}
                  <span className="font-medium">{filteredProducts.length}</span>{" "}
                  products
                </div>
                <div className="flex items-center text-sm">
                  <Filter size={16} className="mr-2 text-gray-500" />
                  Sort by:
                  <select className="ml-2 border-none focus:outline-none text-gbi-700 font-medium bg-transparent">
                    <option>Featured</option>
                    <option>Newest</option>
                    <option>Name (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      id={product.id}
                      className={`animate-on-scroll card-hover bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 cursor-pointer ${
                        activeProduct === product.id
                          ? "ring-2 ring-gbi-700"
                          : ""
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => handleProductCardClick(product.id)}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="px-2 py-1 bg-gbi-700 text-white text-xs rounded-md">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-lg font-semibold mb-2 line-clamp-1">
                          {product.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="text-xs">
                            <span className="text-gray-500 block">
                              Inner Diameter
                            </span>
                            <span className="font-medium">
                              {product.specs.innerDiameter}
                            </span>
                          </div>
                          <div className="text-xs">
                            <span className="text-gray-500 block">
                              Outer Diameter
                            </span>
                            <span className="font-medium">
                              {product.specs.outerDiameter}
                            </span>
                          </div>
                          <div className="text-xs">
                            <span className="text-gray-500 block">Width</span>
                            <span className="font-medium">
                              {product.specs.width}
                            </span>
                          </div>
                          <div className="text-xs">
                            <span className="text-gray-500 block">
                              Dynamic Load
                            </span>
                            <span className="font-medium">
                              {product.specs.dynamicLoadRating}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductCardClick(product.id);
                          }}
                          className="w-full py-2 text-center bg-gray-100 hover:bg-gbi-50 text-gbi-700 rounded-md text-sm font-medium transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <div className="text-gray-400 mb-4">
                    <Filter size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search criteria
                  </p>
                  <button onClick={clearFilters} className="btn-secondary">
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Product Detail Section */}
          {activeProductDetails && (
            <div id="product-detail" className="mt-16 animate-scale-in">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Product Image */}
                  <div className="h-full">
                    <img
                      src={activeProductDetails.image}
                      alt={activeProductDetails.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-8">
                    <div className="mb-2">
                      <span className="px-2 py-1 bg-gbi-50 text-gbi-700 text-xs font-medium rounded-md">
                        {activeProductDetails.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      {activeProductDetails.name}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {activeProductDetails.description}
                    </p>

                    <div className="divider"></div>

                    <h3 className="text-lg font-semibold mb-4">
                      Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 mb-6">
                      <div>
                        <span className="text-gray-500 text-sm block">
                          Inner Diameter
                        </span>
                        <span className="font-medium">
                          {activeProductDetails.specs.innerDiameter}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm block">
                          Outer Diameter
                        </span>
                        <span className="font-medium">
                          {activeProductDetails.specs.outerDiameter}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm block">
                          Width
                        </span>
                        <span className="font-medium">
                          {activeProductDetails.specs.width}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm block">
                          Dynamic Load Rating
                        </span>
                        <span className="font-medium">
                          {activeProductDetails.specs.dynamicLoadRating}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm block">
                          Static Load Rating
                        </span>
                        <span className="font-medium">
                          {activeProductDetails.specs.staticLoadRating}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm block">
                          Limit Speed
                        </span>
                        <span className="font-medium">
                          {activeProductDetails.specs.limitSpeed}
                        </span>
                      </div>
                    </div>

                    <div className="divider"></div>

                    <h3 className="text-lg font-semibold mb-4">Applications</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeProductDetails.applications.map((app) => (
                        <span
                          key={app}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <button className="btn-primary py-3 px-6 text-base flex-1">
                        Request Quote
                      </button>
                      <button className="btn-secondary py-3 px-6 text-base flex-1">
                        Download Specs
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveProduct(null)}
                className="mt-8 inline-flex items-center text-gbi-700 hover:text-gbi-800"
              >
                <ChevronDown className="mr-2 rotate-90" size={20} />
                Back to products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gbi-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Bearing Solution?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our engineering team can design and manufacture custom bearings
              tailored to your specific requirements.
            </p>
            <a
              href="/contact"
              className="bg-white text-gbi-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all inline-block"
            >
              Contact our Engineering Team
            </a>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {activeProductDetails?.name}
            </DialogTitle>
          </DialogHeader>

          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {activeProductDetails && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="h-64 md:h-auto rounded-lg overflow-hidden">
                <img
                  src={activeProductDetails.image}
                  alt={activeProductDetails.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1595078475395-5c8f18d020cc?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>

              <div>
                <div className="mb-2">
                  <span className="px-2 py-1 bg-gbi-50 text-gbi-700 text-xs font-medium rounded-md">
                    {activeProductDetails.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">
                  {activeProductDetails.description}
                </p>

                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-3 mb-6">
                  <div>
                    <span className="text-gray-500 text-sm block">
                      Inner Diameter
                    </span>
                    <span className="font-medium">
                      {activeProductDetails.specs.innerDiameter}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">
                      Outer Diameter
                    </span>
                    <span className="font-medium">
                      {activeProductDetails.specs.outerDiameter}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Width</span>
                    <span className="font-medium">
                      {activeProductDetails.specs.width}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">
                      Dynamic Load Rating
                    </span>
                    <span className="font-medium">
                      {activeProductDetails.specs.dynamicLoadRating}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">
                      Static Load Rating
                    </span>
                    <span className="font-medium">
                      {activeProductDetails.specs.staticLoadRating}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">
                      Limit Speed
                    </span>
                    <span className="font-medium">
                      {activeProductDetails.specs.limitSpeed}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProductDetails.applications.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => {
                      setIsDialogOpen(false);
                      setTimeout(() => {
                        const element = document.getElementById(
                          activeProductDetails.id
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                    className="btn-primary"
                  >
                    View in Page
                  </button>
                  <button className="btn-secondary">Request Quote</button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <ScrollToTop />
      <SEO
        title="Precision Bearings & Components | GBI Bearings"
        description="High-quality precision bearings, housings, and components for industrial applications. Custom solutions with superior performance and reliability."
        keywords="precision bearings India, bearing housings Gujarat, bearing components manufacturers, industrial bearings supplier, custom bearings exporter, maintenance-free bearings"
        canonicalUrl="https://www.gbibearings.in/products"
        ogImage="/seo-image.png"
        structuredData={productsStructuredData}
      />
    </div>
  );
};

export default Products;
