import React from 'react';
import myImage from '../assets/image8.jpg'

const Home = () => {
  return (
    <section id="home" className=" flex flex-col  items-center ali bg-gray-300 py-4">
      <img src={myImage} alt="Home" className="w-[90%] md:w-auto mb-4" />
      <h1 className="text-2xl md:text-4xl font-bold">Welcome to NSS NSUT Cell</h1>
    </section>
  );
};

export default Home;
