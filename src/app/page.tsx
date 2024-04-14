
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import  ContactUs  from "@/components/contact/ContactForm";
import Nav from "@/components/nav";
import { TypewriterEffectSmoothDemo } from "@/components/type";


export default function Home() {
  
  return (
    <>
    <div>
      <Nav/>
    </div>
    <div className="border p-0.4"></div>
    <div><TypewriterEffectSmoothDemo /></div>
    <div className="border p-0.4"></div>
    
    <div>
      <InfiniteMovingCardsDemo/>
    <div className="border p-0.4"></div>
    </div>
        <div className="">
        <ContactUs/>
        </div>
    <div className="h-[2.5rem] text-gray-400 pt-2 text-center">
    © 2024 EXOR Inc. All rights reserved.
    </div>
    
    </>
  );
}