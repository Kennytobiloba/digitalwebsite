import React, {  useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Map from "../../assets/Map.png"

const Contact = () => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <div className='lg:p-20 lg:px-[6rem] px-[2rem] md:px-[4rem] mx-auto mt-[5rem]'>
      <div className='text-center'>
        <h1 className='lg:text-[32px] text-[22px] md:text-[26px] font-Clash font-[700px] leading-[40px] text-white mb-4'>CONTACT US</h1>
        <h4 className='lg:text-[18px] m:text-[16px] text-[14px] font-Clash font-[500px] leading-[30px] text-[#ccc]'>Consign offers a number of pricing plans to help you find one that fits your business needs best</h4>
      </div>
      <div className='grid xl:grid-cols-2 gap-[4rem] mt-[8rem] grid-cols-1 '>
        <div className='flex-1 flex flex-col'>
          <div className='mt-[6rem]'>
            <div className='grid grid-cols-2 gap-[8rem]'>
              <input type="text" placeholder='Name' className='lg:text-[16px] text-[14px] font-Clash font-[500] leading-[24px] px-[16px] py-[24px] bg-black text-white border-b-2 border-yellow-400' />
              <input type="text" placeholder='Email' className='lg:text-[16px] text-[14px]  font-Clash font-[500] leading-[24px] px-[16px] py-[24px] bg-black text-white border-b-2 border-yellow-400' />
              <input type="text" placeholder='Phone no' className='lg:text-[16px] text-[14px]  font-Clash font-[500] leading-[24px] px-[16px] py-[24px] bg-black text-white border-b-2 border-yellow-400' />
              <input type="text" placeholder='Subject' className='lg:text-[16px] text-[14px] font-Clash font-[500] leading-[24px] px-[16px] py-[24px] bg-black text-white border-b-2 border-yellow-400' />
            </div>
            <textarea name="" placeholder='Message!' id="" cols="30" rows="10" className='text-[16px] font-Clash font-[500] leading-[24px] px-[16px] py-[24px] bg-black text-white border-b-2 border-yellow-400 col-span-2 w-full'></textarea>
          </div>
          <div className="  w-[133px] h-[56px] p-[16px 32px 16px 32px]   justify-center items-center text-center mt-8 flex     border gap-8 bg-[#FAD007]  p-[16px 32px 16px 32px] border-solid border-[1px] gap-[8px]" onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
              <div className='flex gap-2 items-center'>
                <button className='text-center text-[#39393B] w-full inline-flex py-4 justify-center items-center font-Clash text-[14px] leading-[24px] font-[500]'>Contact Us</button>
                {showArrow && <FaArrowRight className='text-[16px]' />}
              </div>
            </div>

        </div>
        <div>

        <div className='flex flex-1'>
            <img src={Map} alt="" className='w-full h-full' />
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
