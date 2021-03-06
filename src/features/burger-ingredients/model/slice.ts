import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';

import type { IngredientsType } from 'shared/enums/ingredient';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IngredientId } from 'shared/api/ingredient/types';

export const WIDGET_BURGER_INGREDIENTS = 'burgerIngredients';
export const burgerIngredientsSlice = createSlice({
  name: WIDGET_BURGER_INGREDIENTS,
  initialState: initState,
  reducers: {
    setActualType: (state, { payload }: PayloadAction<IngredientsType>) => {
      state.list.actual = payload;
    },
    resetActualType: (state) => {
      state.list.actual = initState.list.actual;
    },
    setActualIngredient: (
      state,
      { payload }: PayloadAction<IngredientId | null>,
    ) => {
      state.ingredient.actual = payload;
    },
  },
});

export const { setActualType, setActualIngredient, resetActualType } =
  burgerIngredientsSlice.actions;
