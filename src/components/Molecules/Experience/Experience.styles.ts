import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { motion } from 'framer-motion';

const Grid = styled(motion.div)<{ $idx: number }>`
  ${(props) => props.$idx > 0 && 'padding-top: 5rem;'}
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: top;
  gap: 4rem 0;
  @media (min-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem 0;
  }
`;

const Line = styled(motion.div)`
  border-bottom: 0.5px solid black;
  grid-column: 1/-1;
  margin-bottom: 2.5rem 0;
`;

const ContentSection = styled.div`
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`;

const SubSection = styled.div``;

const Description = styled.p`
  line-height: 2.7rem;
  margin-top: -0.5rem;
  color: ${ColorTokens.secondary};
  @media (min-width: 768px) {
    padding: 0 1rem 0 0;
    min-height: 12rem;
  }
`;

const TitleImg = styled.img`
  margin-bottom: 1.8rem;
  max-height: 20px;
  max-width: 52px;
  filter: grayscale(100%);
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
`;

const Img = styled(motion.img)`
  pointer-events: none;
  max-width: 30rem;
`;

const ImgContainer = styled(motion.div)`
  pointer-events: none;
  overflow: hidden;
`;

/*
  transform: translate(-50%, -50%);
  z-index: 99;
  position: fixed;
  width: 40rem;
  
  pointer-events: none;
*/

export const S = {
  Description,
  Grid,
  Line,
  ContentSection,
  SubSection,
  TitleImg,
  Img,
  ImgContainer,
};
