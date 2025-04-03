
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  profileImage: string;
}

const Hero: React.FC<HeroProps> = ({ profileImage }) => {
  return (
    <section className="flex flex-col items-center text-center mt-6 max-md:mt-4 max-sm:mt-3">
      <h1 className="text-[50px] font-bold mb-5">Hi, I'm Aswin</h1>
      <p className="text-xl font-semibold mb-10">
        Product Designer transforming ideas into reality
      </p>
      <img
        src={profileImage}
        alt="Profile"
        className="w-[258px] h-[295px] rounded-[10px] mb-[30px] object-cover"
      />
      <p className="text-xl font-semibold max-w-screen-md mb-[20px]">
        If you are searching for a Designer to transform your ideas into
        reality, lets connect.
      </p>
      <div className="flex gap-6 max-sm:flex-col">
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
