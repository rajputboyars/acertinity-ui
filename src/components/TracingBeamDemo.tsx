"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";
import { DUMMYCONTENT } from "@/constants/global.constant";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {DUMMYCONTENT.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="200"
                  width="800"
                  className="rounded-lg max-h-[200px] mb-10 object-cover"
                />
              )}
              <p className={("text-xl mb-4")}>
                {item.title}
              </p>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

