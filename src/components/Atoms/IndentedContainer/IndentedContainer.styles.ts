import styled from 'styled-components';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';

const Title = styled.div`
  display: grid;
  align-items: start;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Container = styled.div`
  padding-bottom: 15rem;
  @media (min-width: 768px) {
    margin-left: 33.33%;
  }
`;

const P = styled.p`
  padding-left: 5rem;
  color: ${ColorTokens.secondary};
  @media (max-width: 768px) {
    display: none;
  }
`;

const H3 = styled.h3`
  margin-left: 2rem;
  @media (min-width: 768px) {
    margin-left: 4rem;
  }
`;
export const S = {
  Title,
  Container,
  P,
  H3,
};
