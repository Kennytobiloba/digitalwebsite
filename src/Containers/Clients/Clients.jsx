import React from 'react';
import VectorOne from "../../assets/Sisilaone.png";
import VectorTwo from "../../assets/sisilatwo.png";
import VectorThree from "../../assets/Sisila.png";
import VectorFour from "../../assets/Group.png";
import VectorFive from "../../assets/Grouptwo.png";
import VectorSix from "../../assets/Groupone.png";
import VectorEight from "../../assets/convertkit.png";

const Clients = () => {
  return (
    <div className='lg:p-20 lg:px-[6rem] px-[2rem] mt-[8rem] mx-auto text-center'>
      <div className='text-center mx-auto'>
        <p className='text-[18px] text-white font-[500] font-Clash'>Proudly serving some of the top global companies</p>
      </div>
      <div className='flex lg:gap-20 md:gap-12 2xl:justify-between gap-8 flex-wrap mt-20'>
        <img src={VectorThree} alt="" className='max-w-[100px] h-auto mb-4' />
        <img src={VectorFour} alt="" className='max-w-[100px] h-auto mb-4' />
        <img src={VectorSix} alt="" className='max-w-[100px] h-auto mb-4' />
        <img src={VectorOne} alt="" className='max-w-[100px] h-auto mb-4' />
        <img src={VectorFive} alt="" className='max-w-[100px] h-auto mb-4' />
        <img src={VectorTwo} alt="" className='max-w-[100px] h-auto mb-4' />
        <img src={VectorEight} alt="" className='max-w-[100px] h-auto mb-4' />
      </div>
    </div>
  );
};

export default Clients;
