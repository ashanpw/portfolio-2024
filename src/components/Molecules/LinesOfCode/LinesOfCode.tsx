import { useMemo, useRef } from 'react';
import { S } from './LinesOfCode.styles';
import { useScroll, useTransform } from 'framer-motion';
import { linesOfCodeText } from './LinesOfCode.text';

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateImageList = (scrollYProgress: any) => {
  return linesOfCodeText.contentItems.map((content) => ({
    imgSrc: content.imgSrc,
    alt: content.alt,
    y: useTransform(
      scrollYProgress,
      [1, 0],
      content.yTransformOverride ? content.yTransformOverride : [randomIntFromInterval(-600, 400), 0],
    ),
  }));
};

export const LinesOfCode = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [-0.8, 1, 1.5, 2],
    smooth: 5,
  });

  const imageList = useMemo(() => generateImageList(scrollYProgress), [scrollYProgress]);

  return (
    <div ref={ref} id="lines-of-code">
      <S.Container>
        <S.Title>
          <h1>{linesOfCodeText.title}</h1>
          <h2>{linesOfCodeText.subtitle}</h2>
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
