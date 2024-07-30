import { useRef } from 'react';
import { S } from './LinesOfCode.styles';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { AssetBucketUrlPrefix } from '../../../utils/Constants';

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const LinesOfCode = () => {
  const text = {
    title: '100K+',
    subtitle: 'LINES OF CODE',
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [-0.8, 1, 1.5, 2],
    smooth: 5,
  });

  const imageList = [
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonPlacesVisited.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of a Japanese temple in a carousel component of a website',
    },

    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/depthDetection.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of several cones and a mask in blue to orange gradient',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/jumpBoxGame.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of a website with a image of a game with red and white squares',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/panoramaStitching.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Two of the same images side by side with lines drawn from points in one to the same points in the other',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/pedestrianDetection.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of pedestrians walking with green boxes surrounding each person',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonHome.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of a homepage of a website with three circles in a triangular formation in the center',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonOld.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of a website with a grid of text in a rectangle with an image of the moon on the right',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindExperience.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of a website with an image of a samurai sitting in the middle',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindHome.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of a home page of a website with a logo of a cloud and a black background',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDeadIsland2.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of an Amazon.com product page of a video game',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/turboCheckout.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
      alt: 'Image of a modal on a website to verify information before purchasing a game',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonOldStats.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of a grid of text with statisics',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonOldExperience.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: "Image of a female holding a sword with text on it's left",
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/seattleHouseListingCongestion.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
      alt: 'Image of a map with a heat map showing congested areas in red',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/bruteForce.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
      alt: 'Image of a terminal and several leaked passwords on the left',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/cannyLandscape.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Image of a black image with a white outline of a picture in a Japanese city',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/studyBubble.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
      alt: 'Image of a website with posts on the left and section to create a new post on the right',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDetailPage2.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
      alt: 'Image of an Amazon.com product page selling a video game',
    },

    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDetailPage1.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
      alt: 'Image of an Amazon.com product page of a video game',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/characterRecognition.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
      alt: 'Large characters in black on a white background',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/quarantinePoster.webp`,
      y: useTransform(scrollYProgress, [1, 0], [-3000, 200]),
      alt: 'Image of a mobile phone app showing a list of groceries and their expiration status',
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindMain.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
      alt: 'Image of home page of a website with gray wind in the background',
    },
    // {
    //   imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/drowsinessDetection.webp`,
    //   y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    //   alt: 'Image of a female driving with squares surrounding her eyes and mouth',
    // },
    // {
    //   imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/storyboardAppFrame.webp`,
    //   y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    //   alt: 'Image of four mobile phones with different pictures of an app',
    // },
  ];

  return (
    <div ref={ref} id="lines-of-code">
      <S.Container>
        <S.Title>
          <h1>{text.title}</h1>
          <h2>{text.subtitle}</h2>
        </S.Title>
        <S.Grid>
          {imageList.map((i, index) => {
            return (
              <S.MotionImg
                src={i.imgSrc}
                style={{
                  y: i.y,
                }}
                loading="lazy"
                key={index}
                alt={i.alt}
              />
            );
          })}
        </S.Grid>
      </S.Container>
    </div>
  );
};
