import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Link } from 'shared/ui/link';
import { Main as MainLayout } from 'widgets/layout-main';
import { ForgotPasswordForm } from 'features/forgot-password-form';

import styles from './styles.module.css';

import type { Props } from './types';

export const ForgotPassword = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.page_forgot_password, extraClass)}>
      <span className={cn(styles.title, 'text text_type_main-medium')}>
        {t('forgotPassword.title')}
      </span>
      <ForgotPasswordForm />
      <div className="text text_type_main-default">
        <div>
          <span className="text_color_inactive">
            {t('forgotPassword.rememberPassword')}
          </span>{' '}
          <Link to="/register" extraClass={cn(styles.link_login)}>
            {t('forgotPassword.goLogin')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export const PageForgotPassword = () => {
  return (
    <MainLayout>
      <ForgotPassword></ForgotPassword>
    </MainLayout>
  );
};
