import React from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shema-form';
import { resolvePasswordResetUser } from 'shared/api/user/resolver';

import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props, Form } from './types';
import type { SubmitHandler } from 'react-hook-form';

export const ForgotPasswordForm = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    resolvePasswordResetUser(data).then(() => {
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
