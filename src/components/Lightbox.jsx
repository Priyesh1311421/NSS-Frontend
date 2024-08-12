import React from 'react';

const Lightbox = ({ image, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" 
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded p-8 max-w-full max-h-full" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-0 right-0.5 text-red-700 text-2xl  rounded-full p-2"
          onClick={onClose}
        >
          &times;
        </button>
        <img 
          src={image} 
          alt="Lightbox" 
          className="lg:max-w-[500px] lg:max-h-[500px] object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default Lightbox;
