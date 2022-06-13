import { createSlice } from '@reduxjs/toolkit';

import { setTokenAuth, removeTokenAuth } from 'shared/libs/cookie';

import { initState } from './state';
import {
  fetchRegistrationUser,
  fetchLogin,
  fetchLogout,
  fetchUpdateUser,
  fetchResetPassword,
} from './thunk';

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
      state.entity = payload;
      setTokenAuth(payload.accessToken);
    });

    builder.addCase(fetchLogin.rejected, (state, { error }) => {
      state.status = 'rejected';
      state.errorMessage = error.message;
    });

    builder.addCase(fetchUpdateUser.pending, (state) => {
      state.errorMessage = '';
      state.status = 'pending';
    });

    builder.addCase(fetchUpdateUser.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled';
      state.errorMessage = '';
      state.entity.user.email = payload.user.email;
      state.entity.user.name = payload.user.name;
    });

    builder.addCase(fetchUpdateUser.rejected, (state, { error }) => {
      state.status = 'rejected';
      state.errorMessage = error.message;
    });

    builder.addCase(fetchResetPassword.pending, (state) => {
      state.errorMessage = '';
      state.status = 'pending';
      state.isForgot = false;
    });

    builder.addCase(fetchResetPassword.fulfilled, (state, { payload }) => {
      state.isForgot = true;
    });

    builder.addCase(fetchResetPassword.rejected, (state, { error }) => {
      state.isForgot = false;
    });

    builder.addCase(fetchLogout.fulfilled, (state) => {
      removeTokenAuth();
      return initState;
    });

    builder.addCase(fetchLogout.rejected, (state) => {
      removeTokenAuth();
      return initState;
    });
  },
});
