import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';
import { fetchRegistrationUser } from './thunk';

import type { ResolverError } from 'shared/api/types';

export const COLLECTION_USER = 'user';
export const userCollection = createSlice({
  name: COLLECTION_USER,
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistrationUser.pending, (state) => {
      state.status = 'pending';
    });

    builder.addCase(fetchRegistrationUser.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.entity = payload.data;
    });

    builder.addCase(fetchRegistrationUser.rejected, (state, { payload }) => {
      state.status = 'rejected';
      state = initState;
      // state.errorMessage = payload?.message as ResolverError;
    });
  },
});
