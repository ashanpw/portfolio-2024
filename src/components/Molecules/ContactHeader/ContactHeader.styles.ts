import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  height: 160dvh;
  position: relative;
  pointer-events: none;
  padding-bottom: 20rem;
  z-index: -1;
`;

const Tunnel = styled(motion.div)`
  position: sticky;
  top: calc(50% - 28rem / 2);
  margin: auto;
  border-radius: 50% 50% 0 0;

  background-color: black;
  font-size: clamp(6rem, 13vw, 20rem);
  width: 16rem;
  height: 23rem;
  @media (min-width: 2000px) {
    width: 20rem;
    height: 28rem;
  }
`;

export const S = {
  Container,
  Tunnel,
};
