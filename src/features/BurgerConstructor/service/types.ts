import { IngredientId } from 'api/Ingredient/types';

export type initType = {
  order: {
    modalIsOpen: boolean;
    bun: IngredientId | null;
    ingredients: {
      id: IngredientId;
      key: string;
    }[];
  };
};
