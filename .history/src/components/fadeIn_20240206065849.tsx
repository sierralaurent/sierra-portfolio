import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useRef, useState } from 'react';

interface FadeInProps {
  index: number;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ index, children }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.75 * index,
      },
    },
  };

  useInView({
    ref: ref as React.RefObject<Element>, // Casting the ref to the appropriate type
    threshold: 0.5, // Adjust as needed
    triggerOnce: true,
    onEnter: () => setInView(true),
    onLeave: () => setInView(false),
  });

  return (
    <div ref={ref}>
      <AnimatePresence>
        {inView && (
          <motion.div
            className={''}
            variants={fadeInAnimationsVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            custom={index}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FadeIn;