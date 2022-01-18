import type { ReactChild } from 'react';

export type Props = {
  children: ReactChild;
  onClick: () => void;
  className?: string;
};
