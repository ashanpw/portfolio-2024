import { motion, useAnimate, useMotionValue } from 'framer-motion';
import { S } from './Hero.styles';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { heroText } from './Hero.text';
import { ImageData, Position } from './Hero.types';

export const Hero = () => {
  const [scope, animate] = useAnimate();
  const [initialPosition, setInitialPosition] = useState<Position | null>(null);
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);
  const targetDistance = 180; // Set the target distance in pixels
  // x, y used for tracking velocity
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnimations, setShowAnimations] = useState(false);

  useEffect(() => {
    animate([
      ['#title-text', { opacity: 1 }, { duration: 0.7, delay: 1.8 }],
      ['#title-text', { scale: 1 }, { duration: 1, type: 'spring', stiffness: 100, mass: 0.3, damping: 30 }],
    ]);
  }, [animate]);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      if (!showAnimations) {
        return;
      }
      const newCurrentPosition = { x: event.clientX, y: event.clientY };
      x.set(event.clientX);
      y.set(event.clientY);

      if (currentPosition === null) {
        setCurrentPosition(newCurrentPosition);
      }
      if (initialPosition === null) {
        setInitialPosition(currentPosition);
      }

      if (initialPosition !== null && currentPosition !== null) {
        setCurrentPosition(newCurrentPosition);

        const distanceX = newCurrentPosition.x - initialPosition.x;
        const distanceY = newCurrentPosition.y - initialPosition.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance >= targetDistance) {
          setCurrentIndex((prev) => (prev + 1) % heroText.imageList.length);

          const newImage: ImageData = {
            id: uuidv4(),
            position: { x: event.clientX, y: event.clientY },
            imgSrc: heroText.imageList[currentIndex].imgSrc,
          };
          setImages((prevImages) => {
            let updatedImages;
            if (prevImages.length >= heroText.imageList.length) {
              // Move the first element to the current mouse position
              updatedImages = [...prevImages.slice(1), newImage];
            } else {
              updatedImages = [...prevImages, newImage];
            }

            return updatedImages;
          });

          // Reset initial position to start tracking again
          setInitialPosition({ x: event.clientX, y: event.clientY });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initialPosition, currentPosition, x, y, currentIndex, showAnimations]);

  const animateImg = (image: ImageData) => {
    const element = document.getElementById(image.id);
    if (element) {
      animate(
        element,
        {
          x: image.position.x,
          y: image.position.y,
        },
        { duration: 1 },
      ).then(() =>
        animate(
          element,
          {
            opacity: 0,
            y: '150dvh',
          },
          { duration: 0.5, delay: 0.3, ease: 'easeInOut' },
        ),
      );
    }
  };

  return (
    <S.Container
      ref={scope}
      onMouseMove={() => setShowAnimations(true)}
      onMouseEnter={() => setShowAnimations(true)}
      onMouseLeave={() => setShowAnimations(false)}
      id="home"
    >
      <S.Title id="title-text" initial={{ top: '0dvh', left: '50dvw', translateX: '-40%', scale: 0.8, opacity: 0 }}>
        {heroText.title}
      </S.Title>
      <S.AboutText initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3.9 } }}>
        {heroText.personalStatement}
      </S.AboutText>

      {images.map((image) => {
        return (
          <motion.img
            key={image.id}
            id={image.id}
            src={image.imgSrc}
            alt="Mouse Tracker"
            initial={{
              opacity: 0,
              x: (initialPosition?.x ?? 0) - x.getVelocity() / 38,
              y: (initialPosition?.y ?? 0) - y.getVelocity() / 38,
            }}
            animate={{
              opacity: 1,
            }}
            onAnimationStart={() => animateImg(image)}
            transition={{ duration: 0 }}
            style={{
              position: 'absolute',
              width: '25rem',
              translateX: '-50%',
              translateY: '-50%',
              zIndex: -99,
              pointerEvents: 'none',
              aspectRatio: '1/1',
            }}
            loading="eager"
          />
        );
      })}
    </S.Container>
  );
};
