import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useQuery } from "@tanstack/react-query";
import { Search, ChevronDown, Filter, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import SEO from "@/components/ui/SEO";
import Loader from "@/components/ui/Loader";
import ProductCard from "@/components/products/ProductCard";
import ProductDetails from "@/components/products/ProductDetails";
import { PricingData, GoogleSheetsResponse } from "@/types/products";

const SHEET_ID = "1bAXpj1WQLRenAJ4RwpOQezonzkkxDKY-nWyfauapqcs";
const API_KEY = "AIzaSyCzj1F8qUro1kmCvfKqhOSeKCtgZNHZstc";
const RANGE = "Sheet1!A2:Z";

const productsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Product",
      name: "Ball Bearings",
      description:
        "High-precision ball bearings for industrial applications with superior performance and durability",
      brand: {
        "@type": "Brand",
        name: "GBI Bearings",
      },
      category: "Industrial Machinery Components",
      manufacturer: {
        "@type": "Organization",
        name: "GBI Precision Bearings",
        url: "https://www.gbibearings.in",
      },
    },
    {
      "@type": "Product",
      name: "Tapered Roller Bearings",
      description:
        "Premium quality tapered roller bearings designed for heavy-duty industrial applications",
      brand: {
        "@type": "Brand",
        name: "GBI Bearings",
      },
      category: "Industrial Machinery Components",
      manufacturer: {
        "@type": "Organization",
        name: "GBI Precision Bearings",
        url: "https://www.gbibearings.in",
      },
    },
  ],
};

const fetchPricingData = async (): Promise<PricingData[]> => {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GoogleSheetsResponse = await response.json();
    if (!data.values || !Array.isArray(data.values)) {
      throw new Error("Invalid data format from Google Sheets");
    }

    const pricingData = data.values.map((row: string[]) => {
      const item: PricingData = {
        modelNumber: row[0] || "",
        type: row[1] || "",
        boreDiameter: row[2] || "",
        outsideDiameter: row[3] || "",
        totalWidth: row[4] || "",
        mrp: parseFloat(row[5]) || 0,
        inStock: row[6]?.trim()?.toLowerCase() === "in stock",
        application: row[7] || "",
        industriesType: row[8]?.trim()?.split(",") || "",
        showInMainPage: row[9]?.trim()?.toLowerCase() === "true",
        showInProductPage: row[10]?.trim()?.toLowerCase() === "true",
      };
      return item;
    });

    return pricingData.filter((item) => item.showInProductPage);
  } catch (error) {
    console.error("Error fetching pricing data:", error);
    throw error;
  }
};

const getProductImage = (type: string, isDetails: boolean = false): string => {
  if (type.toLowerCase().includes("ball")) {
    return isDetails
      ? "/product/ball-bearing-details.png"
      : "/product/ball-card.png";
  } else if (type.toLowerCase().includes("tapered")) {
    return isDetails
      ? "/product/tapper-bearing-details.png"
      : "/product/tapper-card.png";
  }
  return "/placeholder.svg";
};

