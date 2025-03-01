"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function ContactImage() {
  

    return (
      <div className="m-auto w-fit">

        <Image
          src={"/assets/images/contact/contact.svg" || null} // Replace with the actual path to your image
          alt="Contact representative"
          className="rounded-xl lg:object-cover w-full lg:h-[438px] lg:w-[547px]"
          width={100}
          height={100}
          priority 
        />
      </div>
    );
  }
  