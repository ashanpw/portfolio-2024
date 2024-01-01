import { useRef } from "react";
import { LogoContainer, S } from "./ProjectsHeader.styles";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

export const ProjectsHeader = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [-0.8, 1, 2, 2],
    });

    const text = {
        contentList: [
            "androidstudio.png",
            "apache.png",
            "aws.png",
            "cypress.png",
            "framermotion.png",
            "graphql.png",
            "java.png",
            "kotlin.png",
            "nextjs.png",
            "nodejs.png",
            "opencv.png",
            "playwright.png",
            "python.png",
            "pytorch.png",
            "react.png",
            "ruby.png",
            "storybook.png",
            "tensorflow.png",
            "typescript.png",
            "typescript.png",
            "tensorflow.png",
            "storybook.png",
            "ruby.png",
            "react.png",
            "pytorch.png",
            "python.png",
            "playwright.png",
            "opencv.png",
            "nodejs.png",
            "nextjs.png",
            "kotlin.png",
            "java.png",
            "graphql.png",
            "framermotion.png",
            "cypress.png",
            "aws.png",
            "apache.png",
            "androidstudio.png",
        ],
    };

    const moveRight = useTransform(scrollYProgress, [0, 1], ["-32.5%", "30%"]);
    const moveLeft = useTransform(scrollYProgress, [0, 1], ["-12.5%", "-50%"]);
    const moveDown = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const movingBannersUpperHalf = text.contentList
        .slice(0, Math.floor(text.contentList.length / 2))
        .map((t, idx) => (
            <img
                src={t}
                alt=""
                height="17px"
                style={{ filter: "grayscale(100%)" }}
            />
        ));
    // Update useState fn with angle and move amount
    const movingBannersBottomHalf = text.contentList
        .slice(Math.floor(text.contentList.length / 2), text.contentList.length)
        .map((t, idx) => (
            <img
                src={t}
                alt=""
                height="17px"
                style={{ filter: "grayscale(100%)" }}
            />
        ));
    return (
        <S.Container ref={ref}>
            <S.H1>PROJECTS</S.H1>
            <div style={{ overflow: "hidden" }}>
                <S.LogoContainer
                    style={{
                        x: moveLeft,
                        y: moveDown,
                        marginBottom: "10rem",
                        zIndex: "1",
                        rotate: -4,
                    }}
                >
                    {movingBannersUpperHalf}
                </S.LogoContainer>
                <S.LogoContainer
                    style={{
                        x: moveRight,
                        y: moveDown,
                        zIndex: "-1",
                        rotate: 4,
                        marginBottom: "10rem",
                    }}
                >
                    {movingBannersBottomHalf}
                </S.LogoContainer>
                <S.LogoContainer
                    style={{
                        x: moveLeft,
                        y: moveDown,
                        marginBottom: "10rem",
                        zIndex: "1",
                        rotate: -4,
                    }}
                >
                    {movingBannersUpperHalf}
                </S.LogoContainer>
            </div>
        </S.Container>
    );
};
