import styled from "styled-components";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Title = styled(motion.p)`
  font-family: bona nova;
  font-size: 40rem;
  line-height: 40rem;
  margin-right: clamp(0rem, 13vw, 30rem);
  color: ${ColorTokens.title};
  @media (min-width: 768px) {
    font-size: 60rem;
    line-height: 60rem;
  }
  @media (min-width: 992px) {
    font-size: 80rem;
    line-height: 80rem;
  }
  @media (min-width: 1200px) {
    font-size: 100rem;
    line-height: 100rem;
  }
`;
export const S = {
  Container,
  Title,
};
