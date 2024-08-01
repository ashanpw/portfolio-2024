export const circleAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
    rotate: -180,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      ease: 'easeOut',
      delay: 0.2,
      duration: 0.5,
    },
  },
};
