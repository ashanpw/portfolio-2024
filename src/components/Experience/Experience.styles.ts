import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";

const Grid = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    padding: 4rem 0;
`;

const Line = styled.div`
    border-bottom: 0.5px solid ${ColorTokens.tertiary};
`;

const SubSection = styled.div`
    color: ${ColorTokens.secondary};
    margin: 3rem 0 0 0;
`;

const Description = styled.p`
    align-self: center;
    padding: 2.5rem 1rem 0 0;
    line-height: 3rem;
    color: ${ColorTokens.secondary};
    @media (min-width: 768px) {
        padding: 0 7.5rem 0 0;
    }
`;

const Title = styled.p`
    font-size: 1.6rem;
`;

export const S = {
    Description,
    Grid,
    Line,
    SubSection,
    Title,
};
