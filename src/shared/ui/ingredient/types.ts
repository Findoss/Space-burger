import type { SyntheticEvent } from 'react';

export type Props = {
  testId?: string;
  id: string;
  price: number;
  name: string;
  image: string;
  count?: number;
  role?: string;
  extraClass?: string;
  onClick?: (e: SyntheticEvent) => void;
};
