import React, { useState } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shema-form';
import { resolveNewPasswordUser } from 'shared/api/user/resolver';

import { FormError } from 'shared/ui/form-error';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props, Form } from './types';
import type { SubmitHandler } from 'react-hook-form';

export const ResetPasswordForm = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [errorForm, setErrorForm] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    resolveNewPasswordUser(data)
      .then(() => {
        navigate('/login');
      })
      .catch((data) => {
        setErrorForm(data.message);
      });
  };

  return (
    <>
      <FormError>{errorForm}</FormError>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input mb-6">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t('resetPassword.password')}
                error={Boolean(errors.password)}
                errorText={errors.password?.message}
              />
            )}
          />
          <Controller
            name="token"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t('resetPassword.token')}
                error={Boolean(errors.token)}
                errorText={errors.token?.message}
              />
            )}
          />
        </div>
        <div className={cn(styles.button_submit, 'mb-20')}>
          <Button type="primary" size="medium">
            {t('resetPassword.save')}
          </Button>
        </div>
      </form>
    </>
  );
};
