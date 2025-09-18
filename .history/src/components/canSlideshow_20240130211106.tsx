import React, { useState } from 'react';
import Image from 'next/image';

interface Slide {
  label: string;
  image: string;
}

const slides: Slide[] = [
  { label: 'BEETLE WING Hazy IPA', image: 'canlabel01.png' },
  { label: 'SILENT DRAGON Dark Lager', image: 'canlabel02.png' },
  { label: 'EASTERN LUNA Pilsner', image: 'canlabel03.png' },
];

const CanSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={'flex flex-col items-center gap-4'}>
      <div className="flex flex-row items-center gap-8">
        <Image
          src={`/CanMockup/${slides[currentSlide].image}`}
          alt={`Image ${currentSlide + 1}`}
          className={'py-3 layout-fill objectFit-cover h-auto hover:scale-110 transition-transform'}
          width={500}
          height={500}
          priority={false}
        />
      </div>
      <div className={'flex flex-row gap-8'}>
        <div className="flex items-center gap-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={` ${index === currentSlide ? 'bg-Sage' : 'bg-gray-300'}`}
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

export default CanSlideshow;