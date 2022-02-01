import { IngredientId } from 'api/Ingredients/types';

export type Props = {
  id: IngredientId;
  key?: string;
  thumbnail: string;
  price: number;
  text: string;
  isLocked?: boolean;
  onRemove?: () => void;
  type?: 'bottom' | 'top';
};
