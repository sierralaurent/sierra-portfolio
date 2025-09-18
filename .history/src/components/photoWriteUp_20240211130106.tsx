import { useState } from 'react';

const PhotoWriteUp: React.FC<{ imagePath: string; writeUp: string }> = ({ imagePath, writeUp }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleClick = () => {
    setIsBlurred(!isBlurred);
  };

  return (
    <div className="relative">
      <img
        src={imagePath}
        alt="BlurImage"
        className={`w-64 h-64 rounded-lg ${isBlurred ? 'filter blur-md' : ''}`}
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