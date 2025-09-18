import { motion } from 'framer-motion';

interface FadeInProps {
  index: number;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ index, children }) => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 * index,
      },
    },
  };

  return (
    <motion.div
      className={''}
      variants={fadeInAnimationsVariants}
      initial="initial"
      animate="animate"
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;