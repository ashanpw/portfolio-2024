export const BucketUrlPrefix = "https://ashanpw-asset-bucket.s3.amazonaws.com";

export const ListAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.1,
    },
  },
};
