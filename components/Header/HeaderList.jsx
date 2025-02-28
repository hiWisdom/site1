"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const HeaderList = ({ links }) => {

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% of the section should be visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections
    links.forEach(({ url }) => {
      const sectionId = url.replace("#", ""); // Remove "#" to get the section ID
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return (

  <ul className="flex flex-col md:flex-row bg-white w-full md:w-auto md:shadow-none shadow-sm p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 lg:justify-center lg:items-center ">

    {links.map(({ name, url, iconPath }) => (
      <li key={name} className="flex h-full py-2 ">
        <a
          href={url}
          // className="flex items-center hover:text-primary transition duration-300 px-5"
          className={`headertext flex items-center transition duration-300 px-5 lg:text-[15px] hover:text-primary hover:font-extrabold ${
            activeSection === url.replace("#", "")
            ? "text-primary font-bold lg:text-[16px]"
            : activeSection ? "text-black" : "text-black"
          }`}
        >
          {iconPath && <Image src={iconPath || null} alt={name} className="mr-2 w-5 h-5" width={100} height={100} />}
          {name}
        </a>
      </li>
    ))}
    
    {/* Call-to-Action Button */}
      <motion.button
        className="lg:bg-primary hover:bg-black text-white font-semibold py-2 px-5 lg:rounded-lg lg:shadow-md mt-4 flex lg:gap-3 lg:w-full lg:h-[40px]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#join-community"
      >

      <p className="lg:text-white text-primary flex lg:items-center lg:justify-center h-full lg:w-full my-auto lg:text-[16px] font-bold">
        Join Community
      </p>

      <Image
        src={"assets/icons/arrow-up-right.svg"}
        width={20}
        height={20}
        alt="arrow-up-right"
        className="lg:hidden my-auto ml-2"
      />
    </motion.button>

  </ul>

  );
};

export default HeaderList;
