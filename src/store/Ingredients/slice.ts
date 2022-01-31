import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';
import { fetchIngredientAll } from './thunk';

export const INGREDIENT_COLLECTION_KEY = 'ingredients';
export const ingredientsCollection = createSlice({
  name: INGREDIENT_COLLECTION_KEY,
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIngredientAll.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(fetchIngredientAll.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.result = payload.result;
      state.entities = payload.entities;
    });

    builder.addCase(fetchIngredientAll.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});
