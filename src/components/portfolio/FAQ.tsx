
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer UI/UX design, web development, branding & visual identity, AI-driven creative solutions, and MVP development. Each service is tailored to meet your specific needs and goals."
    },
    {
      question: "Can you build a complete website from scratch?",
      answer: "Yes, I can build complete websites from scratch, handling everything from design to development and deployment. I work with modern technologies to create responsive, user-friendly websites."
    },
    {
      question: "How long does it take to design and develop a project?",
      answer: "Project timelines vary depending on complexity and requirements. A simple website might take 2-4 weeks, while more complex projects could take 2-3 months. I'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you use AI in your design process?",
      answer: "Yes, I leverage AI tools to enhance efficiency and creativity in my design process. AI helps with initial concepts, but the final designs are always refined with human expertise and creativity."
    },
    {
      question: "How can we start working together?",
      answer: "Getting started is easy! Simply reach out through the contact form, and we'll schedule a consultation to discuss your project needs, goals, and timeline. From there, I'll provide a proposal outlining the scope and cost."
    }
  ];

  return (
    <section className="mt-[100px] max-md:mt-20 max-sm:mt-[60px]">
      <div className="text-center mb-10">
        <h2 className="text-[40px] font-bold">Got Question?</h2>
        <p className="text-xl">I have answers</p>
      </div>
      <div className="bg-[#F8F8FC] rounded-lg p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex justify-center mt-6">
          <Button variant="outline" className="border border-black rounded-md px-8">
            Have a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
