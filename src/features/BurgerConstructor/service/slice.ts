import { uuid } from 'utils/uuid';
import { swap } from 'utils/swap';
import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IngredientId } from 'api/Ingredients/types';
import { IngredientsType } from 'enums/Ingredients';

export const WIDGET_BURGER_CONSTRUCTOR = 'burgerConstructor';
export const burgerConstructorSlice = createSlice({
  name: WIDGET_BURGER_CONSTRUCTOR,
  initialState: initState,
  reducers: {
    toggleModalOrder: (state) => {
      state.order.modalIsOpen = !state.order.modalIsOpen;
    },
    addIngredientOrder: (
      state,
      { payload }: PayloadAction<{ id: IngredientId; type: IngredientsType }>,
    ) => {
      if (payload.type === IngredientsType.bells) {
        state.order.bun = payload.id;
      } else {
        state.order.ingredients.unshift({ id: payload.id, key: uuid() });
      }
    },
    swapIngredientOrder: (
      state,
      { payload }: PayloadAction<{ dragIndex: number; hoverIndex: number }>,
    ) => {
      state.order.ingredients = swap(
        state.order.ingredients,
        payload.dragIndex,
        payload.hoverIndex,
      );
    },
    removeIngredientOrder: (
      state,
      { payload }: PayloadAction<IngredientId>,
    ) => {
      const index = state.order.ingredients.findIndex(
        ({ id }) => payload === id,
      );
      if (index !== -1) {
        state.order.ingredients.splice(index, 1);
      }
    },
  },
});

export const {
  toggleModalOrder,
  addIngredientOrder,
  removeIngredientOrder,
  swapIngredientOrder,
} = burgerConstructorSlice.actions;
