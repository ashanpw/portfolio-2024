import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      animate={{
        y: '-100dvh',
        transition: { duration: 0.7, delay: 2.3, type: 'tween', ease: 'easeInOut' },
      }}
      style={{
        position: 'fixed',
        zIndex: 98,
        width: '100dvw',
        height: '100dvh',
        background: '#000',
        overflow: 'hidden',
      }}
    ></motion.div>
  );
};
