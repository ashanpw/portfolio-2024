import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { MouseSpringOptions } from '../../../utils/Constants';

export const MouseCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const xSpring = useSpring(x, MouseSpringOptions);
  const ySpring = useSpring(y, MouseSpringOptions);
  const scaleSpring = useSpring(scale, MouseSpringOptions);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      x.set(event.clientX + 5);
      y.set(event.clientY + 5);
    };

    const handleMouseDown = () => {
      scale.set(20);
    };

    const handleMouseUp = () => {
      scale.set(1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        width: '5px',
        height: '5px',
        margin: '-10px',
        backgroundColor: ColorTokens.title,
        borderRadius: 10,
        translateX: xSpring,
        translateY: ySpring,
        zIndex: 98,
        pointerEvents: 'none',
        scale: scaleSpring,
      }}
    />
  );
};
