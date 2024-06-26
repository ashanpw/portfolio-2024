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
import { SourceAnimationVariant } from "../../../utils/Constants";

export const Carousel = (props: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  // Sets the selected index
  const [selectedIdx, setSelectedIdx] = useState(0);
  emblaApi?.on("select", () => setSelectedIdx(emblaApi?.selectedScrollSnap));

  const scrollToSlide = (idx: number): void => {
    emblaApi?.scrollTo(idx);
  };

  const gg = props.mediaList.map((media: any, idx: number) => {
    return (
      <EmblaSlide key={idx}>
        {media.type === "video" && (
          <motion.video
            src={media.src}
            width="100%"
            height="100%"
            autoPlay={true}
            controls={false}
            loop={true}
            muted={true}
            initial="initial"
            whileInView="animate"
            variants={SourceAnimationVariant}
          />
        )}

        {media.type === "image" && (
          <motion.img
            src={media.src}
            style={{ aspectRatio: "16/9" }}
            width="100%"
            height="100%"
            variants={SourceAnimationVariant}
            initial="initial"
            whileInView="animate"
          />
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
