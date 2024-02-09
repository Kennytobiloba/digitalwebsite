import React from 'react';
import Icon from '../../assets/icon-quote.png';
import convertkit from '../../assets/convertkit (1).png';
import People from '../../assets/people-img.png';
import Peopletwo from '../../assets/people2-img.png';

const Testimonial = () => {
  return (
    <div className='lg:p-20 lg:px-[6rem] px-[2rem] md:px-[4rem] mx-auto mt-[5rem]' >
      <div className='text-center'>
        <h1 className='lg:text-[32px] md:text-[26px] text-[22px] font-Clash font-700 mb-20 leading-40 text-white '>TESTIMONIALS</h1>
      </div>

      <div className='grid lg:grid-cols-2 grid-cols-1 gap-[6rem]'>
        <div className='bg-white flex flex-col flex-1 md:py-[4rem] py-[2rem] px-[2rem] relative '>
          <div className='absolute right-[4rem] -top-[2rem]'>
            <img src={Icon} alt="" />
          </div>
          <h1 className=' lg:text-[32px] text-[22px] md:text-[26px] font-[700] font-Clash text-black mb-4'>“I am looking forward to working with the Boltzshift again.”</h1>
          <p className='lg:text-[16px] text-[14px] mb-6 font-Clash font-700 leading-[30px] text-black'>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
          <div className=' border border-1 border-black'></div>
          <div className='grid lg:grid-cols-2 grid-cols-1 justify-between  mt-[3rem] lg:gap-1 gap-[1.5rem]'>
            <div className='flex gap-2 items-center '>
                <img src={People} alt="" />
                <div className='flex flex-col gap-0 ' >
                    <h4 className='lg:text-[16px] text-[14px]  font-Clash font-500 leading-[30px] text-black'>Dora Dybala </h4>
                    <h6 className='lg:text-[14px] text-[12px]  font-Clash font-400 leading-[30px] text-black'>CEO & Founder of Company</h6>
                </div>
            </div>
           <div className='lg:justify-center lg:items-center flex'>
           <img src={convertkit} alt="" />
           </div>

          </div>
        </div>
        <div className='bg-white flex flex-col flex-1 md:py-[4rem] py-[2rem] px-[2rem] relative '>
          <div className='absolute right-[4rem] -top-[2rem]'>
            <img src={Icon} alt="" />
          </div>
          <h1 className=' lg:text-[32px] text-[22px] md:text-[26px] font-[700] font-Clash text-black mb-4'>  "Anticipating the next chapter of collaboration with Boltzshift"</h1>
          <p className='lg:text-[16px] text-[14px] mb-6 font-Clash font-700 leading-[30px] text-black'>I I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
          <div className=' border border-1 border-black'></div>
          <div className='grid lg:grid-cols-2 grid-cols-1 justify-between lg:gap-1 gap-[1.5rem]  mt-[3rem]'>
            <div className='flex gap-2 items-center '>
                <img src={Peopletwo} alt="" />
                <div className='flex flex-col gap-0 ' >
                    <h4 className='lg:text-[16px] text-[14px]  font-Clash font-500 leading-[30px] text-black'>Dora Dybala </h4>
                    <h6 className='lg:text-[14px] text-[12px]  font-Clash font-400 leading-[30px] text-black'>CEO & Founder of Company</h6>
                </div>
            </div>
           <div className='lg:justify-center lg:items-center flex'>
           <img src={convertkit} alt="" />
           </div>

          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Testimonial;
