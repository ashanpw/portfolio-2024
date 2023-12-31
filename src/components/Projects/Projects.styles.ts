import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";

const Grid = styled.div`
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20rem;
  }
  padding: 10rem 0;
`;

const Line = styled.div`
  border-bottom: 0.5px solid ${ColorTokens.quartenary};
`;

const Date = styled.p`
  color: ${ColorTokens.secondary};
  margin-bottom: 3rem;
`;

const Description = styled.p`
  color: ${ColorTokens.secondary};
  line-height: 3rem;
  @media (min-width: 768px) {
    max-width: 95%;
  }
`;
const Img = styled.img`
  max-height: 50rem;
  width: calc(100% - 4rem);
  margin: 2rem;
`;

export const S = {
    Grid,
    Line,
    Date,
    Description,
    Img,
};
