import { useState } from 'react';
import Image from 'next/image';

const PhotoWriteUp: React.FC<{ imagePath: string; writeUp: string }> = ({ imagePath, writeUp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block blur-image-container max-w-md">
      {/* Photo */}
      <Image
        src={imagePath}
        alt="Photo"
        width={600}   // base size for optimization
        height={600}
        className="shadow-2xl rounded-lg h-auto w-full max-w-md"
      />

      {/* Info button (only shows when write-up is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-sm hover:bg-black/80 transition"
        >
          ?
        </button>
      )}

      {/* Overlay with write-up */}
      {isOpen && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-emerald-800 bg-opacity-90 rounded-lg p-4">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 bg-black/60 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/80 transition"
          >
            ✕
          </button>

          {/* Write-up text */}
          <p className="text-white text-center">{writeUp}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoWriteUp;
