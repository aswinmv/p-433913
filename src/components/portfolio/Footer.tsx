
import React from "react";

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: "ri", link: "#" },
    { icon: "be", link: "#" },
    { icon: "in", link: "#" },
    { icon: "fb", link: "#" },
    { icon: "tw", link: "#" },
  ];

  return (
    <footer className="mt-20 bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p>Interested in working with me? Send me a message at <a href="mailto:asween.work@gmail.com" className="underline">asween.work@gmail.com</a></p>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          {socialIcons.map((icon, index) => (
            <a 
              key={index} 
              href={icon.link} 
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm"
            >
              {icon.icon}
            </a>
          ))}
        </div>
        <div className="text-center text-gray-400">
          <p>All rights reserved. © Copyright Aswin my 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
