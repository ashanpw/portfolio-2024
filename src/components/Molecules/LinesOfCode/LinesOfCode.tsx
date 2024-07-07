import { useRef } from "react";
import { S } from "./LinesOfCode.styles";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { AssetBucketUrlPrefix } from "../../../utils/Constants";

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const LinesOfCode = () => {
  const text = {
    title: "100K+",
    subtitle: "LINES OF CODE",
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [-0.8, 1, 2, 2],
    smooth: 5,
  });

  const imageList = [
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/drowsinessDetection.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonPlacesVisited.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/characterRecognition.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/depthDetection.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/jumpBoxGame.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/panoramaStitching.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/pedestrianDetection.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectMoonHome.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/unityARProject.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindExperience.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindHome.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDeadIsland2.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/cannyLandscape.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/primeGaming.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/jumpmanGame.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/seattleHouseListingCongestion.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/bruteForce.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/turboCheckout.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/studyBubble.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDetailPage2.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/storyboardAppLoginScreen.PNG`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/ggDetailPage1.png`,
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/quarantinePoster.png`,
      y: useTransform(scrollYProgress, [1, 0], [-3000, 200]),
    },
    {
      imgSrc: `${AssetBucketUrlPrefix}/lines-of-code-images/projectWindMain.png`,
      x: randomIntFromInterval(-200, 2),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
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
