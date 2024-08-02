import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';

const Container = styled.div`
  min-height: 280dvh;
  position: relative;
  margin-bottom: 20rem;
  max-width: 100%;
`;

const Title = styled(motion.div)`
  position: sticky;
  top: 45dvh;
  margin: auto;
  text-align: center;
  z-index: -1;
  color: ${ColorTokens.title};
  @media (min-width: 768px) {
    top: 38dvh;
  }
  @media (min-width: 1200px) {
    top: 32dvh;
  }
  @media (min-width: 2500px) {
    top: 36dvh;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 200dvh;
  max-width: 100vw;
  overflow: hidden;
  place-items: center;
  gap: 2rem;
  padding-top: 150rem;
  padding-bottom: 25rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4rem;
  }
`;

const MotionImg = styled(motion.img)`
  max-width: 18rem;
  max-height: 20rem;
  @media (min-width: 768px) {
    max-width: 20rem;
    max-height: 30rem;
  }
  @media (min-width: 1600px) {
    max-width: 26rem;
  }
  @media (min-width: 2000px) {
    max-width: 35rem;
  }
`;
export const S = {
  Container,
  Title,
  Grid,
  MotionImg,
};
