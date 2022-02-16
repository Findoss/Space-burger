import { COLLECTIONS } from 'app/store/store';
import { COLLECTION_INGREDIENT } from './slice';
import type { RootState } from 'app/store/store';
import type { IngredientsType } from 'shared/enums/ingredient';
import type { IngredientId } from 'shared/api/ingredient/types';

export const getIngredientCollection = (state: RootState) =>
  state[COLLECTIONS][COLLECTION_INGREDIENT];

export const getIdIngredients = (state: RootState) =>
  getIngredientCollection(state).result;

export const getEntityIngredients = (state: RootState) =>
  getIngredientCollection(state).entities.ingredients;

export const selectIngredientById =
  (id: IngredientId) => (state: RootState) => {
    return getEntityIngredients(state)[id] || {};
  };

export const selectIngredientsByType =
  (ingredientType: IngredientsType) => (state: RootState) =>
    getIdIngredients(state).filter(
      (id) => selectIngredientById(id)(state).type === ingredientType,
    );

export const selectIngredientStatus = (state: RootState) =>
  getIngredientCollection(state).status;
