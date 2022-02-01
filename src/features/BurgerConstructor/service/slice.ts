import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';

export const WIDGET_BURGER_CONSTRUCTOR = 'burgerConstructor';
export const burgerConstructorSlice = createSlice({
  name: WIDGET_BURGER_CONSTRUCTOR,
  initialState: initState,
  reducers: {
    toggleModalOrder: (state) => {
      state.order.modalIsOpen = !state.order.modalIsOpen;
    },
  },
});

export const { toggleModalOrder } = burgerConstructorSlice.actions;
