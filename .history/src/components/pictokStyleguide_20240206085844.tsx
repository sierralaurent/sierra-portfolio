import React, { useState } from 'react';
import Image from 'next/image';

interface Slide {
  label: string;
  image: string;
}

const slides: Slide[] = [
  { label: 'Overview', image: 'styleguide01.png' },
  { label: 'Colours', image: 'styleguide02.png' },
  { label: 'Fonts & Buttons', image: 'styleguide03.png' },
];

const PictokStyleguide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={'flex flex-col items-center gap-8'}>
      <div className="flex flex-row items-center gap-8">
        <Image
          src={`/images/PicTok/${slides[currentSlide].image}`}
          alt={`Image ${currentSlide + 1}`}
          className={'py-3 shadow-2xl layout-fill objectFit-cover h-auto hover:scale-110 transition-transform'}
          width={300}
          height={500}
          priority={false}
        />
      </div>
      <div className={'flex flex-row gap-8'}>
        <div className="flex items-center gap-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={` ${index === currentSlide ? 'bg-Sage' : 'bg-gray-300'} bg-Sage text-white p-3 text-base rounded-lg hover:scale-110 transition-transform`}
              onClick={() => goToSlide(index)}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictokStyleguide;