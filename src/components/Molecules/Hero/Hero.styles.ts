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
  font-size: 90dvw;
  line-height: 100dvh;
  position: absolute;
  pointerevents: none;
  color: ${ColorTokens.title};
  @media (min-width: 1000px) {
    font-size: 100dvh;
  }
`;

const AboutText = styled(motion.p)`
  position: absolute;
  bottom: 6dvh;
  left: 2rem;
  max-width: 32rem;
  @media (min-width: 768px) {
    left: 50dvw;
    text-align: center;
    transform: translate(-50%, 0);
  }
`;

const Image = styled(motion.img)`
  width: 20rem;
  z-index: -99;
  pointer-events: none;
  aspect-ratio: 1 / 1;

  @media (min-width: 2000px) {
    width: 25rem;
  }
`;

export const S = {
  Container,
  AboutText,
  Image,
  Title,
};
