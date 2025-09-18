import { useState, useEffect } from 'react';
import Image from 'next/image'

const PhotoWriteUp: React.FC<{ imagePath: string; writeUp: string }> = ({ imagePath, writeUp }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleClick = () => {
    setIsBlurred(!isBlurred);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.blur-image-container')) {
        setIsBlurred(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative blur-image-container">
      <Image
        src={imagePath}
        alt="BlurImage"
        width={400}
        height={400}
        className={`rounded-lg ${isBlurred ? 'filter blur-md' : ''}`}
        onClick={handleClick}
      />
      {isBlurred && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 rounded-lg">
          <p className="text-white text-center p-4">{writeUp}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoWriteUp;