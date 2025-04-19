import {
  ChevronDown,
  ChevronUp,
  Clock,
  Gauge,
  Shield,
  Zap,
  Sprout,
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  specs: {
    innerDiameter: string;
    outerDiameter: string;
    width: string;
    dynamicLoadRating: string;
    staticLoadRating: string;
    limitSpeed: string;
  };
  applications: string[];
  category: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  image: string;
  applications: string[];
}

export interface QualityCertification {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
}

export const products: Product[] = [
  {
    id: "bb-6205",
    name: "BB-6205 Deep Groove Ball Bearing",
    description:
      "Versatile deep groove ball bearing suitable for high-speed applications with low noise and friction.",
    image:
      "https://images.unsplash.com/photo-1595078475395-5c8f18d020cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specs: {
      innerDiameter: "25 mm",
      outerDiameter: "52 mm",
      width: "15 mm",
      dynamicLoadRating: "14.8 kN",
      staticLoadRating: "7.8 kN",
      limitSpeed: "16000 rpm",
    },
    applications: ["Motors", "Pumps", "Home Appliances"],
    category: "Ball Bearing",
  },
  {
    id: "bb-7208",
    name: "BB-7208 Angular Contact Ball Bearing",
    description:
      "Engineered for applications requiring high axial load capacity in one direction with high-speed capability.",
    image:
      "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specs: {
      innerDiameter: "40 mm",
      outerDiameter: "80 mm",
      width: "18 mm",
      dynamicLoadRating: "42.3 kN",
      staticLoadRating: "31 kN",
      limitSpeed: "11000 rpm",
    },
    applications: ["Machine Tools", "Spindles", "Pumps"],
    category: "Ball Bearing",
  },
  {
    id: "bb-2308",
    name: "BB-2308 Self-Aligning Ball Bearing",
    description:
      "Self-aligning design accommodates misalignment and shaft deflection in challenging applications.",
    image:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specs: {
      innerDiameter: "40 mm",
      outerDiameter: "90 mm",
      width: "33 mm",
      dynamicLoadRating: "67.5 kN",
      staticLoadRating: "18.6 kN",
      limitSpeed: "7500 rpm",
    },
    applications: ["Textile Machinery", "Agricultural Equipment", "Conveyors"],
    category: "Ball Bearing",
  },
  {
    id: "tb-30205",
    name: "TB-30205 Tapered Roller Bearing",
    description:
      "High-performance tapered roller bearing designed for high axial and radial loads in industrial applications.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specs: {
      innerDiameter: "25 mm",
      outerDiameter: "52 mm",
      width: "16.25 mm",
      dynamicLoadRating: "35.1 kN",
      staticLoadRating: "41 kN",
      limitSpeed: "12000 rpm",
    },
    applications: ["Automotive", "Industrial"],
    category: "Tapered Roller",
  },
  {
    id: "tb-32208",
    name: "TB-32208 Tapered Roller Bearing",
    description:
      "Premium tapered roller bearing with enhanced sealing for demanding environments and heavy-duty applications.",
    image:
      "https://images.unsplash.com/photo-1581092921461-39b9a49e5f90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specs: {
      innerDiameter: "40 mm",
      outerDiameter: "80 mm",
      width: "19.75 mm",
      dynamicLoadRating: "71.5 kN",
      staticLoadRating: "95 kN",
      limitSpeed: "8000 rpm",
    },
    applications: ["Industrial", "Railway"],
    category: "Tapered Roller",
  },
  {
    id: "tb-33115",
    name: "TB-33115 Tapered Roller Bearing",
    description:
      "Heavy-duty tapered roller bearing designed for extreme loads and harsh operating conditions.",
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    specs: {
      innerDiameter: "75 mm",
      outerDiameter: "125 mm",
      width: "37 mm",
      dynamicLoadRating: "156 kN",
      staticLoadRating: "255 kN",
      limitSpeed: "5000 rpm",
    },
    applications: ["Industrial", "Mining"],
    category: "Tapered Roller",
  },
];

