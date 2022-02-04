import { IngredientId } from 'api/Ingredient/types';

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
