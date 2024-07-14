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
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/drowsinessDetection.png`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 1,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonPlacesVisited.png`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 2,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/characterRecognition.png`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 3,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonHome.png`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 4,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindExperience.png`,
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
  const targetDistance = 150; // Set the target distance in pixels
  // x, y used for tracking velocity
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
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
  }, [initialPosition, currentPosition, x, y, currentIndex]);

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
    <S.Container ref={scope}>
      <S.Title
        initial={{ y: '-25dvh', opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 2.4, ease: 'easeOut', duration: 0.8 },
        }}
      >
        ASHAN
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
              x: (initialPosition?.x ?? 0) - x.getVelocity() / 100,
              y: (initialPosition?.y ?? 0) - y.getVelocity() / 100,
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
          />
        );
      })}
    </S.Container>
  );
};
