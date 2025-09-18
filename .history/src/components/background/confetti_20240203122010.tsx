import React from 'react';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

const ConfettiPiece = tw(motion.div)`w-2 h-2 bg-yellow-500 rounded-full absolute`;

const Confetti: React.FC = () => {
  const confettiVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: '100vh', opacity: 1 },
    transition: { duration: 1, ease: 'easeOut' },
  };

  return (
    <ConfettiPiece
      initial="initial"
      animate="animate"
      variants={confettiVariants}
      style={{ left: `${Math.random() * 100}vw` }}
    />
  );
};

export default Confetti;