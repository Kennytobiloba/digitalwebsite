import React from 'react'
import IconOne from "../../assets/icon-01.png"
import IconTwo from "../../assets/icon-02.png"
import IconThree from "../../assets/icon-03.png"
import IconFour from "../../assets/icon-04.png"

const Services = () => {
  return (
    <div className='lg:p-20 lg:px-[6rem] px-[2rem] mt-[8rem]' id='Blog'>
        <div className='grid 2xl:grid-cols-2 grid-cols-1 2xl:gap-1 gap-[2rem]'>
            <div>
                <h1 className='font-[700] text-[#fff] lg:mb-4 mb-2 font-Clash lg:text-[32px] text-[22px] md:text-[26px] leading-[40px] tracking-tighter'>KNOW OUR SERVICES</h1>
                <p  className='font-[500] text-[#CCCCCC] font-Clash lg:text-[18px] text-[16px] leading-[32px] tracking-tighter' >Our exceptional design services</p>
            </div>

            <div className='grid sm:grid-cols-2  gap-[2rem] grid-cols-1 '>

                {/* box one  */}
                <div className=' bg-[#FAD007] 2xl:px-8 2xl:py-10 px-6 py-8 lg:px-[2rem] '>
                    <img src={IconOne} alt="" className='lg:mb-[5rem] mb-6' />
                    <h2 className='font-Clash font-[700] mb-4 text-black lg:text-[32px] text-[20px] md:text-[26px] leading-[40px] '>
                     Design</h2>
                    <p className='text-[#39393B] md:text-[16px] font-Clash font-[500]  lg:text-[18px] text-[14px] lg:leading-[32px] leading-[22px]  ' > I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
                </div>

                  {/* box one ends  */}

                    {/* box two starts  */}
                    <div className=' bg-[#39393B] l 2xl:px-8 2xl:py-10 px-6 py-8'>
                    <img src={IconTwo} alt="" className='lg:mb-[5rem] mb-6' />
                   
                    <h2 className='font-Clash text-white mb-4 font-[700] lg:text-[32px] text-[20px] leading-[40px] md:text-[26px] '>service-card</h2>
                    <p  className='font-[500] md:text-[16px] text-[#CCCCCC] font-Clash  lg:text-[18px] text-[14px] leading-[32px] tracking-tighter'>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
                </div>
                    {/* box two ends */}

                    <div className=' bg-[#39393B]  2xl:px-8 2xl:py-10 px-6 py-8'>
                    <img src={IconThree} alt="" className='lg:mb-[5rem] mb-6' />
                   
                    <h2 className='font-Clash text-white mb-4 font-[700] lg:text-[32px] md:text-[26px] text-[20px] leading-[40px] '>
                    Development</h2>
                    <p  className='font-[500] md:text-[16px] text-[#CCCCCC] font-Clash  lg:text-[18px] text-[14px] leading-[32px] tracking-tighter'>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
                  </div>

                
                <div className=' bg-[#39393B]  2xl:px-8 2xl:py-10 px-6 py-8 '>
                    <img src={IconFour} alt="" className='lg:mb-[5rem] mb-6' />
                   
                    <h2 className='font-Clash text-white mb-4 font-[700] md:text-[26px] lg:text-[32px] text-[20px] leading-[40px] '>
                    Art Direction</h2>
                    <p  className='font-[500] text-[#CCCCCC] font-Clash   2xl:text-[18px] md:text-[16px] text-[14px] leading-[32px] tracking-tighter'>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
                </div>

                



                    {/* box two starts  */}
            </div>

        </div>

    </div>
  )
}

export default Services
