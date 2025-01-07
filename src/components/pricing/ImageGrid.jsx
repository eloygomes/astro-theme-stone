// src/components/ImageGrid.jsx
import React, { useState } from 'react';
import Modal from './Modal.jsx'; // Make sure the path is correct

const ImageGrid = () => {
  // Sample image URLs. Replace these with your actual image sources.
  const images = [
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/861bb99e-75af-4aea-849c-8629b6aa4818_rw_1920.jpg?h=a90b9e0b011aaaf93cb515d3a3720f23',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/8b05a56e-6b40-4c1a-8ebf-13b2e5ba2653_rw_1920.jpg?h=93519d48f736739c9856ff76eb1bb2d3',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/3db086d1-91bf-4358-887d-ed2d5ced5ec4_rw_1920.jpg?h=de867f95e2c929fb1dca2032aef75493',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/89a10194-35c8-49c1-b89f-acd11c91a42e_rw_1920.jpg?h=49703742955705c5b702742a887526a4',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/6a9c92ff-3d51-4c91-b47a-97976fd77e70_rw_1920.jpg?h=23d1710cf9d9480c7126c011d442c0c4',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/bcec7a9a-54ad-40d4-af01-c5bb615a302a_rw_1920.jpg?h=c98df379161a9910567b6c3b1149ede9',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/1e2e3f44-644b-4f78-91a2-4d1e551a6cb7_rw_1920.jpg?h=a3aa19d8b71cc13a03eb591b3a28f1f8',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/2f453293-ff5d-406a-b5e8-d9f93bc76b36_rw_1920.jpg?h=3667ac03da492ec244b9c73e5503db67',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/20dbb070-afad-46f9-bfda-177102e049e5_rw_1920.jpg?h=8caf072186ccb5c58318e9be09169066',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/9244e820-ff33-4aab-b656-558f9381b605_rw_1920.jpg?h=739591d42920449fc30da41e59c740a4',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/b3121306-fd05-49a8-8240-a07bb1e1e3c3_rw_1920.jpg?h=7b2468e5ee2c40765f792f63dbad8203',
    'https://cdn.myportfolio.com/086e240a-e030-4264-838f-e1c74189097b/da0cc49e-2f84-441f-8973-225bc3a47a2f_rw_1920.jpg?h=dad5d1e36711943f92ebcf42b473ecff',
  ];

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(null);

  // Handlers
  const openModal = (index) => {
    setCurrentImageIdx(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIdx(null);
  };

  const showPrev = () => {
    setCurrentImageIdx((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const showNext = () => {
    setCurrentImageIdx((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  const selectImage = (index) => {
    setCurrentImageIdx(index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Portfolio</h2>
      <p></p>
      <div className="grid grid-cols-1 p-20  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden "
            onClick={() => {
              openModal(index);
              //   console.log('clicked');
              //   console.log(index);
              //   console.log(src);
            }}
          >
            <img
              src={src}
              alt={`Kitesurf ${index + 1}`}
              className="h-full w-full transform object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <Modal
          images={images}
          currentIndex={currentImageIdx}
          onClose={closeModal}
          onPrev={showPrev}
          onNext={showNext}
          onSelect={selectImage}
        />
      )}
    </div>
  );
};

export default ImageGrid;
