import React, { useState } from 'react';
import Lightbox from './Lightbox';
import image1 from '../assets/image1.jpg'
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image7 from '../assets/image7.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';

const images = [
  image1,image9,image10,image7,image12,image13
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className='p-5 md:p-16'>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 lg:gap-8 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8  ">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Gallery ${index}`} 
            onClick={() => openLightbox(image)} 
            className="w-auto h-auto object-cover cursor-pointer rounded-md"
          />
        ))}
        {selectedImage && <Lightbox image={selectedImage} onClose={closeLightbox} />}
      </div>
    </div>
  );
};

export default ImageGallery;
