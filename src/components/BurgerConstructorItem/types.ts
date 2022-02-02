export type Props = {
  key?: string;
  thumbnail: string;
  price: number;
  text: string;
  isLocked?: boolean;
  onRemove?: () => void;
  type?: 'bottom' | 'top';
};
