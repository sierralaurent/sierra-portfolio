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
    <div className={'flex flex-row'}>
        <button onClick={prevSlide} className={'flex'}>
        Prev
      </button>
      <img
        src={`/CanMockup/${images[currentSlide]}`}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-64 object-cover"
      />
      <button onClick={nextSlide} className={'flex'}>
        Next
      </button>
    </div>
  );
};

export default Slideshow;