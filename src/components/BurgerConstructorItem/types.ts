export type Props = {
  thumbnail: string;
  price: number;
  text: string;
  isLocked?: boolean;
  handleClose?: () => void;
  type?: 'bottom' | 'top';
};
