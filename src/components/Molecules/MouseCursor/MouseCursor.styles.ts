import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { motion } from 'framer-motion';

const Div = styled(motion.div)`
  position: fixed;
  width: 5px;
  height: 5px;
  margin: -10px;
  background-color: ${ColorTokens.title};
  border-radius: 100%;
  z-index: 98;
  pointerevents: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const S = {
  Div,
};
