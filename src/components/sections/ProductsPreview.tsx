
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, X } from 'lucide-react';
import { products } from '@/lib/data';
import { HoverCardTrigger, HoverCardContent, HoverCard } from '@/components/ui/hover-card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

const ProductsPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const featuredProducts = products.slice(0, 3); // Show only 3 products in preview
  
  const handleProductClick = (productId: string) => {
    setSelectedProduct(productId);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
  };

  // Get the selected product details
  const selectedProductDetails = selectedProduct 
    ? products.find(p => p.id === selectedProduct)
    : null;
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = section.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle through products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredProducts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gbi-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gbi-50 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-sm font-medium text-gbi-700 uppercase tracking-wider mb-2">Our Products</h2>
          <h3 className="section-title text-center">Precision-Engineered Bearings</h3>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore our comprehensive range of tapered roller bearings designed for reliability in the most demanding applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`animate-on-scroll bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 cursor-pointer ${
                activeIndex === index ? 'md:scale-105 md:shadow-md z-10' : 'scale-100'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="h-48 overflow-hidden relative">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      // If image fails to load, replace with a placeholder
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1595078475395-5c8f18d020cc?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                ) : (
                  // Placeholder if no image is available
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <circle cx="12" cy="12" r="3"></circle>
                      <circle cx="12" cy="12" r="8"></circle>
                      <line x1="12" y1="2" x2="12" y2="4"></line>
                      <line x1="12" y1="20" x2="12" y2="22"></line>
                      <line x1="4" y1="12" x2="2" y2="12"></line>
                      <line x1="22" y1="12" x2="20" y2="12"></line>
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2 py-1 bg-gbi-700 text-white text-xs rounded-md">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 line-clamp-1">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-xs">
                    <span className="text-gray-500 block">Inner Diameter</span>
                    <span className="font-medium">{product.specs.innerDiameter}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500 block">Outer Diameter</span>
                    <span className="font-medium">{product.specs.outerDiameter}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500 block">Width</span>
                    <span className="font-medium">{product.specs.width}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-500 block">Dynamic Load</span>
                    <span className="font-medium">{product.specs.dynamicLoadRating}</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center text-gbi-700 hover:text-gbi-800 text-sm font-medium group">
                  View specifications
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <Link 
            to="/products" 
            className="btn-primary inline-flex items-center group"
          >
            View All Products
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && closeDialog()}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {selectedProductDetails?.name}
            </DialogTitle>
          </DialogHeader>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          
          {selectedProductDetails && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="h-64 md:h-auto rounded-lg overflow-hidden">
                <img 
                  src={selectedProductDetails.image} 
                  alt={selectedProductDetails.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1595078475395-5c8f18d020cc?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </div>
              
              <div>
                <div className="mb-2">
                  <span className="px-2 py-1 bg-gbi-50 text-gbi-700 text-xs font-medium rounded-md">
                    {selectedProductDetails.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedProductDetails.description}</p>
                
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-3 mb-6">
                  <div>
                    <span className="text-gray-500 text-sm block">Inner Diameter</span>
                    <span className="font-medium">{selectedProductDetails.specs.innerDiameter}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Outer Diameter</span>
                    <span className="font-medium">{selectedProductDetails.specs.outerDiameter}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Width</span>
                    <span className="font-medium">{selectedProductDetails.specs.width}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Dynamic Load Rating</span>
                    <span className="font-medium">{selectedProductDetails.specs.dynamicLoadRating}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Static Load Rating</span>
                    <span className="font-medium">{selectedProductDetails.specs.staticLoadRating}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">Limit Speed</span>
                    <span className="font-medium">{selectedProductDetails.specs.limitSpeed}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProductDetails.applications.map(app => (
                    <span 
                      key={app} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Link 
                    to={`/products#${selectedProductDetails.id}`}
                    className="btn-primary"
                    onClick={closeDialog}
                  >
                    View Full Details
                  </Link>
                  <button className="btn-secondary">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsPreview;
