import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiZoomIn } from 'react-icons/fi'; // Assuming you're using react-icons library for icons

const PhotoWriteUp: React.FC<{ imagePath: string; writeUp: string }> = ({ imagePath, writeUp }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    setIsBlurred(!isBlurred);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
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
    <div className={`relative ${isFullScreen ? 'h-screen' : ''}`}>
      <div className="relative blur-image-container">
        <div className="absolute top-2 right-2 z-10">
          <button onClick={toggleFullScreen}>
            <FiZoomIn className="text-white text-xl" />
          </button>
        </div>
        <Image
          src={imagePath}
          alt="BlurImage"
          width={isFullScreen ? 1200 : 350}
          height={isFullScreen ? 800 : 350}
          className={`shadow-2xl rounded-lg ${isBlurred ? 'filter blur-md' : ''}`}
          onClick={handleClick}
        />
        {isBlurred && (
          <div className="absolute inset-0 flex justify-center items-center bg-Emerald bg-opacity-75 rounded-lg">
            <p className="text-white text-center p-4">{writeUp}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoWriteUp;
