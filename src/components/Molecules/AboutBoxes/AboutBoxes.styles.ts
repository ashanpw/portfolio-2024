import styled from 'styled-components';

const Grid = styled.div`
  margin-bottom: 10rem;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const S = {
  Grid,
};
