// import {
//   INGREDIENT_API_REDUCER_KEY,
//   ingredientApi,
// } from 'store/Ingredients/api';

// import { ingredientsSlice } from 'features/BurgerIngredients/service/slice';

import { combineReducers } from '@reduxjs/toolkit';
import {
  ingredientsCollection,
  COLLECTION_INGREDIENT,
} from './Ingredients/slice';

import {
  burgerIngredientsSlice,
  WIDGET_BURGER_INGREDIENTS,
} from 'features/BurgerIngredients/service/slice';

import {
  burgerConstructorSlice,
  WIDGET_BURGER_CONSTRUCTOR,
} from 'features/BurgerConstructor/service/slice';

export const collectionReducers = combineReducers({
  [COLLECTION_INGREDIENT]: ingredientsCollection.reducer,
});

export const widgetReducers = combineReducers({
  [WIDGET_BURGER_INGREDIENTS]: burgerIngredientsSlice.reducer,
  [WIDGET_BURGER_CONSTRUCTOR]: burgerConstructorSlice.reducer,
});

export const serviceReducers = combineReducers({
  // [INGREDIENT_API_REDUCER_KEY]: ingredientApi.reducer,
});

export const serviceMiddleware = [
  // ingredientApi.middleware
];
