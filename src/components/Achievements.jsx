import React from 'react';
import Carousel from './Carousel';

const Achievements = () => {
  return (
    <section id="achievements" className=" p-8">
      <div className='flex justify-center'>
       <h2 className="text-4xl text-gray-800  md:text-6xl self-center font-bold mb-4">Our Achievements</h2>
      </div>
      <Carousel />
    </section>
  );
};

export default Achievements;
