import { RootState, WIDGETS } from 'store/store';
import { selectIngredientById } from 'store/Ingredients/selectors';
import { IngredientsType } from 'enums/Ingredients';
import { INGREDIENT_LIST_WIDGET_KEY } from './slice';

export const getIngredientListWidget = (state: RootState) =>
  state[WIDGETS][INGREDIENT_LIST_WIDGET_KEY];

// export const calcSumIngredient = (state: RootState) => {
//   const { bun, ingredients } = getIngredientListWidget(state).burgerConstructor;

//   const sumIngredients = ingredients.reduce(
//     (acc, id) => (acc += selectIngredientById(state, id)?.price ?? 0),
//     0,
//   );

//   const sumBun = (selectIngredientById(state, bun)?.price ?? 0) * 2;

//   return sumBun + sumIngredients;
// };

export const selectTypesIngredient = (state: RootState) =>
  getIngredientListWidget(state).list.types;
