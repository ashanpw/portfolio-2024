import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
const Container = styled.div`
  color: #fff;
  background-color: #000;
  min-height: 70dvh;
  position: relative;
  padding-top: 7.5rem;
`;
const Circle = styled(motion.div)`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  color: #fff;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  margin-bottom: 10rem;
`;
const MotionSvg = styled(motion.svg)``;
export const S = {
  Container,
  Circle,
  Grid,
  MotionSvg,
};
