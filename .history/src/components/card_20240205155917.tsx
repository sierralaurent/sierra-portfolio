import { motion, AnimatePresence, useScroll } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1 // Animation duration
          }
        }}
        viewport={{ once: false }}
      >
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedSection;