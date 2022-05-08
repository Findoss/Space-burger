import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shema-form';
import { resolveNewPasswordUser } from 'shared/api/user/resolver';

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

  const [fromError, setFormError] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
    resolveNewPasswordUser(data)
      .then(() => {
        navigate('/login');
      })
      .catch((data) => {
        console.log(data);

        setFormError(data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text text_type_main-medium text_color_error ">
        {fromError && fromError}
      </div>

      <div className="input mb-6">
        <Controller
          name="newPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder={t('resetPassword.newPassword')}
              error={Boolean(errors.newPassword)}
              errorText={errors.newPassword?.message}
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
  );
};
