import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  'https://media.giphy.com/media/9ZYA33P9sWFa9UKkDL/giphy.gif', //S3 micro mini
  'https://media.giphy.com/media/YJbxvmbTBbYZuG98a1/giphy.gif', // dino at track
  'https://media.giphy.com/media/IKEj19tDI868Hioh6r/giphy.gif', // glitch tunezilla
  'https://media.giphy.com/media/3wFRNIHYWEhhaWLXJn/giphy.gif', // TZ Flash
  'https://media.giphy.com/media/OtspVtO0cTbKIIRdcF/giphy.gif', // wiggle tz logo
  'https://media.giphy.com/media/i7ExoAZAgtqNVntvun/giphy.gif', // dino run
  'https://media.giphy.com/media/qANVpJPOGsYvVhum5I/giphy.gif' // s3 glitch in
];


const TzSlideshow: React.FC = () => {
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
    const interval = setInterval(nextSlide, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={'flex flex-col items-center gap-4'}>
      <div className="flex flex-row items-center gap-8">
        <Image
          src={`${images[currentSlide]}`}
          alt={`Image ${currentSlide + 1}`}
          className={'py-3 layout-fill objectFit-cover h-auto hover:scale-110 transition-transform'}
          width={400}
          height={400}
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

export default TzSlideshow;