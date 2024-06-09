export const BucketUrlPrefix = "https://ashanpw-asset-bucket.s3.amazonaws.com";

export const ListAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export const LineAnimationVariants = {
  initial: {
    width: 0,
    borderWidth: "1.4px",
  },
  animate: {
    borderWidth: "1px",
    width: "100%",
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};