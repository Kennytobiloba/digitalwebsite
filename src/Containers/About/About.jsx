import React from 'react'
import background from '../../assets/background.png'
const About = () => {
  return (
    <div className='w-full' id='About'>
        <div className='lg:p-20 lg:px-[6rem] px-[2rem] md:px-[4rem] lg:mt-[8rem] md:mt-[12rem] mt-[6rem]'>
            <div className='grid md:grid-cols-2 justify-between grid-cols-1 gap-[4rem] pb-[4rem] md:pb-1 md:gap-1 lg:gap-[2rem] xl:gap-1'>
                <div className='flex flex-col md:gap-[4rem] gap-8'>
                    <h1 className='lg:text-[32px] md:text-[26px] text-[20px] text-white tracking-wider font-Clash font-[700] leading-[40px]'>ABOUT THE BOLTZSHIFT AGENCY</h1>
                    <i className="fa-regular fa-star text-[#FAD007] text-[68px] shadow-2xl"></i>
                </div>

                <div className='flex flex-col lg:gap-[4rem] mb-12 lg:mb-2 gap-8'>
                    <p className=' text-[#CCCCCC] font-Clash lg:text-[24px]   text-[16px] leading-[32px] tracking-[-0.32px] fonnt-[500]'>Boltzshift is a distinguished design and development agency based in the United Kingdom, known for our commitment to crafting exceptional digital experiences.</p>
                    <p className=' text-[#CCCCCC] font-Clash  lg:text-[24px] text-[16px] leading-[32px] tracking-[-0.32px] fonnt-[500]'>Since  2018 Boltzshift has been reshaping the web & mobile apps with top-notch design and the power of no code.</p>
                </div>
                

            </div>

        </div>
           <div className='flex flex-1'>
                <img src={background} alt="" className='w-full h-full' />
            </div>
            <div className=' lg:p-10 lg:px-[6rem] px-[2rem] md:px-[4rem] grid md:grid-cols-2 lg:mt-6 mt-10 grid-cols-1'>
                <div className='flex justify-center md:items-center items-start md:w-[90%] 2xl:w-[40%] w-full xl:w-[70%] '>
                    <h1 className='2xl:text-[32px] xl:text-[30px] lg:text-[28px] md:text-[26px] text-[20px] font-Clash font-[700] lg:leading-[50px] tracking-[1px] text-white'>GET AQUANTED WITH OUR KEY FACTS </h1>
                </div>

                <div className=' grid grid-cols-3 lg:mt-2 mt-[2rem] gap-[2rem] lg:gap-1 '>
                    <div className='flex flex-col flex-1 md:gap-[2rem]'>
                        <h1 className='2xl:text-[48px] xl:text-[40px] lg:text-[32px] text-[26px] md:text-[28px] font-Clash font-[600] leading-[48px] tracking-[1px] text-white'>8.2k</h1>
                        <p className='2xl:text-[24px] lg:text-[18px] text-[14px] md:text-[16px] font-Clash font-[500] leading-[24px] tracking-[1px] text-[#CCCCCC]'>Trusted Users</p>
                    </div>
                    <div className='flex flex-col flex-1 md:gap-[2rem]'>
                        <h1 className='2xl:text-[48px] xl:text-[40px] lg:text-[32px] text-[26px] md:text-[28px] font-Clash font-[600] leading-[48px] tracking-[1px] text-white'>120+</h1>
                        <p className=' 2xl:text-[24px] lg:text-[18px] text-[14px] md:text-[16px]  font-Clash font-[500] leading-[24px] tracking-[1px] text-[#CCCCCC]'>Trusted Users</p>
                    </div>

                    <div className='flex flex-col flex-1 md:gap-[2rem]'>
                        <h1 className='2xl:text-[48px] xl:text-[40px] lg:text-[32px] text-[26px] md:text-[28px] font-Clash font-[600] leading-[48px] tracking-[1px] text-white'>97%</h1>
                        <p className=' 2xl:text-[24px] lg:text-[18px] text-[14px] md:text-[16px]  font-Clash font-[500] leading-[24px] tracking-[1px] text-[#CCCCCC]'>Clients Satisfaction</p>
                    </div>
                    {/* <div className='flex flex-col gap-2  lg:p-2 2xl:p-8 p-2  justify-between lg:items-center'>
                        <h1 className='2xl:text-[48px] xl:text-[40px] lg:text-[32px] text-[28px] font-Clash font-[600] leading-[48px] tracking-[1px] text-white'>97%</h1>
                        <p className='2xl:text-[24px] text-center lg:text-[18px] text-[16px] font-Clash font-[500] leading-[24px] tracking-[1px] text-[#CCCCCC]'></p>
                    </div> */}

                </div>

            </div>

    </div>
  )
}

export default About