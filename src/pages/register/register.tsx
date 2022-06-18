import React from 'react';
import cn from 'classnames';

import { useTranslation } from 'react-i18next';

import { Link } from 'shared/ui/link';
import { FormTitle } from 'shared/ui/form-title';

import { RegisterForm } from 'features/register-form';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

import type { Props } from './types';

export const Register = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <WrapperCenterForm extraClass={cn(extraClass)}>
      <FormTitle>{t('register.registerTitle')}</FormTitle>
      <RegisterForm />
      <div className="text text_type_main-default">
        <span className="text_color_inactive">{t('register.readyLogin')}</span>{' '}
        <Link to="/login">{t('login.login')}</Link>
      </div>
    </WrapperCenterForm>
  );
};

export const PageRegister = () => {
  return (
    <MainLayout>
      <Register></Register>
    </MainLayout>
  );
};
