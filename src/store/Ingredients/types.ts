import type { IngredientsEntity } from 'api/Ingredients/types';

type RequestState = {
  status: 'pending' | 'fulfilled' | 'rejected';
};

export type initType = RequestState & IngredientsEntity;
