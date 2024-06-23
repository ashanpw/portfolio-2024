import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
const Container = styled.div`
    color: ${ColorTokens.quartenary};
    max-width: 100dvw;
    background-color: black;
`;
const Circle = styled(motion.div)`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color: black;
    border: 1px solid ${ColorTokens.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20rem;
`;

const Grid = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    margin-bottom: 10rem;
`;
const MotionSvg = styled(motion.svg)`
    margin-left: 25%;
    color: #eaeaea;
    opacity: 85%;
`;

const Title = styled(motion.h1)`
    position: sticky;
    text-align: center;
    margin-bottom: 18rem;
`;

const Image = styled(motion.img)`
    width: 100rem;
    height: 35rem;
    objectfit: cover;
`;
export const S = {
    Container,
    Circle,
    Grid,
    MotionSvg,
    Title,
    Image,
};
