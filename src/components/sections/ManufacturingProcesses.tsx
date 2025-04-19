import React from "react";
import ProcessStep from "./ProcessStep";

const ManufacturingProcesses = () => {
  const processes = [
    {
      id: "forging",
      title: "Forging",
      description:
        "The process begins with forging high-grade steel alloys under extreme pressure and controlled temperature. This creates the basic ring shape and establishes the grain structure that will give our bearings their superior strength and durability.",
      image: "/process/1.jpg",
    },
    {
      id: "annealing",
      title: "Spheroidize Annealing",
      description:
        "The forged rings undergo spheroidize annealing, a specialized heat treatment process that transforms the microstructure of the steel to improve machinability while maintaining its core strength properties.",
      image: "/process/2.jpg",
    },
    {
      id: "cnc",
      title: "CNC Machining",
      description:
        "Using high-precision CNC machines, we shape the bearing rings to their final dimensions. Our advanced CNC technology allows us to maintain tolerances as tight as 0.001mm, ensuring perfect fit and function.",
      image: "/process/3.jpg",
    },
    {
      id: "heat-treatment",
      title: "Heat Treatment Process",
      description:
        "Our proprietary heat treatment process hardens the bearing components to achieve the optimal balance of hardness, toughness, and wear resistance. This critical step determines the long-term performance of the bearings.",
      image: "/process/4.jpg",
    },
    {
      id: "grinding",
      title: "Grinding",
      description:
        "The hardened components undergo precision grinding to achieve the exact dimensions and surface finish required. This process is essential for creating the perfect raceway surfaces that allow for smooth rolling motion.",
      image: "/process/5.jpg",
    },
    {
      id: "super-finishing",
      title: "Super Finishing",
      description:
        "Our super finishing process further refines the surface of bearing components to a mirror-like finish with roughness values of less than 0.1μm. This reduces friction, noise, and vibration while extending bearing life.",
      image: "/process/6.jpg",
    },
    {
      id: "inspection",
      title: "Inspection",
      description:
        "Every component undergoes rigorous inspection using state-of-the-art measurement systems, including coordinate measuring machines, surface analyzers, and noise/vibration testing equipment to ensure they meet our strict quality standards.",
      image: "/process/7.jpg",
    },
    {
      id: "assembly",
      title: "Assembly & Packaging",
      description:
        "The final bearings are assembled in a controlled clean-room environment to prevent contamination. They are then lubricated, sealed, and packaged in protective materials designed to ensure they arrive at our customers in perfect condition.",
      image: "/process/8.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-title font-bold text-center mb-4">
          Manufacturing Excellence
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Our bearing manufacturing process combines traditional craftsmanship
          with cutting-edge technology to create products of unmatched quality
          and precision.
        </p>

        <div className="space-y-24">
          {processes.map((process, index) => (
            <ProcessStep
              key={process.id}
              title={process.title}
              description={process.description}
              image={process.image}
              stepNumber={index + 1}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block bg-gray-200 text-gray-800 py-3 px-6 rounded-lg">
            <p className="font-medium">
              All our manufacturing processes comply with ISO 9001:2015 and
              industry standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcesses;
