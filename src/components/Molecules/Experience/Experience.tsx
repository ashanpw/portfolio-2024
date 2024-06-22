import { motion, useAnimate } from "framer-motion";
import { S } from "./Experience.styles";
import { useState, useEffect } from "react";
import { ExperienceText } from "./Experience.text";
import {
  LineAnimationVariants,
  ListAnimationVariants,
} from "../../../utils/Constants";
import { IndentedContainer } from "../../Atoms/IndentedContainer/IndentedContainer";

export const Experience = (props: any) => {
  const [mousePos, setMousePos] = useState({
    x: -1,
    y: -1,
  });
  const [currentHoveredItem, setCurrentHoveredItem] = useState(-1);
  const handleOnHover = (idx: number) => {
    setCurrentHoveredItem(idx);
  };

  const imageAnimationVariants = {
    initial: {
      opacity: 0,
      scale: 1.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const experienceItems = ExperienceText.contentItems.map((p, idx) => (
    <>
      <S.Grid
        initial="initial"
        whileInView="animate"
        variants={ListAnimationVariants}
        onMouseMove={() => handleOnHover(idx)}
        onMouseLeave={() => setCurrentHoveredItem(-1)}
        onMouseEnter={() => setCurrentHoveredItem(idx)}
        idx={idx}
      >
        {idx === 0 && (
          <S.Line
            initial="initial"
            whileInView="animate"
            variants={LineAnimationVariants}
          />
        )}
        <S.ContentSection>
          <S.Title>{p.company}</S.Title>
          <S.SubSection>
            <p>{p.title}</p>
            <p>{p.org}</p>
            <p>{p.date}</p>
          </S.SubSection>
        </S.ContentSection>
        <S.Description>{p.description}</S.Description>
        <S.Line
          initial="initial"
          whileInView="animate"
          variants={LineAnimationVariants}
        />
      </S.Grid>
      <S.ImgContainer style={{ left: mousePos.x, top: mousePos.y }}>
        {currentHoveredItem === idx && (
          <S.Img
            src={p.imgSrc}
            alt={p.imgAlt}
            id={`img-${idx}`}
            variants={imageAnimationVariants}
            initial="initial"
            animate="animate"
          />
        )}
      </S.ImgContainer>
    </>
  ));

  return (
    <IndentedContainer
      index={ExperienceText.index}
      title={ExperienceText.title}
    >
      {experienceItems}
    </IndentedContainer>
  );
};
