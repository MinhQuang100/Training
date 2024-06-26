import React from 'react';
import groupImage from '../images/Group.png';

const ContactUs = () => {
  return (
    <div className="container mt-12 mx-auto flex flex-col p-6 md:flex-row justify-between py-10">
      <div className="md:mr-10 mb-6 md:mb-0 md:w-1/2">
        <img src={groupImage} alt="Group" className="rounded-lg" />
      </div>
      {/* Contact Form */}
      <div className="flex flex-col mb-12 text-[#564E4E] md:w-1/2 sm:gap-y-10 gap-y-6">
        <h1 className="text-left text-medium text-sm lg:text-4xl">Make your room feel homey</h1>
        <p className='text-left text-xs lg:text-lg'> We help people not only to make the room at home better, but we help people to feel a more homey and comfortable room, you don’t have to worry about the result because of these interiors are made by people who are professionals in their dields with an elegant and lucuriois style and with premium quality materials 
           <br/><br/> Contact us if you are interested in working with us </p>
        <div className="flex items-center lg:w-1/2 w-3/4 lg:h-10 h-9 border border-[#FADCD9] text-[#FEFCFB] rounded-full overflow-hidden relative">
          <input
            type="email" placeholder="Insert your email address" style={{ backgroundColor: '#FEFCFB' }}
            className="rounded-full py-2 px-4 w-full outline-[#FADCD9] text-[#F79489] placeholder:text-[#F79489] placeholder:text-[10px] placeholder:lg:text-sm" />
          <button className="scale-75 lg:scale-[0.88] absolute lg:right-1 right-0 top-0 h-full px-3 bg-[#FADCD9] rounded-full flex items-center">
            <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.999999L7 7L1 13" stroke="#F79489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
