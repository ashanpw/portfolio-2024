export interface LazyLoadedVideoProps {
  sources: { src: string; type: string; useSrcSet?: boolean }[];
  aspectRatio: string;
  //   poster: string; commented for now
}
