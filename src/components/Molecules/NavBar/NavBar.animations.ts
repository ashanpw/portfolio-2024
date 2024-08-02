import { TextListContainerVariants } from '../../../utils/Constants';

export const listContainerVariants = {
  initial: {},
  animate: {
    ...TextListContainerVariants.animate,
    transition: {
      ...TextListContainerVariants.animate.transition,
      delayChildren: 3,
    },
  },
};
