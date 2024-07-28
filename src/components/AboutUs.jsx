// src/components/AboutUs.js
import React from 'react';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image7 from '../assets/image7.jpg';
import image1 from '../assets/image1.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';

const AboutUs = () => {
  // Images array with details
  const images = [
    {
      src: image9,
      title: 'Event 1',
      description: 'Description for event 1.'
    },
    {
      src: image10,
      title: 'Event 2',
      description: 'Description for event 2.'
    },
    {
      src: image7,
      title: 'Event 3',
      description: 'Description for event 3.'
    },
    {
      src: image1,
      title: 'Event 4',
      description: 'Description for event 4.'
    },
    {
      src: image12,
      title: 'Event 5',
      description: 'Description for event 5.'
    },
    {
      src: image13,
      title: 'Event 6',
      description: 'Description for event 6.'
    },
  ];

  return (
    <section id="about-us" className="min-h-screen bg-gray-300 p-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-800 mb-4">Our aim is to [add your aim here].</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <img src={image.src} alt={`About Us ${index + 1}`} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{image.title}</h3>
            <p className="text-gray-600">{image.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
