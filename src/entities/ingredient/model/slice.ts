import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';
import { fetchIngredientAll } from './thunk';

export const COLLECTION_INGREDIENT = 'ingredients';
export const ingredientsCollection = createSlice({
  name: COLLECTION_INGREDIENT,
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
