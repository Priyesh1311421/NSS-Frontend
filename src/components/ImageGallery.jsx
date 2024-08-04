import React, { useState } from 'react';
import Lightbox from './Lightbox';
import image1 from '../assets/image1.jpg'

const images = [
  image1,
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
    <div className="flex flex-wrap gap-4">
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
  );
};

export default ImageGallery;
