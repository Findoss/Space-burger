import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';
import { fetchRegistrationUser } from './thunk';

export const COLLECTION_ORDER = 'order';
export const orderCollection = createSlice({
  name: COLLECTION_ORDER,
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistrationUser.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(fetchRegistrationUser.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.entity = payload;
    });

    builder.addCase(fetchRegistrationUser.rejected, (state) => {
      state.status = 'rejected';
      state = initState;
    });
  },
});
