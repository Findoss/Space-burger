import { createSlice } from '@reduxjs/toolkit';

import { initState } from './state';
import { fetchRegistrationUser, fetchLogin } from './thunk';

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
      state.entity = payload;
    });

    builder.addCase(fetchRegistrationUser.rejected, (state, { error }) => {
      state.status = 'rejected';
      state.errorMessage = error.message;
    });

    builder.addCase(fetchLogin.pending, (state) => {
      state.errorMessage = '';
      state.status = 'pending';
    });

    builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.errorMessage = '';
      state.entity.accessToken = payload.accessToken;
      state.entity.refreshToken = payload.refreshToken;
    });

    builder.addCase(fetchLogin.rejected, (state, { error }) => {
      state.status = 'rejected';
      state.errorMessage = error.message;
    });
  },
});
