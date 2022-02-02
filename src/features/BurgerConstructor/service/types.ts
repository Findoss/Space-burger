import { IngredientId } from 'api/Ingredients/types';

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
