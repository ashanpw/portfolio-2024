import { motion } from 'framer-motion';
import styled from 'styled-components';

const FlexBox = styled(motion.div)<{
  $useDarkMode?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem;

  ${(props) => (props.$useDarkMode ? 'border: 1px solid gray' : 'border: 1px solid black')};

  margin: -0.1rem 0 0 -0.1rem;
  min-height: 25rem;
  @media (min-width: 768px) {
    min-height: 30rem;
    padding: 3rem 4rem;
  }
  @media (min-width: 1600px) {
    min-height: 37.5rem;
    padding: 3rem 4rem;
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
  filter: opacity(0.5);
  object-fit: cover;
`;

const TextItem = styled(motion.div)``;

const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H4 = styled.h4<{ $useDarkMode?: boolean }>`
  ${(props) => props.$useDarkMode && `white;`}
`;
export const S = {
  FlexBox,
  Ul,
  BGImage,
  H4,
  TextItem,
  HorizontalContainer,
};
