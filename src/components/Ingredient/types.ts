import type { SyntheticEvent } from 'react';

export type Props = {
  id: string;
  price: number;
  name: string;
  image: string;
  count?: number;
  className?: string;
  onClick?: (e: SyntheticEvent) => void;
};