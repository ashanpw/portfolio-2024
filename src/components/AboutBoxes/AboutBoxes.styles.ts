import styled from "styled-components";

const Grid = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const S = {
    Grid,
};
