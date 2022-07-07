import { ReactChild } from 'react';

export type Props = {
  title?: string;
  children?: ReactChild;
  closeBackground?: boolean;
  closeEscape?: boolean;
  onClose?: () => void;
  extraClass?: string;
};
