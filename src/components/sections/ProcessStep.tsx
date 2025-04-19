
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStepProps {
  title: string;
  description: string;
  image: string;
  stepNumber: number;
  reverse?: boolean;
}

const ProcessStep = ({ title, description, image, stepNumber, reverse = false }: ProcessStepProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col gap-8 items-center animate-on-scroll",
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
    >
      <div className="w-full md:w-1/2">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-gbi-700/20 to-gbi-500/20 rounded-lg blur-lg opacity-70"></div>
          <img 
            src={image} 
            alt={title} 
            className="relative rounded-lg shadow-xl w-full aspect-video object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1574170682242-3a89435318e7?w=800&auto=format&fit=crop&q=60";
              target.alt = "Fallback manufacturing process image";
            }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex items-center mb-3">
          <div className="h-1 w-12 bg-gbi-700 mr-4"></div>
          <span className="text-gbi-700 font-semibold">STEP {stepNumber}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-title font-bold mb-4">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
