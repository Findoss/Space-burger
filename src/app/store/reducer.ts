import { Reducer } from 'redux';
import { combineReducers } from '@reduxjs/toolkit';

import { COLLECTIONS, WIDGETS } from './constants';
import { RESET_STATE_ACTION_TYPE } from './global/actions/resetState';

import {
  collectionReducers,
  widgetReducers,
  serviceReducers,
} from './services';

import type { RootState } from './store';

export const combinedReducer = combineReducers({
  [COLLECTIONS]: collectionReducers,
  [WIDGETS]: widgetReducers,
});

export const mainReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

export const rootReducer = mainReducer;
