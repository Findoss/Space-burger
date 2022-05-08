import { API_URL } from 'shared/api/constants';

import { httpClient } from 'shared/api/axios';
// import { formatOrder } from './format';

import type { Resolver } from '../types';
import type { RegistrationForm, User } from './types';

export const resolveRegistrationUser: Resolver<RegistrationForm, User> = (
  payload,
) => {
  return httpClient
    .post<void, any>(`${API_URL}/auth/register`, payload)
    .then((data) => {
      console.log(data);

      if (data.data.success === false) {
        throw new Error('');
      }
      return data;
    })
    .then((data) => data);
};
