import { motion } from "framer-motion";
import { S } from "./Hero.styles";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [mousePos, setMousePos] = useState({
    x: -1,
    y: -1,
  });
  const [currentHoveredItem, setCurrentHoveredItem] = useState(-1);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <S.Container>
        <S.Title>.A</S.Title>
        <motion.img
          src="https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/jumpBoxGame.png"
          alt=" "
          style={{
            position: "absolute",
            left: mousePos.x,
            top: mousePos.y,
            maxWidth: "50rem",
          }}
        />
      </S.Container>
    </>
  );
};
