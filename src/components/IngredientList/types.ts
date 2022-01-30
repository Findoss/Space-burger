import type { ReactNode } from 'react';

export type Props = {
  title?: string;
  children?: ReactNode;
  extraClass?: string;
  onClick?: (id: string) => void;
};
