import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
import { motion } from "framer-motion";

const Container = styled.div`
  max-width: 100%;
  min-height: 160dvh;
  position: relative;
  pointer-events: none;
  margin-bottom: 20rem;
`;

const Title = styled(motion.h1)`
  font-size: 10rem;
  color: ${ColorTokens.title};
  top: 50%;
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
  font-size: clamp(6rem, 13vw, 20rem);
`;

const LogoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 12.5rem;
  gap: 20rem;
  border: 0.5px solid ${ColorTokens.tertiary};
  width: 100%;
  background: ${ColorTokens.background};
  z-index: -500;
  margin: auto;
  min-width: 150vw;
  margin-bottom: 10rem;
`;

const Img = styled.img`
  filter: grayscale(100%);
`;
export const S = {
  Title,
  Container,
  H1,
  LogoContainer,
  Img,
};
