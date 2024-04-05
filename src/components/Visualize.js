import React, { useState } from 'react';
import img from '../images/Mask.png'
const categories = [
  { id: 1, name: 'Modern', description: 'Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines. '},
  { id: 2, name: 'Contemporary', description: 'Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.' },
  { id: 3, name: 'Minimalist', description: 'Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.' },
  { id: 4, name: 'Industrial', description: 'Modern design is a term in the design world that refers to a house with a clean design, simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.' },
];
const HowCanWeHelp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category click
  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null); // Close the category if already open
    } else {
      setSelectedCategory(categoryId); // Open the clicked category
    }
  };
  return (
    <div className="container mx-auto sm:px-2 px-6 py-12 gap-x-8 flex flex-col flex-col-reverse md:flex-row">
      <div className=" md:w-1/2 text-[#564E4E] md:mt-0 mt-10 md:ml-4 text-left">
        <div className='pb-10'>
          <h2 className="sm:text-2xl text-lg font-medium mb-6">Visualize your ideas with us</h2>
          <h4 className='sm:text-lg text-xs'>We are ready to help you build and also realize the room design that you dream of, with our experts and also the best category recommendations from us</h4>
        </div>
        {/* Categories */}
        <ul className="space-y-10 pb-10">
          {categories.map(category => (
            <li key={category.id} className="cursor-pointer">
              <button className="sm:text-lg text-xs w-full text-[#564E4E] focus:outline-none flex justify-between items-center"
              onClick={() => handleCategoryClick(category.id)}>
                <span>{category.name}</span>
                <span className='text-[#F79489] sm:scale-100 scale-[0.625]'>{selectedCategory === category.id 
                ? 
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1L16 1" stroke="#F79489"/>
                  </svg>
                  : 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8L16 8" stroke="#F79489"/>
                  <path d="M8 16L8 -5.96046e-07" stroke="#F79489"/>
                  </svg>
                }</span>
              </button>
              {/* Display description if the category is clicked */}
              {selectedCategory === category.id && (
                <p className="text-[#564E4E] font-light sm:text-lg text-xs">{category.description}</p>
              )}
            </li>
          ))}
        </ul>
        <button className='text-[#F79489] sm:text-lg text-xs'>See more catagory</button>
        
      </div>
      <div className='sm:border-2 sm:h-[300px] sm:border-[#FADCD9]'></div>
      <div className="md:w-1/2 mx-auto md:mr-4 mb-8 md:mb-0">
        <img src={img} alt="Mask" className="object-contain" />
      </div>
    </div>
  );
};

export default HowCanWeHelp;
