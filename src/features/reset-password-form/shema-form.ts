import * as yup from 'yup';

export const schema = yup
  .object({
    newPassword: yup.string().required('password is required'),
    code: yup.string().required('code is required'),
  })
  .required();
