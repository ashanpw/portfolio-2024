import { motion } from "framer-motion";
import styled from "styled-components";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";

const Line = styled(motion.div)<{ useDarkMode?: boolean }>`
    border-bottom: 0.5px solid
        ${(props) => (props.useDarkMode ? ColorTokens.secondary : "black")};
`;

export const S = {
    Line,
};
