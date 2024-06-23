import styled from "styled-components";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
import { motion } from "framer-motion";

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 4rem 0;
`;
const Label = styled.p<{ useDarkMode?: boolean }>`
    ${(props) => props.useDarkMode && `color: ${ColorTokens.quartenary};`}
    @media (min-width: 768px) {
        padding-left: 4rem;
    }
`;
const Value = styled.p`
    color: ${ColorTokens.quartenary};
    justify-self: center;
    padding-left: 2.5rem;
    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

const A = styled(motion.a)`
    text-decoration: none;
    color: inherit;
`;
export const S = {
    A,
    Label,

    Value,
    Grid,
};
