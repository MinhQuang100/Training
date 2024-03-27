import React, { useState } from 'react';
import logo from '../images/logo.png';
import banner from '../images/banner.png';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    
    <header className="relative h-[406px] md:h-[1080px]">
      {/* Banner */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner})`, filter: 'brightness(0.75)' }}></div>
      <div className="absolute inset-0 bottom-20 sm:bottom-60 flex items-center justify-center">
        <h1 className="text-white text-center "> 
          <span className='leading-[1rem] sm:text-5xl font-semibold text-lg'>Make Your Interior More <br/> Minimalistic & Modern <br/><br/></span>
          <span className="sm:text-base text-xs">Bringing interiors to life, understanding the person or people <br/> living in a home is far greater need in design.</span>
        </h1>
      </div>
        {/* Header*/}
        <div className="relative z-10 flex justify-between items-center p-6 bg-transparent text-white">
          <div className='sm:absolute'>
            <img src={logo} alt="Logo" className="h-6 w-auto md:h-8 md:w-auto " />
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex text-lg justify-center flex-grow gap-x-16">
            <button className="text-white hover:scale-150 relative flex gap-x-2" onClick={toggleMenu}>Furniture
              <span>
                <svg  width="9" height="25" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4.5 4L8 1" stroke="white"/></svg>
              </span>
            </button>
            <button className="text-white hover:scale-150">Shops</button>
            <button className="text-white hover:scale-150">About Us</button>
            <button className="text-white hover:scale-150">Contact</button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
          </button>
          {showMenu && (
            <div className={`md:hidden absolute top-16 right-0 h-full w-32 transition-all duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-4 bg-black rounded-lg">
                <button className="text-white block w-full py-2 justify-end flex gap-x-2">Furniture
                  <span>
                    <svg  width="9" height="25" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4.5 4L8 1" stroke="white"/></svg>
                  </span>
                </button>
                <button className="text-white block w-full py-2 text-right">Shops</button>
                <button className="text-white block w-full py-2 text-right">About Us</button>
                <button className="text-white block w-full py-2 text-right">Contact</button>
              </div>
            </div>
          )}
        </div>
    </header>
  );
};

export default Header;
