import React, { useState, useEffect } from "react";

const images = [
  "/images/ad-banner.png",
  "/images/ad-banner.png",
  "/images/ad-banner.png",
];

const AdCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full sm:max-w-[740px] max-w-[350px] mx-auto mt-20 px-8 sm:px-8 relative grid grid-cols-1 ">
      
      <button
        onClick={prevSlide}
        className="absolute top-1/3 -left-2 sm:-left-10 -translate-y-1/2  grid grid-cols-1
          bg-white bg-opacity-80 w-8 h-8 sm:w-14 sm:h-14 
          flex items-center justify-center rounded-full shadow sm:text-5xl z-10"
      >
        ‹
      </button>

     
      <button
        onClick={nextSlide}
        className="absolute top-1/3 -right-2 sm:-right-10 -translate-y-1/2 
          bg-white bg-opacity-80 w-8 h-8 sm:w-14 sm:h-14 
          flex items-center justify-center rounded-full shadow sm:text-5xl z-10"
      >
        ›
      </button>

      
      <div className="w-full overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-[680px] h-20 sm:h-auto object-cover rounded-xl"
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
      {images.map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full ${
            current === i ? "bg-white w-4" : "bg-gray-400 w-2"
          } transition-all duration-300`}
        />
      ))}
    </div>
            </div>
          ))}
        </div>
      </div>

      
      <p className="text-base sm:text-xl text-black mt-3 font-semibold text-sm">
        New offer announced for you!
      </p>
      
    </div>

  );
};

export default AdCarousel;
