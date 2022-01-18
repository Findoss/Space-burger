import { ReactChild } from 'react';

export type Props = {
  children?: ReactChild;
  closeBackground?: boolean;
  closeEscape?: boolean;
  onClose?: () => void;
  className?: string;
};
