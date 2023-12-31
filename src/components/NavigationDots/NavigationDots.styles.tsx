import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
// Dots under the carousel
export const StyledDot = styled.div<{ isSelected: boolean }>`
    background-color: ${(props) =>
        props.isSelected ? ColorTokens.secondary : ColorTokens.quartenary};
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 100%;
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: end;
    gap: 0.5rem;
    margin: 1rem;
`;