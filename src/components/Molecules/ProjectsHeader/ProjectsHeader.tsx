import { useRef } from 'react';
import { S } from './ProjectsHeader.styles';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { AssetBucketUrlPrefix } from '../../../utils/Constants';

export const ProjectsHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [-0.8, 1, 2, 3],
  });

  const text = {
    contentList: [
      'androidstudio',
      'apache',
      'aws',
      'cypress',
      'framermotion',
      'graphql',
      'java',
      'kotlin',
      'nextjs',
      'nodejs',
      'opencv',
      'playwright',
      'python',
      'pytorch',
      'react',
      'ruby',
      'storybook',
      'tensorflow',
      'typescript',
    ],
  };

  const moveRight = useTransform(scrollYProgress, [0, 1], ['-32.5%', '30%']);
  const moveLeft = useTransform(scrollYProgress, [0, 1], ['-12.5%', '-80%']);
  const moveDown = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const shuffle = (array: string[]) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };
  const movingBannersUpper = shuffle(text.contentList).map((t) => (
    <S.Img src={`${AssetBucketUrlPrefix}/library-logos/${t}.png`} height="17px" alt="" loading="lazy" />
  ));
  const movingBannersCenter = shuffle(text.contentList).map((t) => (
    <S.Img src={`${AssetBucketUrlPrefix}/library-logos/${t}.png`} height="17px" alt="" loading="lazy" />
  ));
  const movingBannersBottom = shuffle(text.contentList).map((t) => (
    <S.Img src={`${AssetBucketUrlPrefix}/library-logos/${t}.png`} height="17px" alt="" loading="lazy" />
  ));
  return (
    <S.Container ref={ref} id="projects">
      <S.H1>PROJECTS</S.H1>
      <S.LogoContainer>
        <S.LogoContainerItem
          style={{
            x: moveLeft,
            y: moveDown,
            zIndex: '1',
            rotate: -4,
          }}
        >
          {movingBannersUpper}
        </S.LogoContainerItem>
        <S.LogoContainerItem
          style={{
            x: moveRight,
            y: moveDown,
            zIndex: '-1',
            rotate: 4,
          }}
        >
          {movingBannersCenter}
        </S.LogoContainerItem>
        <S.LogoContainerItem
          style={{
            x: moveLeft,
            y: moveDown,
            zIndex: '1',
            rotate: -4,
          }}
        >
          {movingBannersBottom}
        </S.LogoContainerItem>
      </S.LogoContainer>
    </S.Container>
  );
};
