import { useRef } from "react";
import { S } from "./ProjectsHeader.styles";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { BucketUrlPrefix } from "../../utils/Contants";

export const ProjectsHeader = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [-0.8, 1, 2, 2],
    });

    const text = {
        contentList: [
            "androidstudio",
            "apache",
            "aws",
            "cypress",
            "framermotion",
            "graphql",
            "java",
            "kotlin",
            "nextjs",
            "nodejs",
            "opencv",
            "playwright",
            "python",
            "pytorch",
            "react",
            "ruby",
            "storybook",
            "tensorflow",
            "typescript",
            "typescript",
            "tensorflow",
            "storybook",
            "ruby",
            "react",
            "pytorch",
            "python",
            "playwright",
            "opencv",
            "nodejs",
            "nextjs",
            "kotlin",
            "java",
            "graphql",
            "framermotion",
            "cypress",
            "aws",
            "apache",
            "androidstudio",
        ],
    };

    const moveRight = useTransform(scrollYProgress, [0, 1], ["-32.5%", "30%"]);
    const moveLeft = useTransform(scrollYProgress, [0, 1], ["-12.5%", "-50%"]);
    const moveDown = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const movingBannersUpperHalf = text.contentList
        .slice(0, Math.floor(text.contentList.length / 2))
        .map((t) => (
            <S.Img
                src={`${BucketUrlPrefix}/projects/${t}.png`}
                height="17px"
                alt=""
                loading="lazy"
                style={{ filter: "grayscale(100%)" }}
            />
        ));

    const movingBannersBottomHalf = text.contentList
        .slice(Math.floor(text.contentList.length / 2), text.contentList.length)
        .map((t) => (
            <S.Img
                src={`${BucketUrlPrefix}/projects/${t}.png`}
                height="17px"
                alt=""
                loading="lazy"
            />
        ));
    return (
        <S.Container ref={ref}>
            <S.H1>PROJECTS</S.H1>
            <div style={{ overflow: "hidden", padding: "5rem 0" }}>
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
