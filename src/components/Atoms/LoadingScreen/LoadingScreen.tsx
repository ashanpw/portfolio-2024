import { motion } from 'framer-motion';
import { S } from './LoadingScreen.styles';

export const LoadingScreen = () => {
  return (
    <S.MotionContainer
      animate={{
        y: '-100dvh',
        transition: { duration: 0.7, delay: 2, type: 'tween', ease: 'easeInOut' },
      }}
    ></S.MotionContainer>
  );
};
