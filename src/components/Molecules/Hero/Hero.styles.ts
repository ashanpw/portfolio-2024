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
  font-size: 60dvh;
  line-height: 40rem;
  z-index: 2;
  position: absolute;
  color: ${ColorTokens.title};
`;

const Circle = styled(motion.div)<{ color: string }>`
  position: absolute;
  top: 50%;
  width: 200dvw;
  height: 70dvw;
  background: ${(props) => props.color};
  border-radius: 100%;
`;
export const S = {
  Container,
  Circle,
  Title,
};
