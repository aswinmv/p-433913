import React from "react";

const AvailabilityBanner: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex w-[236px] h-[27px] justify-center items-center gap-2.5 bg-[rgba(159,235,179,0.26)] border text-[15px] font-light rounded-[5px] border-[#9FEBB3]">
        <div className="w-[16px] h-[16px] text-[#1FCE45]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4.66667C6.52724 4.66667 5.33333 5.86057 5.33333 7.33333C5.33333 8.8061 6.52724 10 8 10C9.47276 10 10.6667 8.8061 10.6667 7.33333C10.6667 5.86057 9.47276 4.66667 8 4.66667Z"
              fill="#1FCE45"
            />
          </svg>
        </div>
        <span>Spots available for April 2025</span>
      </div>
    </div>
  );
};

export default AvailabilityBanner;
