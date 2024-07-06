import { motion, useAnimate } from "framer-motion";
import { S } from "./Hero.styles";
import { useState, useEffect } from "react";
import { IndentedContainer } from "../../Atoms/IndentedContainer/IndentedContainer";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";

export const Hero = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("#circle", { top: "-35dvh" }, { delay: 2, duration: 3.2 });
    animate(
      "#circle",
      { width: "250dvw", height: "250dvw" },
      { delay: 2.1, duration: 3.3 }
    );
    animate("#circle2", { borderRadius: "0%" }, { delay: 2, duration: 3.3 });
    animate(
      "#circle2",
      { top: "-245dvh", height: "250dvw" },
      { delay: 1, duration: 3.2, ease: "linear" }
    );
  }, []);

  return (
    <S.Container ref={scope}>
      <S.Circle id="circle" initial={{ top: "-70dvw" }} color="#fff"></S.Circle>
      <S.Circle
        id="circle2"
        initial={{
          top: "-280dvw",
          width: "300dvw",
        }}
        color={ColorTokens.background}
      ></S.Circle>
      <S.Title
        initial={{ y: "-25dvh", opacity: 0 }}
        animate={{
          y: 0,
          opacity: [0, 0, 1],
          transition: { delay: 3.1, ease: "easeOut", duration: 0.8 },
        }}
      >
        .A
      </S.Title>
    </S.Container>
  );
};
{
  /* <motion.video
        src="https://ashanpw-asset-bucket.s3.amazonaws.com/hero/heroTitleCompressed.mp4"
        width="100"
        height="100"
        autoPlay={true}
        controls={false}
        muted={true}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { delay: 3 } }}
        preload="priority"
      /> */
}
