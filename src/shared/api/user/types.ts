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

export type ErrorRegisterUser = {
  payload: {
    success: boolean;
    message: string;
  };
};
