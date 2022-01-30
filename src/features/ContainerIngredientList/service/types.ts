import type { IngredientsEntity } from 'api/Ingredients/types';
export type RequestState = 'pending' | 'fulfilled' | 'rejected';

export type initType = {
  ingredients: IngredientsEntity;
  status: RequestState;
};
