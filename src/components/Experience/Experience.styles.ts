import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
import { motion } from "framer-motion";

const Grid = styled(motion.div)<{ idx: number }>`
  ${(props) => props.idx > 0 && "padding-top: 2.5rem;"}
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  gap: 2.5rem 0;
`;

const Line = styled.div`
  border-bottom: 0.5px solid ${ColorTokens.quartenary};
  grid-column: 1/-1;
  margin-bottom: 2.5rem 0;
`;

const ContentSection = styled.div`
  padding: 0 2.5rem;
`;

const SubSection = styled.div`
  color: ${ColorTokens.secondary};
  margin: 3rem 0 0 0;
`;

const Description = styled.p`
  align-self: center;
  padding: 2.5rem 1rem 0 0;
  line-height: 3rem;
  color: ${ColorTokens.tertiary};
  @media (min-width: 768px) {
    padding: 0 5rem 0 0;
  }
`;

const Title = styled.p`
  font-size: 1.6rem;
`;

const Img = styled(motion.img)`
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
`;

export const S = {
  Description,
  Grid,
  Line,
  ContentSection,
  SubSection,
  Title,
  Img,
};
