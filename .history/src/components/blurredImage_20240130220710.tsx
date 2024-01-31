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
    <div className=" hover:scale-110 transition-transform ">
      {isBlurred ? (
        <div onClick={handleClick} className=" relative cursor-pointer"> 
          <Image
            src={`/CanMockup/${blurredImage}`}
            alt="Blurred Image"
            className=" filter blur-sm "
            width={400}
            height={400}
            priority={false}
          />
          <div className={'absolute top-36 left-24 px-4 '}>
             <p className="text-red-500 text-2xl font-bold mt-2">BUG WARNING</p>
             <p className="text-red-500 font-bold mt-2">Click If You Dare</p>
            </div>
        </div>
      ) : (
        <Image
          src={`/CanMockup/${actualImage}`}
          alt="Actual Image"
          className="py-3 layout-fill objectFit-cover h-auto "
          width={400}
          height={400}
          priority={false}
        />
      )}
    </div>
  );
};

export default BlurredImageWarning;