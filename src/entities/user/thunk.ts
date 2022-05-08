import { createAsyncThunk } from '@reduxjs/toolkit';
import { resolveRegistrationUser } from 'shared/api/user';

import type { RegistrationForm } from 'shared/api/user/types';

export const fetchRegistrationUser = createAsyncThunk(
  'user/fetchRegistrationUser',
  async (payload: RegistrationForm) => resolveRegistrationUser(payload),
);
