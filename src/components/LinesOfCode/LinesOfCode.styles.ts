import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";

const Container = styled.div`
    min-height: 160dvh;
    position: relative;
    margin-bottom: 50rem;
    max-width: 100%;
`;

const Title = styled(motion.div)`
    position: sticky;
    top: 0;
    padding-top: 25rem;
    margin-top: -30rem;
    text-align: center;
    z-index: -1;
    color: ${ColorTokens.title};
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 100dvh;
    gap: 20rem 5rem;
    padding-top: 35rem;
    padding-bottom: 25rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0;
    }
`;
export const S = {
    Container,
    Title,
    Grid,
};
