"use client";
import About from "./About";
import AboutImage from "./AboutImage";
import Portfolio from "./Portfolio";

export default function AboutPage() {
  return (

    <>
    
      <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between mx-auto lg:space-x-10 nine20" id="about">
          
        {/* Contact Image Section */}
        <div className="lg:w-1/2 flex justify-center m-auto w-full">
          <About />
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 w-full my-auto">
          <AboutImage/>
        </div>

      </div>
    
      <div className="flex lg:flex-row items-center lg:items-start justify-between mx-auto nine20" id="portfolios">
        <Portfolio/>
      </div>
    </>
  );
}
