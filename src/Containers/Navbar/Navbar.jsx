import React, {  useState } from 'react';
import Logo from "../../assets/Logo.png";
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  

  const Menu = () => (
    <>
      <p><a href="#Home" className='font-Clash text-[16px] leading-[24px] font-medium text-[#07070A]'> Home</a></p>
      <p><a href="#About" className='font-Clash text-[16px] leading-[24px] font-medium text-[#07070A]'> About</a></p>
      <p><a href="#Work" className='font-Clash text-[16px] leading-[24px] font-medium text-[#07070A]'>Works</a></p>
      <p><a href="#Blog" className='font-Clash text-[16px] leading-[24px] font-medium text-[#07070A]'>Blog</a></p>
      <p><a href="#Contact" className='font-Clash text-[16px] leading-[24px] font-medium text-[#07070A]'>Contact</a></p>
    </>
  );


  return (
    <div className=''>
      <div className="lg:fixed sticky top-0 left-0 right-0 z-20  ">
        <div className="w-full ">
          <div className=' px-[2.5rem]  lg:px-[6rem] py-[2.4rem] md:px-[4rem] items-center flex justify-between mx-auto'>
            <div>
              <img src={Logo} alt="" />
            </div>

            {/* Desktop section */}
            <div className='bg-white lg:flex hidden space-x-10 p-[1.5rem] justify-center items-center'>
              <Menu />
            </div>
            {/* Desktop section */}

            {/* Button section starts */}
            <div className="p-4 md:p-6 lg:inline-flex hidden items-center justify-center border gap-8 bg-[#FAD007]" onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
              <div className='flex gap-2 items-center'>
                <button className='leading-[24px] text-[14px] font-Clash text-[#39393B] font-medium '>Get in touch</button>
                {showArrow && <FaArrowRight className='text-[16px]' />}
              </div>
            </div>
            {/* Button section ends */}

            <div className='lg:hidden inline-flex items-center'>
              {showToggle ? <FaTimes className="text-[#FAD007] text-[27px]" onClick={() => setShowToggle(false)} /> :
                <FaBars className="text-[#FAD007] text-[27px]" onClick={() => setShowToggle(true)} />
              }
            </div>
            
          </div>

          {/* Mobile view section starts */}

          {showToggle && <div className='lg:hidden flex relative h-100vh'>
              <div className='  bg-white w-full grid h-full place-items-center py-20'>
                <Menu />
              </div>
            </div>}
            {/* Mobile view section ends */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
