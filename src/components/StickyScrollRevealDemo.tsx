"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";
import {CONTENT} from "@/constants/global.constant"

export function StickyScrollRevealDemo() {
    return (
        <div className="p-10" >
            <StickyScroll content={CONTENT} />
        </div>
    );
}
