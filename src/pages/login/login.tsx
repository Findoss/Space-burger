import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Link } from 'shared/ui/link';
import { LoginForm } from 'features/login-form';
import { Main as MainLayout } from 'widgets/layout-main';

import styles from './styles.module.css';

import type { Props } from './types';

export const Login = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.page_login, extraClass)}>
      <span className={cn(styles.title, 'text text_type_main-medium')}>
        {t('login.loginTitle')}
      </span>
      <LoginForm />
      <div className="text text_type_main-default">
        <div>
          <span className="text_color_inactive">{t('login.newUser')}</span>{' '}
          <Link to="/register" extraClass={cn(styles.link_login)}>
            {t('login.goRegister')}
          </Link>
        </div>
        <div>
          <span className="text_color_inactive">
            {t('login.forgotPassword')}
          </span>{' '}
          <Link to="/forgot-password" extraClass={cn(styles.link_login)}>
            {t('login.restorePassword')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PageLogin = () => {
  return (
    <MainLayout>
      <Login></Login>
    </MainLayout>
  );
};
