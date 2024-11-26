"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";
import { DUMMYCONTENT } from "@/constants/global.constant";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 max-w-6xl">
      <div className="max-w-5xl mx-auto antialiased pt-4 relative">
        {DUMMYCONTENT.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <div className="text-sm  prose prose-sm dark:prose-invert flex flex-col gap-6 md:flex-row">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="400"
                  width="800"
                  className="rounded-lg max-h-[300px] mb-10 object-cover"
                />
              )}
              <div className="flex flex-col w-full md:pl-6 ">

                <p className={("text-xl mb-4")}>
                  {item.title}
                </p>
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

