import React, { useState, useEffect } from "react";

const images = [
  "/images/ad-banner.png",
  "/images/ad-banner.png",
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
    <section className="px-4 sm:px-8 w-full lg:w-[80%] mx-auto">
      <div className=" flex items-center gap-2 sm:gap-3 mt-20">
        <button
          onClick={prevSlide}
          className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow bg-white bg-opacity-80 text-xl sm:text-3xl"
        >
          ‹
        </button>

        <div className="w-full overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-20 sm:h-auto object-cover rounded-xl"
                />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        current === i ? "w-4 bg-white" : "w-2 bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow bg-white bg-opacity-80 text-xl sm:text-3xl"
        >
          ›
        </button>
      </div>
      <p className="text-base sm:text-xl text-black mt-3 font-semibold ml-10 sm:ml-14">
        New offer announced for you!
      </p>
    </section>
  );
};

export default AdCarousel;
