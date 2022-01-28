import { RootState } from 'store/store';
import { IngredientsType } from 'enums/Ingredients';

export const getIngredientCollection = (state: RootState) => state.ingredients;

export const selectIngredients = (state: RootState) =>
  getIngredientCollection(state).ingredients.entities.ingredients;

export const selectAllIngredients = (state: RootState) =>
  Object.values(selectIngredients(state))
    .filter(({ type }) => type === IngredientsType.filling)
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
