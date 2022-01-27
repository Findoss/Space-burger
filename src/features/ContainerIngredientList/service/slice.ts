import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';
import { fetchIngredientAll } from './thunk';

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIngredientAll.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(fetchIngredientAll.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.ingredients = payload ?? initState.ingredients;
    });

    builder.addCase(fetchIngredientAll.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});
