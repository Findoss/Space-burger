import type { ReactChild } from 'react';

export type Props = {
  children: ReactChild;
  onClick: () => void;
  closeEscape?: boolean;
  className?: string;
};
