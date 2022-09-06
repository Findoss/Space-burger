import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Link } from 'shared/ui/link';
import { FormTitle } from 'shared/ui/form-title';

import { ForgotPasswordForm } from 'features/forgot-password-form';

import { WrapperCenterForm } from 'widgets/wrapper-center-form';
import { Main as MainLayout } from 'widgets/layout-main';

import type { Props } from './types';
import { url } from 'shared/api/constants';

export const ForgotPassword = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  return (
    <WrapperCenterForm extraClass={cn(extraClass)}>
      <FormTitle>{t('forgotPassword.title')}</FormTitle>
      <ForgotPasswordForm />
      <div className="text text_type_main-default">
        <div>
          <span className="text_color_inactive">
            {t('forgotPassword.rememberPassword')}
          </span>{' '}
          <Link to={url('/register')}>{t('forgotPassword.goLogin')}</Link>
        </div>
      </div>
    </WrapperCenterForm>
  );
};

export const PageForgotPassword = () => {
  return (
    <MainLayout>
      <ForgotPassword></ForgotPassword>
    </MainLayout>
  );
};
