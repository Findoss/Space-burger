import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import {
  resolveRegistrationUser,
  resolveLogin,
  resolveLogout,
  resolveUpdateUser,
  resolveUser,
  resolvePasswordResetUser,
} from 'shared/api/user';

import type {
  RegistrationForm,
  LoginForm,
  LogoutParams,
  UpdateUserParams,
  PasswordResetForm,
} from 'shared/api/user/types';

import { getUserCollection } from './selectors';

export const fetchRegistrationUser = createAsyncThunk(
  'user/fetchRegistrationUser',
  async (payload: RegistrationForm) => resolveRegistrationUser(payload),
);

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async (payload: LoginForm) => resolveLogin(payload),
);

export const fetchResetPassword = createAsyncThunk(
  'user/fetchResetPassword',
  async (payload: PasswordResetForm) => resolvePasswordResetUser(payload),
);

export const fetchLogout = createAsyncThunk(
  'user/fetchLogout',
  async (payload: LogoutParams) => resolveLogout(payload),
);

export const fetchUpdateUser = createAsyncThunk(
  'user/fetchUpdateUser',
  async (payload: UpdateUserParams, { getState }) => {
    const state = getState() as RootState;
    const { accessToken } = getUserCollection(state).entity;
    return await resolveUpdateUser({ authorization: accessToken, ...payload });
  },
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_: undefined, { getState }) => {
    const state = getState() as RootState;
    const { accessToken } = getUserCollection(state).entity;
    return await resolveUser({ authorization: accessToken });
  },
);
