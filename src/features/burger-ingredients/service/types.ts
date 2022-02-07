import type { IngredientId } from 'api/Ingredient/types';
import type { IngredientsType } from 'enums/Ingredient';

export type initType = {
  list: {
    types: IngredientsType[];
    actual: IngredientsType;
  };
  ingredient: { actual: IngredientId | null };
};
