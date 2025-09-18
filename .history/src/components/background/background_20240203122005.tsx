import React from 'react';
import Confetti from './confetti';

const Background: React.FC = () => {
  const numberOfConfetti = 50;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {[...Array(numberOfConfetti)].map((_, index) => (
        <Confetti key={index} />
      ))}
    </div>
  );
};

export default Background;