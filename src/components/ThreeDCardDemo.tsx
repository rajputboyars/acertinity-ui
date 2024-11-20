"use client";

import Image from "next/image";
import React from "react";
// import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
// import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6  ">
        <CardItem translateZ="100" className="w-full my-4">
          <Image
            src="/images/with-out-bg.png"
            height="1000"
            width="1000"
            className=" w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl text-center w-full font-bold text-white "
        >
          Bhavya (MERN stack developer)
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
