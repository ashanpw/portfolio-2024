import { useRef } from "react";
import { S } from "./LinesOfCode.styles";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

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
  const defaultYTransformProps = {
    value: scrollYProgress,
    inputRange: [1, 0],
    outputRange: [randomIntFromInterval(-800, 400), 0],
  };

  const { value, inputRange, outputRange } = defaultYTransformProps;

  const imageList = [
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/drowsinessDetection.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/projectMoonPlacesVisited.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/characterRecognition.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/depthDetection.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/jumpBoxGame.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/panoramaStitching.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/pedestrianDetection.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/projectMoonHome.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/unityARProject.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/projectWindExperience.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/projectWindHome.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/ggDeadIsland2.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/cannyLandscape.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/primeGaming.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/skyFallGame.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/seattleHouseListingCongestion.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/bruteForce.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/turboCheckout.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/studyBubble.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/ggDetailPage2.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/storyboardAppLoginScreen.PNG",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/ggDetailPage1.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(
        scrollYProgress,
        [1, 0],
        [randomIntFromInterval(-800, 400), 0]
      ),
    },

    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/quarantinePoster.png",
      x: randomIntFromInterval(-50, 300),
      y: useTransform(scrollYProgress, [1, 0], [-3000, 200]),
    },
    {
      imgSrc:
        "https://ashanpw-asset-bucket.s3.amazonaws.com/lines-of-code-images/projectWindMain.png",
      x: randomIntFromInterval(-50, 300),
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
              x: randomIntFromInterval(-50, 200),
              y: useTransform(scrollYProgress, [1, 0], [-1200, 0]),
            }}
          />
*/
