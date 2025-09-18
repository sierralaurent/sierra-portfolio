import { motion } from "framer-motion";

interface ButtonProps {
  backgroundColor: string;
  children: string;
}

export default function Button({ backgroundColor, children }: ButtonProps) {
  return (
    <motion.div
      className={`flex flex-row text-white p-3 text-2xl rounded-lg cursor-pointer bg-${backgroundColor}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}