export interface LazyLoadedVideoProps {
  sources: { src: string; type: string; useSrcSet?: boolean }[];
  aspectRatio: string;
  ariaLabel: string;
  poster?: string;
}
