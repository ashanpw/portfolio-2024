import useEmblaCarousel from 'embla-carousel-react';
import { EmblaContainer, EmblaDiv, EmblaSlide, EmblaViewport } from './Carousel.styles';

import { useState } from 'react';
import { Dots } from '../../Atoms/NavigationDots/NavigationDots';
import { motion } from 'framer-motion';
import { SourceAnimationVariants } from '../../../utils/Constants';
import { LazyLoadedVideo } from '../../Atoms/LazyLoadedVideo/LazyLoadedVideo';

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

    return (
      <EmblaSlide key={idx}>
        {media.type === 'video' && (
          <LazyLoadedVideo
            sources={[
              { src: media.src, type: 'webm', useSrcSet: true },
              { src: media.src, type: 'mp4', useSrcSet: false },
            ]}
            ariaLabel={media.alt}
            aspectRatio="16/9"
          />
        )}

        {media.type === 'image' && (
          <picture aria-label={media.alt}>
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
              alt={media.alt}
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
