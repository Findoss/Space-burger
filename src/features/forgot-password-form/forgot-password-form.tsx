import React from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shema-form';

import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props, Form } from './types';
import type { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'shared/hooks/use-redux';
import { fetchResetPassword } from 'entities/user/model/thunk';

export const ForgotPasswordForm = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    dispatch(fetchResetPassword(data)).then(() => {
      navigate('/reset-password');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input mb-6">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder={t('formField.email')}
              error={Boolean(errors.email)}
              errorText={errors.email?.message}
            />
          )}
        />
      </div>
      <div className={cn(styles.button_submit, 'mb-20')}>
        <Button type="primary" size="medium">
          {t('forgotPassword.reset')}
        </Button>
      </div>
    </form>
  );
};
