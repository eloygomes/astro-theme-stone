// // import React, { useRef, useState } from "react";
// import { useRef, useState } from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// // import "./styles.css";

// const Slider = ({ images }) => {
//   const slideRef = useRef(null);
//   const [current, setCurrent] = useState(0);

//   // Funções para avançar e retroceder os slides
//   const back = () => {
//     slideRef.current.goBack();
//   };

//   const next = () => {
//     slideRef.current.goNext();
//   };

//   // Atualiza o índice atual quando o slide muda
//   const onChange = (prev, next) => {
//     setCurrent(next);
//   };

//   return (
//     <div className="slider-container">
//       <Slide ref={slideRef} autoplay={true} duration={10000} onChange={onChange}>
//         {images.map((image, index) => (
//           <div key={index} className="each-slide">
//             <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
//           </div>
//         ))}
//       </Slide>
//       <div className="controls">
//         <button onClick={back} className="control-button">
//           &#8592; {/* Seta para esquerda */}
//         </button>
//         <button onClick={next} className="control-button">
//           &#8594; {/* Seta para direita */}
//         </button>
//       </div>
 
//     </div>
//   );
// };

// export default Slider;

import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slides */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex justify-center items-center bg-gray-200">
            <img src={slide.image} alt={slide.alt} className="w-full h-96 object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800"
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
