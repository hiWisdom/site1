"use client";
import React, { useState } from "react";
import Image from "next/image";

const TeamImage = ({ team }) => {
  const [modal, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:flex rounded-lg lg:w-2/3 justify-evenly border border-[red]"> */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap justify-between rounded-lg lg:w-1/2">
        {team.map(([item], index) => (
          // <div key={index} className="rounded-lg overflow-hidden m-2 border border-[blue] w-1/2 lg:h-[400px]">
          <div 
            key={index} 
            className="overflow-hidden m-2 lg:m-0 lg:w-1/2"
          >

            
          <div 
            className="lg:m-2"
          >

            <Image
              src={item.image || null}
              alt={item.alt}
              width={1000}
              height={1000}
              priority
              className="lg:h-auto rounded-t-[15px] lg:rounded-[24px]"
            />

            <div className="bg-black relative -mt-[7em] left-1/2 -translate-x-1/2 h-[119px] grid gap-2 rounded-b-[15px] lg:rounded-b-[24px] team-profile-content">
              <div className="my-auto ml-5 grid gap-2">
                <div className="w-fit gap-2 my-auto flex justify-between">
                  <div>
                    <p className="text-white font-extrabold">{item.title}</p>
                  </div>

                  <button
                    className="my-auto bg-white hover:bg-primary rounded-full"
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

                <div>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            </div>

            </div>

          </div>
        ))}
      </div>

      {/* About Modal */}
      {modal && selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden lg:w-[1199px] w-full lg:h-[90%] h-[90%] relative about-modal">
            {/* Close Button */}
            <button
              className="absolute lg:right-[1em] right-4 text-black hover:text-primary hover:font-extrabold lg:text-5xl text-4xl"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>

            {/* Show only the selected team member */}
            <div className="relative w-[90%] lg:h-[569px] mx-auto rounded-lg my-10 flex flex-col gap-3">
              <div>
                <p className="font-extrabold text-[24px]">{selectedMember.title}</p>
              </div>
              <div>
                <p className="font-extrabold text-primary">{selectedMember.description}</p>
              </div>
              <div className=" overflow-scroll">
                <p className="whitespace-pre-wrap text-justify  leading-relaxed">{selectedMember.about}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamImage;


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const TeamImage = ({ team }) => {
//   const [modal, setModalOpen] = useState(false);

//   return (
//     <>
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap rounded-lg lg:w-[50%] justify-evenly">
//       {team.map(([item], index) => (
//           // <div key={index} className="rounded-lg overflow-hidden m-2">
//           //   <Image
//           //     src={item.image || null} 
//           //     alt={item.alt}
//           //     width={1000}
//           //     height={1000}
//           //     priority
//           //     className="w-[300px] h-[400px]"
//           //   />

//           //   <div className="bg-black relative -mt-[7em] left-1/2 -translate-x-1/2 h-[90px] grid gap-2">
//           //     <div className="my-auto ml-5 grid gap-2">
//           //       <div className="w-fit gap-2 my-auto flex justify-between">
//           //         <div>
//           //           <p className="text-white font-extrabold">{item.title}</p>
//           //         </div>

//           //         <button
//           //           className="my-auto bg-white hover:bg-primary rounded-full"
//           //           onClick={() => setModalOpen(true)}
//           //         >
//           //           <Image
//           //             src={"/assets/icons/arrow-right-black.svg"}
//           //             width={1000}
//           //             height={1000}
//           //             priority
//           //             alt={"Read more"}
//           //             className="w-5 h-5 p-1"
//           //           />
//           //         </button>
//           //       </div>

//           //       <div>
//           //         <p className="text-white">{item.description}</p>
//           //       </div>
//           //     </div>
//           //   </div>
//           // </div>


//                     <div
//             key={index}
//           // className={`rounded-lg overflow-hidden m-2 ${styleIndex === 2 ? "lg:-mr-[4em] lg:ml-[4em]" : ""}`} // Margin adjustment for the second item

//           className="rounded-lg overflow-hidden m-2 "
//           > 
//             <Image
//               src={item.image || null} // Replace with the actual path to your image
//               alt={item.alt}
//               width={1000}
//               height={1000}
//               priority
//               className=" w-[300px] h-[400px]"
//             />

//             <div className="bg-black relative -mt-[7em] left-1/2 -translate-x-1/2 h-[90px] grid gap-2">

//             <div className="my-auto ml-5  grid gap-2">

//             <div className="w-fit gap-2 my-auto flex justify-between">

//             <div >
//               <p className="text-white font-extrabold">{item.title}</p>
//             </div>

//             <button 
//               className="my-auto bg-white hover:bg-primary rounded-full"
//               onClick={() => setModalOpen(true)}
//             >
//               <Image
//                 src={"/assets/icons/arrow-right-black.svg"}
//                 width={1000}
//                 height={1000}
//                 alt="Read more"
//                 className="w-5 h-5 p-1"
//               />
//             </button> 

//             </div>

//             <div >
//               <div><p className="text-white">{item.description}</p></div>
//             </div>

//             </div>

//             </div>

//           </div>
//         ))}
//       </div>

//       {/* About Modal */}
//       {modal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg overflow-hidden lg:w-[1199px] w-full lg:h-[90%] h-[90%] relative about-modal">
//             {/* Close Button */}
//             <button
//               className="absolute lg:right-[1em] right-4 text-black hover:text-primary hover:font-extrabold lg:text-5xl text-4xl"
//               onClick={() => setModalOpen(false)}
//             >
//               &times;
//             </button>

//             {team.map(([obj], index) => (
//               <div
//                 className="relative w-[90%] lg:h-[569px] mx-auto rounded-lg my-10"
//                 key={index}
//               >
//                 <div>
//                   <p>{obj.name}</p>
//                 </div>
//                 <div>
//                   <p>{obj.title}</p>
//                 </div>
//                 <div>
//                   <p>{obj.about}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TeamImage;








// "use client";
// import React, {useState} from "react";
// import Image from "next/image";

// const TeamImage = ({team}) => {
  
//     const [modal, setModalOpen] = useState(false);


//     return (


//       <>
   
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap rounded-lg lg:w-[50%] justify-evenly">


//           {/* {team.map((item, index) => (
        
//           <div 
//             key={index} 
//             className={`rounded-lg overflow-hidden m-2 ${index === 2 ? "lg:mr-[10em]" : ""}`} // Apply margin-right on large screens if index is 1
      
//           > */}

//           {team.map(([item, styleIndex], index) => (
//           <div
//             key={index}
//           // className={`rounded-lg overflow-hidden m-2 ${styleIndex === 2 ? "lg:-mr-[4em] lg:ml-[4em]" : ""}`} // Margin adjustment for the second item

//           className="rounded-lg overflow-hidden m-2 "
//           > 
//             <Image
//               src={item.image || null} // Replace with the actual path to your image
//               alt={item.alt}
//               width={1000}
//               height={1000}
//               priority
//               className=" w-[300px] h-[400px]"
//             />

//             <div className="bg-black relative -mt-[7em] left-1/2 -translate-x-1/2 h-[90px] grid gap-2">

//             <div className="my-auto ml-5  grid gap-2">

//             <div className="w-fit gap-2 my-auto flex justify-between">

//             <div >
//               <p className="text-white font-extrabold">{item.title}</p>
//             </div>

//             <button 
//               className="my-auto bg-white hover:bg-primary rounded-full"
//               onClick={() => setModalOpen(true)}
//             >
//               <Image
//                 src={"/assets/icons/arrow-right-black.svg"}
//                 width={1000}
//                 height={1000}
//                 alt="Read more"
//                 className="w-5 h-5 p-1"
//               />
//             </button> 

//             </div>

//             <div >
//               <div><p className="text-white">{item.description}</p></div>
//             </div>

//             </div>

//             </div>

//           </div>

//           ))}
//         </div>
   
   
//          {/* About Modal */}
//          {modal && (
//            <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50">
//              <div className="bg-white rounded-lg overflow-hidden lg:w-[1199px] w-full lg:h-[90%] h-[90%] relative about-modal">
   
//                {/* Close Button */}
//                <button
//                  className="absolute lg:right-[1em] right-4 text-black hover:text-primary hover:font-extrabold lg:text-5xl text-4xl"
//                  onClick={() => setModalOpen(false)}
//                >
//                  &times;
//                </button>
               
               

//                {team.map((obj, index)(
//                <div 
//                 className="relative w-[90%] lg:h-[569px] mx-auto  rounded-lg my-10"
//                 key={index}
//               >

//                   <div>
//                     <p>{obj.name}</p>
//                   </div>
                  
//                   <div>
//                     <p>{obj.title}</p>
//                   </div>
//                   <div>
//                     <p>{obj.about}</p>
//                   </div>

//                </div>
//                 ))}

//              </div>
//            </div>
//          )}
   
//       </>
   
//     );
//   }

//   export default TeamImage
  
