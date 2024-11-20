"use client";

import { ParallaxScroll } from "./ui/ParallaxScroll";

interface ParallaxScrollDemoProps {
  data: string[]; // Replace `string[]` with the appropriate type if `data` has a more specific structure.
}
// import { ParallaxScroll } from "../ui/parallax-scroll";

export function ParallaxScrollDemo({ data }: ParallaxScrollDemoProps) {
  return <ParallaxScroll images={data} />;
}

