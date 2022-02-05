import type { IngredientId } from 'api/Ingredient/types';

export type Props = {
  id: IngredientId;

  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
};

export type DragObject = {
  id: string;
  index: number;
};
