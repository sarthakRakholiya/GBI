import React from "react";
import { PricingData } from "@/types/products";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface ProductDetailsProps {
  product: PricingData | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
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

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  isOpen,
  onOpenChange,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {product
              ? `${product.modelNumber} ${product.type}`
              : "Product Details"}
          </DialogTitle>
        </DialogHeader>

        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>

        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="h-64 md:h-auto rounded-lg overflow-hidden">
              <img
                src={getProductImage(product.type, true)}
                alt={`${product.modelNumber} ${product.type}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="mb-2">
                <span className="px-2 py-1 bg-gbi-50 text-gbi-700 text-xs font-medium rounded-md">
                  {product.type}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-3 mb-6">
                  <div>
                    <span className="text-gray-500 text-sm block">
                      Bore Diameter
                    </span>
                    <span className="font-medium">
                      {product.boreDiameter} mm
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">
                      Outside Diameter
                    </span>
                    <span className="font-medium">
                      {product.outsideDiameter} mm
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">
                      Total Width
                    </span>
                    <span className="font-medium">{product.totalWidth} mm</span>
                  </div>
                </div>

                <div className="divider my-6"></div>

                <h3 className="text-lg font-semibold mb-4">Application</h3>
                <p className="text-gray-600 mb-4">{product.application}</p>

                <h3 className="text-lg font-semibold mb-4">Industries</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {Array.isArray(product.industriesType)
                    ? product.industriesType.map((industry) => (
                        <span
                          key={industry}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {industry.trim()}
                        </span>
                      ))
                    : product.industriesType.split(",").map((industry) => (
                        <span
                          key={industry}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {industry.trim()}
                        </span>
                      ))}
                </div>

                <div className="divider my-6"></div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    {product.mrp > 0 ? (
                      <div>
                        <span className="line-through text-sm text-gray-400">
                          ₹{product.mrp.toFixed(2)}
                        </span>
                        <div className="text-xl font-semibold text-gbi-700">
                          ₹{(product.mrp * 0.4).toFixed(2)}
                        </div>
                        <span className="text-xs text-green-600">Save 60%</span>
                      </div>
                    ) : (
                      <span className="text-gbi-700 text-lg font-medium">
                        Contact for Price
                      </span>
                    )}
                  </div>
                  <span
                    className={`px-3 py-1.5 text-sm font-semibold rounded-full ${
                      product.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="divider my-6"></div>

                {/* Custom Solutions Section */}
                <div className="bg-gbi-50 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Need Custom Bearing Solutions?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Can't find exactly what you need? We specialize in custom
                    bearing solutions tailored to your specific requirements.
                  </p>
                </div>

                <button className="btn-primary w-full py-2.5">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetails;
