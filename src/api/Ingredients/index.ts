import { normalize } from 'normalizr';
import { httpClient } from '../../plugins/axios';
import { API_URL } from '../../constants/index';

import { formatIngredients } from './format';
import { ingredientsSchema } from './entity';

import type { Resolver } from '../types';
import type { IngredientsEntity, IngredientsRaw } from './types';

import mockIngredients from './__mocks__/Ingredients.json';

export const resolveIngredients: Resolver<
  void,
  IngredientsEntity
> = async () => {
  try {
    // const raw = mockIngredients;
    const raw = await httpClient.get<void, IngredientsRaw>(
      `${API_URL}/ingredients`,
    );
    const formatted = formatIngredients(raw);
    const result = normalize(formatted, ingredientsSchema);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
