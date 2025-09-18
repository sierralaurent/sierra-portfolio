import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedSectionProps {
  index: number
  children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ index, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        custom={index}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedSection;