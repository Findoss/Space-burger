import { API_URL } from 'shared/api/constants';

import { httpClient } from 'shared/api/axios';

import type { Resolver } from '../types';
import type { RegistrationForm, RawUser } from './types';

export const resolveRegistrationUser: Resolver<
  RegistrationForm,
  RawUser
> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/auth/register`, payload)
    .then((data) => {
      if (data.data.success === false) {
        return data;
      }
      return data;
    })
    .then((data) => data);
};
