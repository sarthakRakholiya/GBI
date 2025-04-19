import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, FileCheck, Settings } from 'lucide-react';
import { qualityCertifications } from '@/lib/data';
const QualityPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animatedElements = section.querySelectorAll('.animate-on-scroll');
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('show');
            }, 150 * index);
          });
        }
      });
    }, {
      threshold: 0.1
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Animated background element */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-gbi-700 blur-3xl animate-pulse top-1/4 left-1/4 opacity-20"></div>
          <div className="absolute w-64 h-64 rounded-full bg-white blur-3xl animate-pulse bottom-1/3 right-1/3 opacity-5" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute w-80 h-80 rounded-full bg-gbi-500 blur-3xl animate-pulse bottom-1/4 right-1/4 opacity-10" style={{
          animationDelay: '2s'
        }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="animate-on-scroll">
              <h2 className="text-sm font-medium text-gbi-400 uppercase tracking-wider mb-2">Quality Assurance</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Uncompromising Quality, Rigorous Standards
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Our dedication to quality is at the heart of everything we do. Every bearing is manufactured to exacting standards and undergoes comprehensive testing before delivery.
              </p>
            </div>

            <div className="animate-on-scroll">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {qualityCertifications.map((cert, index) => {
                const Icon = cert.icon;
                return <div key={cert.id} className="flex items-start">
                      <div className="h-10 w-10 bg-gbi-700/20 rounded-md flex items-center justify-center mt-1">
                        <Icon size={20} className="text-gbi-400" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-white font-medium">{cert.name}</h4>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {cert.description}
                        </p>
                      </div>
                    </div>;
              })}
              </div>
            </div>

            <Link to="/quality" className="animate-on-scroll inline-flex items-center text-gbi-400 hover:text-gbi-300 font-medium group">
              Learn more about our quality process
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="animate-on-scroll p-4">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden shadow-2xl bg-gray-800 relative">
                <img alt="GBI Manufacturing Facility" className="w-full h-auto object-cover" src="https://www.wdbearings.com/en/wp-content/uploads/2021/04/WD-Bearing-Precision-Tools-iii.jpg" />
                
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg w-3/4">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-3"></div>
                    <div>
                      <p className="text-white text-sm font-medium">100% Inspection</p>
                      <p className="text-gray-300 text-xs">Every bearing tested</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                    <div>
                      <p className="text-white text-sm font-medium">Advanced Metrology</p>
                      <p className="text-gray-300 text-xs">Precision to 0.001mm</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gbi-400 mr-3"></div>
                    <div>
                      <p className="text-white text-sm font-medium">Material Verification</p>
                      <p className="text-gray-300 text-xs">Rigorous testing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gbi-700 rounded-lg opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gbi-700/20 rounded-full blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default QualityPreview;