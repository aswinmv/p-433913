
import React from "react";
import { Instagram, Linkedin, Dribbble, Facebook } from "lucide-react";

interface AboutImageProps {
  src: string;
  alt: string;
}

const AboutImage: React.FC<AboutImageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <img src={src} alt={alt} className="w-full h-auto object-cover transition-transform hover:scale-110 duration-300" />
    </div>
  );
};

const About: React.FC = () => {
  const images = [
    "/lovable-uploads/9944990e-6454-4a8a-8b66-17f9cfecc26f.png",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    "/lovable-uploads/9944990e-6454-4a8a-8b66-17f9cfecc26f.png",
  ];

  const socialIcons = [
    { icon: <Instagram size={20} />, link: "#" },
    { icon: <Dribbble size={20} />, link: "#" },
    { icon: <Linkedin size={20} />, link: "#" },
    { icon: <Facebook size={20} />, link: "#" },
  ];

  return (
    <section className="mt-[150px] max-md:mt-20 max-sm:mt-[60px]">
      <h2 className="text-[60px] font-bold text-center text-gray-500 mb-5">More About me?</h2>
      <p className="text-center mb-8 max-w-4xl mx-auto text-gray-600">
        This page has everything you need to know, packed with details! Take your time exploring, and feel free to reach out if you have any questions.
      </p>
      <div className="flex justify-center gap-6 mb-12">
        {socialIcons.map((social, index) => (
          <a 
            key={index} 
            href={social.link} 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold mb-5">Beyond Design</h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-10">
          I'm not just a designer, I'm a traveler and adventure seeker who finds inspiration in exploring new places. Whether it's trekking through mountains or discovering hidden trails, I thrive on the thrill of the unknown.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <AboutImage key={index} src={image} alt={`Adventure scene ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default About;
