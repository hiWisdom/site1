"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamImage2 = ({team}) => {
  const [modal, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

    return (

      <>
      <motion.div 
        variants={{
        hidden: {
            opacity: 0,
            x: -50,
        },

        visible: {
            opacity: 1,
            x: 0,
        },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
        
        viewport={{ once: true }}
        className="animate_left grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap justify-between rounded-lg"
      >


        {team.map((item, index) => (
       
        <div key={index} className=" overflow-hidden m-2 lg:m-0 lg:w-1/3">
          
          <div className="lg:m-4">

          <Image
            src={item.image || null} // Replace with the actual path to your image
            alt={item.alt}
            width={1000}
            height={1000}
            priority
            className="h-auto rounded-t-[15px] lg:rounded-[24px]"
          />

          <div className="bg-black hover:bg-primary relative -mt-[7em] left-1/2 -translate-x-1/2 h-[90px] lg:h-[119px] grid gap-2 rounded-b-[15px] lg:rounded-b-[24px] team-profile-content">

          <div className="my-auto ml-5  grid gap-2">

          <div className=" w-fit my-auto flex gap-2 justify-between">

          <div className="">
            <p className="text-white font-extrabold team-details">{item.title}</p>
          </div>

          <button
            className="my-auto bg-white hover:bg-black rounded-full"
            onClick={() => {
              setSelectedMember(item);
              setModalOpen(true);
            }}
          >
            <Image
              src={"/assets/icons/arrow-right-black.svg"}
              width={1000}
              height={1000}
              alt="Read more"
              className="w-5 h-5 p-1"
            />
          </button> 

          </div>

          <div className="">
            <div><p className="text-white team-details team-details-smaller">{item.description}</p></div>
          </div>

          </div>
          </div>
          </div>

        </div>

        ))}
      </motion.div>

   
      {/* About Modal */}
      {modal && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden lg:w-[1199px] w-full lg:h-[100%] h-[90%] relative about-modal">
            {/* Close Button */}
            <button
              className="absolute lg:right-[1em] right-4 text-black hover:text-primary hover:font-extrabold lg:text-5xl text-4xl"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>

            {/* Show only the selected team member */}
            <div className="relative w-[90%] lg:h-[569px] mx-auto rounded-lg my-5 flex flex-col gap-3">
              <div>
                <p className="font-extrabold text-[24px]">{selectedMember.title}</p>
              </div>
              <div>
                <p className="font-extrabold text-primary">{selectedMember.description}</p>
              </div>
              <div className="overflow-auto">
                <p className="whitespace-pre-wrap text-[15px] text-justify leading-relaxed">{selectedMember.about}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

    );
  }

  export default TeamImage2
  
