import React, { useState, useEffect } from 'react';
import Lightbox from './Lightbox';

import image31 from '../assets/image31.jpg'
import image3 from '../assets/image3.jpg';
import image1 from '../assets/image2.jpg'
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';
import image16 from '../assets/image16.jpg';
import image17 from '../assets/image17.jpg';
import image19 from '../assets/image19.jpg';
import image20 from '../assets/image20.jpg';
import image21 from '../assets/image21.jpg';
import image23 from '../assets/image23.jpg';
import image24 from '../assets/image24.jpg';
import image25 from '../assets/image25.jpg';
import image26 from '../assets/image26.jpg';
import image28 from '../assets/image28.jpg';
import image29 from '../assets/image29.jpg';
import image35 from '../assets/image35.jpg';
import image32 from '../assets/image32.jpg';
import image36 from '../assets/image36.jpg';
import image38 from '../assets/image38.jpg';
import image39 from '../assets/image39.jpg';
import image40 from '../assets/image40.jpg';
import image41 from '../assets/image41.jpg';
import image42 from '../assets/image42.jpg';

const images = [
  image3, image31, image9, image10, image14, image1, image15, image16, image19, image17, image21,
  image23, image24, image25, image26, image28, image29, image32, image35, image36, image38, image39, image40, image41,
  image42, image20
];

const ImageGallery = () => {
  const [loadedImages, setLoadedImages] = useState(Array(images.length).fill(false));
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setLoadedImages(Array(images.length).fill(true));
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className='p-5 md:p-16'>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-5 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
        {images.map((image, index) => (
          <div key={index} className="relative">
            {!loadedImages[index] && (
              <div className="relative">
                <div className="bg-gray-300 animate-pulse rounded-md w-full h-64 mb-4" />
                {/* <div className="bg-gray-200 animate-pulse rounded-md h-4 w-3/4 mb-2" /> */}
              </div>
            )}
            <img
              src={image}
              alt={`Gallery ${index}`}
              onClick={() => openLightbox(image)}
              className={`w-auto h-auto object-cover cursor-pointer rounded-md transform transition duration-500 hover:scale-105 ${loadedImages[index] ? 'block' : 'hidden'}`}
            />
          </div>
        ))}
        {selectedImage && <Lightbox image={selectedImage} onClose={closeLightbox} />}
      </div>
    </div>
  );
};

export default ImageGallery;
