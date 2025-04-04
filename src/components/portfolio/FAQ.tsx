
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageSquare, HelpCircle } from "lucide-react";

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
    <section className="mt-[30px] max-md:mt-8 max-sm:mt-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left side - FAQ header and contact button */}
        <div className="w-full md:w-1/3 bg-[#f0f0f0] rounded-2xl p-8 flex flex-col items-center text-center">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
            <HelpCircle className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-3xl font-bold mb-4 max-sm:text-2xl">Got Questions?</h2>
          <p className="text-gray-600 mb-6 max-sm:text-sm">Feel free to reach out if you have any questions about my services or how we can work together.</p>
          <Button className="bg-black text-white rounded-full px-8 py-6 h-auto flex items-center gap-2 hover:bg-gray-800 max-sm:px-6 max-sm:py-4">
            <MessageSquare className="w-5 h-5" />
            <span>Contact Me</span>
          </Button>
        </div>

        {/* Right side - FAQ accordion */}
        <div className="w-full md:w-2/3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline max-sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 max-sm:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
