import { IngredientsType } from 'enums/Ingredients';
import type { initType } from './types';

export const initState: initType = {
  burgerConstructor: {
    bun: '',
    ingredients: [],
  },
  burgerIngredients: {
    types: Object.values(IngredientsType),
  },
};
