import styled from "styled-components";
import { ColorTokens } from "../../ColorTokens/ColorTokens";
import { motion } from "framer-motion";

const Container = styled.div`
    max-width: 100%;
    min-height: 160dvh;
    overflow: hidden;
    position: relative;
`;

const Title = styled(motion.h1)`
    background-color: ${ColorTokens.tertiary};
    font-size: 15rem;
    color: ${ColorTokens.title};
    background-repeat: repeat;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    border: 0.5px solid ${ColorTokens.tertiary};
`;

const H1 = styled.h1`
    position: sticky;
    top: 0;
    padding-top: 25rem;
    margin-top: -30rem;
    text-align: center;
    z-index: -1;
    font-size: clamp(6rem, 13vw, 20rem);
`;

export const S = {
    Title,
    Container,
    H1,
};
