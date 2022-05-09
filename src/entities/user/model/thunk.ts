import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  resolveRegistrationUser,
  resolveLogin,
  resolveLogout,
} from 'shared/api/user';

import type {
  RegistrationForm,
  LoginForm,
  LogoutParams,
} from 'shared/api/user/types';

export const fetchRegistrationUser = createAsyncThunk(
  'user/fetchRegistrationUser',
  async (payload: RegistrationForm) => resolveRegistrationUser(payload),
);

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async (payload: LoginForm) => resolveLogin(payload),
);

export const fetchLogout = createAsyncThunk(
  'user/fetchLogout',
  async (payload: LogoutParams) => resolveLogout(payload),
);
