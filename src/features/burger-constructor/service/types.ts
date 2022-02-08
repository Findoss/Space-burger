import { IngredientId } from 'shared/api/ingredient/types';

export type InitType = {
  modalIsOpen: boolean;
  order: InitOrder;
};

export type InitOrder = {
  bun: IngredientId | null;
  ingredients: {
    id: IngredientId;
    key: string;
  }[];
};
