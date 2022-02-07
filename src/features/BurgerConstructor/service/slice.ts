import { uuid } from 'utils/uuid';
import { swap } from 'utils/swap';
import { createSlice } from '@reduxjs/toolkit';

import { IngredientsType } from 'enums/Ingredient';
import { initOrder, initState } from './state';
import { fetchNewOrder } from 'store/Order/thunk';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IngredientId } from 'api/Ingredient/types';

export const WIDGET_BURGER_CONSTRUCTOR = 'burgerConstructor';
export const burgerConstructorSlice = createSlice({
  name: WIDGET_BURGER_CONSTRUCTOR,
  initialState: initState,
  reducers: {
    toggleModalOrder: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
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
    resetOrder: (state) => {
      state.order = initOrder;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNewOrder.fulfilled, (state) => {
      state.order = initOrder;
    });
  },
});

export const {
  resetOrder,
  toggleModalOrder,
  addIngredientOrder,
  removeIngredientOrder,
  swapIngredientOrder,
} = burgerConstructorSlice.actions;
