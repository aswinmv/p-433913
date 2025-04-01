
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, bgColor }) => {
  return (
    <Card className={`${bgColor} border-none rounded-lg`}>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "UI/ UX & Product Design",
      description: "Creating intuitive and visually appealing digital interfaces that enhance user experience and drive engagement. From mobile apps to websites, I help make your vision reality.",
      bgColor: "bg-[#CCF4E3]"
    },
    {
      title: "Web Development",
      description: "Building responsive, fast-loading websites with clean code and modern technologies. Whether you need a simple landing page or a complex web application, I've got you covered.",
      bgColor: "bg-[#E5DEF4]"
    },
    {
      title: "Branding & Visual Identity",
      description: "Crafting memorable brand identities that resonate with your audience. From logos and color palettes to typography and design systems, I help establish a cohesive visual language.",
      bgColor: "bg-[#C3F0D0]"
    },
    {
      title: "AI Driven Creative Solutions",
      description: "Leveraging artificial intelligence to create innovative design solutions that are data-driven and future-proof. I combine human creativity with AI capabilities for optimal results.",
      bgColor: "bg-[#F8C7D5]"
    },
    {
      title: "MVP Development",
      description: "Transforming your startup idea into a viable product quickly and efficiently. I focus on essential features that demonstrate your concept and attract early users or investors.",
      bgColor: "bg-[#E1F0CD]"
    }
  ];

  return (
    <section className="mt-[100px] max-md:mt-20 max-sm:mt-[60px]">
      <h2 className="text-[50px] font-bold text-center mb-10">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
