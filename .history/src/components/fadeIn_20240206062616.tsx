import { motion, AnimatePresence, useScroll } from 'framer-motion';

export default function FadeIn() {

  const fadeInAnimationsVariants ={
    initial: {
      opcaity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return(
      <>
         <motion.div
         className={''}
         variants={fadeInAnimationsVariants}
         initial="initial"
         whileInView="animate"
         viewport={{
          once: true,
         }}
         >

         </motion.div>
      </>
  )
}