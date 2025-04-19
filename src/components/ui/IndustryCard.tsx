import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

interface IndustryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ElementType;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  id,
  name,
  description,
  image,
  icon: Icon,
  index,
}) => {
  return (
    <div
      className="animate-on-scroll group"
      style={{ animationDelay: `${index * 150}ms` }}
      itemScope
      itemType="https://schema.org/Product"
    >
      <Link to={`/industries#${id}`} className="block">
        <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 group-hover:shadow-lg transition-shadow duration-300">
          <OptimizedImage
            src={image}
            alt={`${name} - GBI Precision Bearings applications`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
            <div className="p-6 w-full">
              <div className="flex items-center justify-between">
                <h4
                  className="text-white text-xl font-semibold"
                  itemProp="name"
                >
                  {name}
                </h4>
                <div className="w-10 h-10 bg-gbi-700 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-45">
                  <Icon size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-gray-600 text-sm mb-3 line-clamp-2"
          itemProp="description"
        >
          {description}
        </p>

        <div className="inline-flex items-center text-gbi-700 group-hover:text-gbi-800 text-sm font-medium">
          Learn more
          <ArrowRight
            size={16}
            className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </Link>
    </div>
  );
};

export default IndustryCard;
