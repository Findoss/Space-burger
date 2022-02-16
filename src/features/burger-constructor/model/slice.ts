import { swap } from 'shared/libs/array/swap';
import { createSlice, nanoid } from '@reduxjs/toolkit';

import { initOrder, initState } from './state';
import { fetchNewOrder } from 'entities/order/thunk';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IngredientId } from 'shared/api/ingredient/types';

export const WIDGET_BURGER_CONSTRUCTOR = 'burgerConstructor';
export const burgerConstructorSlice = createSlice({
  name: WIDGET_BURGER_CONSTRUCTOR,
  initialState: initState,
  reducers: {
    toggleModalOrder: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
    addBunOrder: (state, { payload }: PayloadAction<{ id: IngredientId }>) => {
      state.order.bun = payload.id;
    },
    addIngredientOrder: {
      reducer: (
        state,
        {
          payload,
        }: PayloadAction<{
          id: IngredientId;
          key: string;
        }>,
      ) => {
        state.order.ingredients.unshift(payload);
      },
      prepare: (payload: { id: IngredientId }) => {
        const key = nanoid();
        return { payload: { key, id: payload.id } };
      },
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
  addBunOrder,
  addIngredientOrder,
  removeIngredientOrder,
  swapIngredientOrder,
  toggleModalOrder,
} = burgerConstructorSlice.actions;
