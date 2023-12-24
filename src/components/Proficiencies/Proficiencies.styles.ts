import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";

const Grid = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    padding: 4rem 0;
`;
const Label = styled.p``;
const Value = styled.p`
    color: ${ColorTokens.tertiary};
    justify-self: center;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;
const Line = styled.div`
    border-bottom: 0.5px solid ${ColorTokens.tertiary};
`;
export const S = {
    Label,
    Line,
    Value,
    Grid,
};
