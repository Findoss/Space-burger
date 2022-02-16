import { IngredientsType } from 'shared/enums/ingredient';
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
