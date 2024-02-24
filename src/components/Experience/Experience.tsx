import { motion, useAnimate } from "framer-motion";
import { S } from "./Experience.styles";
import { useState, useEffect } from "react";
import { ExperienceText } from "./Experience.text";
import { ListAnimationVariants } from "../../utils/Constants";
import { IndentedContainer } from "../IndentedContainer/IndentedContainer";

export const Experience = (props: any) => {
  const [scope, animate] = useAnimate();
  const [mousePos, setMousePos] = useState({
    x: -1,
    y: -1,
  });
  const [currentHoveredItem, setCurrentHoveredItem] = useState(-1);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any }) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (currentHoveredItem >= 0) {
      animate(
        `#img-${currentHoveredItem}`,
        { left: mousePos.x, top: mousePos.y },
        { duration: 0.2 }
      );
    }
  }, [animate, currentHoveredItem, mousePos.x, mousePos.y]);

  const mouseOver = (idx: number) => {
    if (idx !== currentHoveredItem) {
      animate(
        `#img-${idx}`,
        { left: mousePos.x, top: mousePos.y },
        { duration: 0 }
      );
      setCurrentHoveredItem(idx);
    }

    animate(`#img-${idx}`, { opacity: 1 }, { duration: 0.001 });
  };

  const mouseLeave = (idx: number) => {
    animate(`#img-${idx}`, { opacity: 0 }, { duration: 0, delay: 0.025 });
  };
  // TODO: Remove  <p>{"/0" + (idx + 1)}</p>
  const experienceItems = ExperienceText.contentItems.map((p, idx) => (
    <>
      <S.Grid
        initial="initial"
        whileInView="visible"
        variants={ListAnimationVariants}
        onMouseMove={(_) => mouseOver(idx)}
        onMouseLeave={(_) => mouseLeave(idx)}
        idx={idx}
      >
        {idx === 0 && <S.Line />}
        <S.ContentSection>
          <S.Title>{p.company}</S.Title>
          <S.SubSection>
            <p>{p.title}</p>
            <p>{p.org}</p>
            <p>{p.date}</p>
          </S.SubSection>
        </S.ContentSection>
        <S.Description>{p.description}</S.Description>
        <S.Line />
      </S.Grid>
      <S.Img src={p.imgSrc} alt={p.imgAlt} id={`img-${idx}`} />
    </>
  ));

  return (
    <div ref={scope}>
      <IndentedContainer
        index={ExperienceText.index}
        title={ExperienceText.title}
      >
        {experienceItems}
      </IndentedContainer>
    </div>
  );
};
