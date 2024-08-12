import React, { useState, useEffect } from 'react';
import myImage from '../assets/cover1.jpg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an image loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="flex flex-col items-center bg-gray-300 pb-4">
      {isLoading ? (
        <div className="flex flex-col items-center">
          <div className="w-[90%] md:w-auto h-64 bg-gray-300 animate-pulse rounded-lg mb-4">
            {/* Skeleton for image */}
          </div>
          <div className="w-[90%] md:w-auto h-8 bg-gray-300 animate-pulse rounded-md">
            {/* Skeleton for heading */}
          </div>
        </div>
      ) : (
        <>
          <img src={myImage} alt="Home" className="w-[90%] md:w-auto mb-4 rounded-lg" />
          <h1 className="text-2xl md:text-4xl font-bold">Welcome to NSS NSUT Cell</h1>
        </>
      )}
    </section>
  );
};

export default Home;
