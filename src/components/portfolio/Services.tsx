
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, bgColor }) => {
  return (
    <Card className={`${bgColor} border-none rounded-lg h-full`}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "UI/ UX & Product Design",
      description: "I turn complex problems into intuitive, human-friendly designs, balancing clarity, aesthetics, and real-world usability. From scribbles to pixel-perfect screens, I craft experiences that people enjoy using.",
      bgColor: "bg-[#EDF8FB]"
    },
    {
      title: "Web Development",
      description: "I build fast, responsive, and accessible websites using modern technologies. Every pixel is crafted to deliver smooth performance across all devices.",
      bgColor: "bg-[#F1E6FF]"
    },
    {
      title: "Branding & Visual Identity",
      description: "I design logos that pop, style guides that keep brands consistent, and visuals that tell stories people remember.",
      bgColor: "bg-[#EAF8EE]"
    },
    {
      title: "AI-Driven Creative Solutions",
      description: "I leverage AI to streamline design workflows, automate content creation, and enhance user engagement with smart solutions.",
      bgColor: "bg-[#FFF0F0]"
    },
    {
      title: "MVP Development",
      description: "I leverage AI to rapidly create high-fidelity prototypes and MVPs, enabling startups to validate ideas, pitch investors, and test concepts within days.",
      bgColor: "bg-[#F1E6FF]"
    }
  ];

  return (
    <section className="mt-[30px] max-md:mt-8 max-sm:mt-6">
      <h2 className="text-[50px] font-bold text-center mb-6">Services</h2>
      <div className="grid grid-cols-12 gap-6">
        {/* First row - 2 cards with adjusted column spans */}
        <div className="col-span-12 md:col-span-7">
          <ServiceCard
            title={services[0].title}
            description={services[0].description}
            bgColor={services[0].bgColor}
          />
        </div>
        <div className="col-span-12 md:col-span-5">
          <ServiceCard
            title={services[1].title}
            description={services[1].description}
            bgColor={services[1].bgColor}
          />
        </div>

        {/* Second row - 3 cards */}
        <div className="col-span-12 md:col-span-5">
          <ServiceCard
            title={services[2].title}
            description={services[2].description}
            bgColor={services[2].bgColor}
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <ServiceCard
            title={services[3].title}
            description={services[3].description}
            bgColor={services[3].bgColor}
          />
        </div>
        <div className="col-span-12 md:col-span-12">
          <ServiceCard
            title={services[4].title}
            description={services[4].description}
            bgColor={services[4].bgColor}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
