import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';
import { MouseSpringOptions } from '../../../utils/Constants';
import { S } from './MouseCursor.styles';

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
    <S.Div
      style={{
        translateX: xSpring,
        translateY: ySpring,

        scale: scaleSpring,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { type: 'spring', delay: 3, duration: 1 } }}
    ></S.Div>
  );
};
