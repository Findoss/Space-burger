import * as yup from 'yup';

export const schema = yup
  .object({
    password: yup.string().required('password is required'),
    token: yup.string().required('code is required'),
  })
  .required();