const Products = () => {
  const [filters, setFilters] = useState({
    category: "",
    search: "",
    dimensions: {
      boreDiameter: "",
      outsideDiameter: "",
      totalWidth: "",
    },
  });
  const [activeProduct, setActiveProduct] = useState<PricingData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const location = useLocation();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchPricingData,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  // Remove the scroll animation effect since it's causing initial visibility issues
  useEffect(() => {
    if (!isLoading && products) {
      // Add show class to all products immediately after loading
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((element) => {
        element.classList.add("show");
      });
    }
  }, [isLoading, products]);

  // Handle filter changes
  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  // Handle dimension change
  const handleDimensionChange = (dimension: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [dimension]: value,
      },
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: "",
      search: "",
      dimensions: {
        boreDiameter: "",
        outsideDiameter: "",
        totalWidth: "",
      },
    });
  };

  const filteredProducts = products?.filter((product) => {
    const searchTerm = filters.search.toLowerCase();
    const matchesSearch =
      product.modelNumber.toLowerCase().includes(searchTerm) ||
      product.type.toLowerCase().includes(searchTerm);

    const matchesType = !filters.category || product.type === filters.category;

    const matchesDimensions =
      (!filters.dimensions.boreDiameter ||
        product.boreDiameter?.includes(filters.dimensions.boreDiameter)) &&
      (!filters.dimensions.outsideDiameter ||
        product.outsideDiameter?.includes(
          filters.dimensions.outsideDiameter
        )) &&
      (!filters.dimensions.totalWidth ||
        product.totalWidth?.includes(filters.dimensions.totalWidth));

    return matchesSearch && matchesType && matchesDimensions;
  });

  // Get unique categories
  const categories = products
    ? Array.from(new Set(products.map((p) => p.type)))
    : [];

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Filters</h3>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search by Model Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled
                        placeholder="Enter model number..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500 bg-gray-50"
                      />
                      <Search
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Type Filter */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Filter by Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <div className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-400">
                        Loading...
                      </div>
                    </div>
                  </div>

                  {/* Dimension Filters */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Filter by Dimensions
                    </label>
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          disabled
                          placeholder="Bore Diameter (d)"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500 bg-gray-50"
                        />
                        <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                          mm
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          disabled
                          placeholder="Outside Diameter (D)"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500 bg-gray-50"
                        />
                        <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                          mm
                        </span>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          disabled
                          placeholder="Total Width (T)"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500 bg-gray-50"
                        />
                        <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                          mm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid with Loader */}
              <div className="lg:col-span-3">
                <Loader variant="container" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Filter size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Error Loading Products
            </h2>
            <p className="text-gray-500">Please try again later</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <SEO
        title="Buy Industrial Bearings Online | Ball & Tapered Roller Bearings | GBI"
        description="Shop premium quality industrial bearings online. Wide range of ball bearings & tapered roller bearings with bulk discounts. ISO certified, genuine products with manufacturer warranty. Express delivery across India."
        keywords="buy bearings online, industrial bearings price, ball bearings manufacturer, tapered roller bearings supplier, bearing wholesale India, bulk bearings order, precision bearings price, GBI bearings dealer, bearing distributor India"
        canonicalUrl="https://www.gbibearings.in/products"
        structuredData={productsStructuredData}
      />

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
                    filters.search ||
                    Object.values(filters.dimensions).some((v) => v)) && (
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search by Model Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={filters.search}
                      onChange={(e) =>
                        handleFilterChange("search", e.target.value)
                      }
                      placeholder="Enter model number..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500"
                    />
                    <Search
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                {/* Type Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleFilterChange("category", "")}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        !filters.category
                          ? "bg-gbi-700 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      All
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleFilterChange("category", category)}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          filters.category === category
                            ? "bg-gbi-700 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dimension Filters */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Filter by Dimensions
                  </label>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Bore Diameter (d)"
                        value={filters.dimensions.boreDiameter}
                        onChange={(e) =>
                          handleDimensionChange("boreDiameter", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500"
                      />
                      <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                        mm
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Outside Diameter (D)"
                        value={filters.dimensions.outsideDiameter}
                        onChange={(e) =>
                          handleDimensionChange(
                            "outsideDiameter",
                            e.target.value
                          )
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500"
                      />
                      <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                        mm
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Total Width (T)"
                        value={filters.dimensions.totalWidth}
                        onChange={(e) =>
                          handleDimensionChange("totalWidth", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-500"
                      />
                      <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                        mm
                      </span>
                    </div>
                  </div>
                </div>

                {/* Active Filters */}
                {(filters.category ||
                  filters.search ||
                  Object.values(filters.dimensions).some((v) => v)) && (
                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Active Filters:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {filters.category && (
                        <div className="bg-gbi-50 text-gbi-700 text-xs rounded-full px-3 py-1 flex items-center">
                          Type: {filters.category}
                          <button
                            onClick={() => handleFilterChange("category", "")}
                            className="ml-1 text-gbi-700 hover:text-gbi-800"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                      {filters.search && (
                        <div className="bg-gbi-50 text-gbi-700 text-xs rounded-full px-3 py-1 flex items-center">
                          Model: {filters.search}
                          <button
                            onClick={() => handleFilterChange("search", "")}
                            className="ml-1 text-gbi-700 hover:text-gbi-800"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      )}
                      {Object.entries(filters.dimensions).map(
                        ([key, value]) =>
                          value && (
                            <div
                              key={key}
                              className="bg-gbi-50 text-gbi-700 text-xs rounded-full px-3 py-1 flex items-center"
                            >
                              {key === "boreDiameter"
                                ? "Bore"
                                : key === "outsideDiameter"
                                ? "Outside"
                                : "Width"}
                              : {value}mm
                              <button
                                onClick={() => handleDimensionChange(key, "")}
                                className="ml-1 text-gbi-700 hover:text-gbi-800"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-6">
                <div className="text-gray-600">
                  Showing{" "}
                  <span className="font-medium">
                    {filteredProducts?.length}
                  </span>{" "}
                  products
                </div>
              </div>

              {/* Products */}
              {filteredProducts && filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.modelNumber}
                      product={product}
                      onClick={(product) => {
                        setActiveProduct(product);
                        setIsDialogOpen(true);
                      }}
                      showApplication
                    />
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
        </div>
      </section>

      {/* Product Details Dialog */}
      <ProductDetails
        product={activeProduct}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Products;
