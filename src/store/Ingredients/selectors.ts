import { RootState } from 'store/store';
import { IngredientsType } from 'enums/Ingredients';

export const getIngredientCollection = (state: RootState) =>
  state.collections.ingredients;

export const getIdIngredients = (state: RootState) =>
  getIngredientCollection(state).result;

export const selectIngredientById = (id: string) => (state: RootState) => {
  return selectIngredients(state)[id];
};

export const selectIngredientsByType =
  (ingredientType: IngredientsType) => (state: RootState) =>
    getIdIngredients(state).filter(
      (id) => selectIngredientById(id)(state).type === ingredientType,
    );

// /// // / / / // / / // /

export const selectIngredients = (state: RootState) =>
  getIngredientCollection(state).entities.ingredients;

export const selectAllIngredients = (state: RootState) =>
  Object.values(selectIngredients(state)).map(({ id, image, name, price }) => ({
    id,
    image,
    name,
    price,
  }));

// export const selectIngredientsByType = (
//   state: RootState,
//   ingredientType: IngredientsType,
// ) =>
//   Object.values(selectIngredients(state))
//     .filter(({ type }) => type === ingredientType)
//     .map(({ id, image, name, price }) => ({
//       id,
//       image,
//       name,
//       price,
//     }));

export const selectIngredientStatus = (state: RootState) =>
  getIngredientCollection(state).status;
