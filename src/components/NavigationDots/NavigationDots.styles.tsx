import styled from "styled-components/macro";
// Dots under the carousel
export const StyledDot = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "#DADADA" : "#5E5E5E")};
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
`;
