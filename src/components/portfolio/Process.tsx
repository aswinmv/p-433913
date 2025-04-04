
import React from "react";

interface ProcessStepProps {
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[15px] font-medium">{description}</p>
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      title: "Explore",
      description: "Researching user needs, business goals, and market trends.",
    },
    {
      title: "Forge",
      description:
        "Brainstorming ideas, wireframing, and crafting high-fidelity UI/UX designs.",
    },
    {
      title: "Refine",
      description:
        "Prototyping, gathering feedback, and improving the experience.",
    },
    {
      title: "Craft",
      description:
        "Bringing designs to life through development, ensuring functionality.",
    },
  ];

  return (
    <section className="mt-[30px] max-md:mt-8 max-sm:mt-6">
      <div className="text-center">
        <h2 className="text-[50px] font-bold mb-3 max-sm:text-[30px]">The Process</h2>
        <p className="text-[40px] font-normal mb-6 max-sm:text-[24px]">
          This Is How the Magic Happens.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1244px] gap-[130px] bg-[#CCE4FF] p-5 rounded-[10px] max-md:flex-wrap max-md:gap-[60px] max-sm:gap-10">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
