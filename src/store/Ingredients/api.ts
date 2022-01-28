import { createApi } from '@reduxjs/toolkit/query/react';
import { httpClient } from 'plugins/axios';
import { API_URL } from 'constants/index';

import type { IngredientsRaw } from '../../api/Ingredients/types';

export const INGREDIENT_API_REDUCER_KEY = 'ingredientApi';
export const ingredientApi = createApi({
  reducerPath: INGREDIENT_API_REDUCER_KEY,
  baseQuery: httpClient({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getIngredients: builder.query<IngredientsRaw, string>({
      query: () => ({
        url: `ingredients`,
        method: 'GET',
      }),
    }),
  }),
});

export const { endpoints, useGetIngredientsQuery } = ingredientApi;
