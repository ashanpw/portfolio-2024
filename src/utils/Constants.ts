import { SpringOptions } from "framer-motion";

export const AssetBucketUrlPrefix =
  "https://ashanpw-asset-bucket.s3.amazonaws.com";

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
    borderWidth: "0.5px",
    width: "100%",
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export const SourceAnimationVariants = {
  initial: {
    y: 50,
    opacity: 0.0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export const TextListContainerVariants = {
  initial: {},
  animate: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
export const TextListItemVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
    },
  },
};

export const mouseSpringOptions: SpringOptions = {
  damping: 30,
  stiffness: 250,
  mass: 0.1,
};
