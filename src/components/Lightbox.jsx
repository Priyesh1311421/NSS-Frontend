import React from 'react';

const Lightbox = ({ image, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10000" 
      onClick={onClose}
    >
      <div 
        className="relative bg-white p-4 rounded" 
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image} 
          alt="Lightbox" 
          className="max-w-screen-lg max-h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default Lightbox;
