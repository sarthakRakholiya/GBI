import React from "react";
import { PricingData } from "@/types/products";

interface ProductCardProps {
  product: PricingData;
  onClick: (product: PricingData) => void;
  showApplication?: boolean;
}

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

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
  showApplication = false,
}) => {
  return (
    <div
      className="animate-on-scroll show bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={getProductImage(product.type)}
          alt={`${product.modelNumber} ${product.type}`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-2 py-1 bg-gbi-700 text-white text-xs rounded-md">
            {product.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2">
          {`${product.modelNumber} ${product.type}`}
        </h4>

        {showApplication && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.application}
          </p>
        )}

        <div className="flex items-center justify-between mt-4">
          <div>
            {product.mrp > 0 ? (
              <div>
                <span className="line-through text-sm text-gray-400">
                  ₹{product.mrp.toFixed(2)}
                </span>
                <div className="text-lg font-semibold text-gbi-700">
                  ₹{(product.mrp * 0.4).toFixed(2)}
                </div>
                <span className="text-xs text-green-600">Save 60%</span>
              </div>
            ) : (
              <span className="text-gbi-700 hover:text-gbi-800 text-sm font-medium">
                Contact for Price
              </span>
            )}
          </div>
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              product.inStock
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
