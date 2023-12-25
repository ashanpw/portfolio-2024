import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    will-change: transform;
`;

export const S = {
    Container,
};
