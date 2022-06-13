import React from 'react';
import cn from 'classnames';

import { useTranslation } from 'react-i18next';

import { Link } from 'shared/ui/link';
import { FormTitle } from 'shared/ui/form-title';

import { ResetPasswordForm } from 'features/reset-password-form';

import { WrapperCenterForm } from 'widgets/wrapper-center-form';
import { Main as MainLayout } from 'widgets/layout-main';

import styles from './styles.module.css';

import type { Props } from './types';

export const ResetPassword = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <WrapperCenterForm extraClass={cn(extraClass)}>
      <FormTitle>{t('resetPassword.title')}</FormTitle>
      <ResetPasswordForm />
      <div className="text text_type_main-default">
        <div>
          <span className="text_color_inactive">
            {t('resetPassword.rememberPassword')}
          </span>{' '}
          <Link to="/login" extraClass={cn(styles.link_login)}>
            {t('resetPassword.goLogin')}
          </Link>
        </div>
      </div>
    </WrapperCenterForm>
  );
};

export const PageResetPassword = () => {
  return (
    <MainLayout>
      <ResetPassword></ResetPassword>
    </MainLayout>
  );
};
