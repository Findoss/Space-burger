import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persist } from './persist';

import {
  ingredientsCollection,
  COLLECTION_INGREDIENT,
} from 'entities/ingredient/model/slice';
import { orderCollection, COLLECTION_ORDER } from 'entities/order/model/slice';
import { userCollection, COLLECTION_USER } from 'entities/user/model/slice';

import {
  burgerIngredientsSlice,
  WIDGET_BURGER_INGREDIENTS,
} from 'features/burger-ingredients/model/slice';

import {
  burgerConstructorSlice,
  WIDGET_BURGER_CONSTRUCTOR,
} from 'features/burger-constructor/model/slice';

import { COLLECTION_WS, WsSlice } from 'entities/ws/model/slice';

export const collectionReducers = combineReducers({
  [COLLECTION_USER]: persistReducer(
    persist(`${COLLECTION_USER}`),
    userCollection.reducer,
  ),
  [COLLECTION_ORDER]: orderCollection.reducer,
  [COLLECTION_INGREDIENT]: ingredientsCollection.reducer,
  [COLLECTION_WS]: WsSlice.reducer,
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
