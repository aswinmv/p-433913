import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center py-[27px]">
      <div className="flex w-[654px] h-[72px] items-center justify-between bg-[rgba(32,31,31,0.75)] px-4 py-5 rounded-[10px] max-md:w-full max-sm:h-auto">
        <div className="flex items-center gap-[71px] max-md:gap-10 max-sm:gap-5 overflow-x-auto">
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
