
import React from "react";

interface AboutImageProps {
  src: string;
  alt: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <img src={src} alt={alt} className="w-full h-[200px] object-cover transition-transform hover:scale-110 duration-300" />
    </div>
  );
};

const About: React.FC = () => {
  const images = [
    "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png", // These would show different nature images from your screenshot
    "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png",
    "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png",
    "/lovable-uploads/7b20d787-fbcf-4251-a824-f446fa4b986e.png",
  ];

  const socialIcons = [
    { icon: "ri", link: "#" },
    { icon: "be", link: "#" },
    { icon: "in", link: "#" },
    { icon: "fb", link: "#" },
  ];

  return (
    <section className="mt-[150px] max-md:mt-20 max-sm:mt-[60px]">
      <h2 className="text-[60px] font-bold text-center text-gray-500 mb-10">More About me?</h2>
      <p className="text-center mb-12 max-w-4xl mx-auto">
        This page has everything you need to know, needed with clarity! Ask your many wondering and I feel free to reach out if you have any questions.
      </p>
      <div className="flex justify-center gap-6 mb-16">
        {socialIcons.map((icon, index) => (
          <a 
            key={index} 
            href={icon.link} 
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm"
          >
            {icon.icon}
          </a>
        ))}
      </div>
      <div className="text-center mb-12">
        <h3 className="text-[40px] font-bold mb-8">Beyond Design</h3>
        <p className="max-w-4xl mx-auto">
          I'm not just a designer, I'm a traveler who adventures beyond digital experiences while seeking inspiration in exploring new places. Whether it's trekking through mountains or discovering hidden trails, I thrive on the thrill of the unknown.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <AboutImage key={index} src={image} alt={`Nature scene ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default About;
