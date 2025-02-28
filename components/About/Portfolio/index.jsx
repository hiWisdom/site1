

"use client";
import React from 'react';
import Banner from '../../Banner';

const Portfolio = () => {


  return (



    <div className='flex flex-col' id='portfolios'>

        <div className=''>
            
            <div className=''>

                <div className='mx-auto pt-10 w-fit'>
                    <h1 
                        className='text-[28px] lg:text-[48px] font-extrabold' 
                        style={{fontFamily:"AvenirBold"}}
                        id='portfolios'
                    >
                        Our Business Portfolio
                    </h1>
                </div>

                <div className='w-[92%] mx-auto pb-6'>
                    <p className='text-center'>At Heelheid Business Acquisition and Management Company, we take a collaborative and supportive approach to investing. We work closely with our portfolio companies to provide strategic guidance, operational expertise, and access to netwrok or industry experts.  </p>
                </div>

            </div>
            
        </div>

        <Banner/>
        
    </div>



  );
}

export default Portfolio


