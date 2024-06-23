import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState, useRef } from "react";

export const MouseCursor = () => {
  const [mousePos, setMousePos] = useState({
    x: -1,
    y: -1,
  });
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
    <motion.div style={{ position: "absolute" }}>
      <motion.div
        style={{
          position: "fixed",
          width: "5px",
          height: "5px",
          margin: "-10px",
          backgroundColor: "black",
          borderRadius: 10,
        }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          transition: {
            type: "tween",
          },
        }}
      />
    </motion.div>
  );
};
