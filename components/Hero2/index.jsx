"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import HeroTypeWriter from './TypewriteEffect';

const Hero2 = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); 
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // const [currentText, setCurrentText] = useState("Business");

  // useEffect(() => {
  //   const textOptions = ["Business", "Startup"];
  
  //   const interval = setInterval(() => {
  //     setCurrentText(prevText => {
  //       const nextIndex = (textOptions.indexOf(prevText) + 1) % textOptions.length;
  //       return textOptions[nextIndex];
  //     });
  //   }, 2000); // Change every 2 seconds
  
  //   return () => clearInterval(interval); // Cleanup the interval on unmount
  // }, []);
  


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.volume = volume;
      video.addEventListener("timeupdate", () => setCurrentTime(video.currentTime));
      video.addEventListener("loadedmetadata", () => setDuration(video.duration));
    }
    return () => {
      if (video) {
        video.removeEventListener("timeupdate", () => setCurrentTime(video.currentTime));
        video.removeEventListener("loadedmetadata", () => setDuration(video.duration));
      }
    };
  }, [volume]);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setShowControls(false); // Hide buttons on click
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
    setShowControls(false);
  };

  const handleFastForward = () => {
    videoRef.current.currentTime += 5;
    setShowControls(false);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (

    <>


    
   
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
          className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white px-4 lg:my-10 hero-section"
        >
        <motion.div
          className="lg:h-full grid gap-5 hero-main"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
              
          {/* Heading Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='h-fit my-auto'
          >
              <div className='hero-text-container my-auto'>

                <h1 className="lg:text-[54px] text-1xl font-extrabold hero-text" style={{ fontFamily: 'AvenirBold'}}>
                  We are Globally...
                  <div className="flex justify-center gap-2 block text-white">

                    {/* <div>
                      Building <span className='m-1'></span>
                    </div> */}
                     

                     <motion.div
                    // key={currentText} // Unique key to trigger animation on text change
                    initial={{ rotateY: 90, opacity: 0 }} // Initial state of the animation (off-screen)
                    animate={{ rotateY: 0, opacity: 1, color: '#f7cbb0' }} // Final state (visible and flipped)
                    exit={{ rotateY: -90, opacity: 0 }} // Exit animation (flip out)
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="lg:text-[54px] text-1xl font-extrabold hero-text"
                    >
                      <HeroTypeWriter/>
                    </motion.div>
                  
                    {/*<div>
                      growth
                    </div>  */}
                    
                  </div>

                </h1>

              </div>
          </motion.div>

            
        </motion.div>

        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero-main-2 h-fit w-fit mx-auto"
          >

              <div className=''>
                <p className="lg:mt-4 lg:text-[25px] lg:text-lg font-bold">Subscribe to join our newsletter</p>
              </div>

              <motion.div
                className="lg:mt-6 mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none lg:w-[434px]"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-primary hover:bg-black text-white px-6 py-3 rounded-r-md font-semibold lg:w-[156px]"
                >
                  Subscribe
                </motion.button>

              </motion.div>

              {/* <div className=''>
                <p className="lg:mt-4 text-[20px]">
                  Not ready to get started? <motion.button onClick={() => setIsOpen(true)} className="underline">view Demo</motion.button>
                </p>
              </div> */}

        </motion.div>

      </motion.div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden lg:w-[1099px] w-full lg:h-fit h-full relative">

            {/* Close Button */}
            <button
              className="absolute lg:right-[1em] right-4 text-black hover:text-primary hover:font-extrabold lg:text-5xl text-4xl"
              // onClick={() => setIsOpen(false)}
              onClick={() => {
                setIsOpen(false);
                setIsPlaying(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }}
            >
              &times;
            </button>
            
            {/* Video Embed */}
            <div className="relative w-[90%] lg:h-[569px] mx-auto  rounded-lg my-10">
              {/* <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video link
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}

              {/* <video className="w-full h-full" controls>
                <source src="/assets/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}


            {/* Custom Video Player */}
            <div className="relative w-full h-[550px] flex items-center mt-[4em rounded-lg justify-center bg-black"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            >
              {/* <video className="w-full h-full object-cover rounded-lg" autoPlay muted controlsList="nodownload noremoteplayback nofullscreen"> */}

              <video ref={videoRef} className="w-full h-full object-cover rounded-lg" controlsList="nodownload noremoteplayback nofullscreen">
             

                <source src="/assets/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Custom Play Button */}

              {showControls && (
                <div className="absolute w-full flex justify-between px-10 my-10 ">

              
                  <button 
                    className="play-button bg-[grey] bg-opacity-50 p-2 my-auto rounded-full shadow-md hover:bg-opacity-100 w-20 h-20"
                    onClick={handleRewind}
                    >
                    <Image 
                      src={isPlaying ? '/assets/icons/previous.svg' : '/assets/icons/previous.svg'}
                      width={50} 
                      height={50} 
                      alt={isPlaying ? 'Rewind Video' : 'Rewind Video'} 
                    />

                  </button>
                  
                  <button 
                    className="play-button bg-[grey] bg-opacity-50 p-6 rounded-full shadow-md hover:bg-opacity-100"
                    onClick={togglePlayPause}
                    >
                    <Image 
                      src={isPlaying ? '/assets/icons/pause.svg' : '/assets/icons/play-new.svg'}
                      width={50} 
                      height={50} 
                      alt={isPlaying ? 'Pause Video' : 'Play Video'} 
                    />

                  </button>
                  
                  <button 
                    className="play-button bg-[grey] bg-opacity-50 p-3 my-auto rounded-full shadow-md hover:bg-opacity-100 w-20 h-20"
                    onClick={handleFastForward}
                    >
                    <Image 
                      src={isPlaying ? '/assets/icons/forward.svg' : '/assets/icons/forward.svg'}
                      width={50} 
                      height={50} 
                      alt={isPlaying ? 'Fast-forward Video' : 'Fast-forward Video'} 
                    />

                  </button>

                </div>
              )}


            </div>

            {/* Video Time & Volume Controls */}
            <div className="absolute bottom-5 left-5 flex items-center space-x-4 bg-black bg-opacity-50 p-2 rounded-lg">
              <span className="text-white text-sm">{Math.floor(currentTime)}s / {Math.floor(duration)}s</span>
              <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange}
                className="volume-slider appearance-none w-24 h-2 bg-blue-500 rounded-lg cursor-pointer" />
            </div>

            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Hero2;
