
import React from "react";
import { Instagram, Linkedin, Figma, Mail, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: <Instagram size={18} />, link: "#" },
    { icon: <Linkedin size={18} />, link: "#" },
    { icon: <Figma size={18} />, link: "#" },
    { icon: <Mail size={18} />, link: "#" },
    { icon: <Twitter size={18} />, link: "#" },
  ];

  return (
    <footer className="bg-[#222222] text-white py-8 mt-8 w-full">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-4">
          <p>Interested in working with me? Send me a message at <a href="mailto:aswinmv.ux@gmail.com" className="text-white hover:underline">aswinmv.ux@gmail.com</a></p>
        </div>
        <div className="flex justify-center gap-5 mb-4">
          {socialIcons.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              className="w-8 h-8 rounded-full bg-[#333333] hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>All rights reserved. © Copyright Aswin mv 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
