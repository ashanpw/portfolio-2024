import { motion, useAnimate } from "framer-motion";
import { S } from "./Hero.styles";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [scope, animate] = useAnimate();
  // useEffect(() => {
  //   animate("#black-bar", { top: "100%" });
  // }, []);
  return (
    <S.Container ref={scope}>
      <S.Title>.A</S.Title>
      <div
        style={{
          width: "100dvw",
          height: "10rem",
          backgroundColor: "black",
          position: "absolute",
          top: "0",
        }}
        id="black-bar"
      ></div>
    </S.Container>
  );
};
