import { useRef } from "react";
import { S } from "./ContactHeader.styles";
import { useScroll, useSpring, useTransform } from "framer-motion";

export const ContactHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [0, 1, 2, 2],
    smooth: 5,
  });

  return (
    <S.Container ref={ref}>
      <S.Tunnel
        style={{
          scaleX: useTransform(scrollYProgress, [1, 0], [25, 1]),
          scaleY: useTransform(scrollYProgress, [1, 0], [25, 1]),
          y: useTransform(scrollYProgress, [1, 0], [-1000, 0]),
          rotateX: useTransform(scrollYProgress, [1, 0], [30, -10]),
          transformOrigin: "center",
          maxWidth: "100%",
        }}
      ></S.Tunnel>
    </S.Container>
  );
};
