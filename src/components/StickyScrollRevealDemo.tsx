"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";
import {OUR_CLIENTS} from "@/constants/global.constant"

export function StickyScrollRevealDemo() {
    return (
        <div className="p-10" >
            <StickyScroll content={OUR_CLIENTS} />
        </div>
    );
}
