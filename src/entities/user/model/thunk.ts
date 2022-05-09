import { createAsyncThunk } from '@reduxjs/toolkit';
import { resolveRegistrationUser, resolveLogin } from 'shared/api/user';

import type { RegistrationForm, LoginForm } from 'shared/api/user/types';

export const fetchRegistrationUser = createAsyncThunk(
  'user/fetchRegistrationUser',
  async (payload: RegistrationForm) => resolveRegistrationUser(payload),
);

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async (payload: LoginForm) => resolveLogin(payload),
);

// .then((data) => {
//   return data;
// })
// .catch((err) => {
//   throw new Error(err);
// });
