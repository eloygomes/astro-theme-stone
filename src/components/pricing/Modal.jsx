// src/components/Modal.jsx
import React, { useState } from 'react';

const Modal = ({ images, currentIndex, onClose, onPrev, onNext, onSelect }) => {
  if (currentIndex === null) return null;

  const [isPortrait, setIsPortrait] = useState(false);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setIsPortrait(naturalHeight > naturalWidth);
  };

  return (
    <div
      className="barriga fixed inset-0 z-50 flex items-center justify-center bg-primary-950 bg-opacity-75"
      onClick={handleBackgroundClick}
    >
      <div
        className={`fixed ${
          isPortrait ? 'max-h-[90vh] w-11/12' : 'max-h-[90vh]  min-h-[90vh] w-11/12'
        } mx-auto  flex flex-col items-center rounded-lg bg-white p-2`}
      >
        {/* Close Button */}
        <button
          className={`absolute right-5 top-2 text-3xl font-bold ${
            isPortrait ? 'text-primary-950' : 'text-white'
          }  focus:outline-none`}
          onClick={onClose}
          aria-label="Fechar Modal"
        >
          &times;
        </button>

        {/* Image Display */}
        <img
          src={images[currentIndex]}
          alt={`Kitesurf ${currentIndex + 1}`}
          className={`${
            isPortrait ? ' max-h-[80vh] w-auto' : 'h-auto max-h-[80vh] w-full object-cover'
          } rounded-lg `}
          onLoad={handleImageLoad}
        />

        {/* Left Arrow */}
        <button
          className={`bg-black absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 text-3xl font-bold ${
            isPortrait ? 'text-primary-950' : 'text-white'
          } ${
            currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-opacity-75'
          } focus:outline-none`}
          onClick={onPrev}
          disabled={currentIndex === 0}
          aria-label="Imagem Anterior"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          className={`bg-black absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 text-3xl font-bold ${
            isPortrait ? 'text-primary-950' : 'text-white'
          } ${
            currentIndex === images.length - 1
              ? 'cursor-not-allowed opacity-50'
              : 'hover:bg-opacity-75'
          } focus:outline-none`}
          onClick={onNext}
          disabled={currentIndex === images.length - 1}
          aria-label="Próxima Imagem"
        >
          &#8594;
        </button>

        {/* Thumbnails */}
        <div className="mt-4 flex w-full space-x-2 overflow-x-auto px-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`h-20 w-20 cursor-pointer rounded border-2 object-cover ${
                index === currentIndex ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => onSelect(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
