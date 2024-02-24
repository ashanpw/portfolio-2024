import { useRef } from "react";
import { S } from "./ProjectsHeader.styles";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { BucketUrlPrefix } from "../../utils/Constants";

export const ProjectsHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [-0.8, 1, 2, 2],
  });

  const text = {
    contentList: [
      "androidstudio",
      "apache",
      "aws",
      "cypress",
      "framermotion",
      "graphql",
      "java",
      "kotlin",
      "nextjs",
      "nodejs",
      "opencv",
      "playwright",
      "python",
      "pytorch",
      "react",
      "ruby",
      "storybook",
      "tensorflow",
      "typescript",
    ],
  };

  const moveRight = useTransform(scrollYProgress, [0, 1], ["-32.5%", "30%"]);
  const moveLeft = useTransform(scrollYProgress, [0, 1], ["-12.5%", "-50%"]);
  const moveDown = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const shuffle = (array: string[]) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };
  const movingBannersUpper = shuffle(text.contentList).map((t) => (
    <S.Img
      src={`${BucketUrlPrefix}/library-logos/${t}.png`}
      height="17px"
      alt=""
      loading="lazy"
      style={{ filter: "grayscale(100%)" }}
    />
  ));
  const movingBannersCenter = shuffle(text.contentList).map((t) => (
    <S.Img
      src={`${BucketUrlPrefix}/library-logos/${t}.png`}
      height="17px"
      alt=""
      loading="lazy"
    />
  ));
  const movingBannersBottom = shuffle(text.contentList).map((t) => (
    <S.Img
      src={`${BucketUrlPrefix}/library-logos/${t}.png`}
      height="17px"
      alt=""
      loading="lazy"
      style={{ filter: "grayscale(100%)" }}
    />
  ));
  return (
    <S.Container ref={ref} id="projects">
      <S.H1>PROJECTS</S.H1>
      <div style={{ overflow: "hidden", padding: "5rem 0" }}>
        <S.LogoContainer
          style={{
            x: moveLeft,
            y: moveDown,
            zIndex: "1",
            rotate: -4,
          }}
        >
          {movingBannersUpper}
        </S.LogoContainer>
        <S.LogoContainer
          style={{
            x: moveRight,
            y: moveDown,
            zIndex: "-1",
            rotate: 4,
          }}
        >
          {movingBannersCenter}
        </S.LogoContainer>
        <S.LogoContainer
          style={{
            x: moveLeft,
            y: moveDown,
            zIndex: "1",
            rotate: -4,
          }}
        >
          {movingBannersBottom}
        </S.LogoContainer>
      </div>
    </S.Container>
  );
};
