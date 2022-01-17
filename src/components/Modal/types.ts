import { ReactChild } from 'react';

export type Props = {
  open?: boolean;
  className?: string;
  children?: ReactChild;
  onClose?: () => void;
  onOpen?: () => void;
};
