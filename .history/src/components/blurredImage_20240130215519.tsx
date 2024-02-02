import React, { useState } from 'react';
import Image from 'next/image';

interface BlurredImageWarningProps {
  blurredImage: string;
  actualImage: string;
}

const BlurredImageWarning: React.FC<BlurredImageWarningProps> = ({ blurredImage, actualImage }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  const handleClick = () => {
    setIsBlurred(false);
  };

  return (
    <div className="static">
      {isBlurred ? (
        <div onClick={handleClick} className="cursor-pointer">
          <Image
            src={`/CanMockup/${blurredImage}`}
            alt="Blurred Image"
            className="filter blur-sm hover:scale-110 transition-transform"
            width={400}
            height={400}
            priority={false}
          />
          <p className="text-red-500 font-bold mt-2 absolute left-50 top-50 ">Click to reveal image</p>
        </div>
      ) : (
        <Image
          src={`/CanMockup/${actualImage}`}
          alt="Actual Image"
          className="py-3 layout-fill objectFit-cover h-auto hover:scale-110 transition-transform"
          width={400}
          height={400}
          priority={false}
        />
      )}
    </div>
  );
};

export default BlurredImageWarning;