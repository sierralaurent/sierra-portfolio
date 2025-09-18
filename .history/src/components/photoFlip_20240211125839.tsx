import { useState } from 'react';
import { motion } from 'framer-motion';

const PhotoFlip: React.FC<{ imagePath: string; writeUp: string }> = ({ imagePath, writeUp }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-64 h-64 relative" onClick={handleClick}>
      <motion.div
        className={`w-full h-full absolute bg-cover rounded-lg ${
          isFlipped ? 'backface-visible' : ''
        }`}
        style={{ backgroundImage: `url(${imagePath})` }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full h-full absolute bg-white rounded-lg p-4"
          style={{ backfaceVisibility: 'hidden' }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-800">{writeUp}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhotoFlip;