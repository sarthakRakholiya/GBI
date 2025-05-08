import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, PackageX } from "lucide-react";
import { Link } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loader from "@/components/ui/Loader";

interface CatalogData {
  modelNumber: string;
  type: string;
  boreDiameter: string;
  outsideDiameter: string;
  totalWidth: string;
  mrp: number;
  inStock: boolean;
  application: string;
  industriesType: string;
  showInMainPage: boolean;
  showInProductPage: boolean;
}

interface GoogleSheetsResponse {
  values: string[][];
  range: string;
  majorDimension: string;
}

const SHEET_ID = "1bAXpj1WQLRenAJ4RwpOQezonzkkxDKY-nWyfauapqcs";
const API_KEY = "AIzaSyCzj1F8qUro1kmCvfKqhOSeKCtgZNHZstc";
const RANGE = "Sheet1!A2:Z";

const validateCatalogData = (data: CatalogData): boolean => {
  return (
    typeof data.modelNumber === "string" &&
    typeof data.type === "string" &&
    typeof data.boreDiameter === "string" &&
    typeof data.outsideDiameter === "string" &&
    typeof data.totalWidth === "string" &&
    typeof data.mrp === "number" &&
    typeof data.inStock === "boolean" &&
    typeof data.application === "string" &&
    typeof data.industriesType === "string" &&
    typeof data.showInMainPage === "boolean" &&
    typeof data.showInProductPage === "boolean"
  );
};

const fetchCatalogData = async (): Promise<CatalogData[]> => {
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

    const catalogData = data.values.map((row: string[]) => {
      const item: CatalogData = {
        modelNumber: row[0] || "",
        type: row[1] || "",
        boreDiameter: row[2] || "",
        outsideDiameter: row[3] || "",
        totalWidth: row[4] || "",
        mrp: parseFloat(row[5]) || 0,
        inStock: row[6]?.trim()?.toLowerCase() === "in stock",
        application: row[7] || "",
        industriesType: row[8] || "",
        showInMainPage: row[9]?.trim()?.toLowerCase() === "yes",
        showInProductPage: row[10]?.trim()?.toLowerCase() === "yes",
      };

      if (!validateCatalogData(item)) {
        console.warn("Invalid data format for row:", row);
        return null;
      }

      return item;
    });

    return catalogData.filter((item): item is CatalogData => item !== null);
  } catch (error) {
    console.error("Error fetching catalog data:", error);
    throw error;
  }
};

