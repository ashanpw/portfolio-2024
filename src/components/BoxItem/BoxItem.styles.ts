import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";

const FlexBox = styled.div<{ useLargeSizing?: boolean; useDarkMode?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  ${(props) =>
    props.useLargeSizing ? "min-height: 32rem" : "min-height: 16rem"};

  ${(props) =>
    props.useDarkMode ? "border: 1px solid gray" : "border: 1px solid black"};

  margin: -0.1rem 0 0 -0.1rem;
  @media (min-width: 768px) {
    min-height: 32rem;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const BGImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: grayscale(90%) opacity(0.5);
`;

const TextItem = styled.div<{ showText: boolean }>`
  @media (max-width: 768px) {
    ${(props) => !props.showText && "display: none;"}
  }
`;

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H4 = styled.h4<{ useDarkMode?: boolean }>`
  ${(props) => props.useDarkMode && `color: ${ColorTokens.tertiary};`}
`;
export const S = {
  FlexBox,
  Ul,
  BGImage,
  H4,
  TextItem,
  HorizontalContainer,
};
