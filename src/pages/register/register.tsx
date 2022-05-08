import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Link } from 'shared/ui/link';
import { RegisterForm } from 'features/register-form';
import { Main as MainLayout } from 'widgets/layout-main';

import styles from './styles.module.css';

import type { Props } from './types';

export const Register = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.page_register, extraClass)}>
      <span className={cn(styles.title, 'text text_type_main-medium')}>
        {t('register.registerTitle')}
      </span>
      <RegisterForm />
      <div className="text text_type_main-default">
        <span className="text_color_inactive">{t('register.readyLogin')}</span>{' '}
        <Link to="/login">{t('login.login')}</Link>
      </div>
    </div>
  );
};

export const PageRegister = () => {
  return (
    <MainLayout>
      <Register></Register>
    </MainLayout>
  );
};
