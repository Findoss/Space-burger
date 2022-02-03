import { createAsyncThunk } from '@reduxjs/toolkit';

import { resolveIngredients } from 'api/Ingredient';

export const fetchIngredientAll = createAsyncThunk(
  'ingredient/fetchAll',
  async () => {
    try {
      const data = await resolveIngredients();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);
