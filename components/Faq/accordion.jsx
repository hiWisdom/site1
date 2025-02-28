"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Accordion = ({accordionId, question, answer, isOpen, toggleAccordion,}) => {  
  
  return (


    <div
      className={`lg:w-[70%] flex m-auto w-full duration-300 flex-col py-10 px-5 my-4 justify-center items-start rounded-lg ${
        isOpen ? "h-auto bg-[#E86512] text-white" : "h-[132px] bg-white text-black"
      }`}
    >

      <div
        onClick={() => toggleAccordion(accordionId)}
        className='w-full cursor-pointer flex flex-row gap-3 rounded-md justify-between items-center'
      >
        <p className={`text-[15px] md:text-[18.687px] w-full font-bold`}>
          {question}
        </p>
        <div className='flex mr-auto justify-end items-end'>
          {isOpen ? (

            <div className="bg-white w-[50px] h-[50px] hover:bg-[black] rounded-full  flex items-center justify-center">
            <Image 
              src={"/assets/icons/arrow-down-primary.svg"} 
              alt="Arrow-doown" 
              width={30}
              height={30}
              className=" w-[20px] h-[20px]"
            />
            </div>

          ) : (
            

            <div className="bg-[#F9D8C3] w-[50px] h-[50px] hover:bg-[black] rounded-full  flex items-center justify-center">
              <Image 
                src={"/assets/icons/right-arrow-black.svg"} 
                alt="Arrow-right" 
                width={30}
                height={30}
                className="w-[20px] h-[20px]"
              />
            </div>

          )}
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className='flex mt-2 flex-col w-full rounded-md justify-center items-start'
          >
            <p className='text-[15.29px] px-2 w-[90%]'>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Accordion;
