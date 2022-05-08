import { API_URL } from 'shared/api/constants';

import { httpClient } from 'shared/api/axios';

import type { Resolver } from '../types';
import type {
  RawUser,
  RegistrationForm,
  PasswordResetForm,
  SuccessPasswordReset,
  SuccessNewPassword,
  NewPasswordForm,
} from './types';

export const resolveRegistrationUser: Resolver<
  RegistrationForm,
  RawUser
> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/auth/register`, payload)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const resolvePasswordResetUser: Resolver<
  PasswordResetForm,
  SuccessPasswordReset
> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/password-reset`, payload)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const resolveNewPasswordUser: Resolver<
  NewPasswordForm,
  SuccessNewPassword
> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/password-reset/reset`, payload)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};
