import type { ReactNode, SyntheticEvent } from 'react';

export type Props = {
  className?: string;
  icon?: ReactNode;
  title: string;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
};
