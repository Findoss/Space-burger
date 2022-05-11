import React, { useState } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shema-from';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';
import {
  selectUserStatus,
  selectUserError,
} from 'entities/user/model/selectors';

import { fetchLogin } from 'entities/user/model/thunk';

import { FormError } from 'shared/ui/form-error';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { SubmitHandler } from 'react-hook-form';
import type { Props, Form } from './types';

export const LoginForm = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);
  const errorForm = useSelector(selectUserError);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    dispatch(fetchLogin(data));
  };

  const [isShowText, setIsShowText] = React.useState(false);

  const toggleTypeInput = () => {
    setIsShowText((v) => !v);
  };

  return (
    <>
      <FormError>{status === 'rejected' && errorForm}</FormError>
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
        <div className="input mb-6">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                type={isShowText ? 'text' : 'password'}
                icon={isShowText ? 'ShowIcon' : 'HideIcon'}
                placeholder={t('formField.password')}
                onIconClick={toggleTypeInput}
                error={Boolean(errors.password)}
                errorText={errors.password?.message}
              />
            )}
          />
        </div>
        <div className={cn(styles.button_submit, 'mb-20')}>
          <Button type="primary" size="medium">
            {t('login.login')}
          </Button>
        </div>
      </form>
    </>
  );
};
