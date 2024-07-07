import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";

const Container = styled.div`
  min-height: 300dvh;
  position: relative;
  margin-bottom: 20rem;
  max-width: 100%;
`;

const Title = styled(motion.div)`
  position: sticky;
  top: 0;
  padding-top: 35rem;
  margin-top: -35rem;
  text-align: center;
  z-index: -1;
  color: ${ColorTokens.title};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 100dvh;
  max-width: 100vw;
  overflow: hidden;
  place-items: center;
  gap: 2.5rem 0;
  padding-top: 150rem;
  padding-bottom: 25rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const MotionImg = styled(motion.img)`
  max-width: 20rem;
  max-height: 20rem;
  @media (min-width: 768px) {
    max-width: 22rem;
    max-height: 30rem;
  }
  @media (min-width: 1600px) {
    max-width: 28rem;
  }
  @media (min-width: 2000px) {
    max-width: 35rem;
  }
`;
export const S = {
  Container,
  Title,
  Grid,
  MotionImg,
};
