import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup.string().email('email not valid').required('email is required'),
    password: yup.string().required('password is required'),
  })
  .required();
