import React from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shema-form';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';
import { getEntityUser } from 'entities/user/model/selectors';
import { fetchUpdateUser } from 'entities/user/model/thunk';

import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props, Form } from './types';
import type { SubmitHandler } from 'react-hook-form';

export const ProfileForm = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const { user } = useSelector(getEntityUser);
  const dispatch = useDispatch();
  const [isShowText, setIsShowText] = React.useState(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    dispatch(fetchUpdateUser(data));
  };

  const toggleTypeInput = () => {
    setIsShowText((v) => !v);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input mt-6 mb-6">
          <Controller
            name="name"
            control={control}
            defaultValue={user.name}
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
            defaultValue={user.email}
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
          <div>
            <Button type="primary" size="medium">
              {t('profile.save')}
            </Button>
            <Button
              type="secondary"
              size="medium"
              onClick={() => reset({ name: user.name, email: user.email })}
            >
              {t('profile.cancel')}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
