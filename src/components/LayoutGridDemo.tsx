"use client";
import React from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import {CARDS} from "@/constants/global.constant"
// import { ThreeDCardDemo } from "./ThreeDCardDemo";
// import { LayoutGrid } from "../ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={CARDS} />
    </div>
  );
}
