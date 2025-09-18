import { motion } from 'framer-motion';

interface FadeInProps {
  index: number;
}

const FadeIn: React.FC<FadeInProps> = ({ index }) => {
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
    ></motion.div>
  );
};

export default FadeIn;