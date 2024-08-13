import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';

const Container = styled.div`
  color: ${ColorTokens.quartenary};
  max-width: 100dvw;
  background-color: black;
  padding-top: 60rem;
`;

const VideoContainer = styled.div`
  border: 1px solid ${ColorTokens.secondary};
  margin: auto;
  padding: 3rem 2rem;
  margin-bottom: 10rem;
  @media (min-width: 768px) {
    padding: 5rem 4rem;
  }
  @media (min-width: 2000px) {
    padding: 8rem 4rem;
  }
`;

const Title = styled(motion.h1)`
  color: ${ColorTokens.quartenary};
  text-align: center;
  margin-bottom: 15rem;
  position: sticky;
  top: calc(50% - 28rem / 2);
  margin: auto;
`;

const Circle = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-color: black;
  border: 1px solid ${ColorTokens.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
`;

const StickyContainer = styled.div`
  min-height: 70dvh;
  position: relative;
  margin-bottom: 20rem;
  max-width: 100%;
`;
export const S = {
  Container,
  Circle,
  VideoContainer,
  StickyContainer,
  Title,
};
