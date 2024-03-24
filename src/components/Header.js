import React, { useState } from 'react';
import logo from '../images/logo.png';
import banner from '../images/banner.png';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);}
  return (
    
    <header className="relative h-[1080px]">
      {/* Banner */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
      </div>
      <div className="absolute inset-0 bottom-80 flex items-center justify-center">
        <h1 className="text-white text-center "> 
          <span className='leading-[4rem] sm:text-5xl text-lg'>Make Your Interior More <br/> Minimalistic & Modern <br/><br/></span>
          <span className="sm:text-base text-xs">Bringing interiors to life, understanding the person or people <br/> living in a home is far greater need in design.</span>
        </h1>
      </div>
        {/* Header*/}
        <div className="relative z-10 flex justify-between items-center py-4 px-6 bg-transparent text-white">
          <div>
            <img src={logo} alt="Logo" className="h-10 w-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex justify-center flex-grow gap-x-16">
            <button className="text-white hover:text-gray-300 hover:scale-150">Furniture</button>
            <button className="text-white hover:text-gray-300">Shops</button>
            <button className="text-white hover:text-gray-300">About Us</button>
            <button className="text-white hover:text-gray-300">Contact</button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
          </button>
          {showMenu && (
            <div className={`md:hidden absolute top-16 right-0 h-full w-32 transition-all duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-4 ">
                <button className="text-white block w-full text-center py-2 hover:text-gray-300 hover:scale-150">Furniture</button>
                <button className="text-white block w-full text-center py-2 hover:text-gray-300 hover:scale-150">Shops</button>
                <button className="text-white block w-full text-center py-2 hover:text-gray-300 hover:scale-150">About Us</button>
                <button className="text-white block w-full text-center py-2 hover:text-gray-300 hover:scale-150">Contact</button>
              </div>
            </div>
          )}
        </div>
    </header>
  );
};

export default Header;