export const industries: Industry[] = [
  {
    id: "automotive",
    name: "Automotive",
    icon: Gauge,
    description:
      "Our precision ball and tapered roller bearings are engineered to meet the exacting demands of the automotive industry, providing reliable performance for everything from passenger vehicles to heavy-duty trucks.",
    image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg",
    applications: [
      "Wheel hubs",
      "Transmissions",
      "Differentials",
      "Steering systems",
      "Engine components",
    ],
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: Zap,
    description:
      "GBI bearings provide the reliability and durability required in demanding industrial environments, supporting critical machinery across numerous manufacturing sectors.",
    image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg",
    applications: [
      "Heavy machinery",
      "Mining equipment",
      "Material handling systems",
      "Paper mills",
      "Steel production",
    ],
  },
  {
    id: "aerospace",
    name: "Aerospace",
    icon: Shield,
    description:
      "Our aerospace-grade bearings meet the highest standards for reliability and performance, designed to withstand extreme conditions while maintaining precision operation.",
    image:
      "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg",
    applications: [
      "Aircraft engines",
      "Flight control systems",
      "Landing gear",
      "Auxiliary power units",
      "Helicopter rotors",
    ],
  },
  {
    id: "railway",
    name: "Railway",
    icon: Clock,
    description:
      "GBI railway bearings are engineered for the rigorous demands of rail transportation, providing long service life and reliability for both passenger and freight applications.",
    image:
      "https://news.unl.edu/sites/default/files/styles/wide/public/media/images/240327_Railcar_018.JPG?itok=Yp7hUNeV",
    applications: [
      "Axle bearings",
      "Traction motors",
      "Gearboxes",
      "Tilting mechanisms",
      "Door systems",
    ],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    icon: Sprout,
    description:
      "GBI bearings for agricultural equipment deliver exceptional durability in challenging environments, ensuring reliable operation throughout planting, harvesting, and processing operations.",
    image:
      "https://znlbearings.com/wp-content/uploads/2023/05/harvestor-bearings-used-for-agriculture.jpg",
    applications: [
      "Tractors",
      "Harvesters",
      "Irrigation systems",
      "Seed drills",
      "Processing equipment",
    ],
  },
];

export const qualityCertifications: QualityCertification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    description:
      "Quality Management System certification that ensures our manufacturing processes meet international standards for consistency and quality.",
    icon: Shield,
  },
  {
    id: "iatf-16949",
    name: "IATF 16949:2016",
    description:
      "Automotive-specific quality management standard that emphasizes defect prevention and reduction of variation in the supply chain.",
    icon: Gauge,
  },
  {
    id: "iso-14001",
    name: "ISO 14001:2015",
    description:
      "Environmental Management System certification demonstrating our commitment to environmentally responsible manufacturing practices.",
    icon: Zap,
  },
  {
    id: "iso-45001",
    name: "ISO 45001:2018",
    description:
      "Occupational Health and Safety Management System certification ensuring a safe working environment for all employees.",
    icon: Shield,
  },
];

export const features = [
  {
    id: "precision",
    title: "Unmatched Precision",
    description:
      "Our bearings are manufactured to the tightest tolerances in the industry, ensuring optimal performance and longevity.",
    icon: ChevronUp,
  },
  {
    id: "durability",
    title: "Superior Durability",
    description:
      "Engineered to withstand extreme conditions, our bearings deliver reliable performance even in the most demanding applications.",
    icon: Shield,
  },
  {
    id: "innovation",
    title: "Continuous Innovation",
    description:
      "We invest heavily in R&D to develop new materials and designs that push the boundaries of bearing technology.",
    icon: Zap,
  },
  {
    id: "support",
    title: "Expert Support",
    description:
      "Our technical team provides comprehensive support from selection to implementation, ensuring the right bearing for your specific needs.",
    icon: ChevronDown,
  },
];

export const faqItems = [
  {
    question: "What makes GBI bearings different from competitors?",
    answer:
      "GBI bearings are distinguished by our proprietary heat treatment process, superior material selection, and industry-leading quality control standards. Our manufacturing facilities utilize the latest precision machinery, and every bearing undergoes rigorous testing to ensure exceptional performance and longevity.",
  },
  {
    question: "How do I select the right bearing for my application?",
    answer:
      "Selecting the right bearing involves considering factors such as load requirements, operating speeds, environmental conditions, and space constraints. Our engineering team can assist you with proper selection through our consultation service, or you can refer to our comprehensive product catalogs with detailed specifications and application guides.",
  },
  {
    question: "What types of bearings do you offer?",
    answer:
      "We offer a comprehensive range of both ball bearings and tapered roller bearings. Our ball bearing line includes deep groove, angular contact, self-aligning, and thrust bearings. Our tapered roller bearing offerings include single-row, double-row, and four-row configurations designed for heavy-duty industrial applications.",
  },
  {
    question: "Do you offer custom bearing solutions?",
    answer:
      "Yes, we specialize in developing custom bearing solutions for unique applications. Our engineering team works closely with clients to understand specific requirements and challenges, then designs and manufactures bearings tailored to those exact specifications.",
  },
  {
    question: "What are your quality control procedures?",
    answer:
      "Our quality control process includes material verification, dimensional inspection using precision measuring equipment, surface finish analysis, hardness testing, and operational testing under simulated load conditions. Each bearing passes through multiple inspection points throughout the manufacturing process, and we maintain comprehensive documentation for traceability.",
  },
];
