import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';

import type { IngredientsType } from 'enums/Ingredients';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IngredientId } from 'api/Ingredients/types';

export const INGREDIENT_LIST_WIDGET_KEY = 'ingredientList';
export const ingredientListSlice = createSlice({
  name: INGREDIENT_LIST_WIDGET_KEY,
  initialState: initState,
  reducers: {
    setActualType: (state, { payload }: PayloadAction<IngredientsType>) => {
      state.list.actual = payload;
    },
    setActualIngredient: (
      state,
      { payload }: PayloadAction<IngredientId | null>,
    ) => {
      state.ingredient.actual = payload;
    },
  },
});

export const { setActualType, setActualIngredient } =
  ingredientListSlice.actions;
