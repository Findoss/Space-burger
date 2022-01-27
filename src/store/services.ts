import {
  INGREDIENT_API_REDUCER_KEY,
  ingredientApi,
} from 'store/Ingredients/api';

export const serviceReducers = {
  [INGREDIENT_API_REDUCER_KEY]: ingredientApi.reducer,
};

export const serviceMiddleware = [ingredientApi.middleware];
