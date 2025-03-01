"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


  const BannerCard = ({ banner }) => {
    const {
      title,
      caption,
      list,
      image,
      bgColor,
      titleColor,
      titleTextSize,
      captionColor,
      captionTextSize,
      display,
      link,
      linkCaption,
      linkIcon,
      subscribe,
      emailLink,
      emailAddress

    } = banner; // Destructure banner object
  

 return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden mx-10">
      {/* Dynamic background color */}
        {/* <div className="mx-auto rounded-lg bg-gradient-to-t from-primary to-primary px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0"> */}
        <div
          className="mx-auto rounded-[24px] px-7.5 py-12.5 md:px-12.5 xl:px-17.5 xl:py-0 mb-10"
          style={{ backgroundColor: bgColor || "transparent" }} // Default if value not provided
        >

          <div 
            className="lg:flex lg:justify-evenly lg:mx-auto px-[48px] py-[33px] gap-10 banner-content-container"            
            style={{ flexDirection: display || "row" }} // Default if value not provided
          >

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:w-3/4 animate_left  grid"
            >
              <div
                className="my-auto w-fit"
              >
                {/* Dynamic Title */}
                <h1
                  className={`relative m-auto  w-fit text-[15px] lg:text-[25px] ${
                    titleColor ? "" : " text-black"
                  }`}
                  style={{
                    color: titleColor || undefined, // Default if value not provided
                    fontSize: titleTextSize || "2rem", // Default if value not provided
                    fontFamily: "AvenirBold",
                  }}
                >
                  {title || "Hello HeelHeid No Title Available"}
                </h1>
              </div>
              
              <div
                className=" my-auto"
              >
                {/* Dynamic Caption */}
                <p
                  className={`relative m-auto text-[15px] lg:text-justify leading-6 ${
                    captionColor ? "" : " text-black"
                  }`}
                  style={{
                    color: captionColor || undefined, // Default if value not provided
                    fontSize: captionTextSize ? `calc(${titleTextSize} - 0.5rem)` : "1rem",
                  }}
                >
                  {caption}
                </p>

              {/* List Rendering */}
              {list && list.length > 0 && (
                <ul className="list-disc list-inside pb-3">
                  {list.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 " style={{lineHeight:'2rem'}}>
                    {/* <CheckCircleOutline className="text-primary w-6 h-6" /> Custom Icon */}
                    <span>{item}</span>
                  </li>
                  ))}
                </ul>
              )}

              </div>


              <div 
                className="my-auto "
              >

                {/* {callToActionButtons.map((cta, index)=>(

                  <div
                    key={index}
                  > */}

                    {/* <Link
                      href={link}
                      className="inline-flex items-center rounded-lg px-4 py-4 font-medium m-auto bg-primary hover:bg-black gap-1"
                      
                    >
                      <div className=" my-auto">
                        <p className="text-white">{linkCaption} </p>
                      </div>

                      <div className=" my-auto">
                        <Image
                          width={15}
                          height={15}
                          src={linkIcon || "/assets/icons/arrow-up-right-01.svg"}
                          alt="Arrow"
                          className="dark:block"
                        />
                      </div>

                    </Link> */}

                  {link && (
                    <Link
                      href={link}
                      target="_blank" 
                      className="inline-flex items-center rounded-lg px-4 py-2 font-medium m-auto bg-primary hover:bg-black gap-1 my-10"
                    >
                      <div className="my-auto">
                        <p className="text-white">{linkCaption} </p>
                      </div>

                      <div className="my-auto">
                        <Image
                          width={15}
                          height={15}
                          src={linkIcon || "/assets/icons/arrow-up-right-01.svg"}
                          alt="Arrow"
                          className="dark:block"
                        />
                      </div>
                    </Link>
                  )}

                  {/* </div>

                ))} */}
                
                {subscribe && (
                  <div className="w-fit">
                          
                      <div className="my-4">
                          <p className="text-primary" style={{fontFamily:'AvenirBold'}}>Get Signed by Our Agency</p>
                      </div>
                      
                      <div className="border border-[black] px-2 py-1 mx-auto w-fit flex gap-2 rounded-lg">
      
                          <div className="cursor h-fit my-auto">
                              <Image
                                  src={"/assets/icons/mail-black.svg"}
                                  width={1000}
                                  height={1000}
                                  alt="mail"
                                  className="w-5 h-5"
                              />
                          </div>
      
                          <div>
                              <a href={subscribe} className=" text-center">{emailAddress}</a>

                          </div>
                      </div>
                      
                  </div>
                )}

              </div>
              
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-1/4 h-full m-auto "
            >

              <Image
                src={image || "/fallback1.gif"}
                width={1000}
                height={1000}
                alt="Banner"
                className="h-full w-[376px]"
              />

            </motion.div>

          </div>

        </div>

      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default BannerCard;
