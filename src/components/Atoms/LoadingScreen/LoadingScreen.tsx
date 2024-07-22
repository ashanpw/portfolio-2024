import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      animate={{
        y: '-100dvh',
        transition: { duration: 0.6, delay: 2.4, type: 'tween', ease: 'easeInOut' },
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
