import useEmblaCarousel from 'embla-carousel-react';
import { EmblaContainer, EmblaDiv, EmblaSlide, EmblaViewport } from './Carousel.styles';

import { useState } from 'react';
import { Dots } from '../../Atoms/NavigationDots/NavigationDots';
import { motion } from 'framer-motion';
import { SourceAnimationVariants } from '../../../utils/Constants';

export const Carousel = (props: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  // Sets the selected index
  const [selectedIdx, setSelectedIdx] = useState(0);
  emblaApi?.on('select', () => setSelectedIdx(emblaApi?.selectedScrollSnap));

  const scrollToSlide = (idx: number): void => {
    emblaApi?.scrollTo(idx);
  };

  const slides = props.mediaList.map((media: any, idx: number) => {
    const imgSrcSet = [
      `${media.src}-large.webp 1920w`,
      `${media.src}-medium.webp 1280w`,
      `${media.src}-small.webp 768w`,
    ];
    const imgFallBackSrc = `${media.src}.jpg`;
    const videoSrcSet = [`${media.src}-large.webm`, `${media.src}-medium.webm`, `${media.src}-small.webm`];
    const videoFallBackSrc = `${media.src}.mp4`;

    return (
      <EmblaSlide key={idx}>
        {media.type === 'video' && (
          <motion.video
            autoPlay={true}
            controls={false}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            initial="initial"
            whileInView="animate"
            variants={SourceAnimationVariants}
            preload="metadata"
          >
            <motion.source
              src={videoSrcSet[0]}
              type="video/webm"
              media="(min-width: 1500px)"
              style={{ aspectRatio: '16/9' }}
            />
            <motion.source
              src={videoSrcSet[1]}
              type="video/webm"
              media="(min-width: 750px)"
              style={{ aspectRatio: '16/9' }}
            />
            <motion.source
              src={videoSrcSet[2]}
              type="video/webm"
              media="(min-width: 0)"
              style={{ aspectRatio: '16/9' }}
            />
            <motion.source src={videoFallBackSrc} type="video/mp4" style={{ aspectRatio: '16/9' }} />
          </motion.video>
        )}

        {media.type === 'image' && (
          <picture>
            <motion.source
              srcSet={imgSrcSet.join(', ')}
              style={{ aspectRatio: '16/9' }}
              width="100%"
              height="100%"
              variants={SourceAnimationVariants}
              initial="initial"
              whileInView="animate"
            />
            <motion.source
              srcSet={`${imgFallBackSrc} 1920w`}
              style={{ aspectRatio: '16/9' }}
              width="100%"
              height="100%"
              variants={SourceAnimationVariants}
              initial="initial"
              whileInView="animate"
            />
            <motion.img
              src={`${imgFallBackSrc}`}
              alt="A rad wolf"
              style={{ aspectRatio: '16/9' }}
              width="100%"
              height="100%"
              variants={SourceAnimationVariants}
              initial="initial"
              whileInView="animate"
              loading="lazy"
            />
          </picture>
        )}
      </EmblaSlide>
    );
  });

  return (
    <EmblaDiv>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer isMobile={props.isMobile}>{slides}</EmblaContainer>
      </EmblaViewport>

      <Dots selectedIdx={selectedIdx} size={props.mediaList.length} onClickFn={scrollToSlide} />
    </EmblaDiv>
  );
};
