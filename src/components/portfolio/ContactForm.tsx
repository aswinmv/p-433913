
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm: React.FC = () => {
  return (
    <section className="mt-[30px] max-md:mt-8 max-sm:mt-6 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-[40px] font-bold mb-4">Send a Message</h2>
        <p className="text-lg mb-6">
          Let's discuss your next project! Have a design or development need?
          Just send me a message and I'll get back to you as soon as possible.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="black" />
            </svg>
            <span>+123-456-7890</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="black" />
            </svg>
            <span>aswinmv.ux@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-sm">
        <div className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <Input id="name" placeholder="Name" className="bg-[#F8F8FC]" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <Input id="email" placeholder="Email" className="bg-[#F8F8FC]" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Tell me about your project or inquiry</label>
            <Textarea id="message" placeholder="Tell me about your project or inquiry" className="bg-[#F8F8FC] min-h-[120px]" />
          </div>
          <Button className="w-full bg-black text-white py-6">Send Message</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
