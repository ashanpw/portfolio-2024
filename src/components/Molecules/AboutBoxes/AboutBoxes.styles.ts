import styled from "styled-components";

const Grid = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  margin-bottom: 10rem;
`;

export const S = {
  Grid,
};
