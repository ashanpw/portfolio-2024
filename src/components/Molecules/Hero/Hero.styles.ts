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
  margin: auto;
  z-index: 2;
  color: ${ColorTokens.title};
`;

const Circle = styled(motion.div)<{ color: string }>`
  position: absolute;
  top: 50%;
  width: 200dvw;
  height: 40dvw;
  background: ${(props) => props.color};
  border-radius: 100%;
`;
export const S = {
  Container,
  Circle,
  Title,
};
