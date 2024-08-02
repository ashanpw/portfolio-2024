import { useRef } from 'react';
import { S } from './ProjectsHeader.styles';
import { useScroll, useTransform } from 'framer-motion';
import { AssetBucketUrlPrefix } from '../../../utils/Constants';
import { projectsHeaderText } from './ProjectsHeader.text';

export const ProjectsHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [-0.8, 1, 2, 3],
  });

  const moveRight = useTransform(scrollYProgress, [0, 1], ['-42.5%', '40%']);
  const moveLeft = useTransform(scrollYProgress, [0, 1], ['-2.5%', '-120%']);
  const moveDown = useTransform(scrollYProgress, [0, 1], ['-10%', '210%']);
  const shuffle = (array: string[]) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };
  const movingBannersUpper = shuffle(projectsHeaderText.contentList).map((t, idx) => (
    <S.Img
      src={`${AssetBucketUrlPrefix}/library-logos/${t}.png`}
      height="17px"
      alt={`Logo image of ${t}`}
      loading="lazy"
      key={idx}
    />
  ));
  const movingBannersCenter = shuffle(projectsHeaderText.contentList).map((t, idx) => (
    <S.Img
      src={`${AssetBucketUrlPrefix}/library-logos/${t}.png`}
      height="17px"
      alt={`Logo image of ${t}`}
      loading="lazy"
      key={idx}
    />
  ));
  const movingBannersBottom = shuffle(projectsHeaderText.contentList).map((t, idx) => (
    <S.Img
      src={`${AssetBucketUrlPrefix}/library-logos/${t}.png`}
      height="17px"
      alt={`Logo image of ${t}`}
      loading="lazy"
      key={idx}
    />
  ));
  return (
    <S.Container ref={ref} id="projects">
      <S.Title>{projectsHeaderText.title}</S.Title>
      <S.LogoContainer>
        <S.LogoContainerItem
          style={{
            x: moveLeft,
            y: moveDown,
            zIndex: '1',
            rotate: -5,
          }}
        >
          {movingBannersUpper}
        </S.LogoContainerItem>
        <S.LogoContainerItem
          style={{
            x: moveRight,
            y: moveDown,
            zIndex: '-1',
            rotate: 5,
            marginTop: '25rem',
          }}
        >
          {movingBannersCenter}
        </S.LogoContainerItem>
        <S.LogoContainerItem
          style={{
            x: moveLeft,
            y: moveDown,
            zIndex: '1',
            rotate: -5,
            marginTop: '15rem',
          }}
        >
          {movingBannersBottom}
        </S.LogoContainerItem>
      </S.LogoContainer>
    </S.Container>
  );
};
