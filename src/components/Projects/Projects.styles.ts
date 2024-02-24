import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  padding: 0 10rem 0 2.5rem;
`;
const Grid = styled(motion.div)`
  align-items: center;
  padding: 0 10rem 0 2.5rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
  }
`;

const Line = styled.div`
  border-bottom: 0.5px solid ${ColorTokens.quartenary};
  margin: 5rem 0;
`;

const Date = styled.p`
  color: ${ColorTokens.secondary};
  margin-top: 1.5rem;
`;

const Description = styled.p`
  color: ${ColorTokens.secondary};
  line-height: 3rem;
  @media (min-width: 768px) {
    max-width: 95%;
  }
`;
const Img = styled.img`
  max-height: 50rem;
  width: calc(100% - 4rem);
  margin: 2rem;
`;

export const S = {
  Container,
  Grid,
  Line,
  Date,
  Description,
  Img,
};
