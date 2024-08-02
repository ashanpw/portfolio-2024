export interface Position {
  x: number;
  y: number;
}

export interface ImageData {
  id: string;
  position: Position;
  imgSrc: string;
  alt: string;
}
