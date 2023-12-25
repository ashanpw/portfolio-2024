import { motion, useAnimate } from "framer-motion";
import { IndentedContainer } from "../../App.styles";
import { S } from "./Experience.styles";
import { useState, useEffect } from "react";
import { ExperienceText } from "./Experience.text";

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
                { duration: 0 }
            );
        }
    }, [animate, currentHoveredItem, mousePos.x, mousePos.y]);

    const mouseOver = (idx: number) => {
        setCurrentHoveredItem(idx);
        animate(`#img-${idx}`, { opacity: 1 }, { duration: 0.001 });
    };

    const mouseLeave = (idx: number) => {
        animate(`#img-${idx}`, { opacity: 0 }, { duration: 0, delay: 0.009 });
    };

    const experienceItems = ExperienceText.contentItems.map((p, idx) => (
        <>
            <S.Grid
                onMouseMove={(_) => mouseOver(idx)}
                onMouseLeave={(_) => mouseLeave(idx)}
                idx={idx}
            >
                {idx === 0 && <S.Line />}
                <div>
                    <p>{"/0" + (idx + 1)}</p>
                    <S.Title>{p.company}</S.Title>
                    <S.SubSection>
                        <p>{p.title}</p>
                        <p>{p.org}</p>
                        <p>{p.date}</p>
                    </S.SubSection>
                </div>
                <S.Description>{p.description}</S.Description>
                <S.Line />
            </S.Grid>
            <S.Img src={p.imgSrc} alt={p.imgAlt} id={`img-${idx}`} />
        </>
    ));

    return (
        <IndentedContainer ref={scope}>
            <h3>{ExperienceText.title}</h3>
            {experienceItems}
        </IndentedContainer>
    );
};
