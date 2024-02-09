import React from 'react';

const Plans = () => {
  return (
    <div className='lg:p-20 lg:px-[6rem] px-[2rem] md:px-[4rem] mx-auto md:mt-[5rem] mt-[8rem]'>
      <div className='text-center'>
        <h1 className='lg:text-[32px] md:text-[26px] text-[22px] font-[500] font-Clash text-white'>OUR PROCESS</h1>
      </div>
      <div className='grid 2xl:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-[1rem]  mx-auto lg:mt-[6rem] mt-[3rem] 2xl:gap-[7rem]'>
        <div className='px-[2rem] mx-auto py-[3rem] flex-col flex bg-yellow-transparent  '>
          <h1 className='lg:text-[80px] text-[40px] leading-[86px] mb-4 font-[500] font-Clash text-[#FAD007]'>01</h1>
          <h2 className='lg:text-[32px] text-[20px] leading-[40px] mb-2 font-[600] font-Clash text-[#fff]'>Research & Plan</h2>
          <p className='lg:text-[16px] text-[14px]  leading-[26px] font-[500] font-Clash text-[#CCCCCC]'>Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.</p>
        </div>
       
        <div className='px-[2rem]  py-[3rem] flex-col flex bg-yellow-transparent '>
          <h1 className='lg:text-[80px] text-[40px] leading-[86px] mb-4 font-[500] font-Clash text-[#FAD007]'>02</h1>
          <h2 className='lg:text-[32px] text-[20px] leading-[40px] mb-2 font-[600] font-Clash text-[#fff]'>Mock Up</h2>
          <p className='lg:text-[16px] text-[14px]  leading-[26px] font-[500] font-Clash text-[#CCCCCC]'>Creating a mock-up is the step of the design process most people recognize — it’s the most visual part of the process In-depth sketching and brainstorming..</p>
        </div>

      <div className='flex  '>
      <div className='px-[2rem] py-[3rem] flex-col flex bg-yellow-transparent  lg:col-span-1 sm:row-start-2 lg:row-start-1'>
          <h1 className='lg:text-[80px] text-[40px] leading-[86px] mb-4 font-[500] font-Clash text-[#FAD007]'>03</h1>
          <h2 className='lg:text-[32px] text-[20px] leading-[40px] mb-2 font-[600] font-Clash text-[#fff]'>Build</h2>
          <p className='lg:text-[16px] text-[14px]  leading-[26px] font-[500] font-Clash text-[#CCCCCC]'>Implement the solution (often with the help of other professionals like programmers, printers, or manufacturers)Revise the solution as technical issues..</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Plans;
