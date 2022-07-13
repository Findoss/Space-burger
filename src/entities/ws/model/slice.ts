import { createSlice } from '@reduxjs/toolkit';
import { initialStateSocket } from './state';
import type { wsActionsType } from './types';

export const COLLECTION_WS = 'socket';
export const ACTIONS_WS: wsActionsType = {
  WS_CONNECTION_SUCCESS: 'onOpen',
  WS_CONNECTION_ERROR: 'onError',
  WS_CONNECTION_CLOSED: 'onClose',
  WS_GET_MESSAGE: 'getMessage',
  WS_SEND_MESSAGE: 'sendMessage',
  WS_CONNECTION_START: 'connection',
  WS_CONNECTION_STOP: 'close',
};

export const WsSlice = createSlice({
  name: COLLECTION_WS,
  initialState: initialStateSocket,
  reducers: {
    [ACTIONS_WS.WS_CONNECTION_START](state) {
      state.isLoadingWs = false;
    },
    [ACTIONS_WS.WS_CONNECTION_SUCCESS](state) {
      state.isConnect = true;
    },
    [ACTIONS_WS.WS_GET_MESSAGE](state, { payload }) {
      state.isLoadingWs = true;
      state.success = payload.success;
      state.orders = payload.orders ?? [];
      state.total = payload.total;
      state.totalToday = payload.totalToday;
    },
    [ACTIONS_WS.WS_CONNECTION_ERROR](state) {
      state.isConnect = false;
      state.isLoadingWs = true;
    },
    [ACTIONS_WS.WS_CONNECTION_CLOSED](state) {
      state.isConnect = false;
      state.success = false;
      state.orders = [];
      state.total = null;
      state.totalToday = null;
    },
    [ACTIONS_WS.WS_CONNECTION_STOP](state) {
      state.isConnect = false;
      state.success = false;
      state.orders = [];
      state.total = null;
      state.totalToday = null;
    },
  },
});
