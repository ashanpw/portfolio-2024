import { motion, useMotionValue, useSpring } from 'framer-motion';
import { S } from './Hero.styles';
import { useEffect, useState } from 'react';
import { MouseSpringOptions } from '../../../utils/Constants';

export const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseAnimationTriggerThresholdX = useMotionValue(0);
  const mouseAnimationTriggerThresholdY = useMotionValue(0);

  const xSpring = useSpring(x, MouseSpringOptions);
  const ySpring = useSpring(y, MouseSpringOptions);
  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      console.log('px', x.get(), x.getVelocity(), 'py', y.get(), y.getVelocity());
      const prevVelocityX = x.getVelocity();
      const prevVelocityY = y.getVelocity();

      x.set(event.clientX);
      y.set(event.clientY);
      console.log((prevVelocityX >= 0 && x.getVelocity() >= 0) || (prevVelocityX <= 0 && x.getVelocity() <= 0));
      if ((prevVelocityX >= 0 && x.getVelocity() >= 0) || (prevVelocityX <= 0 && x.getVelocity() <= 0)) {
        mouseAnimationTriggerThresholdX.set(mouseAnimationTriggerThresholdX.get() + 1);
        console.log(mouseAnimationTriggerThresholdX.get());
      } else {
        mouseAnimationTriggerThresholdX.set(0);
      }
      // if ((prevVelocityY >= 0 && y.getVelocity() >= 0) || (prevVelocityY <= 0 && y.getVelocity() <= 0)) {
      //   mouseAnimationTriggerThresholdY.set(mouseAnimationTriggerThresholdY.get() + 1);
      // } else {
      //   mouseAnimationTriggerThresholdY.set(0);
      // }
      console.log('cx', x.get(), x.getVelocity(), 'cy', y.get(), y.getVelocity());
      console.log('mousethreshold', mouseAnimationTriggerThresholdX.get() + mouseAnimationTriggerThresholdY.get());
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <S.Container>
      <S.Title
        initial={{ y: '-25dvh', opacity: 0 }}
        animate={{
          y: 0,
          opacity: [0, 1],
          transition: { delay: 2.4, ease: 'easeOut', duration: 0.8 },
        }}
      >
        ASHAN
      </S.Title>
      <motion.img
        src="https://ashanpw-asset-bucket.s3.amazonaws.com/experience-assets/ess.png"
        style={{ position: 'absolute', x: xSpring, y: ySpring, translateX: '-50%', translateY: '-50%', zIndex: 98 }}
      />
      <motion.img
        src="https://ashanpw-asset-bucket.s3.amazonaws.com/experience-assets/ess.png"
        style={{ position: 'absolute', x: xSpring, y: ySpring, translateX: '-50%', translateY: '-50%', zIndex: 98 }}
      />
      <motion.img
        src="https://ashanpw-asset-bucket.s3.amazonaws.com/experience-assets/ess.png"
        style={{ position: 'absolute', x: xSpring, y: ySpring, translateX: '-50%', translateY: '-50%', zIndex: 98 }}
      />
      <motion.img
        src="https://ashanpw-asset-bucket.s3.amazonaws.com/experience-assets/ess.png"
        style={{ position: 'absolute', x: xSpring, y: ySpring, translateX: '-50%', translateY: '-50%', zIndex: 98 }}
      />
    </S.Container>
  );
};
