import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";

const Title = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: start;
`;

const Container = styled.div`
  margin-bottom: 15rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    margin-left: 33.33%;
  }
`;

const P = styled.p`
  padding-left: 5rem;
  color: ${ColorTokens.tertiary};
`;

const H3 = styled.h3`
  margin-left: 4rem;
`;
export const S = {
  Title,
  Container,
  P,
  H3,
};
