import {
  INGREDIENT_API_REDUCER_KEY,
  ingredientApi,
} from 'store/Ingredients/api';

import { ingredientsSlice } from 'features/ContainerIngredientList/service/slice';

export const serviceReducers = {
  [INGREDIENT_API_REDUCER_KEY]: ingredientApi.reducer,
  ingredients: ingredientsSlice.reducer,
};

export const serviceMiddleware = [ingredientApi.middleware];
