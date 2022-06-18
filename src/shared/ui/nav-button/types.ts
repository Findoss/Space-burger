import type { ReactNode, SyntheticEvent } from 'react';

export type Props = {
  to: string;
  title: string;
  icon?: ReactNode;
  active?: boolean;
  extraClass?: string;
  onClick?: (() => void) | ((e: SyntheticEvent) => void);
};
