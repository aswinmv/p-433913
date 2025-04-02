import React from "react";
import { Figma, Framer, Zap, Heart, Moon, Bolt } from "lucide-react";

const TechStack: React.FC = () => {
  // Top row tech icons (scrolling right)
  const topRowTechIcons = [
    {
      name: "Figma",
      icon: <Figma className="w-10 h-10" />,
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Framer",
      icon: <Framer className="w-10 h-10" />,
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Photoshop",
      // Using a styled div since there's no direct Photoshop icon
      icon: <div className="w-10 h-10 flex items-center justify-center font-bold text-blue-600">Ps</div>,
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Illustrator",
      // Using a styled div since there's no direct Illustrator icon
      icon: <div className="w-10 h-10 flex items-center justify-center font-bold text-orange-600">Ai</div>,
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Figma",
      icon: <Figma className="w-10 h-10" />,
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
    {
      name: "Framer",
      icon: <Framer className="w-10 h-10" />,
      bgColor: "bg-[#F2E7FE]", // Light purple background
    },
  ];

  // Bottom row tech icons (scrolling left)
  const bottomRowTechIcons = [
    {
      name: "OpenAI",
      icon: <Zap className="w-10 h-10" />,
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "Midjourney",
      icon: <Moon className="w-10 h-10" />,
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "Lovable",
      icon: <Heart className="w-10 h-10" />,
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "Bolt.new",
      icon: <Bolt className="w-10 h-10" />,
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "OpenAI",
      icon: <Zap className="w-10 h-10" />,
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
    {
      name: "Midjourney",
      icon: <Moon className="w-10 h-10" />,
      bgColor: "bg-[#FFE9E9]", // Light pink background
    },
  ];

  return (
    <section className="mt-[60px] max-md:mt-14 max-sm:mt-[40px]">
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
              {tech.icon}
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {topRowTechIcons.map((tech, index) => (
            <div 
              key={`top-2-${index}`} 
              className={`inline-flex min-w-[120px] h-[60px] ${tech.bgColor} rounded-lg items-center justify-center mx-2`}
              aria-label={tech.name}
            >
              {tech.icon}
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
              {tech.icon}
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {bottomRowTechIcons.map((tech, index) => (
            <div 
              key={`bottom-2-${index}`} 
              className={`inline-flex min-w-[120px] h-[60px] ${tech.bgColor} rounded-lg items-center justify-center mx-2`}
              aria-label={tech.name}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
