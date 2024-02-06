import { motion, AnimatePresence, useScroll } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          y: 300
        }}
        whileInView={{
          y: 50,
          rotate: -10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedSection;