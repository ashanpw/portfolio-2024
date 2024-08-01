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
  padding: 0rem 2rem;
  margin-bottom: 10rem;
  @media (min-width: 2000px) {
    padding: 8rem 5rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 15rem;
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

export const S = {
  Container,
  Circle,
  VideoContainer,
  Title,
};
