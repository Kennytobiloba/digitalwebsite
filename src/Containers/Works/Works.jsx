import React, {  useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Imageone from "../../assets/imageOnee.png"
import Imagetwo from "../../assets/image3.png"
import Imagethree from "../../assets/image4.png"
import Imagefour from "../../assets/image6.png"

const Works = () => {
    const [showArrow, setShowArrow] = useState(false);
  return (
    <div className='lg:p-20 lg:px-[6rem] px-[2rem] md:px-[4rem] lg:mt-[5rem] mt-[8rem] mx-auto ' id='Work'>
        <div className='mx-auto text-center'>
            <h1 className='lg:text-[32px] text-[22px] md:text-[26px] lg:mb-4 mb-2 font-[700px] font-Clash leading-[40px] text-white'>SELECTED WORK</h1>
            <p className='lg:text-[18px] text-[16px] font-[500px] font-Clash leading-[32px] text-[#CCCCCC]'>Our exceptional design services</p>
        </div>
        <div className='mx-auto grid sm:grid-cols-2 2xl:gap-4 gap-[3rem] mt-[6rem] grid-cols-1'>
            <div className=''>
                <div className='flex flex-1 flex-col 2xl:p-[4rem]'>
                    <img src={Imageone} alt="" className='w-full h-full' />
                    <div className='mt-4'>
                    <h4 className='lg:text-[32px] text-[20px] font-[500] font-Clash text-white leading-[40px]'>Fortknox Chat Application</h4>
                    <p className='text-[18px] mt-2 font-[500] font-Clash text-white leading-[32px]'>Branding & Design</p>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='flex flex-1 flex-col 2xl:p-[4rem]'>
                     <img src={Imagefour} alt="" className='w-full h-full' />
                   
                    <div className='mt-4'>
                    <h4 className='lg:text-[32px] text-[20px] font-[500] font-Clash text-white leading-[40px]'>Bsoston RealEstate App</h4>
                    <p className='text-[18px] mt-2 font-[500] font-Clash text-white leading-[32px]'>Branding & Ui</p>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='flex flex-1 flex-col 2xl:p-[4rem]'>
                    <img src={Imagethree} alt="" className='w-full h-full' />
                    <div className='mt-4'>
                    <h4 className='lg:text-[32px] text-[20px] font-[500] font-Clash text-white leading-[40px]'>Boltzshift - Portfolio</h4>
                    <p className='text-[18px] mt-2 font-[500] font-Clash text-white leading-[32px]'>Design & Development</p>
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='flex flex-1 flex-col 2xl:p-[4rem]'>
                    <img src={Imagetwo} alt="" className='w-full h-full' />
                    <div className='mt-4'>
                    <h4 className='lg:text-[32px] text-[20px]font-[500] font-Clash text-white leading-[40px]'>Croma - Agency</h4>
                    <p className='text-[18px] mt-2 font-[500] font-Clash text-white leading-[32px]'>Branding & Web</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="  w-[133px] h-[56px] p-[16px 32px 16px 32px]    justify-center items-center text-center mt-20 flex mx-auto    border gap-8 bg-[#FAD007]  p-[16px 32px 16px 32px] border-solid border-[1px] gap-[8px]" onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
              <div className='flex gap-2 items-center'>
                <button className='text-center text-[#39393B] w-full inline-flex py-4 justify-center items-center font-Clash text-[14px] leading-[24px] font-[500]'>Contact Us</button>
                {showArrow && <FaArrowRight className='text-[16px]' />}
              </div>
            </div>
       

    </div>
  )
}

export default Works