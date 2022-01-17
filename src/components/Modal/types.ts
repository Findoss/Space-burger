import { ReactChild } from 'react';

export type Props = {
  selector?: string;
  open?: boolean;
  children?: ReactChild;
  onClose?: () => void;
  className?: string;
};
