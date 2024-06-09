import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
const Container = styled.div`
  color: #fff;
  max-width: 100dvw;
`;
const Circle = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: red;
  background-color: #green;
`;

const Grid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  margin-bottom: 10rem;
`;
const MotionSvg = styled(motion.svg)`
  margin-left: 25%;
  color: #eaeaea;
  opacity: 85%;
`;

const Title = styled(motion.h1)`
  position: relative;
  text-align: center;
  margin-bottom: 35dvh;
`;

export const S = {
  Container,
  Circle,
  Grid,
  MotionSvg,
  Title,
};
