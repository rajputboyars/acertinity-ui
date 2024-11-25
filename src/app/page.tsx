import { AnimatedModalDemo } from "@/components/AnimatedModalDemo";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import Demo from "@/components/Demo";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import {FAQ } from "@/components/FAQ/index.js"
import {NAV_ITEMS,CASE_STUDIES } from "@/constants/global.constant"





export default function Home() {
  return (
    <div className="bg-black text-white relative max-md:px-4">
      <FloatingNav navItems={NAV_ITEMS} />
      <div id="home" className="">
        <AuroraBackgroundDemo />
      </div>
      <div id="feature-section">
        <h1 className="text-3xl md:text-5xl text-center">Feature Section</h1>
        <LayoutGridDemo />
      </div>
      <div id="our-clients">
        <h1 className="text-center text-3xl md:text-5xl">OUR CLIENTS</h1>
        <StickyScrollRevealDemo />
      </div>
      <div id="reviews">
        <h1 className="text-3xl md:text-5xl text-center">Reviews</h1>
        <Demo />
      </div>
      <div id="case-studies" className="md:py-20 py-10">
        <div className=" rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <h1 className="text-center text-3xl md:text-5xl">Case Studies</h1>
          <InfiniteMovingCards
            items={CASE_STUDIES}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      <div id="faq" className="max-w-7xl m-auto border rounded-lg pt-6 mb-6">
        <h1 className="text-3xl md:text-5xl text-center">FAQ</h1>
        <FAQ />
      </div>
      <div id="book-your-ticket">
        <h1 className="text-3xl md:text-5xl text-center">
          Book Your Ticket
            </h1>
          {/* <div className="h-full w-full flex items-center justify-center text-white">
            <iframe
              src="https://www.youtube.com/@Luke_Infinger?autoplay=1&mute=1&loop=1"
              width={300}
              height={500}
              className="h-full w-full object-cover"
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div> */}

        <AnimatedModalDemo />
      </div>
    </div>
  );
}
