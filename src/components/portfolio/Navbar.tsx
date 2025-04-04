
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-[10px]">
      <div className="flex w-[654px] h-[62px] items-center justify-between bg-[rgba(32,31,31,0.75)] backdrop-blur-sm px-4 py-4 rounded-[10px] max-md:w-full max-sm:h-auto">
        <div className="flex items-center gap-[60px] max-md:gap-8 max-sm:gap-4 overflow-x-auto">
          <div className="text-white font-semibold text-xl whitespace-nowrap">
            Asween
          </div>
          <div className="text-white font-semibold text-xl whitespace-nowrap">
            Work
          </div>
          <div className="text-white font-semibold text-xl whitespace-nowrap">
            Services
          </div>
          <div className="text-white font-semibold text-xl whitespace-nowrap">
            Resume
          </div>
          <div className="text-white font-semibold text-xl whitespace-nowrap">
            Book
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
