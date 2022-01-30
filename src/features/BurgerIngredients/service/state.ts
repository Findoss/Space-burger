import { IngredientsType } from 'enums/Ingredients';
import type { initType } from './types';

export const initState: initType = {
  list: {
    types: Object.values(IngredientsType),
    actual: '',
  },
};
