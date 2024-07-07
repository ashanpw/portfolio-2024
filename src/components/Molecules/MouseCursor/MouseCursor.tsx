import {
  SpringOptions,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { ColorTokens } from "../../../ColorTokens/ColorTokens";
import { mouseSpringOptions } from "../../../utils/Constants";

export const MouseCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, mouseSpringOptions);
  const ySpring = useSpring(y, mouseSpringOptions);
  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      x.set(event.clientX + 5);
      y.set(event.clientY + 5);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <motion.div
      style={{
        position: "fixed",
        width: "5px",
        height: "5px",
        margin: "-10px",
        backgroundColor: ColorTokens.title,
        borderRadius: 10,
        translateX: xSpring,
        translateY: ySpring,
        zIndex: 98,
        pointerEvents: "none",
      }}
    />
  );
};
