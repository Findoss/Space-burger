export type RawUser = {
  data: User;
};

export type User = {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
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
  newPassword: string;
  token: string;
};

export type SuccessPasswordReset = {
  data: {
    success: boolean;
    message: string;
  };
};
