import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  overflow: hidden;
  max-width: 100vw;
`;

const ContainerItem = styled.div`
  margin: 0 2rem;
  @media (min-width: 768px) {
    margin: 0 0 18rem 40%;
    padding: 0 5rem 5rem 5rem;
  }
  @media (min-width: 2000px) {
    margin: 0 0 18rem 50%;
    padding: 0 5rem 5rem 5rem;
  }
`;

const TextItem = styled(motion.div)<{ $idx: number }>`
  margin: 0 0 15rem 0rem;

  @media (min-width: 768px) {
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: start;
    gap: 10rem;
    ${(props) => props.$idx % 3 === 1 && 'order: -1;'}
  }
`;
const Grid = styled(motion.div)`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    padding: 0 0rem 0 2.5rem;
    gap: 7.5rem;
    align-items: center;
  }
`;

const Line = styled(motion.div)`
  border-bottom: 0.5px solid black;
  padding: 2.5rem 0;
  margin-bottom: 10rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    margin-left: 33.33%;
  }
`;
const Date = styled.p`
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.p`
  font-size: 1.35rem;
`;
const Description = styled(motion.p)`
  color: ${ColorTokens.secondary};
  line-height: 2.7rem;
  @media (min-width: 768px) {
  }
`;
const Img = styled.img`
  max-height: 50rem;
  width: calc(100% - 4rem);
  margin: 2rem;
`;

export const S = {
  Container,
  ContainerItem,
  TextItem,
  Grid,
  Line,
  Date,
  Description,
  Img,
  Title,
};
