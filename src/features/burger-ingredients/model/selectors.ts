import { RootState, WIDGETS } from 'app/store/store';
import { WIDGET_BURGER_INGREDIENTS } from './slice';

export const getIngredientListWidget = (state: RootState) =>
  state[WIDGETS][WIDGET_BURGER_INGREDIENTS];

export const selectTypesIngredient = (state: RootState) =>
  getIngredientListWidget(state).list.types;

export const selectActualType = (state: RootState) =>
  getIngredientListWidget(state).list.actual;

export const selectActiveIngredient = (state: RootState) =>
  getIngredientListWidget(state).ingredient.actual;
