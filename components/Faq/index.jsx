

"use client";
import React, { useState, useEffect } from "react";
import Accordion from "./accordion";
import { faqdata } from "./faqdata";
import Image from "next/image";

const FAQs = () => {

   // Set the first FAQ open by default
   const [openAccordionId, setOpenAccordionId] = useState(null);

   useEffect(() => {
     if (faqdata.length > 0) {
       setOpenAccordionId(faqdata[0].id); // Ensure it matches the correct key
     }
   }, []);

   const [showAll, setShowAll] = useState(false); // State to toggle FAQ expansion

  const toggleAccordion = (accordionId) => {
    setOpenAccordionId((prevId) =>
      prevId === accordionId ? null : accordionId
    );
  };

  // Toggle the FAQ expansion
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div
      className='flex flex-col relative lg:px-[90.5px] bg-[#FDF2EB] gap-3 py-20 justify-between lg:justify-start items-start w-full'
      id='faq'
    >
      <div className="m-auto leading-[3rem]">
        <p>We are good at what we do</p>
        <h1 className='text-center text-3xl md:text-5xl font-bold tracking-wide'>FAQ</h1>
      </div>

      <div className='flex self-center w-full flex-col items-start mt-3 lg:w-[90%]'>
        {faqdata
          .slice(0, showAll ? faqdata.length : 3) // Show all or first 3
          .map((faq) => (
            <Accordion
              key={faq.id}
              accordionId={faq.id}
              answer={faq.answer}
              Businesses={faq.Businesses}
              including={faq.including}
              question={faq.question}
              isOpen={openAccordionId === faq.id}
              toggleAccordion={toggleAccordion}
            />
          ))}
      </div>

      <div className="m-auto leading-[3rem]">
        <button
          className="w-[186px] flex border border-primary px-3 rounded-[8px] shadow-lg justify-evenly transform transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={toggleShowAll}
        >
          <p className="font-bold text-primary">{showAll ? "See less projects" : "See all projects"}</p>

          <Image
            src={"assets/icons/faq-see-all-projects.svg"} // Change icon dynamically
            width={20}
            height={20}
            alt="toggle-icon"
            className="my-auto w-auto h-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default FAQs;
