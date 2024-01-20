import styled from "styled-components";

const P = styled.h2`
  font-weight: 500;
`;
const Div = styled.div`
  margin-bottom: 10rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    margin-left: 50%;
    margin-right: 3%;
  }
`;

export const S = {
  P,
  Div,
};
