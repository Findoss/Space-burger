import { Reducer } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';

import { RESET_STATE_ACTION_TYPE } from './global/actions/resetState';

import { serviceReducers } from './services';

import type { RootState } from './store';

const reducers = {
  // [INGREDIENT_API_REDUCER_KEY]: ingredientApi.reducer,
  ...serviceReducers,
};

export const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};
