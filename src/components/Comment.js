import React from 'react';
import user1 from '../images/user1.png'
import user3 from '../images/user2.png'
import user2 from '../images/user3.png'

const comments = [
  {
    title: 'Best planning service',
    text: 'I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and friendly and went above and beyond to help me configure my perfect walk in wardobe room.',
    user: 'John Doe',
    job: 'Project manager of cupalo',
    image: user1
  },
  {
    title: 'Flexible and reliable',
    text: 'Terrific work from beginning to end can work any angle from minimal help to complete project handling professional without a doubt!  Love!',
    user: 'Woods Moniq',
    job: 'Freelancer',
    image: user2
  },
  {
    title: 'solution innovative',
    text: 'I loved working with Darla shady rhymes for about 2 years and highly recommend anyone looking for an interior designer agency who brings creativity but designs something that fits YOU and your style.',
    user: 'Denis Rara',
    job: 'Architect at BPPLU',
    image: user3
  }
];

const Comment = () => {
  return (
    <div className="p-16 mx-auto text-[#564E4E] mt-16 bg-[linear-gradient(152deg,_#fff,_#FAF5F2_42%)]">
      <h2 className="text-3xl font-bold text-center mb-4">What they say about our services</h2>
      <div className="grid grid-cols-1 sm:p-16 md:grid-cols-3 mt-8 gap-8">
        {comments.map((comment, index) => (
          <div key={index} className="sm:p-4 rounded-lg flex flex-col gap-y-6 sm:gap-y-10">
            <h3 className='text-2xl text-left'>{comment.title}</h3>
            <p className="text-left grow">{comment.text}</p>
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 rounded-full mr-4" src={comment.image}  alt="User" />
              <div>
                <h3 className="text-lg text-left font-semibold">{comment.user}</h3>
                <p className="text-left text-sm">{comment.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
