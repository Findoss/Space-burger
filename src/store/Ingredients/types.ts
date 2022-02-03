import type { IngredientsEntity } from 'api/Ingredient/types';

type RequestState = {
  status: 'pending' | 'fulfilled' | 'rejected';
};

export type initType = RequestState & IngredientsEntity;
