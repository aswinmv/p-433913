
import React from "react";

const TechStack: React.FC = () => {
  const techIcons = [
    {
      name: "Adobe Illustrator",
      icon: "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png", // This would show AI icon portion
      bgColor: "bg-[#FF9A00]",
    },
    {
      name: "Photoshop",
      icon: "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png", // This would show PS icon portion
      bgColor: "bg-[#31A8FF]",
    },
    {
      name: "Figma",
      icon: "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png", // This would show Figma icon portion
      bgColor: "bg-[#F24E1E]",
    },
    {
      name: "Framer",
      icon: "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png", // This would show Framer icon portion
      bgColor: "bg-[#0055FF]",
    },
    {
      name: "HTML",
      icon: "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png", // This would show HTML icon portion
      bgColor: "bg-[#E34F26]",
    },
    {
      name: "CSS",
      icon: "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png", // This would show CSS icon portion
      bgColor: "bg-[#1572B6]",
    },
  ];

  return (
    <section className="mt-[100px] max-md:mt-20 max-sm:mt-[60px]">
      <h2 className="text-[40px] font-bold text-center mb-10">My Tech stack</h2>
      <div className="flex justify-center flex-wrap gap-8">
        {techIcons.map((tech, index) => (
          <div key={index} className={`w-[60px] h-[60px] ${tech.bgColor} rounded-lg flex items-center justify-center`}>
            {/* Note: In a real implementation, we would crop the specific icon from the image or use separate icon files */}
            <div className="w-[40px] h-[40px] text-white flex items-center justify-center">
              {tech.name.substring(0, 2)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
