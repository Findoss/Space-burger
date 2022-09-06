import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Link } from 'shared/ui/link';
import { FormTitle } from 'shared/ui/form-title';

import { LoginForm } from 'features/login-form';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

import type { Props } from './types';
import { url } from 'shared/api/constants';

export const Login = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <WrapperCenterForm extraClass={cn(extraClass)}>
      <FormTitle>{t('login.loginTitle')}</FormTitle>
      <LoginForm />
      <div className="text text_type_main-default">
        <div>
          <span className="text_color_inactive">{t('login.newUser')}</span>{' '}
          <Link to={url('/register')}>{t('login.goRegister')}</Link>
        </div>
        <div>
          <span className="text_color_inactive">
            {t('login.forgotPassword')}
          </span>{' '}
          <Link to={url('/forgot-password')}>{t('login.restorePassword')}</Link>
        </div>
      </div>
    </WrapperCenterForm>
  );
};

export const PageLogin = () => {
  return (
    <MainLayout>
      <Login></Login>
    </MainLayout>
  );
};
