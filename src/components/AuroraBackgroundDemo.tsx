"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/AuroraBackground";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
// import { AuroraBackground } from "../ui/aurora-background";

export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground className="bg-black text-white">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="px-4">
                <div className="grid md:grid-cols-2 md:items-center">
                    <div className=" text-left max-md:flex max-md:items-center max-md:flex-col">
                        <div className="text-3xl md:text-7xl font-bold dark:text-white ">
                            Background lights are cool you know.
                        </div>
                        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 ">
                            And this, is chemical burn.
                        </div>
                        <button className="bg-black border-white border rounded-full w-fit text-white px-4 py-2">
                            Debug now
                        </button>
                    </div>
                    <div className="max-md:hidden">
                        <ThreeDCardDemo />
                    </div>
                </div>
            </motion.div>
        </AuroraBackground>
    );
}
