import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
import { motion } from "framer-motion";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4rem 0;
`;
const Label = styled.p`
  padding-left: 1.5rem;
  @media (min-width: 768px) {
    padding-left: 4rem;
  }
`;
const Value = styled.p`
  color: ${ColorTokens.quartenary};
  justify-self: center;
  padding-left: 2.5rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const Line = styled(motion.div)`
  border-bottom: 0.5px solid black;
`;
export const S = {
  Label,
  Line,
  Value,
  Grid,
};
