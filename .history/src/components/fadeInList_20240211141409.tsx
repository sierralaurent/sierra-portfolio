import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeInList = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      transition: { delay: i * 0.2 } // Adjust delay as needed
    }));
  }, [controls]);

  return (
    <div className={'max-w-4xl flex flex-col gap-3 p-20 items-center'}>
      <h1 className={'text-2xl font-bold pb-3'}>I am a...</h1>
      <motion.li className={'text-lg'} custom={0} animate={controls}>
        UI/UX Designer
      </motion.li>
      <motion.li className={'text-lg'} custom={1} animate={controls}>
        Front End Web Developer
      </motion.li>
      <motion.li className={'text-lg'} custom={2} animate={controls}>
        Brand Designer
      </motion.li>
      <h1 className={'text-xl font-semibold pb-3 pt-3'}>And more...</h1>
    </div>
  );
};

export default FadeInList;