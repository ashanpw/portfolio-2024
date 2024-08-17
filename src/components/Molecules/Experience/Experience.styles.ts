import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { motion } from 'framer-motion';

const Grid = styled(motion.div)<{ $idx: number }>`
  padding: 5rem 0 5rem 2rem;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6rem 0;
    min-height: 12rem;
    padding: 5rem 0;
  }
`;

const Line = styled(motion.div)`
  border-bottom: 0.5px solid black;
  margin-bottom: 2.5rem 0;
`;

const TitleContainer = styled.div`
  @media (min-width: 768px) {
    padding-left: 5rem;
  }
`;
const SubSection = styled.div`
  padding: 0 0 3rem 0;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Title = styled.p`
  font-size: 1.4rem;
  padding: 0 0 2rem 0;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const Description = styled.p`
  line-height: 2.7rem;
  color: ${ColorTokens.secondary};
  @media (min-width: 768px) {
    padding: 0 5rem 0 0;
  }
`;

const Img = styled(motion.img)`
  pointer-events: none;
  width: 25rem;
  @media (min-width: 2000px) {
    width: 30rem;
  }

  aspect-ratio: 1 / 1;
`;

const ImgContainer = styled(motion.div)`
  pointer-events: none;
  overflow: hidden;
`;
export const S = {
  Description,
  Grid,
  Line,
  SubSection,
  Title,
  Img,
  ImgContainer,
  TitleContainer,
};
