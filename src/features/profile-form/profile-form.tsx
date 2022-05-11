import React from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './shema-form';
import { useSelector } from 'shared/hooks/use-redux';
import { getEntityUser } from 'entities/user/model/selectors';

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

  console.log(user);

  const [isShowText, setIsShowText] = React.useState(false);

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
          <Button type="primary" size="medium">
            {t('profile.save')}
          </Button>
        </div>
      </form>
    </>
  );
};
