import { motion, useAnimate, useMotionValue } from 'framer-motion';
import { S } from './Hero.styles';
import { useEffect, useState } from 'react';
import { AssetBucketUrlPrefix } from '../../../utils/Constants';
import { v4 as uuidv4 } from 'uuid';
import { ColorTokens } from '../../../ColorTokens/ColorTokens';

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
      imgSrc: `${AssetBucketUrlPrefix}/hero/teamLabsSmoke.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 1,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/drowsinessDetection.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },

    {
      id: 2,
      imgSrc: `${AssetBucketUrlPrefix}/hero/mouse.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 5,
      imgSrc: `${AssetBucketUrlPrefix}/hero/teamLabsBlue.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 3,
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/characterRecognition.webp`,
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 6,
      imgSrc: `${AssetBucketUrlPrefix}/hero/quarantine.webp`,
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
  personalStatement: "HI I'M ASHAN. I BUILD FULLSTACK APPLICATIONS THAT RUN ON AWS CLOUD.",
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
    animate([
      ['#title-text', { opacity: 1 }, { duration: 0.7, delay: 2 }],
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
          setCurrentIndex((prev) => (prev + 1) % text.imageList.length);

          const newImage: ImageData = {
            id: uuidv4(),
            position: { x: event.clientX, y: event.clientY },
            imgSrc: text.imageList[currentIndex].imgSrc,
          };
          setImages((prevImages) => {
            let updatedImages;
            if (prevImages.length >= text.imageList.length) {
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
      id="hero"
    >
      <S.Title id="title-text" initial={{ top: '0dvh', left: '50dvw', translateX: '-40%', scale: 0.8, opacity: 0 }}>
        A.
      </S.Title>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 4.1 } }}
        style={{
          position: 'absolute',
          bottom: '6dvh',
          left: '50dvw',
          transform: 'translate(-50%, 0)',
          maxWidth: '32rem',
          textAlign: 'center',
          color: ColorTokens.secondary,
        }}
      >
        {text.personalStatement}
      </motion.p>

      {images.map((image) => {
        return (
          <motion.img
            key={image.id}
            id={image.id}
            src={image.imgSrc}
            alt="Mouse Tracker"
            initial={{
              opacity: 0,
              x: (initialPosition?.x ?? 0) - x.getVelocity() / 40,
              y: (initialPosition?.y ?? 0) - y.getVelocity() / 40,
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
