import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';

export const INGREDIENT_LIST_WIDGET_KEY = 'ingredientList';
export const ingredientListSlice = createSlice({
  name: INGREDIENT_LIST_WIDGET_KEY,
  initialState: initState,
  reducers: {},
});
