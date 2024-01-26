import React, { useState, useEffect } from 'react';

const images = [
  'CanMockup01.png',
  'CanMockup02.png',
  'CanMockup03.png',
];

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img
        src={`/CanMockup/${images[currentSlide]}`}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-64 object-cover"
      />
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white">
        Next
      </button>
    </div>
  );
};

export default Slideshow;