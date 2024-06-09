import useEmblaCarousel from "embla-carousel-react";
import {
  EmblaContainer,
  EmblaDiv,
  EmblaSlide,
  EmblaViewport,
} from "./Carousel.styles";

import { useState } from "react";
import { Dots } from "../NavigationDots/NavigationDots";
import { motion } from "framer-motion";

export const Carousel = (props: any) => {
  const sourceAnimationVariant = {
    initial: {
      scale: 1.3,
      opacity: 0.0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };
  const [emblaRef, emblaApi] = useEmblaCarousel();

  // Sets the selected index
  const [selectedIdx, setSelectedIdx] = useState(0);
  emblaApi?.on("select", () => setSelectedIdx(emblaApi?.selectedScrollSnap));

  const scrollToSlide = (idx: number): void => {
    emblaApi?.scrollTo(idx);
  };

  return (
    <EmblaDiv>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer isMobile={props.isMobile}>
          <EmblaSlide key={1}>
            {/* <video
                            src="https://ashanpw-asset-bucket.s3.amazonaws.com/ProjectWindOpening.mp4"
                            width="100%"
                            height="100%"
                            autoPlay={true}
                            controls={false}
                            loop={true}
                            muted={true}
                        /> */}
            <motion.img
              src="https://fastly.picsum.photos/id/1019/1920/1080.jpg?hmac=XGm3xPMZTa3H-YXR0qxs91ClJOdn43Ei0xRbGTpq6wA"
              alt=""
              width="100%"
              height="100%"
              variants={sourceAnimationVariant}
              initial="initial"
              whileInView="animate"
            />
          </EmblaSlide>
          <EmblaSlide key={2}>Slide 2</EmblaSlide>
          <EmblaSlide key={3}>Slide 3</EmblaSlide>
        </EmblaContainer>
      </EmblaViewport>

      <Dots selectedIdx={selectedIdx} size={3} onClickFn={scrollToSlide} />
    </EmblaDiv>
  );
};
