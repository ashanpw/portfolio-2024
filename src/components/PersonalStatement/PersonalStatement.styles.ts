import styled from "styled-components";

const P = styled.h2`
  font-weight: 500;
`;
const Div = styled.div`
  margin-bottom: 10rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    margin-left: 33.3%;
    margin-right: 23%;
  }
`;

export const S = {
  P,
  Div,
};
