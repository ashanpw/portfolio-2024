import { motion, useAnimate, useMotionValue } from 'framer-motion';
import { S } from './Hero.styles';
import { useEffect, useState } from 'react';
import { AssetBucketUrlPrefix } from '../../../utils/Constants';
import { v4 as uuidv4 } from 'uuid';

interface Position {
  x: number;
  y: number;
}

interface ImageData {
  id: string;
  position: Position;
  imgSrc: string;
}
const text = {
  imageList: [
    {
      id: 0,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/drowsinessDetection.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 1,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonPlacesVisited.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 2,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/characterRecognition.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 3,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonHome.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 4,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindExperience.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
  ],
};
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
    // const animations = [
    //   ['#title-text', { opacity: 1 }, { duration: 0, delay: 2.5 }],
    //   [
    //     '#title-text',
    //     { scale: 1 },
    //     { duration: 1, delay: 2.5, type: 'spring', stiffness: 100, mass: 0.3, damping: 30 },
    //   ],
    //   [
    //     '#title-text',
    //     { x: '40rem' },
    //     { duration: 3.5, delay: 3, type: 'spring', ease: 'easeInOut', stiffness: 100, mass: 10, damping: 100 },
    //   ],
    // ];
    animate([
      ['#title-text', { opacity: 1 }, { duration: 0 }],
      ['#title-text', { scale: 1 }, { duration: 1, type: 'spring', stiffness: 100, mass: 0.3, damping: 30 }],
      [
        '#title-text',
        { x: '30rem' },
        { duration: 0.2, type: 'spring', ease: 'easeInOut', stiffness: 100, mass: 10, damping: 100 },
      ],
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
          setCurrentIndex((prev) => (prev + 1) % 5);

          const newImage: ImageData = {
            id: uuidv4(),
            position: { x: event.clientX, y: event.clientY },
            imgSrc: text.imageList[currentIndex].imgSrc,
          };
          setImages((prevImages) => {
            let updatedImages;
            if (prevImages.length >= 5) {
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
    >
      <S.Title id="title-text" initial={{ top: '0dvh', left: '50dvw', translateX: '-40%', scale: 0.4, opacity: 0 }}>
        A.
      </S.Title>

      {images.map((image) => {
        return (
          <motion.img
            key={image.id}
            id={image.id}
            src={image.imgSrc}
            alt="Mouse Tracker"
            initial={{
              opacity: 0,
              x: (initialPosition?.x ?? 0) - x.getVelocity() / 80,
              y: (initialPosition?.y ?? 0) - y.getVelocity() / 80,
            }}
            animate={{
              opacity: 1,
            }}
            onAnimationStart={() => animateImg(image)}
            transition={{ duration: 0 }}
            style={{
              position: 'absolute',
              width: '30rem',
              translateX: '-50%',
              translateY: '-50%',
              zIndex: -99,
              pointerEvents: 'none',
            }}
            loading="eager"
          />
        );
      })}
    </S.Container>
  );
};
