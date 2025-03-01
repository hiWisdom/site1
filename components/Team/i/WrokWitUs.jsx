"use client";
import { workwithus } from "../../SiteMaps/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkwithUs() {
  return (
    

    <div className="w-full  h-auto bg-primary">


        {/* <div 
            className="bg-[url(/assets/images/workwithus/vector.svg)]"
        > */}

            <div 
                className="h-[100%] w-[90%] m-auto grid gap-[3em] lg:py-[7em] lg:px-0 p-6 nine20"
            >

                <div className="">

                    <motion.div 
                        variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                        },
    
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
                        
                        viewport={{ once: true }}
                        className="animate_top w-fit m-auto text-center"
                    >
                        <h1 className="text-[30px] lg:text-[48px] text-white" style={{fontFamily:'AvenirBold'}}>Work with us</h1>
                        <p 
                        className="text-white lg:w-[536px]"
                        >
                            We are always happy and ready to work with you. Let us bring your business back to life.
                        </p>
                    </motion.div>

                </div>

                <div className="container flex xl:flex-row flex-col gap-5">

                    {workwithus.map((item, index) => (
                        
                        <motion.div 
                            variants={{
                            hidden: {
                                opacity: 0,
                                y: 50,
                            },
        
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
                            
                            viewport={{ once: true }}
                            className="animate_top bg-white lg:w-1/3 h-[194px] rounded-[16px]"
                            key={index}
                        >

                            <motion.div 
                                variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 50,
                                },
            
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
                                
                                viewport={{ once: true }}
                                className="animate_top mt-9"
                            >

                                <div className="w-[80%] m-auto">
                                    <p className="text-[32px] text-extrabold" style={{fontFamily:'AvenirBold'}}>{item.title}</p>
                                </div>

                                <div className="text-[24px] w-[80%] m-auto">
                                    <p>{item.description}</p>
                                </div>

                            </motion.div>

                        </motion.div>

                    ))}
                </div>

                <motion.div 
                    variants={{
                    hidden: {
                        opacity: 0,
                        y: 50,
                    },

                    visible: {
                        opacity: 1,
                        y: 0,
                    },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.1, ease:"circIn" }}
                    
                    viewport={{ once: true }}
                    className="animate_top grid gap-5"
                >
                        
                    <div className="mx-auto ">
                        <p className="text-white text-center font-extrabold hover:scale-3d">Send us an email</p>
                    </div>
                    
                    <div className="border border-[white] bg-white hover:scale-75 hover:bg-transparent px-4 py-3 mx-auto w-fit flex gap-2 rounded-lg">

                        <div className="cursor h-fit my-auto">
                            <Image
                                src={"/assets/icons/mail-black0.svg"}
                                width={1000}
                                height={1000}
                                alt="mail"
                                className="w-5 h-5"
                            />
                        </div>

                        <div>
                            <a href="mailto:team@heelheidbusiness.com" className="text-black text-center font-extrabold">team@heelheidbusiness.com</a>
                        </div>
                    </div>

                    <div></div>
                    
                </motion.div>

            </div>
        
        {/* </div> */}

    </div>
  );
}
