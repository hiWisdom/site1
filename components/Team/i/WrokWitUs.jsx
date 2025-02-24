"use client";
import { workwithus } from "../../SiteMaps/data";
import Image from "next/image";

export default function WorkwithUs() {
  return (
    

    <div className="w-full  h-auto bg-primary">

        <div 
         className=" h-[100%] w-[90%] m-auto grid gap-[3em] lg:py-[7em] lg:px-0 p-6 nine20"
        >

            <div className="">

                <div className="w-fit m-auto text-center">
                    <h1 className="text-[48px] text-white" style={{fontFamily:'AvenirBold'}}>Work with us</h1>
                    <p 
                     className="text-white lg:w-[536px]"
                    >
                        We are always happy and ready to work with you. Let us bring your business back to life.
                    </p>
                </div>

            </div>

            <div className="flex xl:flex-row flex-col gap-5">

                {workwithus.map((item, index) => (
                    
                    <div 
                        className="bg-white lg:w-1/3 h-[194px] rounded-[16px]"
                        key={index}
                    >

                        <div className="mt-9">

                            <div className="w-[80%] m-auto">
                                <p className="text-[32px] text-extrabold" style={{fontFamily:'AvenirBold'}}>{item.title}</p>
                            </div>

                            <div className="text-[24px] w-[80%] m-auto">
                                <p>{item.description}</p>
                            </div>

                        </div>

                    </div>

                ))}
            </div>

            <div className="">
                    
                <div className="mx-auto">
                    <p className="text-white text-center">Send us an email</p>
                </div>
                
                <div className="border border-[white] px-2 py-1 mx-auto w-fit flex gap-2 rounded-lg">

                    <div className="cursor h-fit my-auto">
                        <Image
                            src={"/assets/icons/mail-white.svg"}
                            width={1000}
                            height={1000}
                            alt="mail"
                            className="w-5 h-5"
                        />
                    </div>

                    <div>
                        <a href="mailto:team@heelheidbusiness.com" className="text-white text-center">team@heelheidbusiness.com</a>
                    </div>
                </div>

                <div></div>
                
            </div>

        </div>

    </div>
  );
}
