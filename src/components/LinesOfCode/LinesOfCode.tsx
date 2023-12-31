import { useRef } from "react";
import { S } from "./LinesOfCode.styles";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";

const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
export const LinesOfCode = () => {
    const text = {
        title: "100K+",
        subtitle: "LINES OF CODE",
    };
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [-0.8, 1, 2, 2],
        smooth: 5,
    });

    return (
        <div ref={ref}>
            <S.Container>
                <S.Title>
                    <h1>{text.title}</h1>
                    <h2>{text.subtitle}</h2>
                </S.Title>
                <S.Grid>
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-100, 0),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                            justifySelf: "right",
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [-1200, 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/106/200/300.jpg?hmac=qnjqfh7hXrQF9MAA1T3JOgK3dhnLfxOo-HkzhyZoB2g"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                    <S.MotionImg
                        src="https://fastly.picsum.photos/id/215/200/300.jpg?hmac=Nt1epjkKo-29FLbrKGINDjceT_uNiqOG_pah7r52Wss"
                        style={{
                            x: randomIntFromInterval(-50, 200),
                            y: useTransform(
                                scrollYProgress,
                                [1, 0],
                                [randomIntFromInterval(-200, 500), 0]
                            ),
                        }}
                    />
                </S.Grid>
            </S.Container>
        </div>
    );
};
