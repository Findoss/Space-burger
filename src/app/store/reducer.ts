import { Reducer } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';

import { RESET_STATE_ACTION_TYPE } from './global/actions/resetState';

import {
  collectionReducers,
  widgetReducers,
  serviceReducers,
} from './services';

import type { RootState } from './store';

export const COLLECTIONS = 'collections';
export const WIDGETS = 'widgets';

export const combinedReducer = combineReducers({
  [COLLECTIONS]: collectionReducers,
  [WIDGETS]: widgetReducers,
});

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};
