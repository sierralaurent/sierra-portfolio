import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  index: number;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ index, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust as needed
  });

  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .5 * index,
      },
    },
  };

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