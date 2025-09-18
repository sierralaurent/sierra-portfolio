import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  'CanMockup01.png',
  'CanMockup02.png',
  'CanMockup03.png',
];

const CanSlideshow: React.FC = () => {
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
    const interval = setInterval(nextSlide, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={'flex flex-col items-center gap-4'}>
      <div className="flex flex-row items-center gap-8">
        <Image
          src={`/CanMockup/${images[currentSlide]}`}
          alt={`Image ${currentSlide + 1}`}
          className={'py-3 layout-fill objectFit-cover height-auto width-auto'}
          width={300}
          height={300}
          priority={false}
          unoptimized={false}
          placeholder = 'empty'
        />
      </div>
      <div className={'flex flex-row gap-8'}>
      <div className="flex items-center gap-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-8 w-8 rounded-full ${index === currentSlide ? 'bg-Sage' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default CanSlideshow;