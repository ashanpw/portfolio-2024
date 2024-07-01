import { motion, useAnimate } from "framer-motion";
import { S } from "./Hero.styles";
import { useState, useEffect } from "react";
import { IndentedContainer } from "../../Atoms/IndentedContainer/IndentedContainer";

export const Hero = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "video",
      { rotate: 0, opacity: 1, scale: 0.75 },
      { ease: "easeOut", delay: 1, duration: 1 }
    );
    // animate("video", { scale: 1 }, { ease: "easeOut", delay: 3, duration: 1 });
  }, []);

  return (
    <S.Container ref={scope}>
      <motion.video
        src="https://ashanpw-asset-bucket.s3.amazonaws.com/hero/heroTitleCompressed.mp4"
        width="800"
        height="800"
        autoPlay={true}
        controls={false}
        muted={true}
        initial={{ rotate: 15, scale: 0.5 }}
        preload="priority"
      />
    </S.Container>
  );
};
