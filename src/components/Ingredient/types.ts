import type { SyntheticEvent } from 'react';

export type Props = {
  id: string;
  price: number;
  name: string;
  image: string;
  count?: number;
  extraClass?: string;
  onClick?: (e: SyntheticEvent) => void;
};
