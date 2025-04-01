
import React, { useEffect, useRef } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

// Tech stack data with proper icons and colors
const TechStack: React.FC = () => {
  // Top row tech icons (scrolling right)
  const topRowTechIcons = [
    {
      name: "Adobe Illustrator",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Photoshop",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Figma",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Framer",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "HTML",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "CSS",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    // Duplicate icons to create a seamless loop effect
    {
      name: "Adobe Illustrator",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Photoshop",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Figma",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
  ];

  // Bottom row tech icons (scrolling left)
  const bottomRowTechIcons = [
    {
      name: "Swift",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "Tailwind",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "React",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "Next.js",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "VS Code",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "TypeScript",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    // Duplicate icons to create a seamless loop effect
    {
      name: "Swift",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "Tailwind",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "React",
      icon: "/lovable-uploads/91ceb6e9-6ae8-4bff-ab7a-87670629f310.png",
      iconClass: "w-10 h-10 object-contain",
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
  ];

  // Refs for the carousel elements
  const topCarouselRef = useRef<HTMLDivElement>(null);
  const bottomCarouselRef = useRef<HTMLDivElement>(null);

  // Animation for the tech icons carousel
  useEffect(() => {
    const topScrollContainer = topCarouselRef.current;
    const bottomScrollContainer = bottomCarouselRef.current;
    
    if (!topScrollContainer || !bottomScrollContainer) return;

    // Function to animate the top row (right direction)
    const animateTopRow = () => {
      if (!topScrollContainer) return;
      
      if (topScrollContainer.scrollLeft >= topScrollContainer.scrollWidth / 2) {
        topScrollContainer.scrollLeft = 0;
      } else {
        topScrollContainer.scrollLeft += 1;
      }
    };

    // Function to animate the bottom row (left direction)
    const animateBottomRow = () => {
      if (!bottomScrollContainer) return;
      
      if (bottomScrollContainer.scrollLeft <= 0) {
        bottomScrollContainer.scrollLeft = bottomScrollContainer.scrollWidth / 2;
      } else {
        bottomScrollContainer.scrollLeft -= 1;
      }
    };

    // Set up animation intervals
    const topInterval = setInterval(animateTopRow, 30);
    const bottomInterval = setInterval(animateBottomRow, 30);

    // Clean up intervals
    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, []);

  return (
    <section className="mt-[100px] max-md:mt-20 max-sm:mt-[60px]">
      <h2 className="text-[40px] font-bold text-center mb-10">My Tech stack</h2>
      
      {/* Top row - scrolling right */}
      <div className="overflow-hidden mb-4" ref={topCarouselRef}>
        <div className="flex gap-4 w-[200%] animate-marquee">
          {topRowTechIcons.map((tech, index) => (
            <div 
              key={`top-${index}`} 
              className={`min-w-[120px] h-[60px] ${tech.bgColor} rounded-lg flex items-center justify-center`}
              aria-label={tech.name}
            >
              <img src={tech.icon} alt={tech.name} className={tech.iconClass} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom row - scrolling left */}
      <div className="overflow-hidden" ref={bottomCarouselRef}>
        <div className="flex gap-4 w-[200%] animate-marquee-reverse">
          {bottomRowTechIcons.map((tech, index) => (
            <div 
              key={`bottom-${index}`} 
              className={`min-w-[120px] h-[60px] ${tech.bgColor} rounded-lg flex items-center justify-center`}
              aria-label={tech.name}
            >
              <img src={tech.icon} alt={tech.name} className={tech.iconClass} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
