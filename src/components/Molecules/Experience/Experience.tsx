import { useMotionValue, useSpring } from 'framer-motion';
import { S } from './Experience.styles';
import { useState, useEffect } from 'react';
import { LineAnimationVariants, ListAnimationVariants, MouseSpringOptions } from '../../../utils/Constants';
import { IndentedContainer } from '../../Atoms/IndentedContainer/IndentedContainer';
import { imageAnimationVariants } from './Experience.animations';
import { experienceText } from './Experience.text';

export const Experience = () => {
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

  const experienceItems = experienceText.contentItems.map((p, idx) => (
    <div key={idx}>
      {idx === 0 && <S.Line initial="initial" whileInView="animate" variants={LineAnimationVariants} />}
      <S.Grid
        initial="initial"
        whileInView="animate"
        variants={ListAnimationVariants}
        onMouseMove={() => handleOnHover(idx)}
        onMouseLeave={() => setCurrentHoveredItem(-1)}
        onMouseEnter={() => setCurrentHoveredItem(idx)}
        $idx={idx}
      >
        <S.TitleContainer>
          <S.Title>{p.company}</S.Title>
          <p>{p.org}</p>
        </S.TitleContainer>
        <S.SubSection>
          <p>{p.title}</p>
          <p>{p.date}</p>
        </S.SubSection>
        <S.Description>{p.description}</S.Description>
      </S.Grid>
      <S.Line initial="initial" whileInView="animate" variants={LineAnimationVariants} />

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
        {currentHoveredItem === idx && p.imgSrc && (
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
    <IndentedContainer index={experienceText.index} title={experienceText.title} id={experienceText.id}>
      {experienceItems}
    </IndentedContainer>
  );
};
