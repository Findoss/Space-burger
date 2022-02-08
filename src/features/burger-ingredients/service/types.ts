import type { IngredientId } from 'shared/api/ingredient/types';
import type { IngredientsType } from 'enums/ingredient';

export type initType = {
  list: {
    types: IngredientsType[];
    actual: IngredientsType;
  };
  ingredient: { actual: IngredientId | null };
};
