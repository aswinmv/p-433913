
import React from "react";

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
  ];

  return (
    <section className="mt-[100px] max-md:mt-20 max-sm:mt-[60px]">
      <h2 className="text-[40px] font-bold text-center mb-10">My Tech stack</h2>
      
      {/* Top row - scrolling right */}
      <div className="overflow-hidden mb-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of icons */}
          {topRowTechIcons.map((tech, index) => (
            <div 
              key={`top-1-${index}`} 
              className={`inline-flex min-w-[120px] h-[60px] ${tech.bgColor} rounded-lg items-center justify-center mx-2`}
              aria-label={tech.name}
            >
              <img src={tech.icon} alt={tech.name} className={tech.iconClass} />
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {topRowTechIcons.map((tech, index) => (
            <div 
              key={`top-2-${index}`} 
              className={`inline-flex min-w-[120px] h-[60px] ${tech.bgColor} rounded-lg items-center justify-center mx-2`}
              aria-label={tech.name}
            >
              <img src={tech.icon} alt={tech.name} className={tech.iconClass} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom row - scrolling left */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {/* First set of icons */}
          {bottomRowTechIcons.map((tech, index) => (
            <div 
              key={`bottom-1-${index}`} 
              className={`inline-flex min-w-[120px] h-[60px] ${tech.bgColor} rounded-lg items-center justify-center mx-2`}
              aria-label={tech.name}
            >
              <img src={tech.icon} alt={tech.name} className={tech.iconClass} />
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {bottomRowTechIcons.map((tech, index) => (
            <div 
              key={`bottom-2-${index}`} 
              className={`inline-flex min-w-[120px] h-[60px] ${tech.bgColor} rounded-lg items-center justify-center mx-2`}
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
