import React from 'react'
import Logo from "../../assets/FooterLogo.png"

const Footer = () => {
  return (
    <div className='lg:p-20 lg:px-[6rem] px-[2rem] md:px-[4rem] mx-auto mt-[10rem]'>
        <div className='mx-auto  bg-white px-10 py-20'>
          <div className='grid xl:grid-cols-4 justify-between grid-cols-1 sm:grid-cols-2 lg::gap-4 gap-[4rem]'>
            <div>
              <img src={Logo} alt="" />
            </div>

            <div>
              <div className='flex flex-col space-y-4'>
                <p className='text-[16px] font-Clash font-[500] text-black'>About Us</p>
                <p className='text-[16px] font-Clash font-[500] text-black'> Features</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>Services</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>Blogs</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>Contact</p>
              </div>
            </div>
            
     


            <div>
              <div className='flex flex-col space-y-4'>
                <p className='text-[16px] font-Clash font-[500] text-black'>Integrations</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>Careers</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>Privacy Policy</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>Terms & Condition</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>Cookie Policy</p>
              </div>
            </div>
          






            <div>
              <div className='flex flex-col space-y-4'>
                <p className='text-[16px] font-Clash font-[500] text-black'>  +1 (0) 911 18 27 16</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>INFO@BOLTZSHIFT.COM</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>Based in San Fransisco</p>
                <p className='text-[16px] font-Clash font-[500] text-black'>United Kingdom</p>
                
              </div>
            </div>
            <div className='flex gap-4 '>
              <h4 className='text-[16px] font-Clash font-[500] text-black'>Follow Us</h4>
             <div> <i className="fa-brands fa-x-twitter text-[18px]"></i></div>
             <div> <i className="fa-brands fa-instagram text-[18px]"></i></div>
             <div><i className="fa-brands fa-youtube text-[18px]"></i></div>
             <div><i className="fa-brands fa-facebook text-[18px]"></i></div>
            </div>

          </div>


          <div className='text-center mt-20'>
          <h1 className='text-[16px] font-Clash font-[500] text-black'>copyright @ 2023 All Rights Reserved</h1>
        </div>

            
        </div>
       
    </div>
  )
}

export default Footer