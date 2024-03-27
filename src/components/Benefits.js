import React from 'react';
import icon1 from '../images/icon.png'
import icon2 from '../images/icon (1).png'
import icon3 from '../images/icon (2).png'
import icon4 from '../images/icon (3).png'

const benefits = [
  {
    id: 1,
    name: 'Professionalism',
    description: 'We deliver the final work with great professional way.',
    image: icon1,
  },
  {
    id: 2,
    name: 'Smooth workflow',
    description: 'We provide the most easy smoth workflow of interior design.',
    image: icon2,
  },
  {
    id: 3,
    name: 'Trusted Platform',
    description: 'People trust us since we openend the company',
    image: icon3,
  },
  {
    id: 4,
    name: 'Qualified employee',
    description: 'Our employees are the best of the field from the city',
    image: icon4,
  },
];

const Benefits = () => {
  return (
    <div className="container mx-auto my-6 py-12 p-6">
      <h2 className="text-2xl md:text-4xl text-left text-[#564E4E] font-medium mb-6">Why Choosing Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(benefit => (
          <div key={benefit.id} className="text-left bg-white rounded-lg  hover:drop-shadow-2xl overflow-hidden hover:border transition duration-300 hover:border-glow hover:border-[#FADCD9]">
            <img src={benefit.image} alt={benefit.name} className="w-16 h-16 object-cover ml-4 mt-4" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{benefit.name}</h3>
              <p className="text-gray-600 mb-2">{benefit.description}</p>
              <button className='text-[#F79489]'>more info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
