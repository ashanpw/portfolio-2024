import { motion, useAnimate } from "framer-motion";
import { S } from "./Hero.styles";
import { useState, useEffect } from "react";
import { IndentedContainer } from "../../Atoms/IndentedContainer/IndentedContainer";

export const Hero = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "video",
      { rotate: 0, scale: 1, y: 0 },
      { ease: "easeOut", delay: 0.1, duration: 2 }
    );
    animate(
      "video",
      { opacity: 1 },
      { ease: "easeInOut", delay: 0.3, duration: 2 }
    ).then(() => {
      animate(
        "video",
        { x: 400 },
        { ease: "easeInOut", delay: 0.4, duration: 1.4 }
      );
    });
  }, []);

  return (
    <S.Container ref={scope}>
      <motion.video
        src="https://ashanpw-asset-bucket.s3.amazonaws.com/hero/heroTitle.mp4"
        width="700"
        height="700"
        autoPlay={true}
        controls={false}
        muted={true}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
      />
    </S.Container>
  );
};
