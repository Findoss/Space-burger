import { RootState } from 'store/store';
import type { IngredientsType } from 'enums/Ingredient';
import type { IngredientId } from 'api/Ingredient/types';

export const getIngredientCollection = (state: RootState) =>
  state.collections.ingredients;

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
