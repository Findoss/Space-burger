import type { ReactNode } from 'react';

export type Props = {
  tabs: {
    key: string;
    title: ReactNode;
  }[];
  className?: string;
};
