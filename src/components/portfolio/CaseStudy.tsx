
import React from "react";

interface CaseStudyProps {
  caseStudyImages: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ caseStudyImages }) => {
  return (
    <section className="mt-[30px] max-md:mt-8 max-sm:mt-6">
      <div className="flex items-center justify-center gap-5 mb-6 flex-wrap">
        <h2 className="text-[50px] font-bold max-sm:text-[30px]">UI/UX Case Study</h2>
        <span className="text-[50px] font-bold text-[#716C6C] max-sm:text-[30px]">Works</span>
      </div>
      <div className="flex justify-center gap-6 max-md:flex-wrap">
        {caseStudyImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Case Study ${index + 1}`}
            className="w-[487px] h-[316px] object-cover max-sm:w-full max-sm:h-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
