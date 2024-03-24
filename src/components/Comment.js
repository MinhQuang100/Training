import React from 'react';
import user1 from '../images/user1.png'
import user3 from '../images/user2.png'
import user2 from '../images/user3.png'

const Comment = () => {
  return (
    <div className="p-16 mx-auto text-[#564E4E] bg-[linear-gradient(152deg,_#fff,_#FAF5F2_42%)]">
      <h2 className="text-3xl font-bold text-center mb-8">What they say about our services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-8">
        <div className="sm:p-4 rounded-lg flex flex-col gap-y-6 sm:gap-y-10">
          <h3 className='text-2xl text-left'>Best planning service</h3>
          <p className="text-left ">I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.</p>
          <div className="flex items-center mb-4">
            <img className="w-12 h-12 rounded-full mr-4" src={user1}  alt="User" />
            <div>
              <h3 className="text-lg text-left font-semibold">John Doe</h3>
              <p className="text-left text-sm">Project manager of cupalo</p>
            </div>
          </div>
        </div>
        <div className="sm:p-4 rounded-lg flex flex-col gap-y-6 sm:gap-y-10">
          <h3 className='text-2xl text-left'>Flexible and reliable</h3>
          <p className="text-left">Terrific work from beginning to end can work any angle from minimal help to complete project handling professional without a doubt!  Love!</p>
          <div className="flex items-center mb-4">
            <img className="w-12 h-12 rounded-full mr-4" src={user2} alt="User" />
            <div>
              <h3 className="text-lg text-left font-semibold">Woods Moniq</h3>
              <p className="text-left text-sm">Freelancer</p>
            </div>
          </div>
        </div>
        <div className="sm:p-4 rounded-lg flex flex-col gap-y-6 sm:gap-y-10">
          <h3 className='text-2xl text-left'>solution innovative</h3>
          <p className="text-left">I loved working with Darla shady rhymes for about 2 years and highly recommend anyone looking for an interior designer agency who brings creativity but designs something that fits YOU and your style.</p>
          <div className="flex items-center mb-4">
            <img className="w-12 h-12 rounded-full mr-4" src={user3} alt="User" />
            <div>
              <h3 className="text-lg text-left font-semibold">Denis Rara</h3>
              <p className="text-left text-sm">Architect at BPPLU</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
