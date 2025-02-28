"use client";
import Product_ServicesImage from "./Product_ServicesImage";
import Product_Services from "./Product_Services";
import { product_services } from "../SiteMaps/data";
import { motion } from "framer-motion";

export default function Product_ServicesPage() {
  return (
    // <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mx-auto bg-primary mt-7 nine20" id="products">
    <div
    className='flex flex-col lg:flex-row bg-[#FDF2EB] justify-between lg:items-start w-full'
    id='services'
  >
        
      {/* Product_Services Image Section */}
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
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_left lg:w-1/2 flex justify-center product_servicesImage">
        <Product_ServicesImage />
      </motion.div>

      {/* Product_Services Form Section */}
      <div className="lg:w-3/4 lg:my-auto lg:flex">
        <Product_Services product_services={product_services}/>
      </div>

    </div>
  );
}
