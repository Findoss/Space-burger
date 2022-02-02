import { selectIngredientById } from 'store/Ingredients/selectors';
import { RootState, WIDGETS } from 'store/store';
import { WIDGET_BURGER_CONSTRUCTOR } from './slice';
import { IngredientsType } from 'enums/Ingredients';
import type { IngredientId } from 'api/Ingredients/types';
import { uuid } from 'utils/uuid';

export const getBurgerConstructorWidget = (state: RootState) =>
  state[WIDGETS][WIDGET_BURGER_CONSTRUCTOR];

export const selectIsModalOpen = (state: RootState) =>
  getBurgerConstructorWidget(state).order.modalIsOpen;

export const selectOrderIngredients = (state: RootState) => {
  return getBurgerConstructorWidget(state).order.ingredients.map(({ id }) => {
    return selectIngredientById(id)(state);
  });
};

export const selectOrderBun = (state: RootState) => {
  return (
    selectOrderIngredients(state)
      .filter((ingredient) => {
        return ingredient.type === IngredientsType.bells;
      })
      .map((ingredient) => {
        return {
          id: ingredient.id,
          thumbnail: ingredient.imageMobile,
          price: ingredient.price,
          text: ingredient.name,
        };
      })[0] ?? undefined
  );
};

export const selectOrderFilling = (state: RootState) => {
  return selectOrderIngredients(state)
    .filter((ingredient) => {
      return ingredient.type !== IngredientsType.bells;
    })
    .map((ingredient) => {
      // ! TODO DELETE map
      return {
        key: uuid(),
        id: ingredient.id,
        thumbnail: ingredient.imageMobile,
        price: ingredient.price,
        text: ingredient.name,
      };
    });
};

export const selectSumOrder = (state: RootState) => {
  const sumFilling = selectOrderFilling(state).reduce(
    (acc, ingredient) => (acc += ingredient.price),
    0,
  );

  const sumBun = selectOrderBun(state)?.price * 2 || 0;

  return sumBun + sumFilling;
};

export const selectCountIngredients = (state: RootState) => {
  return getBurgerConstructorWidget(state).order.ingredients.reduce(
    (acc: Record<string, number>, { id }) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    },
    {},
  );
};

export const selectCountIngredientById =
  (id: IngredientId) => (state: RootState) => {
    return selectCountIngredients(state)[id];
  };
