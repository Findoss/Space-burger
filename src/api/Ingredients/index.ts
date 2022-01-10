import { normalize } from 'normalizr';
import { httpClient } from '../../plugins/axios';
import { API_URL } from '../../constants/index';

import { formatIngredients } from './format';
import { ingredientsSchema } from './entity';

import mockIngredients from './__mocks__/Ingredients.json';

import type { Resolver } from '../types';
import type { IngredientsEntity } from './types';

export const resolveIngredients: Resolver<
  void,
  IngredientsEntity
> = async () => {
  try {
    // const raw = await httpClient.get(`${API_URL}/ingredients`);
    const raw = mockIngredients;
    const formatted = formatIngredients(raw);
    const result = normalize(formatted, ingredientsSchema);

    return result;
  } catch (error) {
    console.log(error);
  }
};
