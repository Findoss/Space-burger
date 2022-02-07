import { IngredientsType } from 'enums/Ingredient';
import type { initType } from './types';

export const initState: initType = {
  list: {
    types: Object.values(IngredientsType),
    actual: IngredientsType.bells,
  },
  ingredient: {
    actual: null,
  },
};
