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
  LogoutParams,
  UpdateUserParams,
  UserParams,
  SuccessUpdateUser,
} from './types';

export const resolveRegistrationUser: Resolver<RegistrationForm, User> = async (
  payload,
) => {
  return httpClient
    .post<void, { data: User }>(`${API_URL}/auth/register`, payload)
    .then((data) => {
      return data.data;
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
      return data.data;
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
      return data.data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const resolveLogin: Resolver<LoginForm, User> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/auth/login`, payload)
    .then((data) => {
      return data.data;
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
    .post<void, { data: SuccessTokenParam }>(`${API_URL}/auth/token`, payload)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const resolveLogout: Resolver<LogoutParams, void> = async (payload) => {
  return httpClient
    .post<void, any>(`${API_URL}/auth/logout`, payload)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const resolveUpdateUser: Resolver<
  UpdateUserParams & { authorization: string },
  SuccessUpdateUser
> = async (payload) => {
  const { authorization, email, name, password } = payload;

  return httpClient({
    method: 'PATCH',
    url: `${API_URL}/auth/user`,
    headers: {
      authorization: authorization,
    },
    data: { email, name, password },
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};

export const resolveUser: Resolver<UserParams, void> = async (payload) => {
  return httpClient
    .get<void, any>(`${API_URL}/auth/user`, {
      headers: {
        authorization: payload.authorization,
      },
    })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};
