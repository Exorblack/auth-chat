"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Ctrigger from "./triggers/ctrigger";
import Logtrigger from "./triggers/logtrigger";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Great",
    },
    {
      text: "websites",
    },
    {
      text: "with",
    },
    {
      text: "Our",
    },
    {
      text: "Company",
    },
    {
      text: "exorblack",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
      The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 pt-6">


      <div className="px-11 py-3 rounded-lg bg-[#213d68] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#213d68] transition-colors duration-200 text-center">
      <Ctrigger />
      </div>
      
      <div className="px-11 py-3 rounded-lg bg-[#213d68] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#213d68] transition-colors duration-200 text-center">
      <Logtrigger />
      </div>
      

      
      </div>
      </div>
    </div>
    
  );
}
