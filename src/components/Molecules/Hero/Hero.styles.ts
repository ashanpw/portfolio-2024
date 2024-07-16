import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  min-height: 100dvh;
  position: relative;
  overflow: hidden;
`;
const Title = styled(motion.p)`
  font-family: bona nova;
  font-size: 100dvh;
  line-height: 100dvh;
  z-index: 2;
  color: ${ColorTokens.title};
`;

export const S = {
  Container,
  Title,
};
