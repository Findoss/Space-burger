import { selectIngredientById } from 'entities/ingredient/model/selectors';
import { RootState, WIDGETS } from 'app/store/store';
import { WIDGET_BURGER_CONSTRUCTOR } from './slice';
import { IngredientsType } from 'shared/enums/ingredient';

import type { IngredientId } from 'shared/api/ingredient/types';

export const getBurgerConstructorWidget = (state: RootState) =>
  state[WIDGETS][WIDGET_BURGER_CONSTRUCTOR];

export const selectIsModalOpen = (state: RootState) =>
  getBurgerConstructorWidget(state).modalIsOpen;

export const selectOrder = (state: RootState) => {
  const { bun } = getBurgerConstructorWidget(state).order;
  const ingredients = getBurgerConstructorWidget(state).order.ingredients.map(
    (v) => v.id,
  );

  if (bun !== null) {
    ingredients.push(bun);
    ingredients.push(bun);
  }

  return ingredients;
};

export const selectOrderIngredients = (state: RootState) => {
  return getBurgerConstructorWidget(state).order.ingredients.map(
    ({ id, key }) => {
      const raw = selectIngredientById(id)(state);
      return { ...raw, key };
    },
  );
};

export const selectOrderBun = (state: RootState) => {
  const id = getBurgerConstructorWidget(state).order.bun;
  if (id !== null) {
    const raw = selectIngredientById(id)(state);
    return {
      thumbnail: raw.imageMobile,
      price: raw.price,
      text: raw.name,
    };
  }
  return undefined;
};

export const selectOrderFilling = (state: RootState) => {
  return selectOrderIngredients(state)
    .filter((ingredient) => {
      return ingredient.type !== IngredientsType.bells;
    })
    .map((ingredient) => {
      return {
        key: ingredient.key,
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

  const sumBun = selectOrderBun(state)?.price ?? 0;

  return sumBun * 2 + sumFilling;
};

export const selectCountIngredients = (state: RootState) => {
  return selectOrder(state).reduce((acc: Record<string, number>, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});
};

export const selectCountIngredientById =
  (id: IngredientId) => (state: RootState) => {
    return selectCountIngredients(state)[id];
  };
