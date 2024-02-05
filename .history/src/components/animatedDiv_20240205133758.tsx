import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  text: string;
  index: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, index }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          // if odd index card, slide from right instead of left
          x: index % 2 === 0 ? 50 : -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedSection;