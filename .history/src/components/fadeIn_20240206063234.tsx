import { motion, AnimatePresence, useScroll } from 'framer-motion';

export default function FadeIn() {

  const fadeInAnimationsVariants ={
    initial: {
      opcaity: 0,
      y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5 * index,
      }
    }),
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
         custom={index}
         >

         </motion.div>
      </>
  )
}