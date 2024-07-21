import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion';
import { S } from './Experience.styles';
import { useState, useEffect } from 'react';
import { ExperienceText } from './Experience.text';
import {
  AssetBucketUrlPrefix,
  LineAnimationVariants,
  ListAnimationVariants,
  MouseSpringOptions,
} from '../../../utils/Constants';
import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';

export const Experience = (props: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, MouseSpringOptions);
  const ySpring = useSpring(y, MouseSpringOptions);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      x.set(event.clientX + 5);
      y.set(event.clientY + 5);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [currentHoveredItem, setCurrentHoveredItem] = useState(-1);
  const handleOnHover = (idx: number) => {
    setCurrentHoveredItem(idx);
  };

  const imageAnimationVariants = {
    initial: {
      opacity: 0,
      scale: 0.3,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  };

  const experienceItems = ExperienceText.contentItems.map((p, idx) => (
    <div key={idx}>
      <S.Grid
        initial="initial"
        whileInView="animate"
        variants={ListAnimationVariants}
        onMouseMove={() => handleOnHover(idx)}
        onMouseLeave={() => setCurrentHoveredItem(-1)}
        onMouseEnter={() => setCurrentHoveredItem(idx)}
        $idx={idx}
      >
        {idx === 0 && <S.Line initial="initial" whileInView="animate" variants={LineAnimationVariants} />}
        <p style={{ paddingLeft: '5rem', fontSize: '1.4rem' }}>{p.company}</p>
        <S.SubSection>
          <p>{p.org}</p>
          <p>{p.title}</p>
          <p>{p.date}</p>
        </S.SubSection>
        <S.Description>{p.description}</S.Description>
        <S.Line initial="initial" whileInView="animate" variants={LineAnimationVariants} />
      </S.Grid>
      <S.ImgContainer
        style={{
          position: 'fixed',
          left: xSpring,
          top: ySpring,
          zIndex: 98,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {currentHoveredItem === idx && (
          <S.Img
            src={p.imgSrc}
            alt={p.imgAlt}
            id={`img-${idx}`}
            variants={imageAnimationVariants}
            initial="initial"
            animate="animate"
            loading="lazy"
          />
        )}
      </S.ImgContainer>
    </div>
  ));

  return (
    <IndentedContainer index={ExperienceText.index} title={ExperienceText.title}>
      {experienceItems}
    </IndentedContainer>
  );
};
