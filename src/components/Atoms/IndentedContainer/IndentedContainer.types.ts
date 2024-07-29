import { ReactNode } from 'react';

export interface IndentedContainerProps {
  [x: string]: ReactNode;
  index?: number;
  title?: string;
  id?: string;
}
