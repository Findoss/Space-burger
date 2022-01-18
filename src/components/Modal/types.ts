import { ReactChild } from 'react';

export type Props = {
  children?: ReactChild;
  closeBackground?: boolean;
  onClick?: () => void;
  className?: string;
};
