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
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/drowsinessDetection.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonPlacesVisited.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/characterRecognition.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/depthDetection.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/jumpBoxGame.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/panoramaStitching.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/pedestrianDetection.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonHome.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonOld.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindExperience.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindHome.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDeadIsland2.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/cannyLandscape.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonOldExperience.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonHome.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-400, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/seattleHouseListingCongestion.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/bruteForce.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    },

    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/turboCheckout.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/studyBubble.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDetailPage2.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/storyboardAppFrame.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDetailPage1.webp`,
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    },

    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/quarantinePoster.webp`,
      y: useTransform(scrollYProgress, [1, 0], [-3000, 200]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindMain.webp`,
      x: randomIntFromInterval(-200, 2),
      y: useTransform(scrollYProgress, [1, 0], [randomIntFromInterval(-800, 400), 0]),
    },
  ];

  return (
    <div ref={ref}>
      <S.Container>
        <S.Title>
          <h1>{text.title}</h1>
          <h2>{text.subtitle}</h2>
        </S.Title>
        <S.Grid>
          {imageList.map((i) => {
            return (
              <S.MotionImg
                src={i.imgSrc}
                style={{
                  x: i.x,
                  y: i.y,
                }}
                loading="lazy"
              />
            );
          })}
        </S.Grid>
      </S.Container>
    </div>
  );
};

/*
          <S.MotionImg
            src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
            style={{
              
              y: useTransform(scrollYProgress, [1, 0], [-1200, 0]),
            }}
          />
*/
