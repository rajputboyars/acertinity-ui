"use client";
import React from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import {FEATURE_SECTION} from "@/constants/global.constant"

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={FEATURE_SECTION} />
    </div>
  );
}
