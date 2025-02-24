"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeaderList from "./HeaderList"; // Assuming HeaderList is in the same directory
import { navLinks } from "../SiteMaps";
import Link from "next/link";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full lg:h-[90px] bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center container-1420">
        {/* Site Logo */}
        <div className="flex justify-center items-center text-xl font-bold text-blue-600 p-2 ">
          <Link href="/">
            <Image 
              src={"/logo.svg"} 
              width={80} 
              height={60} 
              alt="HeelHeid-Logo" 
              className="heelHeid-Logo "
              priority
            />
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none mr-[1em]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={` gap-[20px] absolute left-0 w-fit bg-white md:relative md:space-y-0 md:flex md:p-0 md:shadow-none md:top-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "top-[4.3em] block w-full py-4" : "top-[-100%] hidden"
          }`}
        >
          <HeaderList links={navLinks} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
