export type User = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
};

export type RegistrationForm = {
  email: string;
  password: string;
  name: string;
};

export type PasswordResetForm = {
  email: string;
};

export type SuccessNewPassword = {
  data: {
    success: boolean;
    message: string;
  };
};

export type NewPasswordForm = {
  password: string;
  token: string;
};

export type SuccessPasswordReset = {
  data: {
    success: boolean;
    message: string;
  };
};

export type LoginForm = {
  email: string;
  password: string;
};

export type UpdateTokenParam = {
  token: string;
};

export type SuccessTokenParam = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

export type LogoutParams = {
  token: string;
};

export type UpdateUserParams = {
  name: string;
  email: string;
  password: string;
};

export type SuccessUpdateUser = {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
};

export type UserParams = {
  authorization: string;
};