const CatalogTable = () => {
  const {
    data: catalogData,
    isLoading,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["catalog"],
    queryFn: fetchCatalogData,
    staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Keep data in garbage collection for 30 minutes
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
    retry: 3, // Retry failed requests 3 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dimensionFilters, setDimensionFilters] = useState({
    boreDiameter: "",
    outsideDiameter: "",
    totalWidth: "",
  });
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  }>({ key: "modelNumber", direction: "asc" });

  const categories = catalogData
    ? ["all", ...new Set(catalogData.map((item) => item.type || ""))]
    : ["all"];

  const handleDimensionChange = (
    dimension: keyof typeof dimensionFilters,
    value: string
  ) => {
    setDimensionFilters((prev) => ({
      ...prev,
      [dimension]: value,
    }));
  };

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setDimensionFilters({
      boreDiameter: "",
      outsideDiameter: "",
      totalWidth: "",
    });
  };

  const filteredData = catalogData
    ?.filter((item) => {
      if (!item) return false;

      const searchTermLower = searchTerm.toLowerCase();
      const matchesCategory =
        selectedCategory === "all" ||
        (item.type || "").toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch = (item.modelNumber || "")
        .toLowerCase()
        .includes(searchTermLower);

      const matchesDimensions =
        (!dimensionFilters.boreDiameter ||
          item.boreDiameter?.includes(dimensionFilters.boreDiameter)) &&
        (!dimensionFilters.outsideDiameter ||
          item.outsideDiameter?.includes(dimensionFilters.outsideDiameter)) &&
        (!dimensionFilters.totalWidth ||
          item.totalWidth?.includes(dimensionFilters.totalWidth));

      return matchesCategory && matchesSearch && matchesDimensions;
    })
    .sort((a, b) => {
      const key = sortConfig.key as keyof typeof a;
      const direction = sortConfig.direction === "asc" ? 1 : -1;

      if (key === "mrp") {
        return (a[key] - b[key]) * direction;
      }

      return String(a[key]).localeCompare(String(b[key])) * direction;
    });

  if (isLoading || isFetching) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Filter Products
            </h2>
          </div>
        </div>
        <Loader variant="container" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <PackageX size={64} className="text-gray-400" />
          <p className="text-xl font-medium text-gray-600">
            Failed to load catalog data
          </p>
          <p className="text-gray-500">
            {error instanceof Error
              ? error.message
              : "Please try again later or contact our support team"}
          </p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (!filteredData || filteredData.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <PackageX size={64} className="text-gray-400" />
            <p className="text-xl font-medium text-gray-600">
              No Products Found
            </p>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative">
        {/* Desktop Table View - Hidden on mobile */}
        <div className="hidden md:block">
          <div className="overflow-x-auto overflow-y-auto max-h-[600px] rounded-lg border border-gray-200">
            <table className="w-full border-collapse bg-white">
              <thead
                className={`bg-gray-50 ${
                  filteredData.length > 0 ? "sticky top-0 z-10" : ""
                }`}
              >
                <tr className="border-b border-gray-200">
                  <th
                    onClick={() => handleSort("modelNumber")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      Bearing Model Number
                      {sortConfig.key === "modelNumber" && (
                        <span className="text-gbi-700">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("type")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      Type
                      {sortConfig.key === "type" && (
                        <span className="text-gbi-700">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("boreDiameter")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      Bore Diameter (d) (mm)
                      {sortConfig.key === "boreDiameter" && (
                        <span className="text-gbi-700">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("outsideDiameter")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      Outside Diameter (D) (mm)
                      {sortConfig.key === "outsideDiameter" && (
                        <span className="text-gbi-700">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("totalWidth")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      Total Width (T) (mm)
                      {sortConfig.key === "totalWidth" && (
                        <span className="text-gbi-700">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("mrp")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      Maximum Retail Price (MRP)
                      {sortConfig.key === "mrp" && (
                        <span className="text-gbi-700">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discounted Price
                  </th>
                  <th
                    onClick={() => handleSort("inStock")}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      Stock Status
                      {sortConfig.key === "inStock" && (
                        <span className="text-gbi-700">
                          {sortConfig.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item, index) => {
                  const mrp = item.mrp || 0;
                  const discountedPrice = mrp * 0.4; // 60% discount

                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.modelNumber || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.type || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.boreDiameter || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.outsideDiameter || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.totalWidth || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {mrp > 0 ? (
                          <span className="line-through text-gray-400">
                            ₹{mrp.toFixed(2)}
                          </span>
                        ) : (
                          <Link
                            to="/contact"
                            className="text-gbi-700 hover:text-gbi-800 font-medium"
                          >
                            Contact for Price
                          </Link>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gbi-700">
                        {mrp > 0 ? (
                          <div className="flex flex-col">
                            <span className="text-lg">
                              ₹{discountedPrice.toFixed(2)}
                            </span>
                            <span className="text-xs text-green-600 font-normal">
                              Save 60%
                            </span>
                          </div>
                        ) : (
                          <Link
                            to="/contact"
                            className="text-gbi-700 hover:text-gbi-800 font-medium inline-flex items-center gap-1"
                          >
                            Request Quote
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </Link>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.inStock
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View - Shown only on mobile */}
        <div className="md:hidden space-y-4">
          {filteredData.map((item, index) => {
            const mrp = item.mrp || 0;
            const discountedPrice = mrp * 0.4; // 60% discount

            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                {/* Header with Model and Type */}
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="font-medium text-gray-900">
                    {item.modelNumber || "-"}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.type || "-"}
                  </div>
                </div>

                {/* Dimensions */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs">Bore (d)</div>
                      <div className="font-medium">
                        {item.boreDiameter || "-"} mm
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Outside (D)</div>
                      <div className="font-medium">
                        {item.outsideDiameter || "-"} mm
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">Width (T)</div>
                      <div className="font-medium">
                        {item.totalWidth || "-"} mm
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price and Stock Status */}
                <div className="px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div>
                      {mrp > 0 ? (
                        <div>
                          <div className="line-through text-sm text-gray-400">
                            ₹{mrp.toFixed(2)}
                          </div>
                          <div className="text-lg font-medium text-gbi-700">
                            ₹{discountedPrice.toFixed(2)}
                            <span className="text-xs text-green-600 ml-1">
                              Save 60%
                            </span>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to="/contact"
                          className="text-gbi-700 hover:text-gbi-800 font-medium inline-flex items-center gap-1"
                        >
                          Request Quote
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                    <div>
                      <span
                        className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                          item.inStock
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Filter Products
            </h2>
            {(selectedCategory !== "all" ||
              searchTerm ||
              Object.values(dimensionFilters).some((v) => v)) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Clear All Filters
              </button>
            )}
          </div>

          <div className="space-y-6">
            {/* Search and Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Search by Model Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter model number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-700 pl-10"
                  />
                  <svg
                    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Filter by Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-gbi-700 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dimension Filters */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">
                Filter by Dimensions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    id="boreDiameter"
                    placeholder="Bore Diameter (d)"
                    value={dimensionFilters.boreDiameter}
                    onChange={(e) =>
                      handleDimensionChange("boreDiameter", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-700"
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                    mm
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="outsideDiameter"
                    placeholder="Outside Diameter (D)"
                    value={dimensionFilters.outsideDiameter}
                    onChange={(e) =>
                      handleDimensionChange("outsideDiameter", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-700"
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                    mm
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="totalWidth"
                    placeholder="Total Width (T)"
                    value={dimensionFilters.totalWidth}
                    onChange={(e) =>
                      handleDimensionChange("totalWidth", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gbi-700"
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-gray-400">
                    mm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display */}
        {(selectedCategory !== "all" ||
          searchTerm ||
          Object.values(dimensionFilters).some((v) => v)) && (
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-700">
                Active Filters:
              </span>
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gbi-100 text-gbi-800">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="ml-2 text-gbi-600 hover:text-gbi-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Model: {searchTerm}
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 text-blue-600 hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {Object.entries(dimensionFilters).map(
                ([key, value]) =>
                  value && (
                    <span
                      key={key}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                    >
                      {key}: {value}mm
                      <button
                        onClick={() =>
                          handleDimensionChange(
                            key as keyof typeof dimensionFilters,
                            ""
                          )
                        }
                        className="ml-2 text-purple-600 hover:text-purple-900"
                      >
                        ×
                      </button>
                    </span>
                  )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content - Either table or no results message */}
      {renderContent()}

      {/* Custom Solutions Note */}
      <div className="bg-gbi-50 border border-gbi-200 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Need Custom Bearing Solutions?
            </h3>
            <p className="text-gray-600">
              Can't find what you're looking for? We specialize in custom
              bearing solutions tailored to your specific requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gbi-700 hover:bg-gbi-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gbi-500 transition-colors"
          >
            Discuss Your Requirements
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Important Notes Section */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left side - Notes */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Important Notes
            </h3>
            <div className="flex flex-col gap-2 justify-center space-y-3 text-sm text-gray-600">
              <p className="flex items-start">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 mt-1"></span>
                <span>All prices include a 60% discount on MRP</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2 mt-1"></span>
                <span>Payment Term: 30 Days</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2 mt-1"></span>
                <span>
                  All prices are subject to 18% GST as per government
                  regulations
                </span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-3 h-3 bg-indigo-500 rounded-full mr-2 mt-1"></span>
                <span>100% genuine products with manufacturer warranty</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-3 h-3 bg-teal-500 rounded-full mr-2 mt-1"></span>
                <span>Bulk order discounts available on request</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2 mt-1"></span>
                <span>Express delivery available pan India</span>
              </p>
            </div>
          </div>

          {/* Right side - Additional Info */}
          <div className="flex-1 flex items-center justify-center md:border-l md:border-gray-200 md:pl-6">
            <div className="text-center h-full">
              <div className="mb-4">
                <svg
                  className="w-24 h-24 mx-auto text-gbi-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Need Help?
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Our team is here to assist you with any questions about pricing
                or orders.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-medium text-gbi-700 hover:text-gbi-800 transition-colors"
              >
                Contact Support
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Catalog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Browse our comprehensive collection of high-quality bearings and
              components.
            </p>
            <div className="h-1 w-20 bg-gbi-700 rounded"></div>
          </div>
        </div>
      </section> */}

      {/* Catalog Table Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ErrorBoundary>
            <CatalogTable />
          </ErrorBoundary>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gbi-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us for bulk orders or custom specifications.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-gbi-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Request a Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Catalog;
