import React from 'react';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="py-8 mt-16 bg-gradient-to-l from-black to-[#4B4B4B] text-white h-full">
      <div className="container sm:pt-20 mx-auto flex flex-col gap-8 px-6 lg:flex-row justify-between ">
        
        <img src={logo} alt="Logo" className="sm:h-10 h-8 max-w-28 w-auto " />

        <div className="flex flex-col sm:text-lg text-xs text-left gap-4">
                <div className='sm:text-2xl text-sm text-[#FADCD9] font-medium'>Features</div>
                <div>Our Features</div>
                <div>Pricing</div>
                <div>Affiliate Program</div>
                <div>Press Kit</div>
        </div>
        <div className="flex flex-col sm:text-lg text-xs text-left gap-4">
                <div className='sm:text-2xl text-sm text-[#FADCD9] font-medium'>Support</div>
                <div>Account</div>
                <div>Help</div>
                <div>Contact Us</div>
        </div>
        <div className="flex flex-col sm:text-lg text-xs text-left gap-4">
                <div className='sm:text-2xl text-sm text-[#FADCD9] font-medium'>Legal</div>
                <div>Privacy Policy</div>
                <div>Terms of Use</div>
        </div>
        <div className="flex flex-col sm:text-lg text-xs text-left gap-4">
                <div className='sm:text-2xl text-sm text-[#FADCD9] font-medium'>Social Media</div>
                <div>Twitter</div>
                <div>Product Hunt</div>
                <div>Instagram</div>
                <div>Github</div>
        </div>
      </div>
      <div className="text-center sm:text-2xl text-sm pt-60 mt-4">Copyright 2021 ©shady rhymes</div>
    </footer>
  );
};

export default Footer;
