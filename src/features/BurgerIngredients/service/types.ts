import type { IngredientId } from 'api/Ingredients/types';
import type { IngredientsType } from 'enums/Ingredients';

export type initType = {
  list: {
    types: IngredientsType[];
    actual: IngredientsType;
  };
  ingredient: { actual: IngredientId | null };
};
