import React, {  useState } from 'react';
import Image from '../../assets/img-bg.png'
import video from '../../assets/video-reel.png'
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <div id='Home' >
        <div className='  relative 2xl:p-20 lg:px-[6rem] px-[1rem] md:px-[4rem] flex flex-col justify-center items-center mx-auto text-center xl:mt-[8rem] md:mt-[8rem] mt-[6rem] lg:gap-10 gap-2'>
          <div className='circle rounded-full left-[40%]'>

          </div>
          <div className='absolute'>
       <div className='flex xl:gap-10 lg:gap-6 lg:mb-6 gap-4  justify-center items-center mt-[6rem] flex-wrap '>
       <h1 className='xl:text-[96px] lg:text-[75px] text-[45px] sm:text-[52px] md:text-[60px]  font-Clash font-[700] leading-[76px] lg:leading-[115.2px] text-white'>WE  </h1>
       <h1 className='xl:text-[96px] lg:text-[75px]  text-[45px] sm:text-[52px] md:text-[60px] font-Clash font-[700] lg:leading-[115.2px] leading-[76px] text-white'>ARE </h1>
      <div className=''>
      <img src={Image} alt="" className='lg:w-[224px] lg:h-[112px] w-[120px]' />
      </div>
       <h1 className='xl:text-[96px] lg:text-[75px]  text-[45px] sm:text-[52px] md:text-[60px] font-Clash font-[700] lg:leading-[115.2px] leading-[76px] text-white'>CREATIVE</h1>
       </div>

       <div className='flex lg:gap-6 gap-6 justify-center items-center lg:flex-row mt-6 flex-col'>
        <h1 className=' xl:text-[96px] lg:text-[75px]  text-[44px] sm:text-[52px] md:text-[60px]  font-Clash font-[400] leading-[64px] text-white'>AGENCIES</h1>
        <img src={video} alt="" />
        <p className='xl:text-[32px] lg:text-[30px] lg:block hidden font-Clash font-[500] leading-[46px] tracking-tight lg:w-[30%] w-full text-white'>Award-winning studio Based in San Francisco</p>
       </div>

       <p className='lg:text-[24px] text-[16px] mx-auto lg:mt-[4rem] mt-[2rem] lg:w-[70%] w-[90%] font-Clash font-[500px]  leading-[38px] text-center text-white'>Boltzshift Studio is a design & develop agency of the future with 120+ successful projects in their portfolio.</p>

       <div>


       <div className="w-[177px] inline-block justify-center items-center text-center mt-8 lg:inline-flex   border gap-8 bg-[#FAD007]  p-[16px 32px 16px 32px] border-solid border-[1px] gap-[8px]" onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
              <div className='flex gap-2 items-center'>
                <button className='text-center text-[#39393B] w-full inline-flex py-4 justify-center items-center font-Clash text-[14px] leading-[24px] font-[500]'>Book a Demo</button>
                {showArrow && <FaArrowRight className='text-[16px]' />}
              </div>
            </div>
       {/* <div   onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)} className="w-[177px] inline-block justify-center items-center text-center mt-8 bg-[#FAD007] h-[56px] p-[16px 32px 16px 32px] border-solid border-[1px] gap-[8px]">
      <button className='text-center text-[#39393B] w-full inline-flex py-4 justify-center items-center font-Clash text-[14px] leading-[24px] font-[500]'>
    Book a Demo
     </button>
      {showArrow && <FaArrowRight className='text-[16px]'/>}
     </div> */}


       </div>
       </div>
        </div>
        
    </div>
  )
}

export default Home