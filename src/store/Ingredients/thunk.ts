import { createAsyncThunk } from '@reduxjs/toolkit';

import { resolveIngredients } from 'api/Ingredient';

export const fetchIngredientAll = createAsyncThunk(
  'ingredient/fetchAll',
  async () => await resolveIngredients(),
);
