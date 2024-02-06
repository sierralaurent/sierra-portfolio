import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

interface FadeInProps {
  index: number;
  children: React.ReactNode;
}

const AnimatedDiv: React.FC<FadeInProps> = ({ index, children }) => {


  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.25 * index,
      },
    },
  };

  return (

      <AnimatePresence>

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

      </AnimatePresence>

  );
};

export default AnimatedDiv;