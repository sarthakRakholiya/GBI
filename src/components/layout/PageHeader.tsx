import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <section
      className={`pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50 ${className}`}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-gray-600 mb-4">{description}</p>
        )}
        <div className="h-1 w-20 bg-gbi-700 rounded"></div>
      </div>
    </section>
  );
};
