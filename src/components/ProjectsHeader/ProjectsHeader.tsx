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
            "SOME STUFF IVE WORKED ON",
            "FRONTEND BACKEND COMPUTER VISION ANDROID",
            "WEB APPLICATIONS BACKEND SYSTEMS & APIS",
            "MANY MORE PROJECTS TO COME",
            "SOME STUFF IVE WORKED ON",
            "FRONTEND BACKEND COMPUTER VISION ANDROID",
            "WEB APPLICATIONS BACKEND SYSTEMS & APIS",
            "MANY MORE PROJECTS TO COME",
        ],
    };
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log("y changed to", latest);
    });
    const moveLeft = useTransform(scrollYProgress, [0, 1], ["-50%", "500%"]);
    const moveRight = useTransform(scrollYProgress, [0, 1], ["50%", "-300%"]);
    const moveDown = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const movingBanners = text.contentList.map((t, idx) => (
        <S.Title
            style={{
                rotate: idx % 2 === 0 ? 15 : -15,
                transformOrigin: "center",
                translateX: idx % 2 === 0 ? moveLeft : moveRight,
                translateY: moveDown,
            }}
        >
            {t}
        </S.Title>
    ));
    return (
        <S.Container ref={ref}>
                <S.H1>PROJECTS</S.H1>
            <div style={{overflow: "hidden"} }>{movingBanners}</div>
        </S.Container>
    );
};
