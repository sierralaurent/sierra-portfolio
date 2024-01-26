import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={'flex flex-col items-center gap-4'}>
      <div className="flex flex-row items-center gap-8">
        <Image
          src={`/CanMockup/${images[currentSlide]}`}
          alt={`Image ${currentSlide + 1}`}
          className={'py-3'}
          width={250}
          height={250}
        />
      </div>
      <div className={'flex flex-row gap-8'}>
      <div className="flex items-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full ${index === currentSlide ? 'bg-Sage' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Slideshow;