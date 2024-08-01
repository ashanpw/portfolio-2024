import { ReactElement, useEffect, useRef, useState } from 'react';
import { LazyLoadedVideoProps } from './LazyLoadedVideo.types';
import { motion } from 'framer-motion';
import { SourceAnimationVariants } from '../../../utils/Constants';

export const LazyLoadedVideo = (props: LazyLoadedVideoProps) => {
  const { aspectRatio, sources } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const defaultSrcSet = [
    { size: 'large', minScreenSize: '1500px' },
    { size: 'medium', minScreenSize: '750px' },
    { size: 'small', minScreenSize: '0' },
  ];

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(video);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const sourceList = sources.map(() => {
    let outputSrcList: ReactElement | any = [];
    if (isInView) {
      sources.forEach((source) => {
        if (source.useSrcSet) {
          defaultSrcSet.forEach((item) => {
            outputSrcList.push(
              <source
                key={`${source.src}-${item.size}.${source.type}`}
                src={`${source.src}-${item.size}.${source.type}`}
                type={`video/${source.type}`}
                media={`(min-width: ${item.minScreenSize})`}
                style={{ aspectRatio: aspectRatio }}
                aria-label={props.ariaLabel}
              />,
            );
          });
        } else {
          outputSrcList.push(
            <source
              key={`${source.src}.${source.type}`}
              src={`${source.src}.${source.type}`}
              type={source.type}
              style={{ aspectRatio: aspectRatio }}
              aria-label={props.ariaLabel}
            />,
          );
        }
      });
    }

    return outputSrcList;
  });

  return (
    <motion.video
      ref={videoRef}
      autoPlay={isInView}
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
      {sourceList}
    </motion.video>
  );
};
