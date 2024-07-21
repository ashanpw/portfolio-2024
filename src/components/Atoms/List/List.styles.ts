import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { motion } from 'framer-motion';

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4rem 0;
`;
const Label = styled.p<{ $useDarkMode?: boolean }>`
  ${(props) => props.$useDarkMode && `color: ${ColorTokens.tertiary};`}
  @media (min-width: 768px) {
    padding-left: 4rem;
  }
`;
const Value = styled.p<{ $useDarkMode?: boolean }>`
  ${(props) => !props.$useDarkMode && `color: ${ColorTokens.secondary};`}
  justify-self: center;
  padding-left: 2.5rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const A = styled(motion.a)`
  color: inherit;
  text-decoration: none;
`;
export const S = {
  A,
  Label,

  Value,
  Grid,
};
