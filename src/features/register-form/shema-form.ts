import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup.string().required('name is required'),
    email: yup.string().email().required('email is required'),
    password: yup.string().required('password is required'),
  })
  .required();
