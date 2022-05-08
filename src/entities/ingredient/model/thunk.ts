import { createAsyncThunk } from '@reduxjs/toolkit';

import { resolveIngredients } from 'shared/api/ingredient';

export const fetchIngredientAll = createAsyncThunk(
  'ingredient/fetchAll',
  async () => resolveIngredients(),
);
