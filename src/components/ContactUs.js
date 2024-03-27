import React from 'react';
import groupImage from '../images/Group.png';

const ContactUs = () => {
  return (
    <div className="container mx-auto flex flex-col p-6 md:flex-row items-center justify-between py-10">
      <div className="md:mr-10 mb-6 md:mb-0 lg:w-1/2">
        <img src={groupImage} alt="Group" className="rounded-lg" />
      </div>
      {/* Contact Form */}
      <div className="flex flex-col text-[#564E4E] md:w-1/2 gap-y-10">
        <h1 className="text-left mb-4 text-4xl">Make your room feel homey</h1>
        <p className='text-left text-lg'> We help people not only to make the room at home better, but we help people to feel a more homey and comfortable room, you don’t have to worry about the result because of these interiors are made by people who are professionals in their dields with an elegant and lucuriois style and with premium quality materials 
           <br/><br/> Contact us if you are interested in working with us </p>
        <div className="flex items-center lg:w-1/2 border rounded-full overflow-hidden relative">
          <input
            type="email" placeholder="Insert your email address"
            className="rounded-full py-2 px-4 w-full border-[#FADCD9] focus:outline-none focus:border-blue-500"/>
          <button className="p-4 scale-75 absolute right-1 top-0 h-full px-4 bg-[#FADCD9] rounded-full flex items-center">
            <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.999999L7 7L1 13" stroke="#F79489" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
