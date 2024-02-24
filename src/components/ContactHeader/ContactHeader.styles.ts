import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  height: 160dvh;
  position: relative;
  pointer-events: none;
  margin-bottom: 20rem;
  z-index: -1;
`;

const Tunnel = styled(motion.div)`
  position: sticky;
  top: 50%;
  margin: auto;
  border-radius: 50% 50% 0 0;
  width: 20rem;
  height: 27.5rem;
  background-color: black;
  font-size: clamp(6rem, 13vw, 20rem);
`;

export const S = {
  Container,
  Tunnel,
};
