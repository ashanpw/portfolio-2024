import { useRef } from "react";
import { S } from "./ProjectsHeader.styles";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export const ProjectsHeader = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [-0.4, 1, 2, 1],
    });

    const text = {
        contentList: [
            "FRONTEND BACKEND COMPUTER VISION ANDROID FRONTEND BACKEND COMPUTER VISION ANDROID",
            "FRONTEND BACKEND COMPUTER VISION ANDROID FRONTEND BACKEND COMPUTER VISION ANDROID",
            "FRONTEND BACKEND COMPUTER VISION ANDROID FRONTEND BACKEND COMPUTER VISION ANDROID",
            "FRONTEND BACKEND COMPUTER VISION ANDROID FRONTEND BACKEND COMPUTER VISION ANDROID",
            "FRONTEND BACKEND COMPUTER VISION ANDROID FRONTEND BACKEND COMPUTER VISION ANDROID",
            "FRONTEND BACKEND COMPUTER VISION ANDROID FRONTEND BACKEND COMPUTER VISION ANDROID",
            "FRONTEND BACKEND COMPUTER VISION ANDROID FRONTEND BACKEND COMPUTER VISION ANDROID",
            "FRONTEND BACKEND COMPUTER VISION ANDROID FRONTEND BACKEND COMPUTER VISION ANDROID",
        ],
    };

    const moveLeft = useTransform(scrollYProgress, [0, 1], ["-50%", "500%"]);
    const moveRight = useTransform(scrollYProgress, [0, 1], ["50%", "-300%"]);
    const moveDown = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    const moveDown2 = useTransform(scrollYProgress, [0, 1], ["-150%", "000%"]);
    const movingBannersUpperHalf = text.contentList
        .slice(0, 4)
        .map((t, idx) => (
            <S.Title
                style={{
                    rotate: 5 + idx,
                    transformOrigin: "center",
                    translateX: moveLeft,
                    translateY: moveDown,
                }}
            >
                {t}
            </S.Title>
        ));
    // Update useState fn with angle and move amount
    const movingBannersBottomHalf = text.contentList
        .slice(4, text.contentList.length)
        .map((t, idx) => (
            <S.Title
                style={{
                    rotate: -idx - 5,
                    transformOrigin: "center",
                    translateX: moveRight,
                    translateY: moveDown2,
                    backgroundColor: "blue",
                    color: "beige",
                }}
            >
                {t}
            </S.Title>
        ));
    return (
        <S.Container ref={ref}>
            <S.H1>PROJECTS</S.H1>
            <div style={{ overflow: "hidden" }}>
                {movingBannersUpperHalf}
                {movingBannersBottomHalf}
            </div>
        </S.Container>
    );
};
