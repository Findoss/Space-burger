// import {
//   INGREDIENT_API_REDUCER_KEY,
//   ingredientApi,
// } from 'store/Ingredients/api';

// import { ingredientsSlice } from 'features/BurgerIngredients/service/slice';

import { combineReducers } from '@reduxjs/toolkit';
import {
  ingredientsCollection,
  INGREDIENT_COLLECTION_KEY,
} from './Ingredients/slice';

import {
  ingredientListSlice,
  INGREDIENT_LIST_WIDGET_KEY,
} from 'features/BurgerIngredients/service/slice';

export const collectionReducers = combineReducers({
  [INGREDIENT_COLLECTION_KEY]: ingredientsCollection.reducer,
});

export const widgetReducers = combineReducers({
  [INGREDIENT_LIST_WIDGET_KEY]: ingredientListSlice.reducer,
});

export const serviceReducers = combineReducers({
  // [INGREDIENT_API_REDUCER_KEY]: ingredientApi.reducer,
});

export const serviceMiddleware = [
  // ingredientApi.middleware
];
