import { IngredientId } from 'api/Ingredients/types';

export type Props = {
  id?: IngredientId;
  thumbnail: string;
  price: number;
  text: string;
  isLocked?: boolean;
  handleClose?: () => void;
  type?: 'bottom' | 'top';
};
