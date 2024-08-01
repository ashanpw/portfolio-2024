import { motion } from 'framer-motion';
import styled from 'styled-components';

const MotionContainer = styled(motion.div)`
  position: fixed;
  z-index: 98;
  width: 100dvw;
  height: 100dvh;
  background: #000;
  overflow: hidden;
`;

export const S = {
  MotionContainer,
};
