import { RootState } from 'store/store';
import { IngredientsType } from 'enums/Ingredients';

export const getIngredientCollection = (state: RootState) =>
  state.collections.ingredients;

export const selectIngredients = (state: RootState) =>
  getIngredientCollection(state).entities.ingredients;

export const selectAllIngredients = (state: RootState) =>
  Object.values(selectIngredients(state)).map(({ id, image, name, price }) => ({
    id,
    image,
    name,
    price,
  }));

export const selectIngredientsByType = (
  state: RootState,
  ingredientType: IngredientsType,
) =>
  Object.values(selectIngredients(state))
    .filter(({ type }) => type === ingredientType)
    .map(({ id, image, name, price }) => ({
      id,
      image,
      name,
      price,
    }));

export const selectIngredientStatus = (state: RootState) =>
  getIngredientCollection(state).status;

export const selectIngredientById = (state: RootState, id: string) => {
  return selectIngredients(state)[id];
};
