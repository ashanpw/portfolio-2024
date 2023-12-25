import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 100%;
  min-height: 160dvh;
  position: relative;
  pointer-events: none;
`;

const Title = styled(motion.h1)`
  background-color: ${ColorTokens.quartenary};
  font-size: 15rem;
  color: ${ColorTokens.title};
  top: 50%;
  left: -80%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  background-repeat: repeat;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  border: 0.5px solid ${ColorTokens.tertiary};
  position: absolute;
`;

const H1 = styled.h1`
  position: sticky;
  top: 0;
  padding-top: 30rem;
  margin-top: -30rem;
  text-align: center;
  z-index: -1;
  font-size: clamp(6rem, 13vw, 20rem);
`;

export const S = {
  Title,
  Container,
  H1,
};
