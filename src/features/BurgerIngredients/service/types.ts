import type { IngredientId } from 'api/Ingredients/types';
// import type { IngredientsType } from 'enums/Ingredients'; // TODO

export type initType = {
  burgerConstructor: {
    bun: IngredientId;
    ingredients: IngredientId[];
  };
  burgerIngredients: {
    types: string[]; // TODO IngredientsType
  };
};
