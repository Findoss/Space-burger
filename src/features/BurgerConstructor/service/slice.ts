import { uuid } from 'utils/uuid';
import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IngredientId } from 'api/Ingredients/types';

export const WIDGET_BURGER_CONSTRUCTOR = 'burgerConstructor';
export const burgerConstructorSlice = createSlice({
  name: WIDGET_BURGER_CONSTRUCTOR,
  initialState: initState,
  reducers: {
    toggleModalOrder: (state) => {
      state.order.modalIsOpen = !state.order.modalIsOpen;
    },
    addIngredientOrder: (state, { payload }: PayloadAction<IngredientId>) => {
      state.order.ingredients.push({ id: payload, key: uuid() });
    },
    removeIngredientOrder: (
      state,
      { payload }: PayloadAction<IngredientId>,
    ) => {
      state.order.ingredients = state.order.ingredients.filter(
        ({ id }) => payload !== id,
      );
    },
  },
});

export const { toggleModalOrder, addIngredientOrder, removeIngredientOrder } =
  burgerConstructorSlice.actions;
