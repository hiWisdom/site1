"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const Product_Services = ({product_services}) => {


  return (



    <div className='lg:mr-10' id="services-container">

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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top w-fit mb-4"
            id="services-text"
        >

        <div
            className='lg:w-[85%]'
        >

            {/* <p className="lg:text-[16px] font-bold text-[14px] leading-[2em] services-text-title-cite">We provide the best services</p> */}
                
            <h1 className="lg:text-[48px] text-[24px] leading-[2em] services-text-title" style={{fontFamily:"AvenirBold"}}>Our Services</h1>

            
            <p className="text-[15px] services-text-description text-justify">At Heelheid, we empower entrepreneurs and businesses to achieve sustainable growth and success. Our services are designed to support businesses at various stages of their journey.</p>

        </div>


        </motion.div>

        <div className='lg:grid lg:grid-cols-2 gap-5' id="services-card">
            {product_services.map((item, index) => (
                
                <div key={index} className='bg-primary w-[100%] py-5 px-2 rounded-lg lg:mb-0 mb-2 services-box'>

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
                        className="animate_top mx-3"
                    >

                        <div className='w-[50px] h-[50px] border rounded-full border-[#000]'>
                            <Image
                                src={item.image || null}
                                width={100}
                                height={100}
                                alt={item.alt}
                                className='w-50 h-50'
                            />
                            
                        </div>

                        <div className='mb-4 mt-3'>
                            <p className='lg:text-[22px] text-[18px] font-bold text-white services-title'>{item.title}</p>
                        </div>

                        <div>
                            <p className='text-[15px] text-white services-description'>{item.description}</p>
                        </div>
                        
                    </motion.div>
                </div>
            ))}
        </div>

        
    </div>



  );
}

export default Product_Services


