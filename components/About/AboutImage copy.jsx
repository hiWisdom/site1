"use client";
import Image from "next/image";

const AboutImage = () => {


  return (
    <div className="lg:w-fit lg:m-auto relative">

      {/* Image */}
      <Image
        src={"/assets/images/about/1.svg"}
        alt="about"
        className="rounded-xl shadow-md object-contain lg:w-[100%] w-full  transition-opacity duration-500 my-auto"
        width={100}
        height={100}
        priority
      />
    </div>
  );
};

export default AboutImage;

