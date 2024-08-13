import { useAnimate, useMotionValue } from 'framer-motion';
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
  const targetDistance = 150; // Set the target distance in pixels
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

      if (currentPosition !== null) {
        setCurrentPosition(newCurrentPosition);
        const distance = calculateDistanceBetweenPoints(newCurrentPosition, initialPosition);
        if (distance >= targetDistance || distance === -1) {
          setCurrentIndex((prev) => (prev + 1) % heroText.imageList.length);

          const newImage: ImageData = {
            id: uuidv4(),
            position: { x: event.clientX, y: event.clientY },
            imgSrc: heroText.imageList[currentIndex].imgSrc,
            alt: heroText.imageList[currentIndex].alt,
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

  const calculateDistanceBetweenPoints = (coord1: Position | null, coord2: Position | null): number => {
    if (coord1 == null || coord2 == null) {
      return -1;
    }
    const distanceX = coord1.x - coord2.x;
    const distanceY = coord1.y - coord2.y;
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  };

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
      <S.Title id="title-text" initial={{ left: '50dvw', translateX: '-40%', scale: 0.8, opacity: 0 }}>
        {heroText.title}
      </S.Title>
      <S.AboutText initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 3.8 } }}>
        {heroText.personalStatement}
      </S.AboutText>

      {images.map((image) => {
        return (
          <S.Image
            key={image.id}
            id={image.id}
            src={image.imgSrc}
            alt={image.alt}
            initial={{
              opacity: 0,
              x: (initialPosition?.x ?? 0) - x.getVelocity() / 35,
              y: (initialPosition?.y ?? 0) - y.getVelocity() / 35,
            }}
            animate={{
              opacity: 1,
            }}
            onAnimationStart={() => animateImg(image)}
            transition={{ duration: 0 }}
            style={{
              position: 'absolute',
              translateX: '-50%',
              translateY: '-50%',
            }}
            loading="eager"
          />
        );
      })}
    </S.Container>
  );
};
