
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Asween", href: "#" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Resume", href: "#resume" },
    { name: "Book", href: "#book" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-[10px] px-4">
      <div className="flex w-[654px] h-[62px] items-center justify-between bg-[rgba(32,31,31,0.75)] backdrop-blur-sm px-4 py-4 rounded-[10px] max-md:w-full max-sm:h-auto">
        {isMobile ? (
          <div className="flex w-full items-center justify-between">
            <div className="text-white font-semibold text-xl">Asween</div>
            <Sheet>
              <SheetTrigger className="p-2">
                <Menu className="h-6 w-6 text-white" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-[rgba(32,31,31,0.95)] border-none">
                <nav className="flex flex-col gap-8 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white font-semibold text-xl"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-[60px] max-md:gap-8 max-sm:gap-4 overflow-x-auto">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-white font-semibold text-xl whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
