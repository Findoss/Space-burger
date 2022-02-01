import { IngredientId } from 'api/Ingredients/types';

export type initType = {
  order: {
    modalIsOpen: boolean;
    ingredients: {
      id: IngredientId;
      key: string;
    }[];
  };
};
