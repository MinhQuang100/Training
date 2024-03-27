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
    <div className="container mx-auto px-2 py-12 gap-x-8 flex flex-col flex-col-reverse md:flex-row">
      <div className=" md:w-1/2 text-[#564E4E]  md:ml-4 text-left">
        <div className='pb-10'>
          <h2 className="text-2xl font-bold mb-6">Visualize your ideas with us</h2>
          <h4>We are ready to help you build and also realize the room design that you dream of, with our experts and also the best category recommendations from us</h4>
        </div>
        {/* Categories */}
        <ul className="space-y-10 pb-10">
          {categories.map(category => (
            <li key={category.id} className="cursor-pointer">
              <button className="text-lg w-full font-semibold text-[#564E4E] focus:outline-none flex justify-between items-center"
              onClick={() => handleCategoryClick(category.id)}>
                <span>{category.name}</span>
                <span className='text-[#F79489]'>{selectedCategory === category.id ? '-' : '+'}</span>
              </button>
              {/* Display description if the category is clicked */}
              {selectedCategory === category.id && (
                <p className="text-gray-600">{category.description}</p>
              )}
            </li>
          ))}
        </ul>
        <button className='text-[#F79489]'>See more catagory</button>
        
      </div>
      <div className='sm:border-2 sm:h-[300px] sm:border-[#FADCD9]'></div>
      <div className="md:w-1/2 mx-auto md:mr-0 mb-8 md:mb-0">
        <img src={img} alt="Mask" className="object-contain" />
      </div>
    </div>
  );
};

export default HowCanWeHelp;
