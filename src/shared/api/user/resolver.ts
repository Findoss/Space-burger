import { API_URL } from 'shared/api/constants';

import { httpClient } from 'shared/api/axios';

import type { Resolver } from '../types';
import type {
  User,
  RegistrationForm,
  PasswordResetForm,
  NewPasswordForm,
  LoginForm,
  SuccessPasswordReset,
  SuccessNewPassword,
  UpdateTokenParam,
  SuccessTokenParam,
} from './types';

export const resolveRegistrationUser: Resolver<RegistrationForm, User> = async (
  payload,
) => {
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

export const resolveLogin: Resolver<LoginForm, User> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/auth/login`, payload)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const resolveUpdateToken: Resolver<
  UpdateTokenParam,
  SuccessTokenParam
> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/auth/token`, payload)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const resolveLogout: Resolver<void, void> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/auth/logout`, payload)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};
