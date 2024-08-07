import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  width: 100dvw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1400px) {
    grid-template-columns: 1fr 4fr 1fr;
  }
  position: fixed;
  padding: 2rem;
  gap: 2rem;
  z-index: 99;
`;

const Name = styled(motion.p)`
  font-weight: 600;
  font-size: 1.4rem;
  margin: 0;
`;

const Contact = styled(motion.p)`
  justify-self: end;
  padding-right: 6rem;
  margin: 0;
`;

const Ul = styled(motion.ul)`
  list-style-type: none;
  @media (max-width: 1400px) {
    display: none;
  }
`;

const A = styled(motion.a)`
  text-decoration: none;
  cursor: pointer;
  color: #000;
`;

export const S = {
  Contact,
  Container,
  Name,
  Ul,
  A,
};
