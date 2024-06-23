import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
const Container = styled.div`
    color: ${ColorTokens.quartenary};
    max-width: 100dvw;
    background-color: black;
`;

const FlexBox = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${ColorTokens.secondary};
    gap: 3rem;
    padding: 8rem 5rem;
    margin-bottom: 10rem;
    position: relative;
`;
const MotionSvg = styled(motion.svg)`
    margin-left: 25%;
    color: #eaeaea;
    opacity: 85%;
`;

const Title = styled(motion.h1)`
    position: sticky;
    text-align: center;
    margin-bottom: 15rem;
`;

const Image = styled(motion.img)`
    width: 100%;
    height: 40rem;
    objectfit: cover;
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

export const P = styled.p`
    font-size: 1.3rem;
    color: ${ColorTokens.secondary};
`;
export const S = {
    Container,
    Circle,
    FlexBox,
    MotionSvg,
    Title,
    Image,
    P,
};
