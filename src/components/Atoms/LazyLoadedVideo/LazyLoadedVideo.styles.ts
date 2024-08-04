import { motion } from 'framer-motion';
import styled from 'styled-components';

const Video = styled(motion.video)`
  pointer-events: none;
  filter: contrast(101%);
`;

export const S = {
  Video,
};
