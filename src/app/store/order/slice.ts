import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';
import { fetchNewOrder } from './thunk';

export const COLLECTION_ORDER = 'order';
export const orderCollection = createSlice({
  name: COLLECTION_ORDER,
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewOrder.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(fetchNewOrder.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.entity = payload;
    });

    builder.addCase(fetchNewOrder.rejected, (state) => {
      state.status = 'rejected';
      state = initState;
    });
  },
});
