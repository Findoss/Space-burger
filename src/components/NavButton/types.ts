import type { ReactNode, SyntheticEvent } from 'react';

export type Props = {
  to: string;
  title: string;
  icon?: ReactNode;
  extraClass?: string;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
};
