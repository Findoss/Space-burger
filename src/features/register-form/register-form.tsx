import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shema-form';
import { fetchRegistrationUser } from 'entities/user/model/thunk';
import { selectUserStatus } from 'entities/user/model/selectors';

import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props, Form } from './types';
import type { SubmitHandler } from 'react-hook-form';

export const RegisterForm = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);

  const [isShowText, setIsShowText] = React.useState(false);
  const [errorForm, setErrorForm] = React.useState('');

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
    dispatch(fetchRegistrationUser(data));
  };

  const toggleTypeInput = () => {
    setIsShowText((v) => !v);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.register_form}>
      <div>{status === 'rejected' && errorForm}</div>
      <div className="input mt-6 mb-6">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder={t('formField.userName')}
              error={Boolean(errors.name)}
              errorText={errors.name?.message}
            />
          )}
        />
      </div>
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
              placeholder={t('formField.password')}
              onIconClick={toggleTypeInput}
              icon={isShowText ? 'ShowIcon' : 'HideIcon'}
              error={Boolean(errors.password)}
              errorText={errors.password?.message}
            />
          )}
        />
      </div>
      <div className={cn(styles.button_submit, 'mb-20')}>
        <Button type="primary" size="medium">
          {t('register.register')}
        </Button>
      </div>
    </form>
  );
};
