import useEmblaCarousel from "embla-carousel-react";
import {
    EmblaContainer,
    EmblaDiv,
    EmblaSlide,
    EmblaViewport,
} from "./Carousel.styles";

import { useState } from "react";
import { Dots } from "../../Atoms/NavigationDots/NavigationDots";
import { motion } from "framer-motion";
import { SourceAnimationVariants } from "../../../utils/Constants";

export const Carousel = (props: any) => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    // Sets the selected index
    const [selectedIdx, setSelectedIdx] = useState(0);
    emblaApi?.on("select", () => setSelectedIdx(emblaApi?.selectedScrollSnap));

    const scrollToSlide = (idx: number): void => {
        emblaApi?.scrollTo(idx);
    };

    const gg = props.mediaList.map((media: any, idx: number) => {
        const imgSrcSet = [
            `${media.src}-large.webp 1920w`,
            `${media.src}-medium.webp 1280w`,
            `${media.src}-small.webp 768w`,
        ];
        const imgFallBackSrc = `${media.src}.jpg`;
        const videoSrcSet = [
            `${media.src}-large.webm 1920w`,
            `${media.src}-medium.webm 1280w`,
            `${media.src}-small.webm 768w`,
        ];
        const videoFallBackSrc = `${media.src}.mp4`;

        return (
            <EmblaSlide key={idx}>
                {media.type === "video" && (
                    <video
                        autoPlay={true}
                        controls={false}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="100%"
                    >
                        <motion.source
                            src={videoSrcSet.join(", ")}
                            style={{ aspectRatio: "16/9" }}
                            initial="initial"
                            whileInView="animate"
                            variants={SourceAnimationVariants}
                        />
                        <motion.source
                            src={videoFallBackSrc}
                            style={{ aspectRatio: "16/9" }}
                            initial="initial"
                            whileInView="animate"
                            variants={SourceAnimationVariants}
                        />
                        <motion.video
                            src={videoFallBackSrc}
                            style={{ aspectRatio: "16/9" }}
                            initial="initial"
                            whileInView="animate"
                            variants={SourceAnimationVariants}
                        />
                    </video>
                )}

                {media.type === "image" && (
                    <picture>
                        <motion.source
                            srcSet={imgSrcSet.join(", ")}
                            style={{ aspectRatio: "16/9" }}
                            width="100%"
                            height="100%"
                            variants={SourceAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                        />
                        <motion.source
                            srcSet={`${imgFallBackSrc} 1920w`}
                            style={{ aspectRatio: "16/9" }}
                            width="100%"
                            height="100%"
                            variants={SourceAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                        />
                        <motion.img
                            src={`${imgFallBackSrc}`}
                            alt="A rad wolf"
                            style={{ aspectRatio: "16/9" }}
                            width="100%"
                            height="100%"
                            variants={SourceAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                        />
                    </picture>
                )}
            </EmblaSlide>
        );
    });

    return (
        <EmblaDiv>
            <EmblaViewport ref={emblaRef}>
                <EmblaContainer isMobile={props.isMobile}>{gg}</EmblaContainer>
            </EmblaViewport>

            <Dots
                selectedIdx={selectedIdx}
                size={props.mediaList.length}
                onClickFn={scrollToSlide}
            />
        </EmblaDiv>
    );
};
