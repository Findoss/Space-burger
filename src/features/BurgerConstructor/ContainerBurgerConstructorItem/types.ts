import type { IngredientId } from 'api/Ingredients/types';

export type Props = {
  id: IngredientId;

  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
};

export type DragObject = {
  id: string;
  index: number;
};
