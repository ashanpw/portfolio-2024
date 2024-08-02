import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 100%;
  min-height: 180dvh;
  position: relative;
  pointer-events: none;
  margin-bottom: 20rem;
`;

const Title = styled(motion.h1)`
  position: sticky;
  top: calc(50% - 10vw / 2);
  margin: auto;
  text-align: center;
`;

const LogoContainerItem = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  border: 0.5px solid ${ColorTokens.tertiary};
  width: 100%;
  background: ${ColorTokens.background};
  z-index: -500;
  margin: auto;
  min-width: 250vw;
  margin-bottom: 10rem;
  padding: 2rem 12.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem 12.5rem;
    gap: 20rem;
  }
  @media (min-width: 2000px) {
    padding: 3rem 12.5rem;
    gap: 20rem;
  }
`;

const LogoContainer = styled.div`
  overflow: hidden;
  padding: 30rem 0;
`;

const Img = styled.img`
  filter: grayscale(100%);
`;
export const S = {
  Title,
  Container,
  LogoContainer,
  LogoContainerItem,
  Img,
};
