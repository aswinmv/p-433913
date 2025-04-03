
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  return (
    <section className="flex flex-col items-center text-center mt-2 relative min-h-[calc(100vh-100px)]">
      <h1 className="text-[50px] font-bold mb-2">Hi, I'm Aswin</h1>
      <p className="text-xl font-semibold mb-4">
        Product Designer transforming ideas into reality
      </p>
      
      {/* Marquee animation for background text */}
      <div className="relative">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap overflow-hidden w-[800px]">
          <div className="inline-block animate-marquee">
            <span className="text-8xl font-bold text-[#8B5CF6]/30 mr-8">PRODUCT DESIGNER</span>
            <span className="text-8xl font-bold text-[#8B5CF6]/30 mr-8">PRODUCT DESIGNER</span>
            <span className="text-8xl font-bold text-[#8B5CF6]/30 mr-8">PRODUCT DESIGNER</span>
          </div>
          <div className="inline-block animate-marquee-reverse">
            <span className="text-8xl font-bold text-[#8B5CF6]/30 mr-8">PRODUCT DESIGNER</span>
            <span className="text-8xl font-bold text-[#8B5CF6]/30 mr-8">PRODUCT DESIGNER</span>
            <span className="text-8xl font-bold text-[#8B5CF6]/30 mr-8">PRODUCT DESIGNER</span>
          </div>
        </div>
        
        <img
          src={profileImage}
          alt="Profile"
          className="w-[258px] h-[295px] rounded-[10px] mb-[15px] object-cover relative z-10"
        />
      </div>
      
      <p className="text-xl font-semibold max-w-screen-md mb-[15px]">
        If you are searching for a Designer to transform your ideas into
        reality, lets connect.
      </p>
      <div className="absolute bottom-4 flex gap-6 max-sm:flex-col">
        <Button className="w-40 h-[42px] bg-[#201F1F] text-white text-xl font-semibold rounded-[5px]">
          Hire me
        </Button>
        <Button
          variant="outline"
          className="w-40 h-[42px] border text-xl font-semibold rounded-[5px] border-black"
        >
          Book a Call
        </Button>
      </div>
    </section>
  );
};

export default Hero;
